import React, { useState, useRef } from 'react';
import { TOK } from '../tokens';
import { Ic, ABar } from '../components/BizceUI';
import { allPronunciationData, pronunciationByCategory } from '../data/pronunciation/index';
import { playSpeech } from '../utils/audio';

function similarity(a, b) {
  a = a.toLowerCase().replace(/[¿?¡!.,]/g, '').trim();
  b = b.toLowerCase().replace(/[¿?¡!.,]/g, '').trim();
  if (a === b) return 100;
  const wordsA = a.split(' ');
  const wordsB = b.split(' ');
  const matches = wordsA.filter(w => wordsB.includes(w)).length;
  return Math.round((matches / Math.max(wordsA.length, wordsB.length)) * 100);
}

const DIFF_COLOR = { 1: TOK.green, 2: TOK.amber, 3: TOK.coral };
const DIFF_LABEL = { 1: 'Fácil', 2: 'Medio', 3: 'Difícil' };

const scoreColor = (s) => s >= 80 ? TOK.green : s >= 60 ? TOK.amber : TOK.coral;
const scoreLabel = (s) => s >= 80 ? '¡Perfecto!' : s >= 60 ? '¡Bien!' : 'Inténtalo de nuevo';

const hasSpeech = typeof window !== 'undefined' &&
  !!(window.SpeechRecognition || window.webkitSpeechRecognition);

export default function PronunciationLab({ onBack }) {
  const [category, setCategory]       = useState('all');
  const [activeId, setActiveId]       = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult]           = useState(null);
  const [scores, setScores]           = useState([]);
  const recRef = useRef(null);

  const categories = [
    { id: 'all', label: 'Todas', count: allPronunciationData.length },
    ...Object.entries(pronunciationByCategory).map(([id, items]) => ({
      id,
      label: id.replace(/_/g, ' '),
      count: items.length,
    })),
  ];

  const filtered = category === 'all'
    ? allPronunciationData
    : (pronunciationByCategory[category] || []);

  const sessionAvg = scores.length
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
    : null;

  const startRecording = (item) => {
    if (!hasSpeech) return;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new SR();
    rec.lang = 'es-ES';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    recRef.current = rec;
    rec.onresult = (e) => {
      const heard = e.results[0][0].transcript;
      const score = similarity(heard, item.es);
      setResult({ score, heard });
      setScores(prev => [...prev, score]);
    };
    rec.onerror = () => setIsRecording(false);
    rec.onend   = () => setIsRecording(false);
    rec.start();
    setActiveId(item.id);
    setIsRecording(true);
    setResult(null);
  };

  const stopRecording = () => {
    recRef.current?.stop();
    setIsRecording(false);
  };

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
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="hidden sm:block" style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.indigoHi, letterSpacing: 2, textTransform: 'uppercase' }}>
            Bizce · Pronunciación
          </div>
          <div className="text-sm md:text-[18px]" style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontWeight: 500, marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Laboratorio de Pronunciación
          </div>
        </div>
        {sessionAvg !== null && (
          <div style={{
            padding: '5px 10px', background: TOK.indigoSoft,
            border: `1px solid ${TOK.indigo}40`, borderRadius: 8, flexShrink: 0,
            fontFamily: TOK.mono, fontSize: 11, color: TOK.indigoHi, fontWeight: 700,
          }}>
            {sessionAvg}% · {scores.length}
          </div>
        )}
      </div>

      {/* ── No-speech banner ── */}
      {!hasSpeech && (
        <div className="mx-3 md:mx-7 mt-4" style={{
          padding: '12px 16px',
          background: TOK.coralSoft, border: `1px solid ${TOK.coral}40`,
          borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10, color: TOK.coral,
        }}>
          <Ic.AlertCircle size={16} />
          <span style={{ fontSize: 13, fontWeight: 600 }}>
            Tu navegador no soporta reconocimiento de voz. Usa Chrome o Edge para grabar.
          </span>
        </div>
      )}

      <div className="max-w-[1100px] mx-auto px-3 md:px-7 pt-5 md:pt-6">

        {/* ── Category pills ── */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-5 noscroll">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className="flex items-center gap-1 min-h-[36px] shrink-0"
              style={{
                padding: '4px 11px', borderRadius: 100, cursor: 'pointer',
                border: `1px solid ${category === cat.id ? TOK.indigo : TOK.border}`,
                background: category === cat.id ? TOK.indigoSoft : TOK.surface,
                color: category === cat.id ? TOK.indigoHi : TOK.textSec,
                fontFamily: TOK.mono, fontSize: 10.5, fontWeight: 700,
              }}
            >
              {cat.label}
              <span style={{ opacity: 0.55, fontWeight: 400 }}>{cat.count}</span>
            </button>
          ))}
        </div>

        {/* ── Cards grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          {filtered.map(item => {
            const isActive  = item.id === activeId;
            const hasResult = isActive && result;
            const C         = DIFF_COLOR[item.difficulty] || TOK.textDim;

            return (
              <div key={item.id} style={{
                padding: '18px 20px', borderRadius: 14,
                background: isActive ? `linear-gradient(180deg,${TOK.indigoSoft},${TOK.surface})` : TOK.surface,
                border: `1px solid ${isActive ? TOK.indigo + '60' : TOK.border}`,
                boxShadow: isActive ? `0 0 28px -10px ${TOK.indigo}50` : 'none',
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                {/* Content */}
                <div style={{ display: 'flex', gap: 12, justifyContent: 'space-between' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 22, fontWeight: 500, lineHeight: 1.2 }}>
                      {item.es}
                    </div>
                    <div style={{ fontFamily: TOK.sans, fontSize: 12, color: TOK.textDim, marginTop: 5 }}>
                      {item.tr}
                    </div>
                    <div style={{ fontFamily: TOK.mono, fontSize: 11, color: TOK.indigoHi, marginTop: 6, letterSpacing: 0.3 }}>
                      [{item.phonetic}]
                    </div>
                  </div>
                  <span style={{
                    alignSelf: 'flex-start', padding: '3px 8px', borderRadius: 5,
                    background: C + '20', color: C,
                    fontFamily: TOK.mono, fontSize: 9, fontWeight: 700, letterSpacing: 1,
                    whiteSpace: 'nowrap',
                  }}>
                    {DIFF_LABEL[item.difficulty]}
                  </span>
                </div>

                {/* Score result */}
                {hasResult && (
                  <div style={{
                    padding: '10px 14px', borderRadius: 10,
                    background: scoreColor(result.score) + '18',
                    border: `1px solid ${scoreColor(result.score)}40`,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <span style={{ fontFamily: TOK.mono, fontSize: 12, fontWeight: 700, color: scoreColor(result.score) }}>
                        {scoreLabel(result.score)}
                      </span>
                      <span style={{ fontFamily: TOK.serif, fontSize: 20, fontWeight: 700, color: scoreColor(result.score) }}>
                        {result.score}%
                      </span>
                    </div>
                    <ABar value={result.score} color={scoreColor(result.score)} h={4} delay={100} />
                    <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textDim, marginTop: 6 }}>
                      Escuchado: «{result.heard}»
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => playSpeech(item.es)}
                    className="min-h-[44px] flex items-center gap-1"
                    style={{
                      padding: '8px 12px', background: TOK.surface3,
                      border: `1px solid ${TOK.border}`, borderRadius: 8,
                      color: TOK.textDim, cursor: 'pointer', fontSize: 12,
                    }}
                  >
                    <Ic.Volume size={14} /> Escuchar
                  </button>
                  {hasSpeech && (
                    <button
                      onClick={() => isActive && isRecording ? stopRecording() : startRecording(item)}
                      className="min-h-[44px] flex-1 flex items-center justify-center gap-1"
                      style={{
                        borderRadius: 8, cursor: 'pointer',
                        fontWeight: 700, fontSize: 12, border: 'none',
                        background: isActive && isRecording ? TOK.coral : TOK.indigo,
                        color: '#fff',
                        boxShadow: isActive && isRecording ? `0 0 16px -4px ${TOK.coral}80` : 'none',
                      }}
                    >
                      {isActive && isRecording
                        ? <><Ic.MicOff size={14} /> Detener</>
                        : <><Ic.Mic size={14} /> Grabar</>
                      }
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
