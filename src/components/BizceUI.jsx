import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, ArrowRight, X, Plus, Search, MoreHorizontal, Map, BookOpen,
  Volume2, Mic, Headphones, TrendingUp, Library, MessageCircle, Star, Flame,
  Diamond, Check, Lock, Heart, Bell, User, Users, Settings, LogOut, Bookmark,
  Edit, Copy, Trash2, Eye, Mail, Pencil, Wand2, Send, Target, Clock, Calendar,
  Crown, Award, Globe, Flag, Grid3X3, List, Filter, Phone, Monitor, Sun,
  Sparkles, Zap, Compass, Brain, Hash, Menu, ChevronDown, ChevronRight,
  CheckCircle2, RotateCcw, AlertCircle, Info, Loader2, MicOff, UserPlus,
  Activity, Edit3, Circle, CheckCircle, FileText, FolderPlus, Folder,
  Languages, Save, Book,
} from 'lucide-react';
import { TOK, TR } from '../tokens';

// ── Icon wrappers (Ic.* API matching handoff) ──────────────────────────────
const mk = (L) => ({ size = 18, sw = 1.75, color, style, ...r }) => (
  <L size={size} strokeWidth={sw} color={color || 'currentColor'} style={style} {...r} />
);

export const Ic = {
  Menu: mk(Menu), Back: mk(ArrowLeft), Arrow: mk(ArrowRight),
  Close: mk(X), Plus: mk(Plus), Search: mk(Search), More: mk(MoreHorizontal),
  Map: mk(Map), Book: mk(BookOpen), Volume: mk(Volume2), Mic: mk(Mic),
  Headphone: mk(Headphones), Trend: mk(TrendingUp), Library: mk(Library),
  Chat: mk(MessageCircle), Star: mk(Star), Flame: mk(Flame), Diamond: mk(Diamond),
  Check: mk(Check), Lock: mk(Lock), Lock2: mk(Lock), Heart: mk(Heart), Bell: mk(Bell),
  User: mk(User), Users: mk(Users), Settings: mk(Settings), Logout: mk(LogOut),
  Bookmark: mk(Bookmark), Edit: mk(Edit), Copy: mk(Copy), Trash: mk(Trash2),
  Eye: mk(Eye), Mail: mk(Mail), Pencil: mk(Pencil), Wand: mk(Wand2), Send: mk(Send),
  Target: mk(Target), Clock: mk(Clock), Calendar: mk(Calendar), Crown: mk(Crown),
  Award: mk(Award), Globe: mk(Globe), Flag: mk(Flag), Grid: mk(Grid3X3),
  List: mk(List), Filter: mk(Filter), Phone: mk(Phone), Monitor: mk(Monitor),
  Sun: mk(Sun), Sparkle: mk(Sparkles), Zap: mk(Zap), BookOpen: mk(BookOpen),
  Compass: mk(Compass), Brain: mk(Brain), Hash: mk(Hash),
  ChevronDown: mk(ChevronDown), ChevronRight: mk(ChevronRight),
  CheckCircle2: mk(CheckCircle2), RotateCcw: mk(RotateCcw),
  AlertCircle: mk(AlertCircle), Info: mk(Info), Loader2: mk(Loader2),
  MicOff: mk(MicOff), UserPlus: mk(UserPlus), Activity: mk(Activity),
  Edit3: mk(Edit3), Circle: mk(Circle), CheckCircle: mk(CheckCircle),
  FileText: mk(FileText), FolderPlus: mk(FolderPlus), Folder: mk(Folder),
  Languages: mk(Languages), Save: mk(Save),
};

// ── Responsive hook ────────────────────────────────────────────────────────
export function useIsMobile() {
  const [m, setM] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setM(window.innerWidth < 768);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return m;
}

// ── Animated progress bar ──────────────────────────────────────────────────
export function ABar({ value, max = 100, color = TOK.indigo, h = 8, bg = TOK.surface4, delay = 0, animate = true }) {
  const [w, setW] = useState(animate ? 0 : (value / max) * 100);
  useEffect(() => {
    const t = setTimeout(() => setW((value / max) * 100), delay);
    return () => clearTimeout(t);
  }, [value, max, delay]);
  const fill = typeof color === 'string' ? color : `linear-gradient(90deg,${color[0]},${color[1]})`;
  return (
    <div style={{ width:'100%', height:h, background:bg, borderRadius:h, overflow:'hidden', position:'relative' }}>
      <div style={{ height:'100%', width:`${w}%`, background:fill, borderRadius:h, transition:'width 1.2s cubic-bezier(.16,1,.3,1)', position:'relative', overflow:'hidden' }}>
        {animate && <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent)', animation:'shimmer 2s infinite' }}/>}
      </div>
    </div>
  );
}

// ── Pulse dot ─────────────────────────────────────────────────────────────
export function PulseDot({ color = TOK.green, size = 8 }) {
  return (
    <div style={{ position:'relative', width:size, height:size, display:'inline-block' }}>
      <div style={{ position:'absolute', inset:0, background:color, borderRadius:'50%' }}/>
      <div style={{ position:'absolute', inset:0, background:color, borderRadius:'50%', animation:'pulseRing 1.8s ease-out infinite' }}/>
    </div>
  );
}

// ── Progress ring ──────────────────────────────────────────────────────────
export function ProgressRing({ value, size = 80, color = TOK.indigo, sw = 6 }) {
  const r = (size - sw) / 2;
  const circ = 2 * Math.PI * r;
  const [off, setOff] = useState(circ);
  useEffect(() => {
    const t = setTimeout(() => setOff(circ - (value / 100) * circ), 400);
    return () => clearTimeout(t);
  }, [value, circ]);
  return (
    <div style={{ position:'relative', width:size, height:size }}>
      <svg width={size} height={size} style={{ transform:'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} stroke={TOK.surface4} strokeWidth={sw} fill="none"/>
        <circle cx={size/2} cy={size/2} r={r} stroke={color} strokeWidth={sw} fill="none"
          strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={off}
          style={{ transition:'stroke-dashoffset 1.4s cubic-bezier(.16,1,.3,1)' }}/>
      </svg>
      <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:TOK.serif, fontSize:size*.28, fontWeight:500, color:TOK.text, letterSpacing:-.5 }}>{value}%</div>
    </div>
  );
}

// ── Sparkline ──────────────────────────────────────────────────────────────
export function Spark({ data, color = TOK.indigo, w = 80, h = 28 }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const r = max - min || 1;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / r) * h}`).join(' ');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points={`0,${h} ${pts} ${w},${h}`} fill={color + '15'}/>
    </svg>
  );
}

// ── Bar chart ──────────────────────────────────────────────────────────────
export function Bars({ data, color = TOK.indigo, h = 60, max }) {
  const M = max || Math.max(...data);
  return (
    <div style={{ display:'flex', alignItems:'flex-end', gap:4, height:h }}>
      {data.map((v, i) => (
        <div key={i} style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
          <div style={{
            height:`${(v/M)*100}%`,
            background: typeof color === 'string' ? color : `linear-gradient(180deg,${color[0]},${color[1]})`,
            borderRadius:'3px 3px 0 0',
            animation:`barGrow 1s ${i*.05}s cubic-bezier(.16,1,.3,1) backwards`,
            transformOrigin:'bottom',
          }}/>
        </div>
      ))}
    </div>
  );
}

// ── Logo mark ─────────────────────────────────────────────────────────────
export function BizceMark({ size = 40 }) {
  return (
    <div style={{
      width:size, height:size, borderRadius:size*.28,
      background:`linear-gradient(135deg,${TOK.indigo},${TOK.violet})`,
      display:'flex', alignItems:'center', justifyContent:'center',
      boxShadow:`0 6px 20px -8px ${TOK.indigo}80,0 0 0 1px rgba(255,255,255,.08) inset`,
      position:'relative', overflow:'hidden', flexShrink:0,
    }}>
      <span style={{ fontFamily:TOK.italic, fontWeight:600, color:'#fff', fontSize:size*.55, fontStyle:'italic', letterSpacing:-1, lineHeight:1 }}>b</span>
      <div style={{ position:'absolute', bottom:size*.16, right:size*.18, width:size*.12, height:size*.12, borderRadius:'50%', background:TOK.coral, boxShadow:`0 0 0 ${size*.04}px ${TOK.coralSoft}` }}/>
    </div>
  );
}

// ── Wordmark ──────────────────────────────────────────────────────────────
export function BizceWordmark({ size = 18, color = TOK.text }) {
  return (
    <span style={{ fontFamily:TOK.italic, fontStyle:'italic', fontWeight:500, fontSize:size, color, letterSpacing:-.3, lineHeight:1, display:'inline-flex', alignItems:'baseline', gap:1 }}>
      <span>bizce</span>
      <span style={{ color:TOK.coral, fontSize:size*.6, transform:'translateY(-2px)', display:'inline-block' }}>♥</span>
    </span>
  );
}

// ── Mobile tab bar (student) ───────────────────────────────────────────────
export function MobileTabBar({ active = 'learn', onTabChange }) {
  const items = [
    { id:'learn',    Icon:Ic.Map,     label:TR.learn },
    { id:'progress', Icon:Ic.Trend,   label:TR.progress },
    { id:'library',  Icon:Ic.Library, label:TR.library },
    { id:'chat',     Icon:Ic.Chat,    label:TR.tutor },
  ];
  return (
    <div style={{ position:'absolute', bottom:14, left:12, right:12, padding:6, background:'rgba(17,17,24,.95)', backdropFilter:'blur(20px)', border:`1px solid ${TOK.border}`, borderRadius:18, display:'flex', zIndex:50, boxShadow:'0 -10px 40px -10px rgba(0,0,0,.5)' }}>
      {items.map(it => (
        <div key={it.id} onClick={() => onTabChange?.(it.id)} style={{ flex:1, padding:'9px 0', borderRadius:12, textAlign:'center', background:active===it.id?TOK.indigoSoft:'transparent', color:active===it.id?TOK.indigoHi:TOK.textMute, display:'flex', flexDirection:'column', alignItems:'center', gap:3, cursor:'pointer' }}>
          <it.Icon size={17} sw={active===it.id?2:1.6}/>
          <span style={{ fontFamily:TOK.sans, fontSize:9.5, fontWeight:700 }}>{it.label}</span>
        </div>
      ))}
    </div>
  );
}
