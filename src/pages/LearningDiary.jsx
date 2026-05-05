import React, { useState, useEffect } from 'react';
import {
  collection, query, orderBy, onSnapshot,
  addDoc, updateDoc, serverTimestamp, doc,
} from 'firebase/firestore';
import { TOK } from '../tokens';
import { Ic } from '../components/BizceUI';

const MOODS = [
  { id: 'great', emoji: '😊', label: 'Excelente', color: TOK.green  },
  { id: 'good',  emoji: '🙂', label: 'Bien',      color: TOK.indigo },
  { id: 'okay',  emoji: '😐', label: 'Regular',   color: TOK.amber  },
  { id: 'bad',   emoji: '😕', label: 'Difícil',   color: TOK.coral  },
];

function moodOf(id) { return MOODS.find(m => m.id === id) || MOODS[1]; }

function calcStreak(entries) {
  if (!entries.length) return { current: 0, best: 0 };
  const dates = [...new Set(entries.map(e => e.date))].sort((a, b) => b.localeCompare(a));
  const today     = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  let current = 0;
  let check = today;
  for (const d of dates) {
    if (d === check) {
      current++;
      check = new Date(new Date(check) - 86400000).toISOString().split('T')[0];
    } else if (current === 0 && d === yesterday) {
      current++;
      check = new Date(new Date(yesterday) - 86400000).toISOString().split('T')[0];
    } else {
      break;
    }
  }

  let best = current;
  let run = 1;
  for (let i = 0; i < dates.length - 1; i++) {
    const diff = (new Date(dates[i]) - new Date(dates[i + 1])) / 86400000;
    run = diff === 1 ? run + 1 : 1;
    if (run > best) best = run;
  }
  return { current, best: Math.max(best, 1) };
}

// ── Mini heatmap (30 days) ────────────────────────────────────────────────────
function HeatMap({ entries }) {
  const today = new Date();
  const days = Array.from({ length: 30 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (29 - i));
    return d.toISOString().split('T')[0];
  });
  const nodesByDate = entries.reduce((acc, e) => {
    acc[e.date] = (acc[e.date] || 0) + (e.nodesCompleted || 0);
    return acc;
  }, {});

  const cellBg = (n) => {
    if (!n) return TOK.surface3;
    if (n <= 3) return TOK.indigoSoft;
    if (n <= 6) return TOK.indigo + 'aa';
    return TOK.indigo;
  };

  return (
    <div>
      <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.textMute, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>
        Últimos 30 días
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(15, 1fr)', gap: 4 }}>
        {days.map(d => (
          <div
            key={d}
            title={`${d}: ${nodesByDate[d] || 0} lecciones`}
            style={{
              height: 16, borderRadius: 3,
              background: cellBg(nodesByDate[d]),
              border: `1px solid ${nodesByDate[d] ? TOK.indigo + '30' : TOK.border}`,
            }}
          />
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        {[
          { bg: TOK.surface3,       label: 'Sin actividad' },
          { bg: TOK.indigoSoft,     label: '1–3' },
          { bg: TOK.indigo + 'aa',  label: '4–6' },
          { bg: TOK.indigo,         label: '7+' },
        ].map(l => (
          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: l.bg }} />
            <span style={{ fontFamily: TOK.mono, fontSize: 9, color: TOK.textMute }}>{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function LearningDiary({ onBack, db, user, progress }) {
  const [entries,     setEntries]     = useState([]);
  const [mood,        setMood]        = useState('good');
  const [note,        setNote]        = useState('');
  const [isSaving,    setIsSaving]    = useState(false);
  const [editingId,   setEditingId]   = useState(null);
  const uid   = user?.uid;
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (!db || !uid) return;
    const q = query(
      collection(db, 'users', uid, 'learningDiary'),
      orderBy('timestamp', 'desc'),
    );
    return onSnapshot(q, snap => {
      setEntries(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  }, [db, uid]);

  const todayEntry = entries.find(e => e.date === today);
  const { current: currentStreak, best: bestStreak } = calcStreak(entries);

  const handleSave = async () => {
    if (!db || !uid) return;
    setIsSaving(true);
    try {
      if (editingId) {
        await updateDoc(doc(db, 'users', uid, 'learningDiary', editingId), {
          mood, note: note.trim(),
        });
        setEditingId(null);
      } else {
        await addDoc(collection(db, 'users', uid, 'learningDiary'), {
          date:           today,
          nodesCompleted: progress?.completedNodes?.length || 0,
          pointsEarned:   progress?.points || 0,
          minutesStudied: 0,
          mood,
          note:           note.trim(),
          timestamp:      serverTimestamp(),
        });
      }
      setNote('');
    } finally {
      setIsSaving(false);
    }
  };

  const startEdit = () => {
    if (!todayEntry) return;
    setMood(todayEntry.mood || 'good');
    setNote(todayEntry.note || '');
    setEditingId(todayEntry.id);
  };

  const historyEntries = entries.filter(e => e.id !== todayEntry?.id);

  return (
    <div style={{ minHeight: '100vh', background: TOK.bg, color: TOK.text, fontFamily: TOK.sans }}>

      {/* ── Header ── */}
      <div className="px-3 md:px-7 gap-3 md:gap-4" style={{
        height: 60, borderBottom: `1px solid ${TOK.border}`,
        background: 'rgba(17,17,24,0.9)', backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center',
        position: 'sticky', top: 0, zIndex: 40,
      }}>
        <button onClick={onBack} className="min-h-[44px] flex items-center gap-2 px-3" style={{
          background: TOK.surface3, border: `1px solid ${TOK.border}`,
          borderRadius: 8, color: TOK.textDim, cursor: 'pointer', flexShrink: 0,
        }}>
          <Ic.Back size={15} />
          <span className="hidden sm:inline" style={{ fontFamily: TOK.mono, fontSize: 11, fontWeight: 700 }}>Volver</span>
        </button>
        <div style={{ flex: 1 }}>
          <div className="hidden sm:block" style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.indigoHi, letterSpacing: 2, textTransform: 'uppercase' }}>
            Bizce · Aprendizaje
          </div>
          <div className="text-sm md:text-[18px]" style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontWeight: 500, marginTop: 1 }}>
            Diario de Aprendizaje
          </div>
        </div>
      </div>

      <div className="max-w-[960px] mx-auto px-3 md:px-7 pt-5 md:pt-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">

          {/* ── Left: entry + history ── */}
          <div>
            {/* Today entry or edit form */}
            {(!todayEntry || editingId) ? (
              <div style={{
                padding: '24px 28px', borderRadius: 16, marginBottom: 24,
                background: `linear-gradient(180deg,${TOK.indigoSoft},${TOK.surface})`,
                border: `1px solid ${TOK.indigo}40`,
              }}>
                <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.indigoHi, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 18 }}>
                  {editingId ? 'Editar entrada de hoy' : 'Entrada de hoy'}
                </div>

                {/* Mood selector */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textDim, marginBottom: 10 }}>
                    ¿Cómo fue el estudio hoy?
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    {MOODS.map(m => (
                      <button key={m.id} onClick={() => setMood(m.id)} className="min-h-[44px] flex flex-col items-center justify-center gap-1 flex-1" style={{
                        padding: '8px 4px', borderRadius: 10, cursor: 'pointer',
                        background: mood === m.id ? m.color + '20' : TOK.surface2,
                        border: `2px solid ${mood === m.id ? m.color : TOK.border}`,
                      }}>
                        <span style={{ fontSize: 22 }}>{m.emoji}</span>
                        <span style={{ fontFamily: TOK.mono, fontSize: 9, fontWeight: 700, color: mood === m.id ? m.color : TOK.textMute }}>
                          {m.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <textarea
                  value={note}
                  onChange={e => setNote(e.target.value)}
                  placeholder="¿Qué aprendiste hoy? (opcional)"
                  style={{
                    width: '100%', height: 90, padding: '12px 14px', resize: 'none', outline: 'none',
                    background: TOK.bg, border: `1px solid ${TOK.border}`, borderRadius: 10,
                    color: TOK.textSec, fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 14, lineHeight: 1.6,
                  }}
                  onFocus={e => e.target.style.borderColor = TOK.indigo}
                  onBlur={e  => e.target.style.borderColor = TOK.border}
                />

                <button onClick={handleSave} disabled={isSaving} className="min-h-[44px] flex items-center gap-2" style={{
                  marginTop: 14, padding: '0 20px', background: TOK.indigo,
                  border: 'none', borderRadius: 9, color: '#fff',
                  fontWeight: 700, fontSize: 13, cursor: 'pointer',
                  opacity: isSaving ? 0.7 : 1,
                }}>
                  <Ic.Save size={14} />
                  {isSaving ? 'Guardando…' : editingId ? 'Actualizar' : 'Guardar entrada'}
                </button>
              </div>
            ) : (
              /* Today summary */
              <div style={{
                padding: '18px 22px', background: TOK.surface,
                border: `1px solid ${TOK.green}35`, borderRadius: 14,
                marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16,
              }}>
                <span style={{ fontSize: 36, flexShrink: 0 }}>{moodOf(todayEntry.mood).emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.green, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>
                    Entrada de hoy registrada
                  </div>
                  {todayEntry.note && (
                    <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 14, color: TOK.textSec, marginBottom: 4 }}>
                      {todayEntry.note}
                    </div>
                  )}
                  <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textDim }}>
                    {todayEntry.nodesCompleted} lecciones · {todayEntry.pointsEarned} PX
                  </div>
                </div>
                <button onClick={startEdit} style={{
                  padding: '6px 12px', background: TOK.surface3,
                  border: `1px solid ${TOK.border}`, borderRadius: 7,
                  color: TOK.textDim, cursor: 'pointer', fontSize: 12, fontWeight: 700,
                }}>
                  Editar
                </button>
              </div>
            )}

            {/* History list */}
            <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textMute, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>
              Historial
            </div>

            {historyEntries.length === 0 && !todayEntry && (
              <div style={{ textAlign: 'center', padding: '40px 0', color: TOK.textMute, fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 14 }}>
                Tu historial aparecerá aquí.
              </div>
            )}

            {historyEntries.map(entry => {
              const m = moodOf(entry.mood);
              return (
                <div key={entry.id} style={{
                  padding: '14px 18px', background: TOK.surface,
                  border: `1px solid ${TOK.border}`, borderRadius: 12, marginBottom: 8,
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                }}>
                  <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{m.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.indigoHi, fontWeight: 700 }}>
                        {entry.date}
                      </div>
                      <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textDim }}>
                        {entry.nodesCompleted} lecciones · {entry.pointsEarned} PX
                      </div>
                    </div>
                    {entry.note && (
                      <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 13, color: TOK.textSec, marginBottom: 3 }}>
                        {entry.note}
                      </div>
                    )}
                    <div style={{ fontFamily: TOK.mono, fontSize: 9, color: m.color, fontWeight: 700 }}>
                      {m.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Right: streak + heatmap ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Streak */}
            <div style={{
              padding: '22px', borderRadius: 14, textAlign: 'center',
              background: `linear-gradient(180deg,${TOK.amberSoft},${TOK.surface})`,
              border: `1px solid ${TOK.amber}35`,
            }}>
              <div style={{ fontSize: 44, lineHeight: 1 }}>🔥</div>
              <div style={{
                fontFamily: TOK.serif, fontSize: 54, fontWeight: 500,
                color: TOK.amber, letterSpacing: -2, lineHeight: 1, marginTop: 8,
              }}>
                {currentStreak}
              </div>
              <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.amber, letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 6 }}>
                días seguidos
              </div>
              <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textMute, marginTop: 10 }}>
                Mejor racha: {bestStreak} días
              </div>
            </div>

            {/* Heatmap */}
            <div style={{ padding: '18px 20px', background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 14 }}>
              <HeatMap entries={entries} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
