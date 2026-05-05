import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, BookOpen, Volume2, CheckCircle2, Trophy,
  Zap, Edit3, Send, Loader2, Info, AlertCircle, Mic, MicOff,
  RotateCcw, SearchCode
} from 'lucide-react';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { TOK, TR } from '../tokens';
import { Ic, ABar, useIsMobile } from '../components/BizceUI';
import { TurkishErrorDetector } from '../components/TurkishErrorDetector';

const SERIF  = '"Fraunces", "Instrument Serif", Georgia, serif';
const ITALIC = '"Instrument Serif", Georgia, serif';
const MONO   = '"JetBrains Mono", ui-monospace, monospace';

const playSpeech = (rawText) => {
  if (!rawText) return;
  const cleanText = String(rawText)
    .replace(/#{1,6}\s*/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/[•_`~]/g, '')
    .replace(/---/g, '')
    .replace(/➔/g, ' se convierte en ')
    .replace(/\n/g, ' . ')
    .replace(/\s{2,}/g, ' ')
    .trim();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
};

// ==========================================
// PANTALLA 1: TEORÍA
// ==========================================
export const TheoryScreen = ({ node, onBack, onComplete, hasNextNode, onNext }) => {
  const [activeWord, setActiveWord] = useState(null);
  const isMobile = useIsMobile();

  const typeColors = {
    noun:      { bg: TOK.skySoft,    border: `${TOK.sky}40`,    text: TOK.skyHi,    label: TOK.sky    },
    verb:      { bg: TOK.coralSoft,  border: `${TOK.coral}40`,  text: TOK.coralHi,  label: TOK.coral  },
    adjective: { bg: TOK.greenSoft,  border: `${TOK.green}40`,  text: TOK.green,    label: TOK.green  },
    pronoun:   { bg: TOK.indigoSoft, border: `${TOK.indigo}40`, text: TOK.indigoHi, label: TOK.indigo },
    article:   { bg: TOK.surface2,   border: TOK.border,        text: TOK.textSec,  label: TOK.textDim},
    connector: { bg: '#2a1c3a',      border: `${TOK.violet}40`, text: TOK.violet,   label: TOK.violet },
    adverb:    { bg: TOK.amberSoft,  border: `${TOK.amber}40`,  text: '#fde68a',    label: TOK.amber  },
    phrase:    { bg: '#0f2226',      border: '#2dd4bf40',       text: '#5eead4',    label: '#14b8a6'  },
  };

  const typeNames = {
    noun: 'Sustantivo (İsim)', verb: 'Verbo (Fiil)', adjective: 'Adjetivo (Sıfat)',
    pronoun: 'Pronombre (Zamir)', article: 'Artículo (Belirteç)', connector: 'Conector/Prep (Bağlaç/Edat)',
    adverb: 'Adverbio (Zarf)', phrase: 'Frase (İfade)',
  };

  const wordPills = node.content?.analysis?.map((item, idx) => {
    const tc = typeColors[item.type] || typeColors.article;
    return (
      <div key={idx} style={{ position:'relative', display:'flex', flexDirection:'column', alignItems:'center' }}>
        <button
          onClick={() => setActiveWord(activeWord === idx ? null : idx)}
          className="animScaleIn"
          style={{
            animationDelay:`${0.1 + idx * 0.1}s`,
            padding:'10px 18px', borderRadius:12, fontSize:18, fontWeight:700,
            background:tc.bg, border:`2px solid ${tc.border}`,
            color:tc.text, fontFamily:TOK.serif, fontStyle:'italic', cursor:'pointer',
            transition:'transform 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          {item.word}
        </button>
        {activeWord === idx && (
          <div style={{
            position:'absolute', bottom:'115%', left:'50%', transform:'translateX(-50%)', zIndex:30,
            width:240, background:TOK.surface2, border:`1px solid ${TOK.borderHi}`, borderRadius:14,
            padding:'16px 18px', boxShadow:'0 20px 40px -10px rgba(0,0,0,0.8)',
            animation:'fadeInUp 0.2s cubic-bezier(0.16,1,0.3,1)',
          }}>
            <span style={{ display:'block', fontFamily:TOK.mono, fontWeight:700, fontSize:9.5, color:tc.label, textTransform:'uppercase', letterSpacing:'0.18em', marginBottom:6 }}>
              {typeNames[item.type] || item.type}
            </span>
            <span style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize:18, fontWeight:500, display:'block', marginBottom:10, color:TOK.text }}>
              "{item.literal}"
            </span>
            <p style={{ fontSize:12, color:TOK.textDim, lineHeight:1.55, margin:'0 0 12px', paddingBottom:12, borderBottom:`1px solid ${TOK.border}` }}>
              {item.explanation}
            </p>
            {item.examples?.length > 0 && (
              <div>
                <span style={{ fontFamily:TOK.mono, fontSize:9, color:TOK.textMute, textTransform:'uppercase', letterSpacing:'0.18em' }}>Ejemplos:</span>
                {item.examples.map((ej, i) => (
                  <div key={i} style={{ fontSize:12, color:TOK.textSec, marginTop:4 }}>
                    <span style={{ color:TOK.green }}>·</span> {ej.es}
                  </div>
                ))}
              </div>
            )}
            <div style={{ position:'absolute', bottom:-6, left:'50%', transform:'translateX(-50%) rotate(45deg)', width:12, height:12, background:TOK.surface2, border:`1px solid ${TOK.borderHi}`, borderTop:'none', borderLeft:'none' }}/>
          </div>
        )}
      </div>
    );
  });

  if (isMobile) {
    return (
      <>
        <div style={{ minHeight:'100vh', color:TOK.text, fontFamily:TOK.sans, background:TOK.bg, display:'flex', flexDirection:'column', paddingBottom:88 }}>
          <div style={{ padding:'10px 18px', borderBottom:`1px solid ${TOK.border}`, display:'flex', alignItems:'center', gap:10, position:'sticky', top:0, background:'rgba(10,10,15,0.95)', backdropFilter:'blur(12px)', zIndex:10, flexShrink:0 }}>
            <span style={{ cursor:'pointer' }} onClick={onBack}><Ic.Back size={18} color={TOK.textDim}/></span>
            <div style={{ flex:1 }}><ABar value={70} color={TOK.indigo} h={3}/></div>
            <span style={{ cursor:'pointer' }} onClick={onBack}><Ic.Close size={16} color={TOK.textDim}/></span>
          </div>

          <div style={{ flex:1, padding:'22px 22px 24px' }}>
            <div style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.indigoHi, letterSpacing:2, textTransform:'uppercase', fontWeight:700, marginBottom:8 }}>§ {TR.theory}</div>
            <h1 style={{ fontFamily:TOK.serif, fontSize:32, fontWeight:400, letterSpacing:-1, lineHeight:1, margin:0 }}>
              {node.title}
            </h1>
            <p style={{ fontFamily:TOK.serif, fontSize:14, color:TOK.textSec, marginTop:12, fontWeight:300, lineHeight:1.55 }}>
              {node.content?.concept}
            </p>

            {node.content?.examples?.length > 0 && (
              <div style={{ marginTop:22, display:'flex', flexDirection:'column', gap:8 }}>
                {node.content.examples.map((ex, i) => (
                  <div key={i} onClick={() => playSpeech(ex.es)} style={{ padding:'14px 16px', background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:12, display:'flex', justifyContent:'space-between', alignItems:'center', cursor:'pointer' }}>
                    <div>
                      <p style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize:16, fontWeight:500, margin:'0 0 4px', color:TOK.text }}>{ex.es}</p>
                      <p style={{ fontFamily:TOK.mono, fontSize:11, color:TOK.textDim, margin:0 }}>{ex.tr}</p>
                    </div>
                    <Ic.Volume size={16} color={TOK.indigoHi} style={{ opacity:0.5, flexShrink:0 }}/>
                  </div>
                ))}
              </div>
            )}

            {node.content?.analysis && (
              <div style={{ marginTop:22, padding:16, background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:12 }}>
                <div style={{ fontFamily:TOK.mono, fontSize:9, color:TOK.textMute, letterSpacing:1.8, textTransform:'uppercase', marginBottom:12 }}>Sözdizim</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
                  {wordPills}
                </div>
              </div>
            )}
          </div>

          <div style={{ position:'fixed', bottom:0, width:'100%', padding:'12px 18px 20px', borderTop:`1px solid ${TOK.border}`, background:'rgba(10,10,15,0.97)', backdropFilter:'blur(12px)' }}>
            <div style={{ display:'flex', gap:10 }}>
              <button onClick={onComplete} style={{ flex:1, padding:'13px 0', background:TOK.surface, border:`1px solid ${TOK.border}`, color:TOK.textSec, borderRadius:11, fontSize:13, fontWeight:700, cursor:'pointer' }}>
                Tamamlandı
              </button>
              {hasNextNode && (
                <button onClick={onNext} style={{ flex:1, padding:'13px 0', background:TOK.indigo, color:'#fff', borderRadius:11, fontSize:14, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', gap:6, boxShadow:`0 8px 24px -8px ${TOK.indigo}60`, cursor:'pointer' }}>
                  {TR.continue} <Ic.Arrow size={14}/>
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div style={{ height:'100vh', display:'grid', gridTemplateColumns:'1.4fr 1fr', color:TOK.text, fontFamily:TOK.sans, background:TOK.bg }}>
        {/* Left — reading panel */}
        <div style={{ borderRight:`1px solid ${TOK.border}`, overflowY:'auto', padding:'32px 44px' }} className="noscroll">
          <div onClick={onBack} style={{ display:'flex', alignItems:'center', gap:10, fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, letterSpacing:2, textTransform:'uppercase', marginBottom:18, cursor:'pointer' }}>
            <Ic.Back size={14}/><span>{TR.theory} · {node.title}</span>
          </div>

          <div style={{ fontFamily:TOK.mono, fontSize:10.5, color:TOK.indigoHi, letterSpacing:2.4, textTransform:'uppercase', fontWeight:700, marginBottom:12 }}>§ {TR.theory}</div>
          <h1 style={{ fontFamily:TOK.serif, fontSize:42, fontWeight:400, letterSpacing:-1.4, lineHeight:1, margin:0 }}>
            {node.title}
          </h1>
          <p style={{ fontFamily:TOK.serif, fontSize:17, color:TOK.textSec, marginTop:16, fontWeight:300, lineHeight:1.55 }}>
            {node.content?.concept}
          </p>

          {node.content?.examples?.length > 0 && (
            <div style={{ marginTop:28 }}>
              <div style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, letterSpacing:2, textTransform:'uppercase', marginBottom:12 }}>Örnekler</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {node.content.examples.map((ex, i) => (
                  <div key={i} onClick={() => playSpeech(ex.es)} className="hov" style={{ padding:'18px 22px', background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:14, display:'flex', justifyContent:'space-between', alignItems:'center', cursor:'pointer' }}>
                    <div>
                      <p style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize:19, fontWeight:500, margin:'0 0 6px', letterSpacing:-0.4, color:TOK.text }}>{ex.es}</p>
                      <p style={{ fontFamily:TOK.mono, fontSize:12, color:TOK.textDim, margin:0 }}>{ex.tr}</p>
                    </div>
                    <Ic.Volume size={18} color={TOK.indigoHi} style={{ opacity:0.5, flexShrink:0 }}/>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right — syntax lab */}
        <div style={{ background:TOK.surface, padding:'32px 32px', overflowY:'auto', display:'flex', flexDirection:'column' }} className="noscroll">
          <div style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, letterSpacing:2, textTransform:'uppercase', marginBottom:8 }}>Sözdizim laboratuvarı</div>
          <div style={{ fontFamily:TOK.serif, fontSize:22, fontWeight:500, fontStyle:'italic', letterSpacing:-0.5 }}>Kelimeye tıkla</div>
          <p style={{ fontSize:12.5, color:TOK.textDim, marginTop:6, marginBottom:22 }}>Her kelimeye tıklayarak dilbilgisi rolünü ve çevirisini keşfet.</p>

          {node.content?.analysis ? (
            <div style={{ padding:22, background:TOK.bg, border:`1px solid ${TOK.border}`, borderRadius:12 }}>
              <div style={{ display:'flex', flexWrap:'wrap', gap:12, justifyContent:'center', alignItems:'flex-end', minHeight:100 }}>
                {wordPills}
              </div>
            </div>
          ) : (
            <div style={{ padding:22, background:TOK.bg, border:`1px solid ${TOK.border}`, borderRadius:12 }}>
              <p style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize:15, color:TOK.textDim, textAlign:'center', margin:0 }}>
                Bu ders için sözdizim analizi bulunmuyor.
              </p>
            </div>
          )}

          <div style={{ marginTop:22, padding:16, background:TOK.surface3, border:`1px solid ${TOK.border}`, borderRadius:10 }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10 }}>
              <div style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textDim, letterSpacing:1.5, fontWeight:700, textTransform:'uppercase' }}>Telaffuz</div>
              <div onClick={() => playSpeech(node.title)} style={{ display:'flex', alignItems:'center', gap:5, color:TOK.indigoHi, fontFamily:TOK.mono, fontSize:10, cursor:'pointer' }}>
                <Ic.Volume size={13}/> Dinle
              </div>
            </div>
            <div style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize:17, color:TOK.text }}>{node.title}</div>
            <div style={{ display:'flex', alignItems:'center', gap:2, marginTop:14, height:32 }}>
              {[12,22,8,28,16,30,22,14,26,18,10,24,16,8,12,6].map((h, i) => (
                <div key={i} style={{ flex:1, height:`${h}px`, background: i < 9 ? TOK.indigoHi : TOK.surface4, borderRadius:1 }}/>
              ))}
            </div>
          </div>

          <div style={{ flex:1 }}/>

          <div style={{ marginTop:24, display:'flex', gap:10 }}>
            <button onClick={onComplete} className="hov" style={{ flex:1, padding:'12px 0', background:TOK.surface3, border:`1px solid ${TOK.border}`, color:TOK.textSec, borderRadius:9, fontSize:13, fontWeight:700, cursor:'pointer' }}>
              Tamamlandı
            </button>
            {hasNextNode && (
              <button onClick={onNext} className="btn-pri hov" style={{ flex:1, padding:'12px 0', background:TOK.indigo, color:'#fff', borderRadius:9, fontSize:13, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', gap:6, cursor:'pointer' }}>
                {TR.continue} <Ic.Arrow size={13}/>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// ==========================================
// PANTALLA 2: LECTURA
// ==========================================
export const ReadingScreen = ({ node, onBack, onComplete, hasNextNode, onNext }) => {
  const [showTrans, setShowTrans] = useState(false);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <div style={{ minHeight:'100vh', color:TOK.text, fontFamily:TOK.sans, background:TOK.bg, display:'flex', flexDirection:'column', paddingBottom:88 }}>
          <div style={{ padding:'10px 18px', borderBottom:`1px solid ${TOK.border}`, display:'flex', alignItems:'center', gap:10, position:'sticky', top:0, background:'rgba(10,10,15,0.95)', backdropFilter:'blur(12px)', zIndex:10, flexShrink:0 }}>
            <span style={{ cursor:'pointer' }} onClick={onBack}><Ic.Back size={18} color={TOK.textDim}/></span>
            <div style={{ flex:1, fontFamily:TOK.mono, fontSize:9.5, color:TOK.textDim, letterSpacing:1.5, fontWeight:600, textTransform:'uppercase' }}>A2 · {TR.reading}</div>
            <Ic.Bookmark size={16} color={TOK.textDim}/>
          </div>

          <div style={{ flex:1, padding:'22px 22px 24px' }}>
            <div style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.coral, letterSpacing:2, textTransform:'uppercase', fontWeight:700, marginBottom:8 }}>§ {TR.reading}</div>
            <h1 style={{ fontFamily:TOK.serif, fontSize:32, fontWeight:400, letterSpacing:-1, lineHeight:1, margin:0 }}>{node.title}</h1>

            <button onClick={() => playSpeech(node.content?.text)} style={{ width:'100%', display:'flex', justifyContent:'center', alignItems:'center', gap:8, background:TOK.indigoSoft, border:`1px solid ${TOK.indigo}40`, color:TOK.indigoHi, padding:'12px 0', borderRadius:12, fontWeight:700, fontSize:14, marginTop:18, cursor:'pointer' }}>
              <Ic.Volume size={16}/> Dinle
            </button>

            <div style={{ marginTop:20, fontFamily:TOK.serif, fontSize:16, fontWeight:400, lineHeight:1.7, color:TOK.textSec, whiteSpace:'pre-line' }}>
              {node.content?.text}
            </div>

            <button onClick={() => setShowTrans(!showTrans)} style={{ width:'100%', marginTop:18, padding:'13px 0', color:TOK.textDim, fontWeight:700, border:`2px solid ${TOK.border}`, borderRadius:12, fontSize:13, background:'transparent', cursor:'pointer' }}>
              {showTrans ? 'Çeviriyi gizle' : 'Çeviriyi göster'}
            </button>

            {showTrans && (
              <div style={{ marginTop:14, background:TOK.surface, border:`1px solid ${TOK.borderHi}`, padding:'20px 22px', borderRadius:14, animation:'fadeIn 0.3s ease' }}>
                <p style={{ fontFamily:TOK.serif, fontSize:14, fontWeight:300, lineHeight:1.75, color:TOK.textSec, whiteSpace:'pre-line', margin:0 }}>{node.content?.translation}</p>
              </div>
            )}
          </div>

          <div style={{ position:'fixed', bottom:0, width:'100%', padding:'12px 18px 20px', borderTop:`1px solid ${TOK.border}`, background:'rgba(10,10,15,0.97)', backdropFilter:'blur(12px)' }}>
            <div style={{ display:'flex', gap:10 }}>
              <button onClick={onComplete} style={{ flex:1, padding:'13px 0', background:TOK.surface, border:`1px solid ${TOK.border}`, color:TOK.textSec, borderRadius:11, fontSize:13, fontWeight:700, cursor:'pointer' }}>Okumayı bitir</button>
              {hasNextNode && (
                <button onClick={onNext} style={{ flex:1, padding:'13px 0', background:TOK.indigo, color:'#fff', borderRadius:11, fontSize:14, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', gap:6, boxShadow:`0 8px 24px -8px ${TOK.indigo}60`, cursor:'pointer' }}>
                  {TR.continue} <Ic.Arrow size={14}/>
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div style={{ height:'100vh', display:'grid', gridTemplateColumns:'1fr 380px', color:TOK.text, fontFamily:TOK.sans, background:TOK.bg }}>
        {/* Left — article */}
        <div style={{ overflowY:'auto', padding:'40px 60px' }} className="noscroll">
          <div onClick={onBack} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18, fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, letterSpacing:2, textTransform:'uppercase', cursor:'pointer' }}>
            <Ic.Back size={14}/> A2 / {TR.reading}
          </div>
          <div style={{ fontFamily:TOK.mono, fontSize:10.5, color:TOK.coral, letterSpacing:2.4, textTransform:'uppercase', fontWeight:700, marginBottom:10 }}>§ {TR.reading}</div>
          <h1 style={{ fontFamily:TOK.serif, fontSize:48, fontWeight:400, letterSpacing:-1.6, lineHeight:1, margin:0 }}>{node.title}</h1>
          <div style={{ display:'flex', alignItems:'center', gap:14, marginTop:14, fontFamily:TOK.mono, fontSize:11, color:TOK.textDim, letterSpacing:1, fontWeight:600 }}>
            <span>~ {node.content?.text?.split(' ')?.length || 0} sözcük</span>
            <span style={{ width:3, height:3, borderRadius:2, background:TOK.textMute, display:'inline-block' }}/>
            <span>A2 seviye</span>
          </div>
          <div style={{ marginTop:32, fontFamily:TOK.serif, fontSize:19, fontWeight:400, lineHeight:1.7, color:TOK.textSec, whiteSpace:'pre-line' }}>
            {node.content?.text}
          </div>
        </div>

        {/* Right — tools */}
        <div style={{ borderLeft:`1px solid ${TOK.border}`, background:TOK.surface, padding:'32px 24px', overflowY:'auto', display:'flex', flexDirection:'column' }} className="noscroll">
          <div className="animScaleIn" style={{ padding:18, background:`linear-gradient(180deg,${TOK.indigoSoft},${TOK.surface2})`, border:`1px solid ${TOK.indigo}40`, borderRadius:12, marginBottom:22 }}>
            <div style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.indigoHi, letterSpacing:1.8, textTransform:'uppercase', fontWeight:700 }}>Dinle</div>
            <div style={{ fontFamily:TOK.serif, fontSize:20, fontWeight:500, fontStyle:'italic', color:TOK.text, marginTop:6, letterSpacing:-0.5 }}>{node.title}</div>
            <button onClick={() => playSpeech(node.content?.text)} style={{ width:'100%', marginTop:12, padding:'9px 0', background:TOK.indigo, color:'#fff', borderRadius:7, fontSize:12, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', gap:6, cursor:'pointer', border:'none' }}>
              <Ic.Volume size={13}/> Oynat
            </button>
          </div>

          <div style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>Çeviri</div>
          <button onClick={() => setShowTrans(!showTrans)} style={{ width:'100%', padding:'12px 0', color: showTrans ? TOK.text : TOK.textDim, fontWeight:700, border:`2px solid ${showTrans ? TOK.borderHi : TOK.border}`, borderRadius:10, marginBottom:10, fontSize:13, background: showTrans ? TOK.surface2 : 'transparent', cursor:'pointer', transition:'all 0.2s' }}>
            {showTrans ? 'Çeviriyi gizle' : 'Çeviriyi göster'}
          </button>
          {showTrans && (
            <div style={{ background:TOK.surface2, border:`1px solid ${TOK.borderHi}`, padding:'20px 22px', borderRadius:12, animation:'fadeIn 0.3s ease', marginBottom:22 }}>
              <p style={{ fontFamily:TOK.serif, fontSize:15, fontWeight:300, lineHeight:1.75, color:TOK.textSec, whiteSpace:'pre-line', margin:0 }}>{node.content?.translation}</p>
            </div>
          )}

          <div style={{ flex:1 }}/>
          <div style={{ marginTop:24, display:'flex', gap:10 }}>
            <button onClick={onComplete} className="hov" style={{ flex:1, padding:'12px 0', background:TOK.surface3, border:`1px solid ${TOK.border}`, color:TOK.textSec, borderRadius:9, fontSize:13, fontWeight:700, cursor:'pointer' }}>Okumayı bitir</button>
            {hasNextNode && (
              <button onClick={onNext} className="btn-pri hov" style={{ flex:1, padding:'12px 0', background:TOK.indigo, color:'#fff', borderRadius:9, fontSize:13, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', gap:6, cursor:'pointer' }}>
                {TR.continue} <Ic.Arrow size={13}/>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// ==========================================
// PANTALLA 3: QUIZ / EXAMEN
// ==========================================
export const QuizScreen = ({ node, onBack, onComplete, updateGrade, hasNextNode, onNext }) => {
  const [exIdx, setExIdx] = useState(0);
  const [selectedAns, setSelectedAns] = useState(null);
  const [status, setStatus] = useState('playing');
  const [availWords, setAvailWords] = useState([]);
  const [selWords, setSelWords] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [examFinished, setExamFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [speechSupported, setSpeechSupported] = useState(true);
  const isMobile = useIsMobile();

  const isExam = node.type === 'exam';
  const exercisesList = isExam ? node.content?.exercises : node.exercises;

  if (!exercisesList || exercisesList.length === 0) {
    return (
      <>
        <div style={{ minHeight:'100vh', background:TOK.bg, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16 }}>
          <p style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize:18, color:TOK.coral }}>Egzersiz bulunamadı.</p>
          <button onClick={onBack} style={{ padding:'12px 24px', background:TOK.indigo, color:'#fff', borderRadius:12, fontWeight:700, cursor:'pointer', border:'none' }}>
            Haritaya dön
          </button>
        </div>
      </>
    );
  }

  const exercise = exercisesList[exIdx];

  const normalizeText = (text) =>
    text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[.,¿?¡!]/g, '').trim();

  useEffect(() => {
    if (exercise && exercise.type === 'syntax' && !examFinished) {
      setAvailWords([...exercise.words].sort(() => Math.random() - 0.5));
      setSelWords([]);
    }
    setSelectedAns(null);
    setTranscript('');
    setStatus('playing');
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) setSpeechSupported(false);
  }, [exIdx, exercise, examFinished]);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) { setSpeechSupported(false); return; }
    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => { setIsListening(true); setTranscript('Escuchando...'); };
    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setTranscript(speechResult);
      const normSpeech = normalizeText(speechResult);
      const normTarget = normalizeText(exercise.spanish);
      setStatus(normSpeech.includes(normTarget) || normTarget.includes(normSpeech) || normSpeech === normTarget ? 'correct' : 'incorrect');
    };
    recognition.onerror = () => { setTranscript('Error al escuchar. Intenta de nuevo.'); setIsListening(false); setStatus('incorrect'); };
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const checkAnswerPractice = () => {
    let isCorrect = false;
    if (exercise.type === 'multiple_choice') isCorrect = selectedAns === exercise.correct;
    else if (exercise.type === 'syntax') isCorrect = selWords.join(" ") === exercise.spanish;
    setStatus(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect && exercise.type === 'syntax') playSpeech(exercise.spanish);
    if (!isCorrect) setMistakes(m => m + 1);
  };

  const handleNextPractice = () => {
    if (exIdx < exercisesList.length - 1) {
      setExIdx(exIdx + 1);
    } else {
      let finalGrade = Math.max(10, 100 - (mistakes * 10));
      if (updateGrade) updateGrade(node.id, finalGrade);
      onComplete(exercisesList.length * 10);
    }
  };

  const handleNextExam = () => {
    let isCorrect = exercise.type === 'multiple_choice' ? selectedAns === exercise.correct : selWords.join(" ") === exercise.spanish;
    const currentMistakes = isCorrect ? mistakes : mistakes + 1;
    if (!isCorrect) setMistakes(currentMistakes);
    if (exIdx < exercisesList.length - 1) {
      setExIdx(exIdx + 1);
    } else {
      let finalGrade = Math.max(0, Math.round(((exercisesList.length - currentMistakes) / exercisesList.length) * 100));
      setScore(finalGrade);
      setExamFinished(true);
    }
  };

  const retryExam = () => { setExIdx(0); setMistakes(0); setExamFinished(false); setScore(0); };

  const progressColor = isExam ? TOK.amber : TOK.indigo;
  const accentColor   = isExam ? TOK.amber : TOK.indigo;
  const accentSoft    = isExam ? TOK.amberSoft : TOK.indigoSoft;
  const accentBorder  = isExam ? `${TOK.amber}50` : `${TOK.indigo}50`;
  const accentHi      = isExam ? '#fde68a' : TOK.indigoHi;

  let mainBtnBg = TOK.surface4;
  let mainBtnColor = TOK.textMute;
  let btnDisabled = true;

  if (isExam) {
    if (selectedAns !== null || selWords.length > 0) { mainBtnBg = accentColor; mainBtnColor = '#fff'; btnDisabled = false; }
  } else {
    if (status === 'correct') { mainBtnBg = TOK.green; mainBtnColor = TOK.bg; btnDisabled = false; }
    else if (status === 'incorrect') { mainBtnBg = TOK.rose; mainBtnColor = '#fff'; btnDisabled = false; }
    else if (selectedAns !== null || selWords.length > 0 || (exercise.type === 'speaking' && status !== 'playing')) {
      mainBtnBg = accentColor; mainBtnColor = '#fff'; btnDisabled = false;
    }
  }

  const isDesktopMC = !isMobile && exercise.type === 'multiple_choice';

  const handleMainBtn = () => {
    if (isExam) { handleNextExam(); }
    else {
      if (exercise.type === 'speaking' && !speechSupported && status === 'playing') handleNextPractice();
      else if (status === 'playing') checkAnswerPractice();
      else if (status === 'incorrect') { setStatus('playing'); setTranscript(''); if (exercise.type === 'syntax') { setAvailWords([...availWords, ...selWords]); setSelWords([]); } else setSelectedAns(null); }
      else handleNextPractice();
    }
  };

  const btnLabel = exercise.type === 'speaking' && !speechSupported && status === 'playing' ? 'Egzersizi geç'
    : isExam ? TR.continue
    : status === 'playing' && exercise.type !== 'speaking' ? 'Yanıtı kontrol et'
    : status === 'incorrect' ? TR.tryAgain : 'Sonraki egzersiz';

  if (isExam && examFinished) {
    return (
      <>
        <div style={{ minHeight:'100vh', background:TOK.bg, color:TOK.text, fontFamily:TOK.sans, display:'flex', flexDirection:'column' }}>
          <div style={{ padding:'0 18px', height:56, display:'flex', alignItems:'center', gap:14, borderBottom:`1px solid ${TOK.border}`, background:'rgba(17,17,24,0.9)', backdropFilter:'blur(12px)', position:'sticky', top:0, zIndex:10 }}>
            <span style={{ cursor:'pointer' }} onClick={onBack}><Ic.Back size={18} color={TOK.textDim}/></span>
            <span style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize:17, fontWeight:500 }}>Sınav sonuçları</span>
          </div>
          <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:32, textAlign:'center', animation:'scaleIn 0.4s cubic-bezier(0.16,1,0.3,1)' }}>
            <div style={{ width:80, height:80, borderRadius:'50%', background: score >= 80 ? `linear-gradient(135deg,${TOK.amber},${TOK.coral})` : score >= 60 ? `linear-gradient(135deg,${TOK.amber},${TOK.amberSoft})` : TOK.surface3, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:24 }}>
              <Ic.Award size={40} color={ score >= 60 ? TOK.bg : TOK.textMute }/>
            </div>
            <h2 style={{ fontFamily:TOK.serif, fontSize:36, fontWeight:400, letterSpacing:-1, margin:'0 0 8px' }}>
              {score >= 80 ? 'Mükemmel!' : score >= 60 ? 'Sınav geçildi!' : 'Tekrar çalışmalısın'}
            </h2>
            <div style={{ background:TOK.surface, border:`1px solid ${TOK.border}`, padding:'24px 40px', borderRadius:20, margin:'24px 0 32px' }}>
              <span style={{ display:'block', fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, textTransform:'uppercase', letterSpacing:'0.2em', marginBottom:8 }}>Nihai not</span>
              <span style={{ fontFamily:TOK.serif, fontSize:64, fontWeight:500, letterSpacing:-2, lineHeight:1, color: score >= 80 ? TOK.green : score >= 60 ? TOK.amber : TOK.rose }}>
                {score}<span style={{ fontSize:28, color:TOK.border }}>/100</span>
              </span>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:10, width:'100%', maxWidth:380 }}>
              <button onClick={retryExam} style={{ width:'100%', padding:'14px 0', background:accentSoft, border:`1px solid ${accentBorder}`, color:accentHi, fontWeight:700, fontSize:15, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', gap:8, cursor:'pointer' }}>
                <Ic.RotateCcw size={16}/> Tekrar dene
              </button>
              <button onClick={() => { if (updateGrade) updateGrade(node.id, score); onComplete(score >= 60 ? 50 : 10); }} style={{ width:'100%', background:TOK.indigo, color:'#fff', fontWeight:700, fontSize:15, borderRadius:12, padding:'14px 0', boxShadow:`0 0 24px -8px ${TOK.indigo}60`, cursor:'pointer', border:'none' }}>
                Notu kaydet ve çık
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div style={{ height:'100vh', background:TOK.bg, color:TOK.text, fontFamily:TOK.sans, display:'flex', flexDirection:'column', overflow:'hidden' }}>
        {/* Header */}
        <div style={{ height:56, padding:'0 18px', borderBottom:`1px solid ${TOK.border}`, display:'flex', alignItems:'center', gap:14, flexShrink:0, position:'sticky', top:0, background:'rgba(10,10,15,0.95)', backdropFilter:'blur(12px)', zIndex:10 }}>
          <span onClick={onBack} style={{ cursor:'pointer', flexShrink:0 }}><Ic.Close size={18} color={TOK.textDim}/></span>
          <div style={{ flex:1 }}><ABar value={(exIdx / exercisesList.length) * 100} color={progressColor} h={5}/></div>
          <div style={{ fontFamily:TOK.mono, fontSize:11, color:TOK.textDim, fontWeight:700, padding:'4px 10px', background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:20, flexShrink:0 }}>{exIdx + 1} / {exercisesList.length}</div>
          <div style={{ display:'flex', gap:4, flexShrink:0 }}>
            {[1,2,3,4,5].map(i => <Ic.Heart key={i} size={14} color={TOK.coral}/>)}
          </div>
        </div>

        {/* Body */}
        <div style={{ flex:1, overflowY:'auto', display:'flex', flexDirection:'column' }}>
          {/* Exam banner */}
          {isExam && exIdx === 0 && (
            <div style={{ margin:'24px auto 0', maxWidth:580, width:'100%', padding:'0 24px' }}>
              <div style={{ background:accentSoft, border:`1px solid ${accentBorder}`, padding:'24px 28px', borderRadius:18, textAlign:'center' }}>
                <div style={{ width:40, height:40, borderRadius:'50%', background:accentColor, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 12px' }}><Ic.Award size={22} color={TOK.bg}/></div>
                <h2 style={{ fontFamily:TOK.serif, fontSize:24, fontWeight:400, letterSpacing:-0.8, margin:'0 0 8px', color:accentHi }}>{node.title}</h2>
                <p style={{ fontSize:14, color:accentColor, opacity:0.8, margin:0 }}>{node.content?.concept}</p>
              </div>
            </div>
          )}

          {/* Multiple choice — 2-panel on desktop */}
          {exercise.type === 'multiple_choice' && (
            isDesktopMC ? (
              <div style={{ flex:1, display:'grid', gridTemplateColumns:'1fr 1fr' }}>
                {/* Left: question */}
                <div style={{ borderRight:`1px solid ${TOK.border}`, padding:'48px 56px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
                  <div style={{ fontFamily:TOK.mono, fontSize:10.5, color:TOK.indigoHi, letterSpacing:2.4, textTransform:'uppercase', fontWeight:700, marginBottom:16 }}>
                    {exIdx + 1}. soru · Boşluğu doldur
                  </div>
                  <h2 style={{ fontFamily:TOK.serif, fontSize:40, fontWeight:400, letterSpacing:-1.2, lineHeight:1.15, margin:'0 0 22px' }}>
                    {exercise.question}
                  </h2>
                  {exercise.turkish && (
                    <p style={{ fontFamily:TOK.serif, fontSize:16, color:TOK.textSec, fontWeight:300, fontStyle:'italic', lineHeight:1.5, margin:'0 0 22px' }}>
                      "{exercise.turkish}"
                    </p>
                  )}
                  <div onClick={() => playSpeech(exercise.question)} style={{ display:'flex', alignItems:'center', gap:8, fontFamily:TOK.mono, fontSize:11, color:TOK.textMute, cursor:'pointer' }}>
                    <Ic.Volume size={14}/> Cümleyi dinle
                    <div style={{ display:'flex', gap:1.5, marginLeft:8 }}>
                      {[10,18,8,22,14,26,18,12,20,14].map((h, i) => <div key={i} style={{ width:2, height:h, background:TOK.indigoHi, opacity:0.6, borderRadius:1 }}/>)}
                    </div>
                  </div>
                </div>
                {/* Right: options */}
                <div style={{ padding:'48px 56px', display:'flex', flexDirection:'column', justifyContent:'center', gap:12 }}>
                  <div style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, letterSpacing:2, textTransform:'uppercase', fontWeight:700, marginBottom:8 }}>Doğru kelimeyi seç</div>
                  {exercise.options.map((opt, i) => {
                    const isSel = selectedAns === i;
                    const isCorrectOpt = status === 'correct' && isSel;
                    const isWrongOpt = status === 'incorrect' && isSel;
                    return (
                      <div key={i} onClick={() => status === 'playing' && setSelectedAns(i)} style={{
                        padding:'18px 22px', borderRadius:12, cursor:'pointer',
                        background: isCorrectOpt ? `linear-gradient(180deg,${TOK.greenSoft},${TOK.surface})`
                                  : isWrongOpt  ? `linear-gradient(180deg,${TOK.roseSoft},${TOK.surface})`
                                  : isSel ? `linear-gradient(180deg,${accentSoft},${TOK.surface})` : TOK.surface,
                        border:`1.5px solid ${isCorrectOpt ? TOK.green : isWrongOpt ? TOK.rose : isSel ? accentColor : TOK.border}`,
                        display:'flex', alignItems:'center', gap:14,
                        animation: isCorrectOpt ? 'correctPop 0.6s ease' : isWrongOpt ? 'wrongShake 0.4s' : `fadeInUp 0.6s cubic-bezier(.16,1,.3,1) backwards ${0.1 + i*0.06}s`,
                        boxShadow: isCorrectOpt ? `0 0 24px -6px ${TOK.green}40` : 'none',
                      }}>
                        <div style={{ width:32, height:32, borderRadius:8, background:TOK.surface3, border:`1px solid ${TOK.border}`, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:TOK.mono, fontSize:12, fontWeight:700, color:TOK.textDim, flexShrink:0 }}>{['A','B','C','D'][i]}</div>
                        <div style={{ flex:1 }}>
                          <div style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize:19, fontWeight:500, color: isCorrectOpt ? TOK.green : isWrongOpt ? TOK.rose : isSel ? accentHi : TOK.text }}>{opt}</div>
                        </div>
                        {isCorrectOpt && <Ic.Check size={20} color={TOK.green}/>}
                        {isWrongOpt   && <Ic.Close size={18} color={TOK.rose}/>}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Mobile multiple choice */
              <div style={{ padding:'32px 22px', maxWidth:720, margin:'0 auto', width:'100%' }}>
                <div style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.indigoHi, letterSpacing:2, textTransform:'uppercase', fontWeight:700, marginBottom:12 }}>
                  {exIdx + 1}. soru · Boşluğu doldur
                </div>
                <h2 style={{ fontFamily:TOK.serif, fontSize:26, fontWeight:400, letterSpacing:-0.7, lineHeight:1.2, margin:'0 0 18px' }}>{exercise.question}</h2>
                {exercise.turkish && (
                  <p style={{ fontFamily:TOK.serif, fontSize:14, color:TOK.textSec, fontStyle:'italic', margin:'0 0 18px' }}>"{exercise.turkish}"</p>
                )}
                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  {exercise.options.map((opt, i) => {
                    const isSel = selectedAns === i;
                    const isCorrectOpt = status === 'correct' && isSel;
                    const isWrongOpt = status === 'incorrect' && isSel;
                    return (
                      <div key={i} onClick={() => status === 'playing' && setSelectedAns(i)} style={{
                        padding:'14px 16px', borderRadius:12, display:'flex', alignItems:'center', gap:12, cursor:'pointer',
                        background: isCorrectOpt ? `linear-gradient(180deg,${TOK.greenSoft},${TOK.surface})` : isWrongOpt ? `linear-gradient(180deg,${TOK.roseSoft},${TOK.surface})` : isSel ? `linear-gradient(180deg,${accentSoft},${TOK.surface})` : TOK.surface,
                        border:`1.5px solid ${isCorrectOpt ? TOK.green : isWrongOpt ? TOK.rose : isSel ? accentColor : TOK.border}`,
                        animation: isCorrectOpt ? 'correctPop 0.6s ease' : isWrongOpt ? 'wrongShake 0.4s' : `fadeInUp 0.6s cubic-bezier(.16,1,.3,1) backwards ${0.1 + i*0.06}s`,
                      }}>
                        <div style={{ width:26, height:26, borderRadius:6, background:TOK.surface3, border:`1px solid ${TOK.border}`, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:TOK.mono, fontSize:11, fontWeight:700, color:TOK.textDim, flexShrink:0 }}>{['A','B','C','D'][i]}</div>
                        <div style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize:16, fontWeight:500, color: isCorrectOpt ? TOK.green : isWrongOpt ? TOK.rose : isSel ? accentHi : TOK.text, flex:1 }}>{opt}</div>
                        {isCorrectOpt && <Ic.Check size={16} color={TOK.green}/>}
                        {isWrongOpt   && <Ic.Close size={16} color={TOK.rose}/>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          )}

          {/* Speaking */}
          {exercise.type === 'speaking' && (
            <div style={{ padding:'32px 22px', maxWidth:720, margin:'0 auto', width:'100%', display:'flex', flexDirection:'column', alignItems:'center' }}>
              <div style={{ background:TOK.surface, padding:'28px 32px', borderRadius:20, border:`1px solid ${TOK.border}`, width:'100%', textAlign:'center', marginBottom:32 }}>
                <span style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, textTransform:'uppercase', letterSpacing:'0.2em', marginBottom:10, display:'block' }}>Hedef cümle</span>
                <p style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize:36, fontWeight:500, color:TOK.text, letterSpacing:-1, margin:'0 0 8px' }}>{exercise.spanish}</p>
                <p style={{ fontSize:14, color:TOK.textDim, margin:'0 0 16px' }}>{exercise.turkish}</p>
                <button onClick={() => playSpeech(exercise.spanish)} style={{ width:44, height:44, borderRadius:'50%', background:TOK.indigoSoft, border:`1px solid ${TOK.indigo}50`, color:TOK.indigoHi, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto', cursor:'pointer' }}>
                  <Ic.Volume size={18}/>
                </button>
              </div>
              {!speechSupported ? (
                <div style={{ background:TOK.roseSoft, border:`1px solid ${TOK.rose}50`, padding:'20px 24px', borderRadius:16, display:'flex', alignItems:'center', gap:14, width:'100%' }}>
                  <Ic.AlertCircle size={24} color={TOK.rose}/>
                  <p style={{ fontSize:14, color:TOK.rose, margin:0 }}>Tarayıcın mikrofon değerlendirmeyi desteklemiyor. Lütfen Google Chrome kullan.</p>
                </div>
              ) : (
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', width:'100%' }}>
                  <button onClick={startListening} disabled={isListening} style={{ width:112, height:112, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', border:'none', cursor:'pointer', background: isListening ? TOK.rose : TOK.indigo, transform: isListening ? 'scale(1.1)' : 'scale(1)', boxShadow: isListening ? `0 0 0 4px ${TOK.rose}30,0 20px 40px -10px ${TOK.rose}50` : `0 20px 40px -10px ${TOK.indigo}60`, transition:'all 0.3s' }}>
                    {isListening ? <Ic.MicOff size={40} color="#fff"/> : <Ic.Mic size={40} color="#fff"/>}
                  </button>
                  <p style={{ marginTop:20, fontSize:14, fontWeight:600, color:TOK.textDim }}>{isListening ? 'Dinliyor... Şimdi konuş!' : 'Konuşmak için mikrofona dokun'}</p>
                  {transcript && (
                    <div style={{ marginTop:24, width:'100%', padding:'20px 24px', borderRadius:14, border:`2px solid ${status === 'correct' ? `${TOK.green}60` : status === 'incorrect' ? `${TOK.rose}60` : TOK.border}`, background: status === 'correct' ? TOK.greenSoft : status === 'incorrect' ? TOK.roseSoft : TOK.surface, textAlign:'center', transition:'all 0.3s' }}>
                      <span style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, textTransform:'uppercase', letterSpacing:'0.18em', marginBottom:8, display:'block' }}>Sistem duydu:</span>
                      <p style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize:20, fontWeight:500, color: status === 'correct' ? TOK.green : status === 'incorrect' ? TOK.rose : TOK.text, margin:0 }}>"{transcript}"</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Syntax builder */}
          {exercise.type === 'syntax' && (
            <div style={{ padding:'32px 22px', maxWidth:720, margin:'0 auto', width:'100%' }}>
              <h2 style={{ fontFamily:TOK.serif, fontSize:28, fontWeight:400, letterSpacing:-0.8, lineHeight:1.25, margin:'0 0 24px', color:TOK.text }}>Cümleyi doğru kur:</h2>
              <div style={{ background:TOK.surface, padding:'16px 20px', borderRadius:14, border:`1px solid ${TOK.border}`, marginBottom:24, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <p style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize:17, color:TOK.textSec, margin:0 }}>{exercise.turkish}</p>
                {!isExam && (
                  <button onClick={() => playSpeech(exercise.spanish)} style={{ padding:'8px 10px', background:TOK.surface2, border:`1px solid ${TOK.border}`, borderRadius:10, color:TOK.textDim, display:'flex', alignItems:'center', cursor:'pointer' }}>
                    <Ic.Volume size={16}/>
                  </button>
                )}
              </div>
              <div style={{ minHeight:110, background: selWords.length > 0 ? TOK.surface : TOK.bg, border:`2px dashed ${selWords.length > 0 ? accentColor : TOK.border}`, borderRadius:14, marginBottom:24, padding:16, display:'flex', flexWrap:'wrap', gap:8, alignItems:'flex-start', alignContent:'flex-start', transition:'all 0.3s' }}>
                {selWords.length === 0 && (
                  <span style={{ fontFamily:TOK.serif, fontStyle:'italic', color:TOK.textMute, width:'100%', textAlign:'center', marginTop:24, fontSize:15 }}>Cümleyi oluşturmak için aşağıdaki kelimelere dokun</span>
                )}
                {selWords.map((w, i) => (
                  <button key={i} onClick={() => { if (status !== 'playing') return; const n=[...selWords]; n.splice(i,1); setSelWords(n); setAvailWords([...availWords, w]); }} style={{ padding:'8px 16px', background:TOK.surface2, border:`1px solid ${TOK.borderHi}`, borderRadius:10, fontWeight:700, fontSize:16, color:TOK.text, cursor:'pointer' }}>{w}</button>
                ))}
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
                {availWords.map((w, i) => (
                  <button key={i} onClick={() => { if (status !== 'playing') return; const n=[...availWords]; n.splice(i,1); setAvailWords(n); setSelWords([...selWords, w]); }}
                    style={{ padding:'10px 18px', background:TOK.surface, border:`1px solid ${TOK.border}`, borderBottom:`3px solid ${TOK.border}`, borderRadius:10, fontWeight:700, fontSize:16, color:TOK.text, cursor:'pointer', transition:'all 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = accentColor; e.currentTarget.style.color = accentHi; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = TOK.border; e.currentTarget.style.color = TOK.text; }}
                  >{w}</button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom action / feedback bar */}
        <div style={{
          flexShrink:0,
          padding: isDesktopMC && status !== 'playing' ? '18px 56px' : '16px 22px',
          borderTop:`1px solid ${!isExam && status === 'correct' ? `${TOK.green}40` : !isExam && status === 'incorrect' ? `${TOK.rose}40` : TOK.border}`,
          background: !isExam && status === 'correct' ? `linear-gradient(180deg,${TOK.greenSoft},rgba(10,10,15,.97))`
                    : !isExam && status === 'incorrect' ? `linear-gradient(180deg,${TOK.roseSoft},rgba(10,10,15,.97))`
                    : 'rgba(10,10,15,0.97)',
          backdropFilter:'blur(12px)', transition:'all 0.3s',
          display: isDesktopMC && status !== 'playing' ? 'flex' : 'block',
          alignItems:'center', gap:18,
        }}>
          {!isExam && status === 'correct' && (
            <div style={{ display:'flex', alignItems:'center', gap: isDesktopMC ? 18 : 10, marginBottom: isDesktopMC ? 0 : 12, flex: isDesktopMC ? 1 : undefined }}>
              <div style={{ width: isDesktopMC ? 44 : 32, height: isDesktopMC ? 44 : 32, borderRadius:'50%', background:TOK.green, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <Ic.Check size={isDesktopMC ? 24 : 18} color={TOK.bg}/>
              </div>
              <div>
                <div style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize: isDesktopMC ? 22 : 18, fontWeight:600, color:TOK.green, letterSpacing:-0.4 }}>{TR.rightAnswer}</div>
                {exercise.explanation && <div style={{ fontFamily:TOK.serif, fontSize:13, color:TOK.textSec, marginTop:2, fontWeight:300 }}>{exercise.explanation}</div>}
              </div>
            </div>
          )}
          {!isExam && status === 'incorrect' && (
            <div style={{ display:'flex', alignItems:'center', gap: isDesktopMC ? 18 : 10, marginBottom: isDesktopMC ? 0 : 12, flex: isDesktopMC ? 1 : undefined }}>
              <div style={{ width: isDesktopMC ? 44 : 32, height: isDesktopMC ? 44 : 32, borderRadius:'50%', background:TOK.rose, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <Ic.Close size={isDesktopMC ? 22 : 18} color="#fff"/>
              </div>
              <div style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize: isDesktopMC ? 22 : 18, fontWeight:600, color:TOK.rose }}>Hmm, tekrar dene.</div>
            </div>
          )}
          <div style={{ maxWidth: isDesktopMC ? undefined : 720, margin: isDesktopMC ? 0 : '0 auto', width: isDesktopMC ? undefined : '100%' }}>
            <button onClick={handleMainBtn} disabled={btnDisabled && (exercise.type !== 'speaking' || speechSupported)} style={{
              width: isDesktopMC && status !== 'playing' ? undefined : '100%',
              padding: isDesktopMC ? '12px 28px' : '16px 0',
              fontWeight:700, fontSize: isDesktopMC ? 14 : 17, borderRadius: isDesktopMC ? 9 : 14, border:'none',
              background:mainBtnBg, color:mainBtnColor,
              cursor: btnDisabled && (exercise.type !== 'speaking' || speechSupported) ? 'not-allowed' : 'pointer',
              boxShadow: mainBtnBg !== TOK.surface4 ? `0 0 20px -8px ${mainBtnBg}80` : 'none', transition:'all 0.2s',
              display:'flex', alignItems:'center', justifyContent:'center', gap:6,
            }}>
              {btnLabel} {status !== 'playing' && status !== 'incorrect' && <Ic.Arrow size={14}/>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// ==========================================
// PANTALLA 4: TALLER DE PRODUCCIÓN
// ==========================================
export const WorkshopScreen = ({ node, onBack, onComplete, user }) => {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const checkSub = async () => {
      if (!user || !db) return;
      try {
        const docSnap = await getDoc(doc(db, "submissions", `${user.uid}_${node.id}`));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setText(data.text);
          if (data.status === 'graded') { setStatus('graded'); setFeedback(data); }
          else { setStatus('submitted'); }
        }
      } catch (error) { console.error(error); }
    };
    checkSub();
  }, [node.id, user]);

  const handleSubmit = async () => {
    if (!text.trim() || text.length < 50 || !user || !db) return;
    setStatus('loading');
    try {
      await setDoc(doc(db, "submissions", `${user.uid}_${node.id}`), {
        userId: user.uid, userEmail: user.email, nodeId: node.id, nodeTitle: node.title,
        text: text, status: 'pending', timestamp: serverTimestamp(),
      });
      setStatus('submitted');
    } catch (e) { setStatus('idle'); }
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const ctaBar = (
    <>
      {status === 'idle' && (
        <button onClick={handleSubmit} disabled={text.length < 50} style={{ width:'100%', background: text.length >= 50 ? TOK.amber : TOK.surface4, color: text.length >= 50 ? TOK.bg : TOK.textMute, fontWeight:700, padding:'14px 0', borderRadius:12, fontSize:14, border:'none', display:'flex', alignItems:'center', justifyContent:'center', gap:8, cursor: text.length < 50 ? 'not-allowed' : 'pointer', boxShadow: text.length >= 50 ? `0 0 20px -6px ${TOK.amber}60` : 'none', transition:'all 0.3s' }}>
          <Ic.Send size={16}/> Öğretmene gönder
        </button>
      )}
      {status === 'loading' && (
        <div style={{ width:'100%', background:TOK.indigoSoft, color:TOK.indigoHi, fontWeight:700, padding:'14px 0', borderRadius:12, fontSize:14, border:`1px solid ${TOK.indigo}40`, display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}>
          <Ic.Loader2 size={16} style={{ animation:'spin 1s linear infinite' }}/> Kaydediliyor...
        </div>
      )}
      {status === 'submitted' && (
        <div style={{ width:'100%', background:TOK.amberSoft, color:TOK.amber, fontWeight:700, padding:'14px 0', borderRadius:12, fontSize:14, border:`1px solid ${TOK.amber}40`, display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}>
          <Ic.Info size={16}/> Gönderildi. Düzeltme bekleniyor...
        </div>
      )}
      {status === 'graded' && (
        <button onClick={onComplete} style={{ width:'100%', background:TOK.green, color:TOK.bg, fontWeight:700, padding:'14px 0', borderRadius:12, fontSize:14, border:'none', display:'flex', alignItems:'center', justifyContent:'center', gap:8, cursor:'pointer', boxShadow:`0 0 24px -8px ${TOK.green}60` }}>
          <Ic.CheckCircle2 size={16}/> Haritaya dön
        </button>
      )}
    </>
  );

  if (isMobile) {
    return (
      <>
        <div style={{ minHeight:'100vh', color:TOK.text, fontFamily:TOK.sans, background:TOK.bg, display:'flex', flexDirection:'column', paddingBottom:88 }}>
          <div style={{ padding:'10px 18px', borderBottom:`1px solid ${TOK.border}`, display:'flex', alignItems:'center', gap:10, position:'sticky', top:0, background:'rgba(10,10,15,0.95)', backdropFilter:'blur(12px)', zIndex:10, flexShrink:0 }}>
            <span style={{ cursor:'pointer' }} onClick={onBack}><Ic.Back size={18} color={TOK.textDim}/></span>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:TOK.mono, fontSize:9, color:TOK.amber, letterSpacing:1.8, fontWeight:700, textTransform:'uppercase' }}>{TR.workshop}</div>
              <div style={{ fontFamily:TOK.serif, fontSize:14, fontStyle:'italic', fontWeight:500, lineHeight:1.1, marginTop:1 }}>{node.title}</div>
            </div>
            <div style={{ padding:'3px 7px', background:TOK.amberSoft, color:TOK.amber, borderRadius:4, fontFamily:TOK.mono, fontSize:10, fontWeight:700, border:`1px solid ${TOK.amber}40` }}>{wordCount} / 80</div>
          </div>

          <div style={{ flex:1, padding:'18px 18px 24px' }}>
            <div style={{ padding:12, background:`linear-gradient(180deg,${TOK.amberSoft},${TOK.surface2})`, border:`1px solid ${TOK.amber}30`, borderRadius:10, marginBottom:14, display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:28, height:28, borderRadius:8, background:`linear-gradient(135deg,${TOK.amber},${TOK.coral})`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}><Ic.Wand size={13} color={TOK.bg}/></div>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:TOK.mono, fontSize:9, color:TOK.amber, letterSpacing:1.5, fontWeight:700, textTransform:'uppercase' }}>Koç önerisi</div>
                <div style={{ fontFamily:TOK.serif, fontSize:12.5, color:TOK.textSec, lineHeight:1.4, marginTop:2, fontStyle:'italic' }}>
                  {status === 'graded' && feedback ? `Not: ${feedback.grade}/100` : status === 'submitted' ? 'Düzeltme bekleniyor...' : 'Bağlaçları kullanarak geçişleri pürüzsüzleştir.'}
                </div>
              </div>
            </div>

            <div style={{ background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:12, padding:'16px 18px', marginBottom:12 }}>
              <div style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.amber, letterSpacing:2, textTransform:'uppercase', fontWeight:700, marginBottom:6 }}>§ {TR.workshop}</div>
              <p style={{ fontFamily:TOK.serif, fontSize:14, color:TOK.textSec, lineHeight:1.6, margin:0, whiteSpace:'pre-line' }}>{node.content?.concept}</p>
            </div>

            <div style={{ background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:12, padding:'14px 16px', minHeight:260 }}>
              <div style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.textMute, letterSpacing:1.5, textTransform:'uppercase', fontWeight:700, marginBottom:8 }}>{node.title}</div>
              <TurkishErrorDetector
                value={text}
                onChange={e => setText(e.target.value)}
                disabled={status !== 'idle'}
                placeholder="Metni buraya yaz (en az 50 karakter)..."
                style={{ width:'100%', background:'transparent', border:'none', outline:'none', resize:'none', fontFamily:TOK.serif, fontStyle:'italic', fontSize:14, lineHeight:1.6, color:TOK.text, minHeight:200, opacity: status !== 'idle' ? 0.65 : 1 }}
                db={db}
                user={user}
              />
            </div>
          </div>

          <div style={{ position:'fixed', bottom:0, width:'100%', padding:'12px 18px 22px', borderTop:`1px solid ${TOK.border}`, background:'rgba(10,10,15,0.97)', backdropFilter:'blur(12px)' }}>
            {ctaBar}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div style={{ height:'100vh', display:'grid', gridTemplateColumns:'1fr 360px', color:TOK.text, fontFamily:TOK.sans, background:TOK.bg }}>
        {/* Left — editor */}
        <div style={{ overflowY:'auto', padding:'36px 56px', display:'flex', flexDirection:'column' }} className="noscroll">
          <div onClick={onBack} style={{ display:'flex', alignItems:'center', gap:10, fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, letterSpacing:2, textTransform:'uppercase', marginBottom:16, cursor:'pointer' }}>
            <Ic.Back size={14}/> {TR.workshop}
          </div>
          <div style={{ fontFamily:TOK.mono, fontSize:10.5, color:TOK.amber, letterSpacing:2.4, textTransform:'uppercase', fontWeight:700, marginBottom:10 }}>§ {TR.workshop}</div>
          <h1 style={{ fontFamily:TOK.serif, fontSize:42, fontWeight:400, letterSpacing:-1.4, lineHeight:1, margin:0 }}>{node.title}</h1>
          <p style={{ fontFamily:TOK.serif, fontSize:16, color:TOK.textSec, marginTop:14, fontWeight:300, lineHeight:1.6 }}>{node.content?.concept}</p>

          {/* Stats bar */}
          <div style={{ marginTop:24, padding:16, background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:10, display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
            <div>
              <div style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.textMute, letterSpacing:1.5, textTransform:'uppercase', fontWeight:700 }}>Sözcük sayısı</div>
              <div style={{ fontFamily:TOK.serif, fontSize:22, fontWeight:500, marginTop:2 }}>{wordCount}<span style={{ color:TOK.textMute, fontSize:14 }}> / 80</span></div>
            </div>
            <div style={{ width:1, height:40, background:TOK.border }}/>
            <div>
              <div style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.textMute, letterSpacing:1.5, textTransform:'uppercase', fontWeight:700 }}>Durum</div>
              <div style={{ fontFamily:TOK.serif, fontSize:22, fontWeight:500, color: status === 'graded' ? TOK.green : status === 'submitted' ? TOK.amber : TOK.textSec, marginTop:2 }}>
                {status === 'graded' ? `${feedback?.grade}/100` : status === 'submitted' ? 'Gönderildi' : status === 'loading' ? 'Kaydediliyor' : '—'}
              </div>
            </div>
            {status === 'idle' && (
              <>
                <div style={{ flex:1 }}/>
                <div style={{ display:'flex', alignItems:'center', gap:5, padding:'5px 10px', background:TOK.surface3, borderRadius:6, fontFamily:TOK.mono, fontSize:10, color:TOK.textDim, fontWeight:600 }}>
                  <Ic.Activity size={10}/> Otomatik kayıt
                </div>
              </>
            )}
          </div>

          {/* Editor box */}
          <div style={{ marginTop:14, padding:28, background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:12, flex:1, minHeight:240 }}>
            <div style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, letterSpacing:1.5, textTransform:'uppercase', fontWeight:700, marginBottom:12 }}>{node.title}</div>
            {status !== 'idle' ? (
              <p style={{ fontFamily:TOK.serif, fontStyle:'italic', fontSize:17, lineHeight:1.65, color:TOK.textSec, whiteSpace:'pre-wrap', margin:0 }}>{text}</p>
            ) : (
              <TurkishErrorDetector
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Metni buraya yaz (en az 50 karakter)..."
                style={{ width:'100%', background:'transparent', border:'none', outline:'none', resize:'none', fontFamily:TOK.serif, fontStyle:'italic', fontSize:17, lineHeight:1.65, color:TOK.text, minHeight:200 }}
                db={db}
                user={user}
              />
            )}
          </div>

          {/* Toolbar + CTA */}
          <div style={{ marginTop:16, display:'flex', gap:8, alignItems:'center' }}>
            <div style={{ padding:'8px 12px', background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:7, fontFamily:TOK.mono, fontSize:11, color:TOK.textDim, fontWeight:600, display:'flex', alignItems:'center', gap:5, cursor:'pointer' }}>
              <Ic.Wand size={12}/> İpucu iste
            </div>
            <div style={{ flex:1 }}/>
            <div style={{ minWidth:200 }}>{ctaBar}</div>
          </div>
        </div>

        {/* Right — AI coach */}
        <div style={{ borderLeft:`1px solid ${TOK.border}`, background:TOK.surface, padding:'32px 22px', overflowY:'auto', display:'flex', flexDirection:'column' }} className="noscroll">
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
            <div style={{ width:30, height:30, borderRadius:9, background:`linear-gradient(135deg,${TOK.amber},${TOK.coral})`, display:'flex', alignItems:'center', justifyContent:'center' }}><Ic.Wand size={15} color={TOK.bg}/></div>
            <div>
              <div style={{ fontFamily:TOK.serif, fontSize:15, fontStyle:'italic', fontWeight:500 }}>Yazı koçu</div>
              <div style={{ fontFamily:TOK.mono, fontSize:9, color:TOK.textMute, letterSpacing:1.2, fontWeight:700, textTransform:'uppercase' }}>Canlı geri bildirim</div>
            </div>
          </div>

          {status === 'graded' && feedback ? (
            <>
              <div className="animFadeUp" style={{ padding:14, background:`linear-gradient(180deg,${TOK.greenSoft},${TOK.surface2})`, border:`1px solid ${TOK.green}30`, borderRadius:10, marginBottom:10 }}>
                <div style={{ display:'flex', alignItems:'center', gap:6, fontFamily:TOK.mono, fontSize:9.5, color:TOK.green, letterSpacing:1.5, fontWeight:700, textTransform:'uppercase' }}><Ic.Check size={12}/> Düzeltme tamamlandı</div>
                <div style={{ marginTop:10, background:TOK.bg, padding:'10px 14px', borderRadius:8 }}>
                  <span style={{ fontFamily:TOK.mono, fontSize:9, color:TOK.textMute, textTransform:'uppercase', letterSpacing:'0.18em', display:'block', marginBottom:4 }}>Alınan not</span>
                  <span style={{ fontFamily:TOK.serif, fontSize:36, fontWeight:500, color:TOK.green, letterSpacing:-1 }}>{feedback.grade}/100</span>
                </div>
              </div>
              {feedback.feedback && (
                <div style={{ padding:14, background:`linear-gradient(180deg,${TOK.indigoSoft},${TOK.surface2})`, border:`1px solid ${TOK.indigo}30`, borderRadius:10 }}>
                  <div style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.indigoHi, letterSpacing:1.5, fontWeight:700, textTransform:'uppercase', marginBottom:8 }}>Yorumlar</div>
                  <p style={{ fontFamily:TOK.serif, fontSize:13.5, color:TOK.textSec, fontWeight:300, lineHeight:1.55, margin:0 }}>{feedback.feedback}</p>
                </div>
              )}
            </>
          ) : status === 'submitted' ? (
            <div style={{ padding:14, background:`linear-gradient(180deg,${TOK.amberSoft},${TOK.surface2})`, border:`1px solid ${TOK.amber}30`, borderRadius:10 }}>
              <div style={{ display:'flex', alignItems:'center', gap:6, fontFamily:TOK.mono, fontSize:9.5, color:TOK.amber, letterSpacing:1.5, fontWeight:700, textTransform:'uppercase' }}><Ic.Clock size={12}/> Bekleniyor</div>
              <p style={{ fontFamily:TOK.serif, fontSize:13.5, color:TOK.textSec, fontWeight:300, lineHeight:1.55, margin:'8px 0 0' }}>Yazın öğretmene gönderildi. Düzeltme bekleniyor.</p>
            </div>
          ) : (
            <>
              <div className="animFadeUp" style={{ padding:14, background:`linear-gradient(180deg,${TOK.greenSoft},${TOK.surface2})`, border:`1px solid ${TOK.green}30`, borderRadius:10, marginBottom:10 }}>
                <div style={{ display:'flex', alignItems:'center', gap:6, fontFamily:TOK.mono, fontSize:9.5, color:TOK.green, letterSpacing:1.5, fontWeight:700, textTransform:'uppercase' }}><Ic.Check size={12}/> İyi gidiyor</div>
                <p style={{ fontFamily:TOK.serif, fontSize:13.5, color:TOK.textSec, fontWeight:300, lineHeight:1.55, margin:'6px 0 0' }}>Geçmiş zaman (<em style={{ color:TOK.green }}>pretérito indefinido</em>) kullanmayı unutma.</p>
              </div>
              <div className="animFadeUp" style={{ animationDelay:'0.15s', padding:14, background:`linear-gradient(180deg,${TOK.amberSoft},${TOK.surface2})`, border:`1px solid ${TOK.amber}30`, borderRadius:10, marginBottom:10 }}>
                <div style={{ display:'flex', alignItems:'center', gap:6, fontFamily:TOK.mono, fontSize:9.5, color:TOK.amber, letterSpacing:1.5, fontWeight:700, textTransform:'uppercase' }}><Ic.Sparkle size={12}/> Geliştir</div>
                <p style={{ fontFamily:TOK.serif, fontSize:13.5, color:TOK.textSec, fontWeight:300, lineHeight:1.55, margin:'6px 0 0' }}>Bağlaçları (<em style={{ color:TOK.amber }}>primero, después, luego</em>) kullanarak geçişleri pürüzsüzleştir.</p>
              </div>
              <div className="animFadeUp" style={{ animationDelay:'0.3s', padding:14, background:`linear-gradient(180deg,${TOK.coralSoft},${TOK.surface2})`, border:`1px solid ${TOK.coral}30`, borderRadius:10 }}>
                <div style={{ display:'flex', alignItems:'center', gap:6, fontFamily:TOK.mono, fontSize:9.5, color:TOK.coral, letterSpacing:1.5, fontWeight:700, textTransform:'uppercase' }}><Ic.Wand size={12}/> Öneri</div>
                <p style={{ fontFamily:TOK.serif, fontSize:13.5, color:TOK.textSec, fontWeight:300, lineHeight:1.55, margin:'6px 0 0' }}>Yazını kapatmadan önce kişisel bir yorum ekle.</p>
              </div>
            </>
          )}

          <div style={{ flex:1 }}/>
          <div style={{ marginTop:22, padding:14, background:TOK.surface3, borderRadius:10, border:`1px solid ${TOK.border}` }}>
            <div style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.textMute, letterSpacing:1.5, fontWeight:700, textTransform:'uppercase', marginBottom:10 }}>İlerleme</div>
            <ABar value={Math.min(100, (wordCount / 80) * 100)} color={TOK.amber} h={5} delay={400}/>
            <div style={{ marginTop:8, fontFamily:TOK.mono, fontSize:10, color:TOK.textDim, fontWeight:600 }}>{wordCount} / 80 sözcük</div>
          </div>
        </div>
      </div>
    </>
  );
};
