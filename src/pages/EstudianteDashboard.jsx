import React, { useState, useEffect, useRef } from 'react';
import {
  Globe, Star, Map as MapIcon, Lock, Trophy, LogOut, TrendingUp,
  MessageCircle, Send, CheckCircle, CheckCircle2, Circle, BookOpen, ArrowLeft, Unlock,
  Volume2, Zap, ChevronDown, Flame, PenTool, Languages, Save, Plus,
  Trash2, Wand2, Loader2, Library, Folder, FolderPlus, FileText, Copy, Edit3
} from 'lucide-react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { playSpeech } from '../utils/audio';

import logo from '../assets/logo.png';
import { TOK, TR } from '../tokens';
import { Ic, ABar, ProgressRing, BizceWordmark, PulseDot, useIsMobile } from '../components/BizceUI';
import { TurkishErrorDetector } from '../components/TurkishErrorDetector';
import UnitPresentation from '../components/UnitPresentation';
import { unitPresentationsA1 } from '../data/presentaciones/A1';
import { unitPresentationsA2 } from '../data/presentaciones/A2';
import { unitPresentationsB1 } from '../data/presentaciones/B1';
import { unitPresentationsB2 } from '../data/presentaciones/B2';
import { unitPresentationsC1 } from '../data/presentaciones/C1';
import { unitPresentationsC2 } from '../data/presentaciones/C2';

const firebaseConfig = typeof __firebase_config !== 'undefined' && __firebase_config ? JSON.parse(__firebase_config) : { apiKey: "mock", projectId: "mock" };
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

const SERIF = '"Fraunces", "Instrument Serif", Georgia, serif';
const MONO = '"JetBrains Mono", "Courier New", monospace';

// ==========================================
// 1. CUADRÍCULA DE NIVELES (Cálculo Autónomo)
// ==========================================
const LevelsGrid = ({ onSelectLevel, progress, allCurriculums, currentLevelId }) => {
  const completedNodes = progress?.completedNodes || [];

  const calcPercent = (lvlId) => {
    const cur = allCurriculums?.[lvlId];
    if (!cur) return 0;
    const tNodes = cur.units.flatMap(u => u.nodes.map(n => n.id));
    if (tNodes.length === 0) return 0;
    const comp = tNodes.filter(id => completedNodes.includes(id)).length;
    return Math.round((comp / tNodes.length) * 100);
  };

  const isLevelUnlocked = (levelId) => {
    if (levelId === 'A1') return true;
    const firstNodes = {
      'A2': 'a2_u1_n1',
      'B1': 'b1_u1_n1',
      'B2': 'b2_u1_n1',
      'C1': 'c1_u1_n1',
      'C2': 'c2_u1_n1'
    };
    return progress?.unlockedNodes?.includes(firstNodes[levelId]);
  };

  const levelDefs = [
    { id:'A1', name:'Hayatta kalma', es:'Supervivencia', color: TOK.green },
    { id:'A2', name:'Anlatıcı',      es:'Narrador',      color: TOK.indigo },
    { id:'B1', name:'Akıcılık',      es:'Fluidez',       color: TOK.violet },
    { id:'B2', name:'Bağımsız',      es:'Independiente', color: TOK.textMute },
    { id:'C1', name:'Ustalık',       es:'Maestría',      color: TOK.textMute },
    { id:'C2', name:'Anadil',        es:'Nativo',        color: TOK.coral },
  ];

  const levels = levelDefs.map(d => ({
    ...d,
    unlocked: isLevelUnlocked(d.id),
    p: calcPercent(d.id),
    current: d.id === currentLevelId,
  }));

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
      {levels.map((l, i) => {
        const col = l.unlocked ? l.color : TOK.textMute;
        return (
          <div
            key={l.id}
            onClick={() => l.unlocked && onSelectLevel(l.id)}
            className="hov animFadeUp relative flex flex-col justify-between min-h-[140px] md:min-h-[180px] lg:min-h-[220px] p-4 lg:p-5"
            style={{
              animationDelay: `${0.05 * i}s`,
              background: l.current
                ? `linear-gradient(180deg,${TOK.indigoSoft},${TOK.surface})`
                : TOK.surface,
              border:`1px solid ${l.current ? TOK.indigo + '50' : TOK.border}`,
              borderRadius:14,
              boxShadow: l.current ? `0 0 30px -5px ${TOK.indigo}40` : 'none',
              cursor: l.unlocked ? 'pointer' : 'default',
              opacity: l.unlocked ? 1 : 0.55,
            }}
          >
            {l.current && (
              <div style={{ position:'absolute', top:8, right:8, padding:'2px 7px', background:TOK.indigo, color:'#fff', borderRadius:4, fontFamily:TOK.mono, fontSize:9, fontWeight:700, letterSpacing:1 }}>ŞİMDİ</div>
            )}
            {!l.unlocked && (
              <div style={{ position:'absolute', top:10, right:10, color:TOK.textMute }}><Ic.Lock size={13}/></div>
            )}
            <div>
              <div className="text-[28px] md:text-[36px] lg:text-[44px]" style={{ fontFamily:TOK.serif, fontWeight:400, letterSpacing:-1.5, color:col, lineHeight:1 }}>{l.id}</div>
              <div className="text-sm md:text-base" style={{ fontFamily:TOK.serif, fontStyle:'italic', fontWeight:500, color:TOK.text, marginTop:6, letterSpacing:-0.4 }}>{l.name}</div>
              <div className="hidden md:block" style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.textMute, letterSpacing:1.5, textTransform:'uppercase', marginTop:4 }}>{l.es}</div>
            </div>
            <div>
              {l.unlocked && (
                <div style={{ marginBottom:8 }}>
                  <ABar value={l.p} color={col} h={4} delay={300 + i * 80}/>
                </div>
              )}
              <div style={{ display:'flex', justifyContent:'space-between', fontFamily:TOK.mono, fontSize:10, color:TOK.textDim, fontWeight:600 }}>
                <span>{allCurriculums?.[l.id] ? `${completedNodes.filter(n => allCurriculums[l.id].units.flatMap(u => u.nodes.map(x => x.id)).includes(n)).length}/${allCurriculums[l.id].units.flatMap(u => u.nodes).length}` : '–'}</span>
                <span style={{ color:col }}>{l.p}%</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ==========================================
// 2. MAPA DE UNIDADES
// ==========================================
const NODE_COLORS = { theory:TOK.indigo, reading:TOK.coral, quiz:TOK.violet, workshop:TOK.amber, exam:TOK.green };
const NODE_LABELS = { theory:TR.theory, reading:TR.reading, quiz:TR.practice, workshop:TR.workshop, exam:TR.exam };
const NODE_META   = { theory:{dk:8,px:5}, reading:{dk:12,px:10}, quiz:{dk:10,px:15}, workshop:{dk:20,px:25}, exam:{dk:15,px:50} };

function NodeIcon({ type, size=22 }) {
  const p = { size, color:'currentColor' };
  if (type === 'theory')   return <Ic.Book {...p}/>;
  if (type === 'reading')  return <Ic.BookOpen {...p}/>;
  if (type === 'quiz')     return <Ic.Zap {...p}/>;
  if (type === 'workshop') return <Ic.Pencil {...p}/>;
  if (type === 'exam')     return <Ic.Crown {...p}/>;
  return <Ic.Zap {...p}/>;
}

const MapTab = ({ progress, onSelectNode, curriculum }) => {
  // ── helpers (unchanged logic) ────────────────────────────────────────────
  const isDone    = (id) => progress?.completedNodes?.includes(id);
  const isUnlk    = (id) => progress?.unlockedNodes?.includes(id);
  const isLock    = (id) => !isUnlk(id);
  const isActive  = (id) => isUnlk(id) && !isDone(id);

  const unitPct = (unit) => {
    const ids = unit.nodes.map(n => n.id);
    if (!ids.length) return 0;
    return Math.round((ids.filter(isDone).length / ids.length) * 100);
  };

  // ── default selection: unit + node with next unlocked lesson ─────────────
  const firstActiveNode = curriculum?.units?.flatMap(u => u.nodes).find(n => isActive(n.id));
  const firstActiveUnit = firstActiveNode
    ? curriculum?.units?.find(u => u.nodes.some(n => n.id === firstActiveNode.id))
    : curriculum?.units?.[0];

  const [selectedUnit, setSelectedUnit] = useState(null);
  const [focusNode,    setFocusNode]    = useState(null);

  const svgContainerRef = useRef(null);
  const [svgW, setSvgW] = useState(600);
  useEffect(() => {
    const el = svgContainerRef.current;
    if (!el) return;
    const update = () => setSvgW(el.getBoundingClientRect().width);
    update();
    const obs = new ResizeObserver(update);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!curriculum) return;
    setSelectedUnit(prev => prev ?? firstActiveUnit ?? curriculum.units?.[0]);
    setFocusNode(prev => prev ?? firstActiveNode ?? null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curriculum]);

  const units    = curriculum?.units || [];
  const nodes    = selectedUnit?.nodes || [];
  const isMobile = useIsMobile();

  // ── snake path node geometry ──────────────────────────────────────────────
  const NODE_H   = 96;
  const pctL     = '22%';
  const pctR     = '78%';
  const nodeX    = (i) => i % 2 === 0 ? pctL : pctR;
  const svgX     = (i) => (i % 2 === 0 ? 0.22 : 0.78) * svgW;

  // ── right-rail content ────────────────────────────────────────────────────
  const rn = focusNode;
  const rnMeta = rn ? (NODE_META[rn.type] || { dk:8, px:5 }) : null;

  if (!curriculum) return null;

  // ── MOBILE ────────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div style={{ minHeight:'100vh', background:TOK.bg, color:TOK.text, fontFamily:TOK.sans, display:'flex', flexDirection:'column', position:'relative' }}>

        {/* Mobile header */}
        <div style={{ padding:'12px 18px 14px', borderBottom:`1px solid ${TOK.border}` }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:TOK.mono, fontSize:9, color:TOK.indigoHi, letterSpacing:1.8, textTransform:'uppercase', fontWeight:700 }}>
                {selectedUnit?.id || '–'} · {TR.unit}
              </div>
              <div style={{ fontFamily:TOK.serif, fontSize:18, fontStyle:'italic', fontWeight:500, lineHeight:1.1, marginTop:1, letterSpacing:-0.4 }}>
                {selectedUnit?.title || ''}
              </div>
            </div>
            <div style={{ padding:'3px 8px', background:TOK.indigoSoft, color:TOK.indigoHi, borderRadius:5, fontFamily:TOK.mono, fontSize:10, fontWeight:700, border:`1px solid ${TOK.indigo}40` }}>
              {nodes.filter(n => isDone(n.id)).length}/{nodes.length}
            </div>
          </div>
          {selectedUnit && (
            <div style={{ marginTop:10 }}>
              <ABar value={unitPct(selectedUnit)} color={TOK.indigo} h={4} delay={200}/>
            </div>
          )}
          {/* Unit tabs */}
          <div style={{ display:'flex', gap:6, marginTop:12, overflowX:'auto', paddingBottom:2 }} className="noscroll">
            {units.map(u => (
              <button key={u.id} onClick={() => { setSelectedUnit(u); setFocusNode(u.nodes.find(n => isActive(n.id)) || null); }} style={{ padding:'4px 10px', borderRadius:6, fontFamily:TOK.mono, fontSize:10, fontWeight:700, background: selectedUnit?.id === u.id ? TOK.indigo : TOK.surface3, color: selectedUnit?.id === u.id ? '#fff' : TOK.textMute, border:`1px solid ${selectedUnit?.id === u.id ? TOK.indigo : TOK.border}`, cursor:'pointer', flexShrink:0 }}>
                {u.id}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile snake path */}
        <div style={{ flex:1, overflowY:'auto', padding:'18px 12px 140px', position:'relative', background:`radial-gradient(ellipse 60% 30% at 50% 15%, ${TOK.indigoSoft} 0%, transparent 70%), ${TOK.bg}` }} className="noscroll">
          <svg ref={svgContainerRef} width="100%" height={nodes.length * NODE_H} style={{ position:'absolute', top:18, left:0, pointerEvents:'none' }}>
            {nodes.slice(0,-1).map((_, i) => {
              const y1 = i * NODE_H + 35;
              const y2 = (i+1) * NODE_H + 35;
              const solid = isDone(nodes[i].id) && !isLock(nodes[i+1].id);
              return <path key={i} d={`M ${svgX(i)} ${y1} Q ${svgW*0.5} ${(y1+y2)/2} ${svgX(i+1)} ${y2}`} stroke={solid ? TOK.indigo : TOK.border} strokeWidth="1.5" strokeDasharray={solid ? '0' : '4 4'} fill="none" opacity={solid ? 0.5 : 0.35}/>;
            })}
          </svg>
          {nodes.map((node, i) => {
            const done = isDone(node.id);
            const lock = isLock(node.id);
            const active = isActive(node.id);
            const C = NODE_COLORS[node.type] || TOK.indigo;
            const sz = node.type === 'exam' ? 72 : 62;
            return (
              <div key={node.id} style={{ position:'relative', height:NODE_H, animation:`fadeInUp 0.5s ${0.05+i*0.04}s backwards` }}>
                <button
                  onClick={() => { if (!lock) { setFocusNode(node); } }}
                  className="lesson-node"
                  style={{ position:'absolute', left:nodeX(i), top:0, transform:'translateX(-50%)', width:sz, height:sz, borderRadius:'50%', background: done ? `linear-gradient(135deg,${TOK.green},#2d8d4c)` : active ? `linear-gradient(135deg,${C},${TOK.violet})` : lock ? TOK.surface2 : C, border:`2px solid ${active ? TOK.indigoHi : lock ? TOK.border : C}40`, boxShadow: active ? `0 0 0 4px ${TOK.indigo}25,0 8px 30px -6px ${TOK.indigo}80` : done ? `0 4px 16px -6px ${TOK.green}80` : 'none', display:'flex', alignItems:'center', justifyContent:'center', color: lock ? TOK.textMute : '#fff', cursor: lock ? 'default' : 'pointer', border:'none' }}>
                  {done ? <Ic.Check size={sz*0.4} sw={2.5}/> : lock ? <Ic.Lock size={sz*0.3}/> : <NodeIcon type={node.type} size={sz*0.38}/>}
                </button>
                <div style={{ position:'absolute', left: i%2===0 ? `calc(${pctL} + 44px)` : 'auto', right: i%2===1 ? `calc(100% - ${pctR} + 44px)` : 'auto', top: sz/2-14, maxWidth:130 }}>
                  <div style={{ fontFamily:TOK.mono, fontSize:8.5, color: lock ? TOK.textMute : C, letterSpacing:1.5, textTransform:'uppercase', fontWeight:700 }}>{NODE_LABELS[node.type]}</div>
                  <div style={{ fontFamily:TOK.serif, fontSize:13, fontStyle:'italic', fontWeight:500, color: lock ? TOK.textMute : TOK.text, lineHeight:1.15, marginTop:1 }}>{node.title}</div>
                </div>
                {active && focusNode?.id !== node.id && (
                  <div className="animFadeIn" style={{ position:'absolute', left:nodeX(i), top:sz+4, transform:'translateX(-50%)', padding:'2px 7px', background:TOK.indigo, color:'#fff', borderRadius:4, fontFamily:TOK.mono, fontSize:9, fontWeight:700, letterSpacing:1, animationDelay:'0.5s', whiteSpace:'nowrap' }}>SIRADAKİ ↓</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile bottom CTA */}
        {focusNode && !isDone(focusNode.id) && !isLock(focusNode.id) && (
          <div style={{ position:'fixed', bottom:72, left:12, right:12, padding:12, background:'rgba(17,17,24,.95)', backdropFilter:'blur(20px)', border:`1px solid ${TOK.indigo}40`, borderRadius:16, display:'flex', alignItems:'center', gap:12, zIndex:40, boxShadow:`0 -10px 40px -10px ${TOK.indigo}30` }}>
            <div style={{ width:40, height:40, borderRadius:11, background:`linear-gradient(135deg,${NODE_COLORS[focusNode.type]||TOK.indigo},${TOK.violet})`, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', flexShrink:0 }}>
              <NodeIcon type={focusNode.type} size={18}/>
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:TOK.mono, fontSize:9, color:TOK.indigoHi, letterSpacing:1.5, fontWeight:700, textTransform:'uppercase' }}>Sıradaki</div>
              <div style={{ fontFamily:TOK.serif, fontSize:15, fontStyle:'italic', fontWeight:500, lineHeight:1.1, marginTop:1 }}>{focusNode.title}</div>
            </div>
            <button onClick={() => onSelectNode(focusNode)} className="btn-pri" style={{ padding:'8px 14px', background:TOK.indigo, color:'#fff', borderRadius:8, fontSize:12, fontWeight:700, display:'flex', alignItems:'center', gap:5, border:'none', cursor:'pointer' }}>
              {TR.start} <Ic.Arrow size={12}/>
            </button>
          </div>
        )}
      </div>
    );
  }

  // ── DESKTOP ───────────────────────────────────────────────────────────────
  return (
    <div style={{ height:'calc(100vh - 60px)', color:TOK.text, fontFamily:TOK.sans, display:'grid', gridTemplateColumns:'260px 1fr 320px', overflow:'hidden' }}>

      {/* Left rail — unit list */}
      <div style={{ borderRight:`1px solid ${TOK.border}`, background:TOK.surface, padding:'24px 18px', overflowY:'auto' }} className="noscroll">
        <div style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.textMute, letterSpacing:2, textTransform:'uppercase', padding:'0 8px', marginBottom:8 }}>
          {curriculum.level || ''} · {TR.unit}ler
        </div>
        {units.map((u, i) => {
          const isSel = selectedUnit?.id === u.id;
          const p = unitPct(u);
          const hasDone = u.nodes.some(n => isDone(n.id));
          return (
            <div key={u.id} className="hov" onClick={() => { setSelectedUnit(u); setFocusNode(u.nodes.find(n => isActive(n.id)) || null); }} style={{ padding:'10px 12px', borderRadius:8, marginBottom:2, background: isSel ? TOK.indigoSoft : 'transparent', border:`1px solid ${isSel ? TOK.indigo+'40' : 'transparent'}`, cursor:'pointer' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <div style={{ fontFamily:TOK.mono, fontSize:10.5, color: isSel ? TOK.indigoHi : TOK.textMute, fontWeight:700, width:28, flexShrink:0 }}>{u.id || `Ü${i+1}`}</div>
                <div style={{ flex:1, fontSize:12.5, fontWeight: isSel ? 700 : 500, color: hasDone || isSel ? TOK.text : TOK.textMute, lineHeight:1.3 }}>{u.title}</div>
                {p === 100 ? <Ic.Check size={12} color={TOK.green}/> : null}
              </div>
              {isSel && (
                <div style={{ marginTop:8, marginLeft:38 }}>
                  <ABar value={p} color={TOK.indigo} h={3} delay={200}/>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Center — snake path */}
      <div style={{ overflowY:'auto', padding:'28px 32px', background:`radial-gradient(ellipse 80% 40% at 50% 25%, ${TOK.indigoSoft} 0%, transparent 70%), ${TOK.bg}` }} className="noscroll">
        <div className="animFadeUp" style={{ marginBottom:22 }}>
          <div style={{ fontFamily:TOK.mono, fontSize:10.5, color:TOK.indigoHi, letterSpacing:2, textTransform:'uppercase', marginBottom:8 }}>
            {selectedUnit?.id || '–'} / {units.length}
          </div>
          <h1 style={{ fontFamily:TOK.serif, fontSize:38, fontWeight:400, letterSpacing:-1.2, margin:0, lineHeight:1 }}>
            <em style={{ color:TOK.indigoHi, fontFamily:TOK.italic }}>{selectedUnit?.title || ''}</em>
          </h1>
          {selectedUnit?.description && (
            <p style={{ fontFamily:TOK.serif, fontSize:14, color:TOK.textSec, marginTop:8, fontWeight:300, maxWidth:500 }}>{selectedUnit.description}</p>
          )}
          {selectedUnit && (
            <div style={{ marginTop:12, display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ flex:1, maxWidth:300 }}><ABar value={unitPct(selectedUnit)} color={TOK.indigo} h={5} delay={200}/></div>
              <div style={{ fontFamily:TOK.mono, fontSize:11, color:TOK.indigoHi, fontWeight:700 }}>
                {nodes.filter(n=>isDone(n.id)).length} / {nodes.length} {TR.lesson}
              </div>
            </div>
          )}
        </div>

        {/* Nodes */}
        <div style={{ position:'relative', paddingTop:12 }}>
          <svg ref={svgContainerRef} width="100%" height={nodes.length * NODE_H + 40} style={{ position:'absolute', top:0, left:0, pointerEvents:'none' }}>
            {nodes.slice(0,-1).map((_, i) => {
              const y1 = i * NODE_H + 44;
              const y2 = (i+1) * NODE_H + 44;
              const solid = isDone(nodes[i].id) && !isLock(nodes[i+1].id);
              return <path key={i} d={`M ${svgX(i)} ${y1} Q ${svgW*0.5} ${(y1+y2)/2} ${svgX(i+1)} ${y2}`} stroke={solid ? TOK.indigo : TOK.border} strokeWidth="1.5" strokeDasharray={solid ? '0' : '4 4'} fill="none" opacity={solid ? 0.6 : 0.4}/>;
            })}
          </svg>

          {nodes.map((node, i) => {
            const done   = isDone(node.id);
            const lock   = isLock(node.id);
            const active = isActive(node.id);
            const C      = NODE_COLORS[node.type] || TOK.indigo;
            const boss   = node.type === 'exam';
            const sz     = boss ? 88 : 76;
            const isFocus = focusNode?.id === node.id;

            return (
              <div key={node.id} style={{ position:'relative', height:NODE_H, animation:`fadeInUp 0.5s ${0.06+i*0.05}s backwards` }}>
                <button
                  onClick={() => { if (!lock) setFocusNode(node); }}
                  className="lesson-node"
                  style={{ position:'absolute', left:nodeX(i), top:0, transform:'translateX(-50%)', width:sz, height:sz, borderRadius:'50%', background: done ? `linear-gradient(135deg,${TOK.green},#2d8d4c)` : active ? `linear-gradient(135deg,${C},${TOK.violet})` : lock ? TOK.surface2 : C, border:`2px solid ${isFocus ? '#fff' : active ? TOK.indigoHi : lock ? TOK.border : C}40`, boxShadow: isFocus ? `0 0 0 3px ${TOK.indigoHi}60,0 12px 40px -8px ${TOK.indigo}80` : active ? `0 0 0 5px ${TOK.indigo}25,0 12px 40px -8px ${TOK.indigo}80` : done ? `0 6px 20px -8px ${TOK.green}80` : 'none', display:'flex', alignItems:'center', justifyContent:'center', color: lock ? TOK.textMute : '#fff', cursor: lock ? 'default' : 'pointer', outline:'none' }}>
                  {done ? <Ic.Check size={sz*0.38} sw={2.5}/> : lock ? <Ic.Lock size={sz*0.28}/> : <NodeIcon type={node.type} size={sz*0.36}/>}
                </button>

                {/* Label */}
                <div style={{ position:'absolute', left: i%2===0 ? `calc(${pctL} + 56px)` : 'auto', right: i%2===1 ? `calc(100% - ${pctR} + 56px)` : 'auto', top:22, maxWidth:200 }}>
                  <div style={{ fontFamily:TOK.mono, fontSize:9.5, color: lock ? TOK.textMute : C, letterSpacing:1.8, textTransform:'uppercase', fontWeight:700 }}>
                    {NODE_LABELS[node.type]}{boss && ' · Sınav'}
                  </div>
                  <div style={{ fontFamily:TOK.serif, fontSize:17, fontStyle:'italic', fontWeight:500, color: lock ? TOK.textMute : TOK.text, marginTop:2 }}>{node.title}</div>
                  {active && !isFocus && (
                    <div className="animFadeIn" style={{ animationDelay:'0.5s', marginTop:6, padding:'2px 8px', background:TOK.indigoSoft, color:TOK.indigoHi, fontFamily:TOK.mono, fontSize:9, fontWeight:700, letterSpacing:1.5, borderRadius:4, display:'inline-block', border:`1px solid ${TOK.indigo}50` }}>SIRADAKİ →</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right rail — lesson detail */}
      <div style={{ borderLeft:`1px solid ${TOK.border}`, background:TOK.surface, padding:'24px 22px', overflowY:'auto', display:'flex', flexDirection:'column', gap:16 }} className="noscroll">
        <div style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, letterSpacing:2, textTransform:'uppercase', marginBottom:6 }}>
          {rn ? 'Şimdi bu derste' : 'Bir ders seç'}
        </div>

        {rn ? (
          <div className="animScaleIn" style={{ padding:18, background:`linear-gradient(180deg,${TOK.indigoSoft},${TOK.surface2})`, border:`1px solid ${TOK.indigo}40`, borderRadius:12 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
              <div style={{ width:36, height:36, borderRadius:10, background:`linear-gradient(135deg,${NODE_COLORS[rn.type]||TOK.indigo},${TOK.violet})`, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', flexShrink:0 }}>
                <NodeIcon type={rn.type} size={17}/>
              </div>
              <div>
                <div style={{ fontFamily:TOK.mono, fontSize:9, color:TOK.indigoHi, letterSpacing:1.5, fontWeight:700, textTransform:'uppercase' }}>
                  {NODE_LABELS[rn.type]}
                </div>
                <div style={{ fontFamily:TOK.serif, fontSize:17, fontStyle:'italic', fontWeight:500, marginTop:2, color:TOK.text }}>{rn.title}</div>
              </div>
            </div>

            {rn.content?.concept && (
              <p style={{ fontFamily:TOK.serif, fontSize:13, color:TOK.textSec, lineHeight:1.55, fontWeight:300, margin:'0 0 14px' }}>
                {String(rn.content.concept).slice(0, 160)}{rn.content.concept.length > 160 ? '…' : ''}
              </p>
            )}

            <div style={{ display:'flex', gap:10, flexWrap:'wrap', fontFamily:TOK.mono, fontSize:10, color:TOK.textDim, fontWeight:600, marginBottom:14 }}>
              <span style={{ display:'flex', alignItems:'center', gap:4 }}><Ic.Clock size={11}/> {rnMeta?.dk} dk</span>
              <span style={{ display:'flex', alignItems:'center', gap:4 }}><Ic.Diamond size={11}/> +{rnMeta?.px} PX</span>
              {progress?.grades?.[rn.id] !== undefined && (
                <span style={{ display:'flex', alignItems:'center', gap:4, color:TOK.amber }}><Ic.Award size={11}/> {progress.grades[rn.id]}/100</span>
              )}
            </div>

            {isDone(rn.id) ? (
              <button onClick={() => onSelectNode(rn)} style={{ width:'100%', padding:'10px 0', textAlign:'center', background:TOK.surface4, color:TOK.textDim, borderRadius:9, fontSize:13, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', gap:6, border:`1px solid ${TOK.border}`, cursor:'pointer' }}>
                <Ic.RotateCcw size={13}/> Repetir
              </button>
            ) : isLock(rn.id) ? (
              <div style={{ width:'100%', padding:'10px 0', textAlign:'center', background:TOK.surface3, color:TOK.textMute, borderRadius:9, fontSize:13, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', gap:6 }}>
                <Ic.Lock size={13}/> Bloqueado
              </div>
            ) : (
              <button onClick={() => onSelectNode(rn)} className="btn-pri hov" style={{ width:'100%', padding:'11px 0', textAlign:'center', background:TOK.indigo, color:'#fff', borderRadius:9, fontSize:13, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', gap:6, boxShadow:`0 8px 24px -8px ${TOK.indigo}60`, border:'none', cursor:'pointer' }}>
                {TR.start} <Ic.Arrow size={13}/>
              </button>
            )}
          </div>
        ) : (
          <div style={{ padding:18, background:TOK.surface2, border:`1px solid ${TOK.border}`, borderRadius:12, textAlign:'center', color:TOK.textMute, fontFamily:TOK.serif, fontStyle:'italic', fontSize:14 }}>
            Selecciona una lección del mapa.
          </div>
        )}

        {/* Completed nodes in this unit */}
        {nodes.filter(n => isDone(n.id)).length > 0 && (
          <div style={{ marginTop:6 }}>
            <div style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>Tamamlananlar</div>
            {nodes.filter(n => isDone(n.id)).map((n, i, arr) => (
              <div key={n.id} onClick={() => setFocusNode(n)} style={{ padding:'9px 0', display:'flex', alignItems:'center', gap:10, borderBottom: i < arr.length-1 ? `1px solid ${TOK.border}50` : 'none', cursor:'pointer' }}>
                <div style={{ width:6, height:6, borderRadius:3, background:NODE_COLORS[n.type]||TOK.green, flexShrink:0 }}/>
                <div style={{ flex:1, fontFamily:TOK.serif, fontSize:13, fontStyle:'italic', color:TOK.textSec }}>{n.title}</div>
                <Ic.Check size={11} color={TOK.green}/>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// 3. PESTAÑA DE PROGRESO (Estadísticas Reales)
// ==========================================
const ProgressTab = ({ progress, allCurriculums }) => {
  const completedCount = progress?.completedNodes?.length || 0;
  const wordsLearned = completedCount * 12;

  const getAllExams = () => {
    let exams = [];
    if (!allCurriculums) return exams;
    Object.values(allCurriculums).forEach(curriculum => {
      curriculum.units.forEach(unit => {
        unit.nodes.forEach(node => {
          if ((node.type === 'exam' || node.type === 'workshop') && progress?.grades?.[node.id] !== undefined) {
            exams.push({ id: node.id, title: node.title, level: curriculum.level, grade: progress.grades[node.id], type: node.type });
          }
        });
      });
    });
    return exams.sort((a, b) => a.level.localeCompare(b.level) || a.title.localeCompare(b.title));
  };

  const examHistory = getAllExams();

  return (
    <div className="max-w-4xl mx-auto px-6 mt-8 animate-in fade-in pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="rounded-2xl p-8 text-white flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)', boxShadow: '0 8px 32px rgba(239,68,68,0.2)' }}>
          <Flame className="w-10 h-10 mb-3 fill-white opacity-90" />
          <p className="text-5xl font-black mb-1" style={{ fontFamily: SERIF }}>{progress?.streak || 1}</p>
          <p className="font-bold text-orange-100 text-xs uppercase tracking-widest" style={{ fontFamily: MONO }}>Racha de Días</p>
        </div>
        <div className="rounded-2xl p-8 text-white flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', boxShadow: '0 8px 32px rgba(99,102,241,0.2)' }}>
          <BookOpen className="w-10 h-10 mb-3 opacity-90" />
          <p className="text-5xl font-black mb-1" style={{ fontFamily: SERIF }}>{wordsLearned}</p>
          <p className="font-bold text-indigo-100 text-xs uppercase tracking-widest" style={{ fontFamily: MONO }}>Vocabulario Básico</p>
        </div>
        <div className="rounded-2xl p-8 text-white flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #10b981, #0d9488)', boxShadow: '0 8px 32px rgba(16,185,129,0.2)' }}>
          <Star className="w-10 h-10 mb-3 fill-white opacity-90" />
          <p className="text-5xl font-black mb-1" style={{ fontFamily: SERIF }}>{progress?.points || 0}</p>
          <p className="font-bold text-emerald-100 text-xs uppercase tracking-widest" style={{ fontFamily: MONO }}>Puntos de Experiencia</p>
        </div>
      </div>

      <div className="rounded-2xl p-8 md:p-10 border" style={{ background: '#111118', borderColor: '#272735' }}>
        <h3 className="font-black text-xl flex items-center gap-3 mb-8" style={{ color: '#eef0f6', fontFamily: SERIF }}>
          <Trophy className="w-6 h-6 text-[#fbbf24]"/> Historial de Evaluaciones
        </h3>

        {examHistory.length === 0 ? (
          <div className="text-center p-10 rounded-2xl border" style={{ background: '#0d0d14', borderColor: '#272735' }}>
            <p className="font-medium text-lg" style={{ color: '#54566a' }}>Aún no has completado ningún examen o taller.</p>
            <p className="text-sm mt-2" style={{ color: '#3a3a4e' }}>Termina una unidad para ver tus calificaciones aquí.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {examHistory.map((exam) => (
              <div key={exam.id} className="flex justify-between items-center p-6 rounded-2xl border transition-colors group" style={{ background: '#0d0d14', borderColor: '#272735' }}
                onMouseEnter={e => e.currentTarget.style.background = '#1d1d28'}
                onMouseLeave={e => e.currentTarget.style.background = '#0d0d14'}>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full" style={exam.type === 'workshop' ? { background: 'rgba(192,132,252,0.12)', color: '#c084fc' } : { background: 'rgba(251,191,36,0.1)', color: '#fbbf24' }}>
                      {exam.type === 'workshop' ? 'TALLER' : 'EXAMEN'}
                    </span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full" style={{ background: 'rgba(129,140,248,0.12)', color: '#818cf8' }}>{exam.level}</span>
                  </div>
                  <span className="font-bold text-lg transition-colors" style={{ color: '#eef0f6' }}>{exam.title}</span>
                </div>
                <div className="font-black text-2xl px-5 py-2.5 rounded-xl border" style={exam.grade >= 80 ? { background: 'rgba(52,211,153,0.1)', color: '#34d399', borderColor: 'rgba(52,211,153,0.2)' } : exam.grade >= 60 ? { background: 'rgba(251,191,36,0.1)', color: '#fbbf24', borderColor: 'rgba(251,191,36,0.2)' } : { background: 'rgba(248,113,113,0.1)', color: '#f87171', borderColor: 'rgba(248,113,113,0.2)' }}>
                  {exam.grade}<span className="text-sm opacity-50">/100</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// 4. PESTAÑA DE BIBLIOTECA (Notas y Diccionario)
// ==========================================
const LibraryTab = ({ user }) => {
  const [subTab, setSubTab] = useState('notas');

  const [notebookData, setNotebookData] = useState({ folders: [] });
  const [activeFolderId, setActiveFolderId] = useState(null);
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const [newFolderName, setNewFolderName] = useState('');
  const [currentNoteTitle, setCurrentNoteTitle] = useState('');
  const [currentNoteContent, setCurrentNoteContent] = useState('');

  const [dictWords, setDictWords] = useState([]);
  const [newEs, setNewEs] = useState('');
  const [newTr, setNewTr] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!user || !db) return;

    const unsubNotes = onSnapshot(doc(db, "users", user.uid, "notebook", "data"), (docSnap) => {
      if (docSnap.exists()) {
        setNotebookData(docSnap.data());
      } else {
        setNotebookData({ folders: [] });
      }
    });

    const qDict = query(collection(db, "users", user.uid, "dictionary"), orderBy("createdAt", "desc"));
    const unsubDict = onSnapshot(qDict, (snap) => {
      const words = [];
      snap.forEach(d => words.push({ id: d.id, ...d.data() }));
      setDictWords(words);
    });

    return () => { unsubNotes(); unsubDict(); };
  }, [user]);

  const saveNotebookData = async (newData) => {
    setIsSaving(true);
    try {
      await setDoc(doc(db, "users", user.uid, "notebook", "data"), newData, { merge: true });
    } catch(e) { console.error("Error guardando notas", e); }
    setIsSaving(false);
  };

  const handleCreateFolder = (e) => {
    e.preventDefault();
    if (!newFolderName.trim()) return;
    const newFolder = { id: Date.now().toString(), name: newFolderName.trim(), notes: [] };
    saveNotebookData({ folders: [...notebookData.folders, newFolder] });
    setNewFolderName('');
  };

  const handleDeleteFolder = (folderId) => {
    if(window.confirm("¿Seguro que quieres borrar esta carpeta y sus notas?")) {
      const newFolders = notebookData.folders.filter(f => f.id !== folderId);
      saveNotebookData({ folders: newFolders });
    }
  };

  const handleCreateNote = () => {
    const newNoteId = Date.now().toString();
    const newFolders = notebookData.folders.map(f => {
      if (f.id === activeFolderId) {
        return { ...f, notes: [{ id: newNoteId, title: 'Nueva Nota', content: '' }, ...f.notes] };
      }
      return f;
    });
    saveNotebookData({ folders: newFolders });
    setCurrentNoteTitle('Nueva Nota');
    setCurrentNoteContent('');
    setActiveNoteId(newNoteId);
  };

  const handleSaveCurrentNote = () => {
    const newFolders = notebookData.folders.map(f => {
      if (f.id === activeFolderId) {
        const updatedNotes = f.notes.map(n => n.id === activeNoteId ? { ...n, title: currentNoteTitle, content: currentNoteContent } : n);
        return { ...f, notes: updatedNotes };
      }
      return f;
    });
    saveNotebookData({ folders: newFolders });
    setActiveNoteId(null);
  };

  const handleDeleteNote = (folderId, noteId) => {
    if(window.confirm("¿Borrar esta nota?")) {
      const newFolders = notebookData.folders.map(f => {
        if (f.id === folderId) {
          return { ...f, notes: f.notes.filter(n => n.id !== noteId) };
        }
        return f;
      });
      saveNotebookData({ folders: newFolders });
    }
  };

  const copyToClipboard = (text) => { navigator.clipboard.writeText(text); };

  const playTrAudio = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'tr-TR';
      window.speechSynthesis.speak(u);
    }
  };

  const handleAutoTranslate = async (sourceLang) => {
    const queryText = sourceLang === 'es' ? newEs : newTr;
    if (!queryText.trim()) return;
    setIsSearching(true);
    const langPair = sourceLang === 'es' ? 'es|tr' : 'tr|es';
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(queryText)}&langpair=${langPair}`);
      const data = await response.json();
      if (data && data.responseData) {
        if (sourceLang === 'es') setNewTr(data.responseData.translatedText);
        else setNewEs(data.responseData.translatedText);
      }
    } catch (error) { console.error("Error en traducción:", error); }
    setIsSearching(false);
  };

  const handleAddWord = async (e) => {
    e.preventDefault();
    if (!newEs.trim() || !newTr.trim() || !db) return;
    await addDoc(collection(db, "users", user.uid, "dictionary"), { es: newEs, tr: newTr, createdAt: serverTimestamp() });
    setNewEs(''); setNewTr('');
  };

  const handleDeleteWord = async (id) => {
    if (!db) return;
    await deleteDoc(doc(db, "users", user.uid, "dictionary", id));
  };

  const activeFolder = notebookData.folders.find(f => f.id === activeFolderId);
  const totalNotes = notebookData.folders.reduce((acc, f) => acc + (f.notes?.length || 0), 0);

  if (!isMobile) return (
    <div style={{ height: 'calc(100vh - 60px)', color: TOK.text, fontFamily: TOK.sans, display: 'grid', gridTemplateColumns: '240px 1fr 320px' }}>

      {/* Sidebar */}
      <div style={{ borderRight: `1px solid ${TOK.border}`, background: TOK.surface, padding: '24px 16px', overflowY: 'auto' }} className="noscroll">
        <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.textMute, letterSpacing: 2, textTransform: 'uppercase', padding: '0 8px', marginBottom: 6 }}>Koleksiyonlar</div>
        {[
          { id: 'notas', label: 'Apuntes', count: notebookData.folders.length, Icon: Ic.Folder },
          { id: 'diccionario', label: 'Palabras', count: dictWords.length, Icon: Ic.Book },
        ].map(({ id, label, count, Icon }) => (
          <div key={id} onClick={() => { setSubTab(id); setActiveFolderId(null); setActiveNoteId(null); }} className="hov" style={{ padding: '9px 12px', borderRadius: 8, marginBottom: 2, background: subTab === id ? TOK.indigoSoft : 'transparent', border: `1px solid ${subTab === id ? TOK.indigo + '40' : 'transparent'}`, display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer' }}>
            <Icon size={14} color={subTab === id ? TOK.indigoHi : TOK.textDim} />
            <div style={{ flex: 1, fontSize: 12.5, fontWeight: subTab === id ? 700 : 500, color: subTab === id ? TOK.text : TOK.textSec }}>{label}</div>
            <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textMute, fontWeight: 700 }}>{count}</div>
          </div>
        ))}
        {subTab === 'notas' && (
          <div style={{ marginTop: 16 }}>
            <form onSubmit={handleCreateFolder} style={{ display: 'flex', gap: 6 }}>
              <input type="text" value={newFolderName} onChange={e => setNewFolderName(e.target.value)} placeholder="Yeni klasör..." style={{ flex: 1, padding: '7px 10px', background: TOK.bg, border: `1px solid ${TOK.border}`, borderRadius: 7, color: TOK.text, fontFamily: TOK.sans, fontSize: 12, outline: 'none' }} onFocus={e => e.target.style.borderColor = TOK.indigo} onBlur={e => e.target.style.borderColor = TOK.border} required />
              <button type="submit" style={{ padding: '7px 9px', background: TOK.indigoSoft, borderRadius: 7, color: TOK.indigoHi, cursor: 'pointer', border: `1px solid ${TOK.indigo}40` }}>
                <Ic.Plus size={13} />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Main */}
      <div style={{ overflowY: 'auto', padding: '24px 28px' }} className="noscroll">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div>
            <h1 style={{ fontFamily: TOK.serif, fontSize: 32, fontWeight: 400, letterSpacing: -1.2, lineHeight: 1, margin: 0 }}>
              <em style={{ color: TOK.indigoHi, fontFamily: TOK.italic }}>{subTab === 'notas' ? 'Apuntes' : 'Todas las'}</em>{subTab === 'notas' ? '' : ' palabras'}
            </h1>
            <div style={{ fontFamily: TOK.mono, fontSize: 11, color: TOK.textDim, letterSpacing: 1.2, marginTop: 6, fontWeight: 600 }}>
              {subTab === 'notas' ? `${notebookData.folders.length} klasör · ${totalNotes} not` : `${dictWords.length} öğe`}
            </div>
          </div>
        </div>

        {subTab === 'notas' && !activeFolderId && !activeNoteId && (
          <div>
            {notebookData.folders.length === 0 && <div style={{ textAlign: 'center', padding: '40px 0', color: TOK.textMute, fontFamily: TOK.mono, fontSize: 12 }}>Sin carpetas. Añade desde el panel izquierdo.</div>}
            {notebookData.folders.map((folder, i) => (
              <div key={folder.id} className="hov" onClick={() => setActiveFolderId(folder.id)} style={{ padding: '12px 14px', borderBottom: `1px solid ${TOK.border}50`, display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer', borderLeft: '2px solid transparent' }}>
                <Ic.Folder size={16} color={TOK.indigoHi} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: TOK.serif, fontSize: 16, fontWeight: 500 }}>{folder.name}</div>
                  <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textDim, marginTop: 2 }}>{folder.notes?.length || 0} not</div>
                </div>
                <button onClick={e => { e.stopPropagation(); handleDeleteFolder(folder.id); }} style={{ color: TOK.textMute, background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}><Ic.Trash size={13} /></button>
              </div>
            ))}
          </div>
        )}

        {subTab === 'notas' && activeFolderId && !activeNoteId && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <button onClick={() => setActiveFolderId(null)} style={{ padding: '6px 10px', background: TOK.surface3, border: `1px solid ${TOK.border}`, borderRadius: 7, color: TOK.textDim, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}><Ic.Back size={13} /></button>
              <div style={{ fontFamily: TOK.serif, fontSize: 18, fontStyle: 'italic', fontWeight: 500 }}>{activeFolder?.name}</div>
              <button onClick={handleCreateNote} style={{ marginLeft: 'auto', padding: '6px 11px', background: TOK.indigoSoft, border: `1px solid ${TOK.indigo}40`, borderRadius: 7, color: TOK.indigoHi, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700 }}><Ic.Plus size={12} /> Yeni Not</button>
            </div>
            {(!activeFolder?.notes || activeFolder.notes.length === 0) && <div style={{ textAlign: 'center', padding: '40px 0', color: TOK.textMute, fontFamily: TOK.mono, fontSize: 12 }}>Carpeta vacía.</div>}
            {activeFolder?.notes?.map((note) => (
              <div key={note.id} className="hov" onClick={() => { setActiveNoteId(note.id); setCurrentNoteTitle(note.title); setCurrentNoteContent(note.content); }} style={{ padding: '12px 14px', borderBottom: `1px solid ${TOK.border}50`, display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}>
                <Ic.FileText size={14} color={TOK.textDim} />
                <div style={{ flex: 1 }}><div style={{ fontFamily: TOK.serif, fontSize: 15, fontWeight: 500 }}>{note.title || 'Sin título'}</div></div>
                <button onClick={e => { e.stopPropagation(); handleDeleteNote(activeFolder.id, note.id); }} style={{ color: TOK.textMute, background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}><Ic.Trash size={13} /></button>
              </div>
            ))}
          </div>
        )}

        {subTab === 'notas' && activeNoteId && (
          <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 160px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <button onClick={handleSaveCurrentNote} style={{ padding: '6px 10px', background: TOK.surface3, border: `1px solid ${TOK.border}`, borderRadius: 7, color: TOK.textDim, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}><Ic.Back size={13} /></button>
              <input type="text" value={currentNoteTitle} onChange={e => setCurrentNoteTitle(e.target.value)} style={{ flex: 1, background: 'transparent', border: 'none', borderBottom: `2px solid ${TOK.border}`, padding: '4px 0', fontFamily: TOK.serif, fontSize: 22, fontWeight: 700, color: TOK.text, outline: 'none' }} onFocus={e => e.target.style.borderColor = TOK.indigo} onBlur={e => e.target.style.borderColor = TOK.border} placeholder="Título de la nota..." />
              <button onClick={handleSaveCurrentNote} style={{ padding: '6px 11px', background: TOK.indigo, border: 'none', borderRadius: 7, color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700 }}><Ic.Save size={12} /> Kaydet</button>
            </div>
            <TurkishErrorDetector
              value={currentNoteContent}
              onChange={e => setCurrentNoteContent(e.target.value)}
              placeholder="Contenido de la nota..."
              wrapperStyle={{ flex: 1, minHeight: 0, overflow: 'auto' }}
              style={{ width: '100%', background: TOK.bg, border: `1px solid ${TOK.border}`, borderRadius: 10, padding: '16px 18px', fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 16, color: TOK.textSec, resize: 'none', outline: 'none', lineHeight: 1.7, minHeight: 180 }}
              onFocus={e => e.target.style.borderColor = TOK.indigo}
              onBlur={e => e.target.style.borderColor = TOK.border}
              db={db}
              user={user}
            />
          </div>
        )}

        {subTab === 'diccionario' && (
          <div>
            <form onSubmit={handleAddWord} style={{ padding: '14px 16px', background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 10, marginBottom: 18 }}>
              <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.textMute, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>Sözcük ekle</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <input type="text" value={newEs} onChange={e => setNewEs(e.target.value)} placeholder="Español" style={{ flex: 1, padding: '8px 12px', background: TOK.bg, border: `1px solid ${TOK.border}`, borderRadius: 7, color: TOK.text, fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 14, outline: 'none' }} onFocus={e => e.target.style.borderColor = TOK.indigo} onBlur={e => e.target.style.borderColor = TOK.border} required />
                <button type="button" onClick={() => handleAutoTranslate('es')} disabled={!newEs.trim() || isSearching} style={{ padding: '8px 10px', background: TOK.indigoSoft, border: `1px solid ${TOK.indigo}40`, borderRadius: 7, color: TOK.indigoHi, cursor: 'pointer', opacity: (!newEs.trim() || isSearching) ? 0.5 : 1 }}>
                  {isSearching && newEs ? <Ic.Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} /> : <Ic.Wand size={14} />}
                </button>
                <input type="text" value={newTr} onChange={e => setNewTr(e.target.value)} placeholder="Türkçe" style={{ flex: 1, padding: '8px 12px', background: TOK.bg, border: `1px solid ${TOK.border}`, borderRadius: 7, color: TOK.text, fontFamily: TOK.mono, fontSize: 12, outline: 'none' }} onFocus={e => e.target.style.borderColor = TOK.indigo} onBlur={e => e.target.style.borderColor = TOK.border} required />
                <button type="button" onClick={() => handleAutoTranslate('tr')} disabled={!newTr.trim() || isSearching} style={{ padding: '8px 10px', background: TOK.indigoSoft, border: `1px solid ${TOK.indigo}40`, borderRadius: 7, color: TOK.indigoHi, cursor: 'pointer', opacity: (!newTr.trim() || isSearching) ? 0.5 : 1 }}>
                  {isSearching && newTr ? <Ic.Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} /> : <Ic.Wand size={14} />}
                </button>
                <button type="submit" style={{ padding: '8px 14px', background: TOK.indigo, border: 'none', borderRadius: 7, color: '#fff', cursor: 'pointer', fontWeight: 700 }}><Ic.Plus size={14} /></button>
              </div>
            </form>
            {dictWords.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: TOK.textMute, fontFamily: TOK.mono, fontSize: 12 }}>Sözcük yok.</div>
            ) : dictWords.map((word, i) => (
              <div key={word.id} className="hov" style={{ padding: '12px 14px', borderBottom: `1px solid ${TOK.border}50`, display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer', background: i === 0 ? TOK.indigoSoft : 'transparent', borderLeft: i === 0 ? `2px solid ${TOK.indigo}` : '2px solid transparent' }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: TOK.indigoHi, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 17, fontWeight: 500 }}>{word.es}</div>
                  <div style={{ fontFamily: TOK.mono, fontSize: 11, color: TOK.textDim, marginTop: 2 }}>{word.tr}</div>
                </div>
                <div style={{ display: 'flex', gap: 4 }}>
                  <button onClick={() => playSpeech(word.es)} style={{ color: TOK.textMute, background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}><Ic.Volume size={13} /></button>
                  <button onClick={() => copyToClipboard(word.es)} style={{ color: TOK.textMute, background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}><Ic.Copy size={13} /></button>
                  <button onClick={() => handleDeleteWord(word.id)} style={{ color: TOK.textMute, background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}><Ic.Trash size={13} /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail panel */}
      <div style={{ background: TOK.surface, padding: '28px 22px', overflowY: 'auto', borderLeft: `1px solid ${TOK.border}` }} className="noscroll">
        {subTab === 'notas' ? (
          <div>
            <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textMute, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Not istatistikleri</div>
            <div className="animScaleIn" style={{ padding: 16, background: `linear-gradient(180deg, ${TOK.indigoSoft}, ${TOK.surface2})`, border: `1px solid ${TOK.indigo}40`, borderRadius: 11, marginBottom: 14 }}>
              <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.indigoHi, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700 }}>{notebookData.folders.length} Carpetas</div>
              <div style={{ fontFamily: TOK.serif, fontSize: 32, fontWeight: 500, color: TOK.indigoHi, marginTop: 4, letterSpacing: -0.8 }}>{totalNotes}</div>
              <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textDim, marginTop: 2 }}>notas totales</div>
            </div>
            {isSaving && <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: TOK.textMute, fontFamily: TOK.mono, fontSize: 11 }}><Ic.Loader2 size={12} style={{ animation: 'spin 1s linear infinite' }} /> Guardando...</div>}
          </div>
        ) : (
          <div>
            <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textMute, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Sözcük istatistikleri</div>
            <div className="animScaleIn" style={{ padding: 16, background: `linear-gradient(180deg, ${TOK.indigoSoft}, ${TOK.surface2})`, border: `1px solid ${TOK.indigo}40`, borderRadius: 11, marginBottom: 16 }}>
              <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.indigoHi, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700 }}>Total palabras</div>
              <div style={{ fontFamily: TOK.serif, fontSize: 36, fontWeight: 500, color: TOK.indigoHi, marginTop: 4, letterSpacing: -1 }}>{dictWords.length}</div>
              <div style={{ marginTop: 10 }}><ABar value={Math.min(100, (dictWords.length / 50) * 100)} color={TOK.indigo} h={3} delay={300} /></div>
            </div>
            <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textMute, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Telaffuz</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div onClick={() => playSpeech(newEs)} style={{ padding: '8px 12px', background: TOK.surface2, border: `1px solid ${TOK.border}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 7, color: TOK.textDim, fontSize: 12, cursor: 'pointer' }}><Ic.Volume size={14} color={TOK.sky} /> İspanyolca</div>
              <div onClick={() => playTrAudio(newTr)} style={{ padding: '8px 12px', background: TOK.surface2, border: `1px solid ${TOK.border}`, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 7, color: TOK.textDim, fontSize: 12, cursor: 'pointer' }}><Ic.Volume size={14} color={TOK.amber} /> Türkçe</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div style={{ color: TOK.text, fontFamily: TOK.sans }}>
      {/* Mobile header */}
      <div style={{ padding: '12px 18px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: TOK.mono, fontSize: 9, color: TOK.textMute, letterSpacing: 1.8, textTransform: 'uppercase', fontWeight: 700 }}>Kitaplık</div>
          <h1 style={{ fontFamily: TOK.serif, fontSize: 26, fontWeight: 400, letterSpacing: -0.8, lineHeight: 1, margin: '2px 0 0' }}>{subTab === 'notas' ? 'Apuntes' : 'Palabras'}</h1>
        </div>
        <Ic.Search size={18} color={TOK.textDim} />
      </div>

      {/* Filter chips */}
      <div style={{ padding: '0 18px 12px', display: 'flex', gap: 6, overflowX: 'auto' }} className="noscroll">
        {[{ id: 'notas', label: 'Apuntes' }, { id: 'diccionario', label: 'Palabras' }].map(({ id, label }) => (
          <div key={id} onClick={() => { setSubTab(id); setActiveFolderId(null); setActiveNoteId(null); }} style={{ padding: '6px 11px', background: subTab === id ? TOK.indigoSoft : TOK.surface, border: `1px solid ${subTab === id ? TOK.indigo + '50' : TOK.border}`, borderRadius: 100, fontSize: 11.5, fontWeight: 600, color: subTab === id ? TOK.indigoHi : TOK.textSec, whiteSpace: 'nowrap', flexShrink: 0, cursor: 'pointer' }}>{label}</div>
        ))}
      </div>

      <div style={{ padding: '0 18px', paddingBottom: 100 }}>
        {/* Notas: new folder form */}
        {subTab === 'notas' && !activeFolderId && !activeNoteId && (
          <form onSubmit={handleCreateFolder} style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
            <input type="text" value={newFolderName} onChange={e => setNewFolderName(e.target.value)} placeholder="Yeni klasör adı..." style={{ flex: 1, padding: '8px 12px', background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 8, color: TOK.text, fontFamily: TOK.sans, fontSize: 12, outline: 'none' }} required />
            <button type="submit" style={{ padding: '8px 12px', background: TOK.indigo, border: 'none', borderRadius: 8, color: '#fff', cursor: 'pointer', fontWeight: 700 }}><Ic.Plus size={14} /></button>
          </form>
        )}

        {/* Notas: folder list */}
        {subTab === 'notas' && !activeFolderId && !activeNoteId && (
          <div>
            {notebookData.folders.length === 0 && <div style={{ textAlign: 'center', padding: '40px 0', color: TOK.textMute, fontFamily: TOK.mono, fontSize: 11 }}>Henüz klasör yok.</div>}
            {notebookData.folders.map((folder, i) => (
              <div key={folder.id} className="animFadeUp" style={{ animationDelay: `${i * 0.05}s`, padding: '12px 14px', background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 10, marginBottom: 7, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 6, height: 26, borderRadius: 3, background: TOK.indigo }} />
                <div style={{ flex: 1, minWidth: 0, cursor: 'pointer' }} onClick={() => setActiveFolderId(folder.id)}>
                  <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 15, fontWeight: 500 }}>{folder.name}</div>
                  <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textDim, marginTop: 1 }}>{folder.notes?.length || 0} not</div>
                </div>
                <button onClick={() => handleDeleteFolder(folder.id)} style={{ color: TOK.textMute, background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}><Ic.Trash size={14} /></button>
              </div>
            ))}
          </div>
        )}

        {/* Notas: note list */}
        {subTab === 'notas' && activeFolderId && !activeNoteId && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <button onClick={() => setActiveFolderId(null)} style={{ padding: '6px 10px', background: TOK.surface3, border: `1px solid ${TOK.border}`, borderRadius: 7, color: TOK.textDim, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><Ic.Back size={14} /></button>
              <span style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 16, fontWeight: 500 }}>{activeFolder?.name}</span>
              <button onClick={handleCreateNote} style={{ marginLeft: 'auto', padding: '6px 10px', background: TOK.indigoSoft, border: `1px solid ${TOK.indigo}40`, borderRadius: 7, color: TOK.indigoHi, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 12 }}><Ic.Plus size={12} /> Not</button>
            </div>
            {(!activeFolder?.notes || activeFolder.notes.length === 0) && <div style={{ textAlign: 'center', padding: '30px 0', color: TOK.textMute, fontFamily: TOK.mono, fontSize: 11 }}>Carpeta vacía.</div>}
            {activeFolder?.notes?.map((note, i) => (
              <div key={note.id} className="animFadeUp" style={{ animationDelay: `${i * 0.05}s`, padding: '12px 14px', background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 10, marginBottom: 7, display: 'flex', alignItems: 'center', gap: 10 }}>
                <Ic.FileText size={14} color={TOK.textDim} />
                <div style={{ flex: 1, minWidth: 0, cursor: 'pointer' }} onClick={() => { setActiveNoteId(note.id); setCurrentNoteTitle(note.title); setCurrentNoteContent(note.content); }}>
                  <div style={{ fontFamily: TOK.serif, fontSize: 14, fontWeight: 500 }}>{note.title || 'Sin título'}</div>
                </div>
                <button onClick={() => handleDeleteNote(activeFolder.id, note.id)} style={{ color: TOK.textMute, background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}><Ic.Trash size={14} /></button>
              </div>
            ))}
          </div>
        )}

        {/* Notas: note editor */}
        {subTab === 'notas' && activeNoteId && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <button onClick={handleSaveCurrentNote} style={{ padding: '6px 10px', background: TOK.surface3, border: `1px solid ${TOK.border}`, borderRadius: 7, color: TOK.textDim, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><Ic.Back size={14} /></button>
              <input type="text" value={currentNoteTitle} onChange={e => setCurrentNoteTitle(e.target.value)} style={{ flex: 1, background: 'transparent', border: 'none', borderBottom: `1px solid ${TOK.border}`, padding: '4px 0', fontFamily: TOK.serif, fontSize: 18, fontWeight: 700, color: TOK.text, outline: 'none' }} placeholder="Título..." />
              <button onClick={handleSaveCurrentNote} style={{ padding: '7px 10px', background: TOK.indigo, border: 'none', borderRadius: 8, color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><Ic.Save size={14} /></button>
            </div>
            <textarea value={currentNoteContent} onChange={e => setCurrentNoteContent(e.target.value)} placeholder="Contenido de la nota..." style={{ width: '100%', height: 300, background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 10, padding: '12px 14px', fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 15, color: TOK.textSec, resize: 'none', outline: 'none', lineHeight: 1.7 }} />
          </div>
        )}

        {/* Diccionario */}
        {subTab === 'diccionario' && (
          <div>
            <form onSubmit={handleAddWord} style={{ marginBottom: 14 }}>
              <div style={{ marginBottom: 8 }}>
                <div style={{ fontFamily: TOK.mono, fontSize: 9, color: TOK.textMute, letterSpacing: 1.5, fontWeight: 700, marginBottom: 3 }}>Español</div>
                <div style={{ display: 'flex', gap: 5 }}>
                  <input type="text" value={newEs} onChange={e => setNewEs(e.target.value)} placeholder="Ej: levantarse" style={{ flex: 1, padding: '8px 10px', background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 7, color: TOK.text, fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 13, outline: 'none' }} required />
                  <button type="button" onClick={() => handleAutoTranslate('es')} disabled={!newEs.trim() || isSearching} style={{ padding: '8px', background: TOK.indigoSoft, border: `1px solid ${TOK.indigo}40`, borderRadius: 7, color: TOK.indigoHi, cursor: 'pointer', flexShrink: 0 }}>
                    {isSearching && newEs ? <Ic.Loader2 size={12} style={{ animation: 'spin 1s linear infinite' }} /> : <Ic.Wand size={12} />}
                  </button>
                </div>
              </div>
              <div style={{ marginBottom: 8 }}>
                <div style={{ fontFamily: TOK.mono, fontSize: 9, color: TOK.textMute, letterSpacing: 1.5, fontWeight: 700, marginBottom: 3 }}>Türkçe</div>
                <div style={{ display: 'flex', gap: 5 }}>
                  <input type="text" value={newTr} onChange={e => setNewTr(e.target.value)} placeholder="Ör: kalkmak" style={{ flex: 1, padding: '8px 10px', background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 7, color: TOK.text, fontFamily: TOK.mono, fontSize: 12, outline: 'none' }} required />
                  <button type="button" onClick={() => handleAutoTranslate('tr')} disabled={!newTr.trim() || isSearching} style={{ padding: '8px', background: TOK.indigoSoft, border: `1px solid ${TOK.indigo}40`, borderRadius: 7, color: TOK.indigoHi, cursor: 'pointer', flexShrink: 0 }}>
                    {isSearching && newTr ? <Ic.Loader2 size={12} style={{ animation: 'spin 1s linear infinite' }} /> : <Ic.Wand size={12} />}
                  </button>
                </div>
              </div>
              <button type="submit" style={{ width: '100%', padding: '10px', background: `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})`, border: 'none', borderRadius: 8, color: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}><Ic.Save size={14} /> Kaydet</button>
            </form>
            {dictWords.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '30px 0', color: TOK.textMute, fontFamily: TOK.mono, fontSize: 11 }}>Sözcük listesi boş.</div>
            ) : dictWords.map((word, i) => (
              <div key={word.id} className="animFadeUp" style={{ animationDelay: `${i * 0.05}s`, padding: '12px 14px', background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 10, marginBottom: 7, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 6, height: 26, borderRadius: 3, background: TOK.indigoHi }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 15, fontWeight: 500 }}>{word.es}</div>
                  <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textDim, marginTop: 1 }}>{word.tr}</div>
                </div>
                <div style={{ display: 'flex', gap: 2 }}>
                  <button onClick={() => playSpeech(word.es)} style={{ color: TOK.textMute, background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}><Ic.Volume size={13} /></button>
                  <button onClick={() => copyToClipboard(word.es)} style={{ color: TOK.textMute, background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}><Ic.Copy size={13} /></button>
                  <button onClick={() => handleDeleteWord(word.id)} style={{ color: TOK.textMute, background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}><Ic.Trash size={13} /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// 5. PESTAÑA DE CHAT (El Tutor)
// ==========================================
const ChatTab = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const endRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!user || !db) return;
    const q = query(collection(db, "chats", user.uid, "messages"), orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      const msgs = [];
      snap.forEach(doc => msgs.push({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    });
    return () => unsub();
  }, [user]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!text.trim() || !db) return;
    const msgText = text;
    setText('');
    try {
      await addDoc(collection(db, "chats", user.uid, "messages"), { text: msgText, sender: 'student', timestamp: serverTimestamp() });
    } catch(err) { console.error(err); }
  };

  if (!isMobile) return (
    <div style={{ height: 'calc(100vh - 60px)', display: 'grid', gridTemplateColumns: '280px 1fr 280px', color: TOK.text, fontFamily: TOK.sans }}>
      {/* Left: contacts */}
      <div style={{ borderRight: `1px solid ${TOK.border}`, background: TOK.surface, padding: '22px 16px', overflowY: 'auto' }} className="noscroll">
        <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.textMute, letterSpacing: 2, textTransform: 'uppercase', padding: '0 8px', marginBottom: 8 }}>Sohbetler</div>
        <div style={{ padding: '10px 12px', borderRadius: 9, marginBottom: 4, background: TOK.indigoSoft, border: `1px solid ${TOK.indigo}40`, display: 'flex', gap: 10 }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 16, fontWeight: 600, color: '#fff' }}>T</div>
            <div style={{ position: 'absolute', bottom: -1, right: -1, width: 10, height: 10, borderRadius: 5, background: TOK.green, border: `2px solid ${TOK.surface}` }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: TOK.serif, fontSize: 13.5, fontStyle: 'italic', fontWeight: 600 }}>Tutor</span>
              <span style={{ fontFamily: TOK.mono, fontSize: 9, color: TOK.textMute, fontWeight: 600 }}>şimdi</span>
            </div>
            <div style={{ fontSize: 11.5, color: TOK.textDim, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Chat con el tutor</div>
          </div>
        </div>
      </div>

      {/* Center: chat */}
      <div style={{ display: 'flex', flexDirection: 'column', background: TOK.bg }}>
        <div style={{ padding: '14px 24px', borderBottom: `1px solid ${TOK.border}`, display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <div style={{ width: 38, height: 38, borderRadius: 11, background: `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 18, fontWeight: 600, color: '#fff' }}>T</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ fontFamily: TOK.serif, fontSize: 17, fontStyle: 'italic', fontWeight: 600 }}>Tutor de Español</span>
              <PulseDot color={TOK.green} size={6} />
            </div>
            <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textDim, letterSpacing: 1, fontWeight: 600, textTransform: 'uppercase' }}>Çevrimiçi · Tutoría</div>
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 12 }} className="noscroll">
          {messages.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ fontFamily: TOK.serif, fontSize: 18, fontStyle: 'italic', color: TOK.textSec }}>¡Bienvenida al Chat de Tutoría!</div>
              <div style={{ fontFamily: TOK.mono, fontSize: 11, color: TOK.textMute, marginTop: 8 }}>Dilbilgisi sorularını buraya yaz.</div>
            </div>
          )}
          {messages.map(m => (
            <div key={m.id} className="animFadeUp" style={{ alignSelf: m.sender === 'student' ? 'flex-end' : 'flex-start', maxWidth: '70%' }}>
              <div style={{ padding: '12px 16px', borderRadius: m.sender === 'student' ? '14px 14px 4px 14px' : '14px 14px 14px 4px', fontFamily: TOK.serif, fontSize: 15, lineHeight: 1.5, ...(m.sender === 'student' ? { background: `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})`, color: '#fff' } : { background: TOK.surface, border: `1px solid ${TOK.border}`, color: TOK.text }) }}>
                {m.text}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <div style={{ padding: '14px 24px 18px', borderTop: `1px solid ${TOK.border}`, flexShrink: 0 }}>
          <form onSubmit={handleSend} style={{ display: 'flex', gap: 8 }}>
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Escribe en español…" style={{ flex: 1, padding: '12px 14px', background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 10, color: TOK.text, fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 14, outline: 'none' }} onFocus={e => e.target.style.borderColor = TOK.indigo} onBlur={e => e.target.style.borderColor = TOK.border} />
            <button type="submit" disabled={!text.trim()} style={{ padding: '10px 14px', background: TOK.indigo, border: 'none', borderRadius: 10, color: '#fff', cursor: 'pointer', opacity: !text.trim() ? 0.5 : 1 }}><Ic.Send size={16} /></button>
          </form>
        </div>
      </div>

      {/* Right: session info */}
      <div style={{ borderLeft: `1px solid ${TOK.border}`, background: TOK.surface, padding: '24px 20px', overflowY: 'auto' }} className="noscroll">
        <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textMute, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>Bu seans</div>
        <div style={{ padding: 14, background: `linear-gradient(180deg, ${TOK.indigoSoft}, ${TOK.surface2})`, border: `1px solid ${TOK.indigo}30`, borderRadius: 11 }}>
          <div style={{ fontFamily: TOK.serif, fontSize: 16, fontStyle: 'italic', fontWeight: 600 }}>Tutoría</div>
          <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textDim, marginTop: 4, fontWeight: 600 }}>Mesaj: {messages.length}</div>
          <div style={{ marginTop: 10 }}><ABar value={Math.min(100, messages.length * 10)} color={TOK.indigo} h={4} /></div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ color: TOK.text, fontFamily: TOK.sans, display: 'flex', flexDirection: 'column', height: 'calc(100vh - 60px)' }}>
      <div style={{ padding: '10px 16px 12px', borderBottom: `1px solid ${TOK.border}`, display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <div style={{ position: 'relative' }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 14, fontWeight: 600, color: '#fff' }}>T</div>
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 9, height: 9, borderRadius: 5, background: TOK.green, border: `2px solid ${TOK.bg}` }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: TOK.serif, fontSize: 15, fontStyle: 'italic', fontWeight: 600 }}>Tutor de Español</div>
          <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.green, letterSpacing: 1.2, fontWeight: 600 }}>● Çevrimiçi</div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 10 }} className="noscroll">
        {messages.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 16, color: TOK.textSec }}>¡Bienvenida!</div>
            <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textMute, marginTop: 6 }}>Sorularını yaz.</div>
          </div>
        )}
        {messages.map(m => (
          <div key={m.id} className="animFadeUp" style={{ alignSelf: m.sender === 'student' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
            <div style={{ padding: '10px 13px', borderRadius: m.sender === 'student' ? '13px 13px 4px 13px' : '13px 13px 13px 4px', fontFamily: TOK.serif, fontSize: 13.5, lineHeight: 1.45, ...(m.sender === 'student' ? { background: `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})`, color: '#fff' } : { background: TOK.surface, border: `1px solid ${TOK.border}`, color: TOK.text }) }}>
              {m.text}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div style={{ padding: '10px 14px 22px', borderTop: `1px solid ${TOK.border}`, flexShrink: 0 }}>
        <form onSubmit={handleSend} style={{ display: 'flex', gap: 6 }}>
          <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Mesaj…" style={{ flex: 1, padding: '10px 12px', background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 10, color: TOK.text, fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 13, outline: 'none' }} onFocus={e => e.target.style.borderColor = TOK.indigo} onBlur={e => e.target.style.borderColor = TOK.border} />
          <button type="submit" disabled={!text.trim()} style={{ padding: '10px 12px', background: TOK.indigo, border: 'none', borderRadius: 10, color: '#fff', cursor: 'pointer', opacity: !text.trim() ? 0.5 : 1 }}><Ic.Send size={14} /></button>
        </form>
      </div>
    </div>
  );
};

// ==========================================
// 6. CONTROLADOR PRINCIPAL DEL DASHBOARD
// ==========================================
export const StudentDashboard = ({ progress, onSelectNode, onNavigate, user, logout, allCurriculums, selectedLevel, setSelectedLevel, scrollPos }) => {
  const [activeTab,       setActiveTab]       = useState('learn');
  const [pendingNode,     setPendingNode]      = useState(null);
  const [presentationCtx, setPresentationCtx] = useState(null);

  useEffect(() => {
    if (!user || !progress || !db) return;
    const today = new Date().toISOString().split('T')[0];
    if (progress.lastActive !== today) {
      let newStreak = progress.streak || 1;
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

      if (progress.lastActive === yesterday) {
        newStreak += 1;
      } else if (progress.lastActive) {
        newStreak = 1;
      }

      setDoc(doc(db, "users", user.uid), {
        progress: { ...progress, lastActive: today, streak: newStreak }
      }, { merge: true }).catch(err => console.error(err));
    }
  }, [user, progress]);

  useEffect(() => {
    if (activeTab === 'learn' && selectedLevel) {
      const timer = setTimeout(() => { window.scrollTo({ top: scrollPos, behavior: 'instant' }); }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeTab, selectedLevel, scrollPos]);

  // ── Derived display data ──────────────────────────────────────────────────
  const levelOrder = ['A1','A2','B1','B2','C1','C2'];
  const firstNodes = { A2:'a2_u1_n1', B1:'b1_u1_n1', B2:'b2_u1_n1', C1:'c1_u1_n1', C2:'c2_u1_n1' };
  const isUnlocked = (id) => id === 'A1' || progress?.unlockedNodes?.includes(firstNodes[id]);
  const getPct = (id) => {
    const cur = allCurriculums?.[id];
    if (!cur) return 0;
    const all = cur.units.flatMap(u => u.nodes.map(n => n.id));
    if (!all.length) return 0;
    return Math.round((progress?.completedNodes?.filter(n => all.includes(n)).length / all.length) * 100);
  };
  const currentLevelId = levelOrder.find(id => isUnlocked(id) && getPct(id) > 0 && getPct(id) < 100)
    || levelOrder.find(id => isUnlocked(id));

  const userName = user?.email?.split('@')[0] || 'María';
  const userInitial = userName[0].toUpperCase();
  const streak = progress?.streak || 1;
  const points = progress?.points || 0;

  // weekly bars — deterministic heights, last `streak` days active
  const barHeights = [18, 24, 12, 28, 32, 20, 16];
  const weekBars = barHeights.map((h, i) => ({
    val: (6 - i) < streak ? h : 0,
    isToday: i === 6,
  }));
  const dayLabels = ['P','S','Ç','P','C','C','P'];
  const todayIdx = (new Date().getDay() + 6) % 7;
  const weekLabels = Array.from({length:7}, (_, i) => dayLabels[(todayIdx - 6 + i + 7) % 7]);

  // daily goal ring — rough proxy from recent activity
  const ringVal = Math.min(100, Math.max(10, streak * 14));

  // tab config
  const tabs = [
    { id:'learn',    Icon:Ic.Map,     label:TR.learn },
    { id:'progress', Icon:Ic.Trend,   label:TR.progress },
    { id:'library',  Icon:Ic.Library, label:TR.library },
    { id:'chat',     Icon:Ic.Chat,    label:TR.tutor },
  ];

  // greeting
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? TR.goodMorning : 'İyi günler';
  const dateStr = now.toLocaleDateString('tr-TR', { weekday:'long', day:'numeric', month:'long' });
  const currentLevelPct = currentLevelId ? getPct(currentLevelId) : 0;

  // ── Presentation logic ────────────────────────────────────────────────────
  const LEVEL_PRESENTATIONS = {
    A1: unitPresentationsA1, A2: unitPresentationsA2,
    B1: unitPresentationsB1, B2: unitPresentationsB2,
    C1: unitPresentationsC1, C2: unitPresentationsC2,
  };
  const LEVEL_COLORS = {
    A1: TOK.green,    A2: TOK.indigo,    B1: TOK.violet,
    B2: TOK.textMute, C1: TOK.textMute,  C2: TOK.coral,
  };

  const handleNodeSelect = (node) => {
    const curriculum = allCurriculums?.[selectedLevel];
    if (!curriculum) { onSelectNode(node); return; }

    const unit = curriculum.units.find(u => u.nodes.some(n => n.id === node.id));
    if (!unit || unit.nodes[0]?.id !== node.id) { onSelectNode(node); return; }

    const hasCompleted = unit.nodes.some(n => progress?.completedNodes?.includes(n.id));
    if (hasCompleted) { onSelectNode(node); return; }

    const presentation = LEVEL_PRESENTATIONS[selectedLevel]?.[unit.id];
    if (!presentation) { onSelectNode(node); return; }

    setPendingNode(node);
    setPresentationCtx({ presentation, unit, levelId: selectedLevel });
  };

  return (
    <>
      <div style={{ minHeight:'100vh', background:TOK.bg, color:TOK.text, fontFamily:TOK.sans, overflowX:'hidden' }}>

        {/* ── Top bar ──────────────────────────────────────────────────────── */}
        <div className="px-3 md:px-7 gap-3 md:gap-6" style={{ height:60, borderBottom:`1px solid ${TOK.border}`, background:'rgba(17,17,24,0.85)', backdropFilter:'blur(12px)', display:'flex', alignItems:'center', position:'sticky', top:0, zIndex:40, flexShrink:0 }}>

          {/* Logo / back */}
          {activeTab === 'learn' && selectedLevel ? (
            <button onClick={() => setSelectedLevel(null)} style={{ display:'flex', alignItems:'center', gap:8, background:TOK.surface3, border:`1px solid ${TOK.border}`, borderRadius:8, padding:'6px 11px', color:TOK.textDim, cursor:'pointer' }}>
              <Ic.Back size={15}/> <span style={{ fontFamily:TOK.mono, fontSize:11, fontWeight:700 }}>{TR.back}</span>
            </button>
          ) : (
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <img src={logo} alt="bizce" style={{ width:26, height:26, objectFit:'contain' }}/>
              <BizceWordmark size={16}/>
            </div>
          )}

          {/* Nav tabs — hidden when in map view */}
          {!(activeTab === 'learn' && selectedLevel) && (
            <div className="hidden md:flex gap-1 ml-2">
              {tabs.map(t => (
                <button key={t.id} onClick={() => { setActiveTab(t.id); if (t.id !== 'learn') setSelectedLevel(null); }} style={{ padding:'7px 14px', borderRadius:8, fontSize:13, fontWeight: activeTab === t.id ? 700 : 500, color: activeTab === t.id ? TOK.text : TOK.textDim, background: activeTab === t.id ? TOK.surface3 : 'transparent', border: activeTab === t.id ? `1px solid ${TOK.border}` : '1px solid transparent', cursor:'pointer' }}>
                  {t.label}
                </button>
              ))}
            </div>
          )}

          {activeTab === 'learn' && selectedLevel && (
            <div>
              <div style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.indigoHi, letterSpacing:1.8, textTransform:'uppercase', fontWeight:700 }}>{selectedLevel} · {allCurriculums?.[selectedLevel]?.title || ''}</div>
            </div>
          )}

          <div style={{ flex:1 }}/>

          {/* Stats pills */}
          <div className="flex items-center gap-1 md:gap-2">
            <div className="flex items-center gap-1" style={{ padding:'5px 9px', background:TOK.amberSoft, border:`1px solid ${TOK.amber}30`, borderRadius:7, color:TOK.amber, fontSize:12, fontWeight:700 }}>
              <Ic.Flame size={13}/> <span>{streak}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1" style={{ padding:'5px 9px', background:TOK.indigoSoft, border:`1px solid ${TOK.indigo}30`, borderRadius:7, color:TOK.indigoHi, fontSize:12, fontWeight:700 }}>
              <Ic.Diamond size={13}/> <span>{points}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1" style={{ padding:'5px 9px', background:TOK.coralSoft, border:`1px solid ${TOK.coral}30`, borderRadius:7, color:TOK.coral, fontSize:12, fontWeight:700 }}>
              <Ic.Heart size={13}/> <span>5</span>
            </div>
            {/* Avatar + logout */}
            <button onClick={logout} title="Çıkış yap" style={{ width:32, height:32, borderRadius:8, background:`linear-gradient(135deg,${TOK.coral},${TOK.indigo})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:700, color:'#fff', border:'none', cursor:'pointer', marginLeft:4 }}>
              {userInitial}
            </button>
          </div>
        </div>

        {/* ── Content ──────────────────────────────────────────────────────── */}
        <div className="pb-24">

          {/* LEARN — Levels home */}
          {activeTab === 'learn' && !selectedLevel && (
            <div className="max-w-[1100px] mx-auto px-4 md:px-10 pt-5 md:pt-8">

              {/* Hero row */}
              <div className="animFadeUp flex flex-col md:flex-row md:items-end md:justify-between mb-5 md:mb-7">
                <div>
                  <div className="text-[9px] md:text-[10.5px] mb-2" style={{ fontFamily:TOK.mono, color:TOK.indigoHi, letterSpacing:2.2, textTransform:'uppercase' }}>{greeting} · {dateStr}</div>
                  <h1 className="text-3xl md:text-5xl lg:text-[52px]" style={{ fontFamily:TOK.serif, fontWeight:400, letterSpacing:-1.8, lineHeight:1, margin:0 }}>
                    Hoş geldin, <em style={{ color:TOK.indigoHi, fontFamily:TOK.italic }}>{userName}</em>.
                  </h1>
                  <p className="text-sm md:text-base mt-3 md:mt-4 max-w-[560px]" style={{ fontFamily:TOK.serif, color:TOK.textSec, fontWeight:300 }}>
                    {currentLevelId
                      ? `${currentLevelId} seviyesinin %${currentLevelPct}'indesin. Bugün birkaç derse ne dersin?`
                      : 'Öğrenmeye başlamak için bir seviye seç.'}
                  </p>
                </div>
                {currentLevelId && (
                  <button onClick={() => setSelectedLevel(currentLevelId)} className="btn-pri hov mt-4 md:mt-0" style={{ padding:'13px 22px', background:TOK.indigo, color:'#fff', borderRadius:10, fontSize:14, fontWeight:700, display:'flex', alignItems:'center', gap:8, cursor:'pointer', boxShadow:`0 8px 24px -8px ${TOK.indigo}80`, border:'none', flexShrink:0, alignSelf:'flex-end' }}>
                    Derse devam et <Ic.Arrow size={14}/>
                  </button>
                )}
              </div>

              {/* Levels grid */}
              <LevelsGrid
                onSelectLevel={setSelectedLevel}
                progress={progress}
                allCurriculums={allCurriculums}
                currentLevelId={currentLevelId}
              />

              {/* Stats row */}
              <div className="mt-5 md:mt-6 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-3 md:gap-4 pb-6 md:pb-8">

                {/* Weekly bars */}
                <div className="animFadeUp" style={{ animationDelay:'0.5s', padding:22, background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:14 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
                    <div>
                      <div style={{ fontFamily:TOK.serif, fontSize:18, fontStyle:'italic', fontWeight:500 }}>Bu hafta</div>
                      <div style={{ fontSize:11, color:TOK.textDim, marginTop:2 }}>{streak} günlük seri devam ediyor.</div>
                    </div>
                    <div style={{ display:'flex', alignItems:'center', gap:6, color:TOK.amber, fontFamily:TOK.mono, fontSize:11, fontWeight:700 }}>
                      <Ic.Flame size={13}/> {streak} GÜN
                    </div>
                  </div>
                  <div style={{ display:'flex', gap:6, alignItems:'flex-end', height:64 }}>
                    {weekBars.map((b, i) => (
                      <div key={i} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
                        <div style={{ width:'100%', height:50, display:'flex', alignItems:'flex-end' }}>
                          {b.val > 0 ? (
                            <div style={{ width:'100%', height:`${(b.val/32)*100}%`, background: b.isToday ? `linear-gradient(180deg,${TOK.indigoHi},${TOK.indigo})` : TOK.surface4, borderRadius:'3px 3px 0 0', animation:`barGrow 0.8s ${0.6 + i*0.07}s cubic-bezier(.16,1,.3,1) backwards`, transformOrigin:'bottom' }}/>
                          ) : (
                            <div style={{ width:'100%', height:6, background:TOK.surface3, borderRadius:2 }}/>
                          )}
                        </div>
                        <div style={{ fontFamily:TOK.mono, fontSize:9, color: b.isToday ? TOK.indigoHi : TOK.textMute, fontWeight:700 }}>{weekLabels[i]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Daily goal ring */}
                <div className="animFadeUp" style={{ animationDelay:'0.6s', padding:22, background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:14, display:'flex', alignItems:'center', gap:18 }}>
                  <ProgressRing value={ringVal} size={84} color={TOK.coral}/>
                  <div style={{ flex:1 }}>
                    <div style={{ fontFamily:TOK.serif, fontSize:18, fontStyle:'italic', fontWeight:500 }}>Günlük hedef</div>
                    <div style={{ fontFamily:TOK.serif, fontSize:26, fontWeight:500, color:TOK.text, marginTop:6, letterSpacing:-1 }}>
                      {streak}<span style={{ color:TOK.textMute, fontSize:16 }}> gün seri</span>
                    </div>
                    <div style={{ fontSize:11, color:TOK.textDim, marginTop:3 }}>¡Tú puedes! Devam et.</div>
                  </div>
                </div>
              </div>

              {/* ── Quick access ── */}
              <div className="animFadeUp grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 pb-8" style={{ animationDelay:'0.7s', marginTop:14 }}>
                {[
                  { route:'pronunciation', Icon:Ic.Mic,         label:'Laboratorio de Pronunciación', sub:'Web Speech · 880 frases', color:TOK.violet },
                  { route:'errorDiary',    Icon:Ic.AlertCircle,  label:'Diario de Errores',            sub:'Repaso flashcard',        color:TOK.coral  },
                  { route:'learningDiary', Icon:Ic.Calendar,     label:'Diario de Aprendizaje',        sub:'Racha · historial',       color:TOK.amber  },
                ].map(item => (
                  <button
                    key={item.route}
                    onClick={() => onNavigate?.(item.route)}
                    className="hov"
                    style={{
                      padding:'18px 20px', background:TOK.surface,
                      border:`1px solid ${TOK.border}`, borderRadius:12,
                      display:'flex', flexDirection:'column', alignItems:'flex-start', gap:12,
                      cursor:'pointer', textAlign:'left',
                    }}
                  >
                    <div style={{ width:36, height:36, borderRadius:10, background:item.color+'22', border:`1px solid ${item.color}40`, display:'flex', alignItems:'center', justifyContent:'center', color:item.color }}>
                      <item.Icon size={16}/>
                    </div>
                    <div>
                      <div style={{ fontFamily:TOK.sans, fontSize:13, fontWeight:700, color:TOK.text }}>{item.label}</div>
                      <div style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textDim, marginTop:3 }}>{item.sub}</div>
                    </div>
                  </button>
                ))}
              </div>

            </div>
          )}

          {/* LEARN — Map view */}
          {activeTab === 'learn' && selectedLevel && (
            <div>
              <MapTab progress={progress} onSelectNode={handleNodeSelect} curriculum={allCurriculums?.[selectedLevel]} />
            </div>
          )}

          {activeTab === 'progress' && <ProgressTab progress={progress} allCurriculums={allCurriculums} />}
          {activeTab === 'library' && <LibraryTab user={user} />}
          {activeTab === 'chat' && <ChatTab user={user} />}
        </div>

        {/* ── Bottom tab bar ────────────────────────────────────────────────── */}
        <div style={{ position:'fixed', bottom:10, left:'50%', transform:'translateX(-50%)', width:'calc(100% - 24px)', maxWidth:540, padding:4, background:'rgba(17,17,24,.95)', backdropFilter:'blur(20px)', border:`1px solid ${TOK.border}`, borderRadius:18, display:'flex', zIndex:50, boxShadow:'0 -10px 40px -10px rgba(0,0,0,.5)' }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => { setActiveTab(t.id); if (t.id !== 'learn') setSelectedLevel(null); }} className="min-h-[44px]" style={{ flex:1, padding:'8px 0', borderRadius:12, textAlign:'center', background: activeTab === t.id ? TOK.indigoSoft : 'transparent', color: activeTab === t.id ? TOK.indigoHi : TOK.textMute, display:'flex', flexDirection:'column', alignItems:'center', gap:3, border:'none', cursor:'pointer' }}>
              <t.Icon size={17} sw={activeTab === t.id ? 2 : 1.6}/>
              <span style={{ fontFamily:TOK.sans, fontSize:9.5, fontWeight:700 }}>{t.label}</span>
            </button>
          ))}
        </div>

      </div>

      {pendingNode && presentationCtx && (
        <UnitPresentation
          presentation={presentationCtx.presentation}
          unitTitle={presentationCtx.unit.title}
          levelColor={LEVEL_COLORS[presentationCtx.levelId]}
          levelId={presentationCtx.levelId}
          onStart={() => {
            const node = pendingNode;
            setPendingNode(null);
            setPresentationCtx(null);
            onSelectNode(node);
          }}
          onBack={() => {
            setPendingNode(null);
            setPresentationCtx(null);
          }}
        />
      )}
    </>
  );
};
