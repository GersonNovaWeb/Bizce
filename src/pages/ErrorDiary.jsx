import React, { useState, useEffect } from 'react';
import {
  collection, query, orderBy, onSnapshot,
  addDoc, updateDoc, serverTimestamp, doc,
} from 'firebase/firestore';
import { TOK } from '../tokens';
import { Ic, ABar } from '../components/BizceUI';

// ── Public helper: call this from QuizScreen / WorkshopScreen when user fails ──
export async function logError(db, uid, errorData) {
  if (!db || !uid) return;
  try {
    await addDoc(collection(db, 'users', uid, 'errorDiary'), {
      nodeId:        errorData.nodeId        || '',
      nodeTitle:     errorData.nodeTitle     || '',
      unitId:        errorData.unitId        || '',
      errorType:     errorData.errorType     || 'multiple_choice',
      question:      errorData.question      || '',
      userAnswer:    errorData.userAnswer    || '',
      correctAnswer: errorData.correctAnswer || '',
      reviewed:      false,
      reviewCount:   0,
      timestamp:     serverTimestamp(),
    });
  } catch (e) { console.error('logError:', e); }
}

const ERROR_TYPES = {
  multiple_choice: 'Opción múltiple',
  syntax:          'Sintaxis',
  speaking:        'Expresión oral',
};

// ── Tabs ──────────────────────────────────────────────────────────────────────
const TABS = [
  { id: 'errors', label: 'Mis Errores' },
  { id: 'review', label: 'Repaso'      },
  { id: 'stats',  label: 'Estadísticas'},
];

export default function ErrorDiary({ onBack, db, user }) {
  const [tab,        setTab]        = useState('errors');
  const [errors,     setErrors]     = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [flashIdx,   setFlashIdx]   = useState(0);
  const uid = user?.uid;

  useEffect(() => {
    if (!db || !uid) return;
    const q = query(
      collection(db, 'users', uid, 'errorDiary'),
      orderBy('timestamp', 'desc'),
    );
    return onSnapshot(q, snap => {
      setErrors(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  }, [db, uid]);

  const markReviewed = (id) =>
    updateDoc(doc(db, 'users', uid, 'errorDiary', id), { reviewed: true });

  const markKnown = async (id) => {
    const err = errors.find(e => e.id === id);
    await updateDoc(doc(db, 'users', uid, 'errorDiary', id), {
      reviewed:    true,
      reviewCount: (err?.reviewCount || 0) + 1,
    });
    setFlashIdx(0);
  };

  const markNotYet = async (id) => {
    const err = errors.find(e => e.id === id);
    await updateDoc(doc(db, 'users', uid, 'errorDiary', id), {
      reviewCount: (err?.reviewCount || 0) + 1,
    });
    setFlashIdx(prev => prev + 1);
  };

  // Derived
  const pending     = errors.filter(e => !e.reviewed);
  const pendingFlash = errors.filter(e => !e.reviewed || e.reviewCount < 3);
  const currentFlash = pendingFlash.length
    ? pendingFlash[flashIdx % pendingFlash.length]
    : null;
  const filtered = filterType === 'all'
    ? errors
    : errors.filter(e => e.errorType === filterType);

  // Stats
  const reviewed  = errors.filter(e => e.reviewed).length;
  const typeCounts = errors.reduce((acc, e) => {
    acc[e.errorType] = (acc[e.errorType] || 0) + 1; return acc;
  }, {});
  const unitCounts = errors.reduce((acc, e) => {
    if (e.unitId) { acc[e.unitId] = (acc[e.unitId] || 0) + 1; } return acc;
  }, {});
  const topType = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0];
  const topUnit = Object.entries(unitCounts).sort((a, b) => b[1] - a[1])[0];

  return (
    <div style={{ minHeight: '100vh', background: TOK.bg, color: TOK.text, fontFamily: TOK.sans }}>

      {/* ── Header ── */}
      <div style={{
        height: 60, padding: '0 28px', borderBottom: `1px solid ${TOK.border}`,
        background: 'rgba(17,17,24,0.9)', backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', gap: 16,
        position: 'sticky', top: 0, zIndex: 40,
      }}>
        <button onClick={onBack} style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: TOK.surface3, border: `1px solid ${TOK.border}`,
          borderRadius: 8, padding: '6px 11px', color: TOK.textDim, cursor: 'pointer',
        }}>
          <Ic.Back size={15} />
          <span style={{ fontFamily: TOK.mono, fontSize: 11, fontWeight: 700 }}>Volver</span>
        </button>

        <div>
          <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.coral, letterSpacing: 2, textTransform: 'uppercase' }}>
            Bizce · Aprendizaje
          </div>
          <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 18, fontWeight: 500, marginTop: 1 }}>
            Diario de Errores
          </div>
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: 5 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: '6px 14px', borderRadius: 8,
              fontWeight: 700, fontSize: 12, cursor: 'pointer',
              background: tab === t.id ? TOK.surface3 : 'transparent',
              color:      tab === t.id ? TOK.text    : TOK.textDim,
              border: `1px solid ${tab === t.id ? TOK.border : 'transparent'}`,
              display: 'flex', alignItems: 'center', gap: 5,
            }}>
              {t.label}
              {t.id === 'errors' && (
                <span style={{ fontFamily: TOK.mono, fontSize: 10, opacity: 0.6 }}>{errors.length}</span>
              )}
              {t.id === 'review' && (
                <span style={{ fontFamily: TOK.mono, fontSize: 10, opacity: 0.6 }}>{pendingFlash.length}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 28px' }}>

        {/* ─────────── TAB 1: Mis Errores ─────────── */}
        {tab === 'errors' && (
          <div>
            {/* Filter pills */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
              {['all', ...Object.keys(ERROR_TYPES)].map(t => (
                <button key={t} onClick={() => setFilterType(t)} style={{
                  padding: '5px 12px', borderRadius: 100, cursor: 'pointer',
                  border: `1px solid ${filterType === t ? TOK.coral : TOK.border}`,
                  background: filterType === t ? TOK.coralSoft : TOK.surface,
                  color: filterType === t ? TOK.coral : TOK.textSec,
                  fontFamily: TOK.mono, fontSize: 10, fontWeight: 700,
                }}>
                  {t === 'all' ? 'Todos' : ERROR_TYPES[t]}
                </button>
              ))}
            </div>

            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 0', color: TOK.textMute, fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 16 }}>
                Sin errores registrados aún. ¡Buena señal!
              </div>
            )}

            {filtered.map(err => (
              <div key={err.id} style={{
                padding: '16px 20px', background: TOK.surface,
                border: `1px solid ${err.reviewed ? TOK.border : TOK.coral + '35'}`,
                borderRadius: 12, marginBottom: 10,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    <span style={{ padding: '2px 8px', borderRadius: 4, background: TOK.coralSoft, color: TOK.coral, fontFamily: TOK.mono, fontSize: 9, fontWeight: 700 }}>
                      {ERROR_TYPES[err.errorType] || err.errorType}
                    </span>
                    {err.nodeTitle && (
                      <span style={{ padding: '2px 8px', borderRadius: 4, background: TOK.indigoSoft, color: TOK.indigoHi, fontFamily: TOK.mono, fontSize: 9, fontWeight: 700 }}>
                        {err.nodeTitle}
                      </span>
                    )}
                    {err.reviewed && (
                      <span style={{ padding: '2px 8px', borderRadius: 4, background: TOK.greenSoft, color: TOK.green, fontFamily: TOK.mono, fontSize: 9, fontWeight: 700 }}>
                        ✓ Revisado
                      </span>
                    )}
                  </div>
                  {!err.reviewed && (
                    <button onClick={() => markReviewed(err.id)} style={{
                      padding: '4px 10px', background: TOK.greenSoft,
                      border: `1px solid ${TOK.green}40`, borderRadius: 6,
                      color: TOK.green, fontSize: 11, fontWeight: 700, cursor: 'pointer',
                    }}>
                      Marcar revisado
                    </button>
                  )}
                </div>

                {err.question && (
                  <div style={{ fontFamily: TOK.serif, fontSize: 14, color: TOK.textSec, marginBottom: 10, lineHeight: 1.5 }}>
                    {err.question}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <div style={{ padding: '9px 12px', background: TOK.coralSoft, borderRadius: 9, border: `1px solid ${TOK.coral}30` }}>
                    <div style={{ fontFamily: TOK.mono, fontSize: 9, color: TOK.coral, letterSpacing: 1, marginBottom: 4 }}>TU RESPUESTA</div>
                    <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 14, color: TOK.coral, textDecoration: 'line-through' }}>
                      {err.userAnswer}
                    </div>
                  </div>
                  <div style={{ padding: '9px 12px', background: TOK.greenSoft, borderRadius: 9, border: `1px solid ${TOK.green}30` }}>
                    <div style={{ fontFamily: TOK.mono, fontSize: 9, color: TOK.green, letterSpacing: 1, marginBottom: 4 }}>CORRECTA</div>
                    <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 14, color: TOK.green }}>
                      {err.correctAnswer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─────────── TAB 2: Repaso (flashcard) ─────────── */}
        {tab === 'review' && (
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            {pendingFlash.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
                <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 26, color: TOK.green }}>¡Todo al día!</div>
                <div style={{ fontFamily: TOK.sans, fontSize: 13, color: TOK.textDim, marginTop: 8 }}>
                  No tienes errores pendientes de repasar.
                </div>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <div style={{ fontFamily: TOK.mono, fontSize: 11, color: TOK.textDim, fontWeight: 700 }}>
                    {pendingFlash.length} pendiente{pendingFlash.length !== 1 ? 's' : ''}
                  </div>
                  <div style={{ fontFamily: TOK.mono, fontSize: 11, color: TOK.indigoHi, fontWeight: 700 }}>
                    {(flashIdx % pendingFlash.length) + 1} / {pendingFlash.length}
                  </div>
                </div>

                {currentFlash && (
                  <div style={{
                    padding: '28px 32px',
                    background: `linear-gradient(180deg,${TOK.indigoSoft},${TOK.surface})`,
                    border: `1px solid ${TOK.indigo}40`, borderRadius: 16, marginBottom: 16,
                  }}>
                    <div style={{ fontFamily: TOK.mono, fontSize: 9, color: TOK.indigoHi, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>
                      {ERROR_TYPES[currentFlash.errorType] || currentFlash.errorType}
                      {currentFlash.nodeTitle && ` · ${currentFlash.nodeTitle}`}
                    </div>
                    <div style={{ fontFamily: TOK.serif, fontSize: 17, color: TOK.textSec, marginBottom: 20, lineHeight: 1.55 }}>
                      {currentFlash.question}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 6 }}>
                      <div style={{ padding: '10px 14px', background: TOK.coralSoft, borderRadius: 10, border: `1px solid ${TOK.coral}30` }}>
                        <div style={{ fontFamily: TOK.mono, fontSize: 9, color: TOK.coral, letterSpacing: 1, marginBottom: 4 }}>DIJISTE</div>
                        <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 15, color: TOK.coral, textDecoration: 'line-through' }}>
                          {currentFlash.userAnswer}
                        </div>
                      </div>
                      <div style={{ padding: '10px 14px', background: TOK.greenSoft, borderRadius: 10, border: `1px solid ${TOK.green}30` }}>
                        <div style={{ fontFamily: TOK.mono, fontSize: 9, color: TOK.green, letterSpacing: 1, marginBottom: 4 }}>CORRECTO</div>
                        <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 15, color: TOK.green }}>
                          {currentFlash.correctAnswer}
                        </div>
                      </div>
                    </div>
                    {currentFlash.reviewCount > 0 && (
                      <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textMute, marginTop: 10 }}>
                        Repasado {currentFlash.reviewCount} {currentFlash.reviewCount === 1 ? 'vez' : 'veces'}
                      </div>
                    )}
                  </div>
                )}

                <div style={{ display: 'flex', gap: 10 }}>
                  <button onClick={() => markNotYet(currentFlash.id)} style={{
                    flex: 1, padding: '12px 0', background: TOK.coralSoft,
                    border: `1px solid ${TOK.coral}40`, borderRadius: 10,
                    color: TOK.coral, fontWeight: 700, fontSize: 14, cursor: 'pointer',
                  }}>
                    Todavía no
                  </button>
                  <button onClick={() => markKnown(currentFlash.id)} style={{
                    flex: 1, padding: '12px 0', background: TOK.greenSoft,
                    border: `1px solid ${TOK.green}40`, borderRadius: 10,
                    color: TOK.green, fontWeight: 700, fontSize: 14, cursor: 'pointer',
                  }}>
                    ¡Lo sé! ✓
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* ─────────── TAB 3: Estadísticas ─────────── */}
        {tab === 'stats' && (
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            {errors.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: TOK.textMute, fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 16 }}>
                Sin datos todavía.
              </div>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14, marginBottom: 20 }}>
                  {[
                    { label: 'Total de errores',   value: errors.length,  color: TOK.indigo  },
                    { label: 'Revisados',           value: reviewed,       color: TOK.green   },
                    { label: 'Pendientes',          value: pending.length, color: TOK.coral   },
                    {
                      label: 'Tasa de revisión',
                      value: `${Math.round((reviewed / errors.length) * 100)}%`,
                      color: TOK.amber,
                    },
                  ].map(s => (
                    <div key={s.label} style={{ padding: '20px 22px', background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 12 }}>
                      <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.textMute, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>{s.label}</div>
                      <div style={{ fontFamily: TOK.serif, fontSize: 36, fontWeight: 500, color: s.color, letterSpacing: -1 }}>{s.value}</div>
                    </div>
                  ))}
                </div>

                {errors.length > 0 && (
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.textMute, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>
                      Distribución por tipo
                    </div>
                    {Object.entries(typeCounts).sort((a,b) => b[1]-a[1]).map(([type, count]) => (
                      <div key={type} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                        <div style={{ fontFamily: TOK.sans, fontSize: 12, color: TOK.textSec, width: 140, flexShrink: 0 }}>
                          {ERROR_TYPES[type] || type}
                        </div>
                        <div style={{ flex: 1 }}>
                          <ABar value={(count / errors.length) * 100} color={TOK.coral} h={5} delay={200} />
                        </div>
                        <div style={{ fontFamily: TOK.mono, fontSize: 11, color: TOK.coral, fontWeight: 700, width: 24, textAlign: 'right' }}>
                          {count}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {topUnit && (
                  <div style={{ padding: '16px 20px', background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 12 }}>
                    <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.textMute, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>
                      Unidad con más errores
                    </div>
                    <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 20, fontWeight: 500 }}>
                      {topUnit[0]}
                      <span style={{ fontFamily: TOK.mono, fontSize: 12, color: TOK.indigoHi, marginLeft: 10 }}>
                        {topUnit[1]} errores
                      </span>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
