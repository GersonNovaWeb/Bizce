import React, { useState, useEffect, useRef } from 'react';
import { 
  Activity, LogOut, Users, MessageCircle, Edit3, CheckCircle2, 
  Circle, Star, Flame, Send, UserPlus, Mail, Lock, User, 
  Loader2, CheckCircle 
} from 'lucide-react';
import { collection, query, onSnapshot, orderBy, addDoc, serverTimestamp, doc, setDoc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { getApp, getApps, initializeApp } from 'firebase/app';

import { db, auth } from '../firebase';
import { TOK } from '../tokens';
import { Ic, ABar, Spark, useIsMobile } from '../components/BizceUI';

export const AdminDashboard = ({ logout }) => {
  const [activeTab, setActiveTab] = useState('overview'); 
  const [students, setStudents] = useState([]);
  
  // Estados para Crear Usuario
  const [newUser, setNewUser] = useState({ email: '', password: '', name: '' });
  const [createStatus, setCreateStatus] = useState('idle'); 
  const [createError, setCreateError] = useState('');

  // Estados para Correcciones
  const [submissions, setSubmissions] = useState([]);
  const [gradingSub, setGradingSub] = useState(null);
  const [gradeInput, setGradeInput] = useState('');
  const [feedbackInput, setFeedbackInput] = useState('');
  const [isSavingGrade, setIsSavingGrade] = useState(false);

  // Estados para el Chat
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    if (!db) return;
    const unsubStudents = onSnapshot(query(collection(db, "users")), (snap) => {
      const usersData = [];
      snap.forEach(d => { if (d.data().role === 'student') usersData.push({ id: d.id, ...d.data() }); });
      setStudents(usersData);
    });
    const unsubSubs = onSnapshot(query(collection(db, "submissions")), (snap) => {
      const subs = [];
      snap.forEach(d => subs.push({ id: d.id, ...d.data() }));
      subs.sort((a, b) => {
        if (a.status === 'pending' && b.status !== 'pending') return -1;
        if (a.status !== 'pending' && b.status === 'pending') return 1;
        return (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0);
      });
      setSubmissions(subs);
    });
    return () => { unsubStudents(); unsubSubs(); };
  }, []);

  useEffect(() => {
    if (!selectedStudent || !db) return;
    const q = query(collection(db, "chats", selectedStudent.id, "messages"), orderBy("timestamp", "asc"));
    const unsubChat = onSnapshot(q, (snap) => {
      const msgs = [];
      snap.forEach(d => msgs.push({ id: d.id, ...d.data() }));
      setMessages(msgs);
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    });
    return () => unsubChat();
  }, [selectedStudent]);

  const handleCreateStudent = async (e) => {
    e.preventDefault();
    setCreateStatus('loading');
    setCreateError('');

    try {
      // Obtenemos la configuración REAL de tu app principal
      const defaultApp = getApp(); 
      const secondaryAppName = "SecondaryAppForAuth";
      const existingApps = getApps();
      
      // Creamos una app secundaria usando tus credenciales reales
      const secondaryApp = existingApps.find(a => a.name === secondaryAppName) 
        || initializeApp(defaultApp.options, secondaryAppName);
      
      const secondaryAuth = getAuth(secondaryApp);
      
      const userCredential = await createUserWithEmailAndPassword(
        secondaryAuth, 
        newUser.email, 
        newUser.password
      );

      // Guardamos al usuario en Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: newUser.email,
        username: newUser.name,
        role: 'student',
        progress: { 
          points: 0, 
          unlockedNodes: ['u1_n1'], 
          completedNodes: [], 
          grades: {}, 
          streak: 1, 
          lastActive: new Date().toISOString().split('T')[0] 
        }
      });

      // Cerramos la sesión de la app secundaria
      await signOut(secondaryAuth);

      setCreateStatus('success');
      setNewUser({ email: '', password: '', name: '' });
      setTimeout(() => setCreateStatus('idle'), 3000);
    } catch (err) {
      setCreateStatus('error');
      console.error("Firebase Error detallado:", err);
      
      if (err.code === 'auth/email-already-in-use') {
        setCreateError("Este correo ya está registrado.");
      } else if (err.code === 'auth/weak-password') {
        setCreateError("La contraseña debe tener al menos 6 caracteres.");
      } else {
        setCreateError(`Error: ${err.message}`);
      }
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() || !selectedStudent) return;
    const msgText = text;
    setText('');
    await addDoc(collection(db, "chats", selectedStudent.id, "messages"), { 
      text: msgText, sender: 'admin', timestamp: serverTimestamp() 
    });
  };

  const handleGradeSubmission = async () => {
    if (!gradeInput || !feedbackInput.trim() || !gradingSub) return;
    setIsSavingGrade(true);
    const gradeNum = parseInt(gradeInput);
    await setDoc(doc(db, "submissions", gradingSub.id), {
      status: 'graded', grade: gradeNum, feedback: feedbackInput, gradedAt: serverTimestamp()
    }, { merge: true });
    const userRef = doc(db, "users", gradingSub.userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      let progress = userSnap.data().progress;
      if (!progress.completedNodes.includes(gradingSub.nodeId)) {
        progress.completedNodes.push(gradingSub.nodeId);
        progress.points += 50;
      }
      if (!progress.grades) progress.grades = {};
      progress.grades[gradingSub.nodeId] = gradeNum;
      await setDoc(userRef, { progress }, { merge: true });
    }
    setGradingSub(null); setGradeInput(''); setFeedbackInput(''); setIsSavingGrade(false);
  };

  const isMobile = useIsMobile();
  const pendingCount = submissions.filter(s => s.status === 'pending').length;

  const navItems = [
    { id: 'overview',    label: 'Genel Bakış', Icon: Ic.Trend },
    { id: 'corrections', label: 'Düzeltmeler', Icon: Ic.Edit3, badge: pendingCount || null },
    { id: 'create_user', label: 'Yeni Öğrenci', Icon: Ic.UserPlus },
    { id: 'students',    label: 'Öğrenciler',  Icon: Ic.Users },
    { id: 'chats',       label: 'Sohbetler',   Icon: Ic.Chat },
  ];

  const avgStreak = students.length ? Math.round(students.reduce((s, st) => s + (st.progress?.streak || 1), 0) / students.length * 10) / 10 : 0;
  const atRisk = students.filter(s => (s.progress?.streak || 1) <= 2).length;

  return (
    <div style={{ minHeight: '100vh', background: TOK.bg, color: TOK.text, fontFamily: TOK.sans, display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>

      {/* ── Sidebar (desktop) / Top header (mobile) ──────────────────────── */}
      {isMobile ? (
        <div style={{ padding: '12px 18px 14px', borderBottom: `1px solid ${TOK.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(17,17,24,0.95)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 40 }}>
          <div>
            <div style={{ fontFamily: TOK.mono, fontSize: 9, color: TOK.violet, letterSpacing: 1.8, textTransform: 'uppercase', fontWeight: 700 }}>Eğitmen Paneli</div>
            <div style={{ fontFamily: TOK.serif, fontSize: 20, fontWeight: 400, letterSpacing: -0.6, lineHeight: 1.1, marginTop: 1 }}>
              Genel <em style={{ color: TOK.violet, fontFamily: TOK.italic }}>Bakış</em>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            {pendingCount > 0 && <div onClick={() => setActiveTab('corrections')} style={{ padding: '5px 9px', background: TOK.coralSoft, border: `1px solid ${TOK.coral}40`, borderRadius: 7, color: TOK.coral, fontFamily: TOK.mono, fontSize: 10, fontWeight: 700, cursor: 'pointer' }}>{pendingCount} bekliyor</div>}
            <button onClick={logout} style={{ padding: '6px 8px', background: 'transparent', border: 'none', color: TOK.textDim, cursor: 'pointer' }}><LogOut size={16} /></button>
          </div>
        </div>
      ) : (
        <div style={{ width: 220, flexShrink: 0, borderRight: `1px solid ${TOK.border}`, background: TOK.surface, padding: '22px 14px', display: 'flex', flexDirection: 'column', height: '100vh', position: 'sticky', top: 0, overflowY: 'auto' }} className="noscroll">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 22, padding: '0 4px' }}>
            <div style={{ width: 24, height: 24, borderRadius: 7, background: `linear-gradient(135deg, ${TOK.coral}, ${TOK.indigo})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Activity size={13} color="#fff" /></div>
            <span style={{ fontFamily: TOK.italic, fontStyle: 'italic', fontSize: 14, fontWeight: 500 }}>Panel Admin</span>
            <div style={{ marginLeft: 4, padding: '1px 5px', background: TOK.violet + '20', color: TOK.violet, fontFamily: TOK.mono, fontSize: 8.5, fontWeight: 700, letterSpacing: 1, borderRadius: 3, border: `1px solid ${TOK.violet}40` }}>EĞİTMEN</div>
          </div>
          <div style={{ fontFamily: TOK.mono, fontSize: 9, color: TOK.textMute, letterSpacing: 2, textTransform: 'uppercase', padding: '0 8px', marginBottom: 8, fontWeight: 700 }}>Panel</div>
          {navItems.map(({ id, label, Icon, badge }) => (
            <div key={id} onClick={() => setActiveTab(id)} className="hov" style={{ padding: '8px 11px', borderRadius: 7, marginBottom: 2, background: activeTab === id ? TOK.indigoSoft : 'transparent', border: `1px solid ${activeTab === id ? TOK.indigo + '40' : 'transparent'}`, display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer' }}>
              <Icon size={13} color={activeTab === id ? TOK.indigoHi : TOK.textDim} />
              <span style={{ flex: 1, fontSize: 12, fontWeight: activeTab === id ? 700 : 500, color: activeTab === id ? TOK.text : TOK.textSec }}>{label}</span>
              {badge ? <span style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.coral, fontWeight: 700, background: TOK.coralSoft, padding: '1px 5px', borderRadius: 4 }}>{badge}</span> : null}
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <button onClick={logout} style={{ padding: '8px 11px', borderRadius: 7, display: 'flex', alignItems: 'center', gap: 9, color: TOK.textDim, background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 12 }}>
            <LogOut size={13} /> Çıkış yap
          </button>
        </div>
      )}

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div style={{ flex: 1, overflowY: 'auto', ...(isMobile ? { paddingBottom: 80 } : {}) }} className="noscroll">

        {/* Mobile tab bar */}
        {isMobile && (
          <div style={{ position: 'fixed', bottom: 14, left: 12, right: 12, padding: 6, background: 'rgba(17,17,24,0.95)', backdropFilter: 'blur(20px)', border: `1px solid ${TOK.border}`, borderRadius: 18, display: 'flex', zIndex: 50 }}>
            {navItems.map(it => (
              <div key={it.id} onClick={() => setActiveTab(it.id)} style={{ flex: 1, padding: '9px 0', borderRadius: 12, textAlign: 'center', background: activeTab === it.id ? TOK.violet + '25' : 'transparent', color: activeTab === it.id ? TOK.violet : TOK.textMute, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: 'pointer' }}>
                <it.Icon size={16} sw={activeTab === it.id ? 2 : 1.6} />
                <span style={{ fontFamily: TOK.sans, fontSize: 9, fontWeight: 700 }}>{it.label.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        )}

        {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
        {activeTab === 'overview' && (
          <div style={{ padding: isMobile ? '16px 18px' : '24px 32px' }}>
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.violet, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>
                {new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long' })}
              </div>
              <h1 style={{ fontFamily: TOK.serif, fontSize: isMobile ? 28 : 36, fontWeight: 400, letterSpacing: -1.2, lineHeight: 1, margin: 0 }}>
                İyi günler, <em style={{ color: TOK.violet, fontFamily: TOK.italic }}>Eğitmen</em>.
              </h1>
              <p style={{ fontFamily: TOK.serif, fontSize: 14, color: TOK.textSec, marginTop: 8, fontWeight: 300 }}>
                {students.length} öğrencin var.{atRisk > 0 && ` ${atRisk} kişi hedef seviyesinin altında ilerliyor.`}
              </p>
            </div>

            {/* KPI cards */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
              {[
                { label: 'Aktif öğrenci', value: `${students.length}`, pct: Math.min(100, students.length * 2), color: TOK.green, data: [8,10,9,11,12,students.length,students.length] },
                { label: 'Ort. seri', value: `${avgStreak} gün`, pct: Math.min(100, avgStreak * 10), color: TOK.amber, data: [3,4,4,5,5,avgStreak,avgStreak] },
                { label: 'Düzeltme bekliyor', value: `${pendingCount}`, pct: Math.min(100, pendingCount * 10), color: TOK.indigoHi, data: [0,1,2,1,pendingCount,pendingCount,pendingCount] },
                { label: 'Risk altında', value: `${atRisk}`, pct: Math.min(100, atRisk * 20), color: TOK.coral, data: [2,3,2,atRisk,atRisk,atRisk,atRisk] },
              ].map(({ label, value, pct, color, data }, i) => (
                <div key={i} className="animFadeUp" style={{ animationDelay: `${0.05 * i}s`, padding: isMobile ? 12 : 18, background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 11 }}>
                  <div style={{ fontFamily: TOK.mono, fontSize: isMobile ? 8.5 : 9.5, color: TOK.textMute, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700 }}>{label}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 4 }}>
                    <div style={{ fontFamily: TOK.serif, fontSize: isMobile ? 22 : 26, fontWeight: 500, color: TOK.text, letterSpacing: -0.7 }}>{value}</div>
                    {!isMobile && <Spark data={data} color={color} w={56} h={22} />}
                  </div>
                  <div style={{ marginTop: 8 }}><ABar value={pct} color={color} h={3} delay={300 + i * 70} /></div>
                </div>
              ))}
            </div>

            {/* Risk alert */}
            {atRisk > 0 && (
              <div className="animFadeUp" style={{ animationDelay: '0.2s', marginBottom: 20, padding: 16, background: `linear-gradient(180deg, ${TOK.coralSoft}, ${TOK.surface})`, border: `1px solid ${TOK.coral}30`, borderRadius: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
                  <Ic.Bell size={14} color={TOK.coral} />
                  <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.coral, letterSpacing: 1.5, fontWeight: 700, textTransform: 'uppercase' }}>Dikkat gereken ({atRisk})</div>
                </div>
                <div style={{ fontFamily: TOK.serif, fontSize: 14, color: TOK.textSec, lineHeight: 1.5, fontWeight: 300 }}>
                  {students.filter(s => (s.progress?.streak || 1) <= 2).map(s => <strong key={s.id} style={{ color: TOK.coral, fontWeight: 600 }}>{s.username || s.email?.split('@')[0]}</strong>).reduce((acc, el, i) => i === 0 ? [el] : [...acc, ', ', el], [])} son günlerde hedefin altında.
                </div>
                <div style={{ marginTop: 12, display: 'flex', gap: 6 }}>
                  <div onClick={() => setActiveTab('chats')} style={{ padding: '7px 11px', background: TOK.coral, color: TOK.bg, borderRadius: 6, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}><Ic.Send size={11} /> Mesaj</div>
                </div>
              </div>
            )}

            {/* Students list */}
            {!isMobile && (
              <div style={{ padding: 18, background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 12, marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ fontFamily: TOK.serif, fontSize: 18, fontStyle: 'italic', fontWeight: 500 }}>Öğrencilerim</div>
                  <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textMute, fontWeight: 600 }}>{students.length} kişi</div>
                </div>
                {students.slice(0, 6).map((s, i) => {
                  const pct = Math.min(100, ((s.progress?.points || 0) / 500) * 100);
                  const streak = s.progress?.streak || 1;
                  return (
                    <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: i < Math.min(5, students.length - 1) ? `1px solid ${TOK.border}50` : 'none' }}>
                      <div style={{ width: 28, height: 28, borderRadius: 7, background: `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})`, color: '#fff', fontFamily: TOK.serif, fontStyle: 'italic', fontWeight: 600, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{(s.username || s.email)?.[0]?.toUpperCase() || '?'}</div>
                      <div style={{ width: 110, fontSize: 12.5, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.username || s.email?.split('@')[0]}</div>
                      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ flex: 1 }}><ABar value={pct} color={pct > 60 ? TOK.green : pct > 30 ? TOK.indigoHi : TOK.coral} h={3} delay={400 + i * 40} /></div>
                        <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textDim, fontWeight: 700, width: 32, textAlign: 'right' }}>{Math.round(pct)}%</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3, color: streak >= 5 ? TOK.amber : TOK.textDim, fontFamily: TOK.mono, fontSize: 10, fontWeight: 700, width: 36 }}>
                        <Ic.Flame size={10} /> {streak}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Mobile students */}
            {isMobile && (
              <div>
                <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textMute, letterSpacing: 1.8, textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>Öğrenciler · {students.length} kişi</div>
                {students.slice(0, 6).map((s, i) => {
                  const pct = Math.min(100, ((s.progress?.points || 0) / 500) * 100);
                  const streak = s.progress?.streak || 1;
                  return (
                    <div key={s.id} className="animFadeUp" style={{ animationDelay: `${0.25 + i * 0.04}s`, padding: '10px 12px', background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 10, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 30, height: 30, borderRadius: 8, background: `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})`, color: '#fff', fontFamily: TOK.serif, fontStyle: 'italic', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{(s.username || s.email)?.[0]?.toUpperCase() || '?'}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12.5, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.username || s.email?.split('@')[0]}</div>
                        <div style={{ marginTop: 4 }}><ABar value={pct} color={pct > 60 ? TOK.green : pct > 30 ? TOK.indigoHi : TOK.coral} h={3} delay={400 + i * 40} /></div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 3, color: streak >= 5 ? TOK.amber : TOK.textDim, fontFamily: TOK.mono, fontSize: 10, fontWeight: 700 }}>
                        <Ic.Flame size={10} /> {streak}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ── CORRECTIONS ──────────────────────────────────────────────────── */}
        {activeTab === 'corrections' && (
          <div style={{ padding: isMobile ? '16px 18px' : '24px 32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 16, height: isMobile ? 'auto' : 'calc(100vh - 48px)' }}>
            <div style={{ width: isMobile ? '100%' : 280, flexShrink: 0, background: TOK.surface, borderRadius: 12, border: `1px solid ${TOK.border}`, padding: 16, display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto', maxHeight: isMobile ? 300 : 'none' }} className="noscroll">
              <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.textMute, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, padding: '0 4px', marginBottom: 4 }}>Bandeja de entregas</div>
              {submissions.map(sub => (
                <div key={sub.id} onClick={() => { setGradingSub(sub); setGradeInput(sub.grade || ''); setFeedbackInput(sub.feedback || ''); }} style={{ padding: '10px 12px', borderRadius: 9, border: `1px solid ${gradingSub?.id === sub.id ? TOK.indigo : sub.status === 'pending' ? TOK.borderHi : TOK.border}`, background: gradingSub?.id === sub.id ? `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})` : sub.status === 'pending' ? TOK.surface3 : TOK.surface2, cursor: 'pointer', color: gradingSub?.id === sub.id ? '#fff' : sub.status === 'pending' ? TOK.text : TOK.textDim }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                    <span style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 14, fontWeight: 600 }}>{sub.userEmail?.split('@')[0]}</span>
                    {sub.status === 'pending' ? <Circle size={12} style={{ fill: TOK.coral, color: TOK.coral }} /> : <CheckCircle2 size={13} color={TOK.green} />}
                  </div>
                  <div style={{ fontFamily: TOK.mono, fontSize: 10, opacity: 0.7, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub.nodeTitle}</div>
                </div>
              ))}
            </div>
            <div style={{ flex: 1, background: TOK.surface, borderRadius: 12, border: `1px solid ${TOK.border}`, display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 400 }}>
              {gradingSub ? (
                <>
                  <div style={{ padding: '16px 20px', borderBottom: `1px solid ${TOK.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontFamily: TOK.serif, fontSize: 20, fontWeight: 500 }}>{gradingSub.nodeTitle}</div>
                      <div style={{ fontFamily: TOK.mono, fontSize: 11, color: TOK.textDim, marginTop: 2 }}>De: <span style={{ color: TOK.indigoHi }}>{gradingSub.userEmail}</span></div>
                    </div>
                    {gradingSub.status === 'graded' && <div style={{ padding: '5px 11px', borderRadius: 8, background: TOK.greenSoft, color: TOK.green, fontFamily: TOK.mono, fontSize: 13, fontWeight: 700, border: `1px solid ${TOK.green}40` }}>Nota: {gradingSub.grade}/100</div>}
                  </div>
                  <div style={{ flex: 1, padding: '20px 24px', overflowY: 'auto', background: TOK.bg, backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, ${TOK.border} 31px, ${TOK.border} 32px)`, lineHeight: '32px', paddingTop: 10 }} className="noscroll">
                    <p style={{ fontFamily: TOK.serif, fontSize: 17, fontWeight: 400, color: TOK.textSec, whiteSpace: 'pre-line' }}>{gradingSub.text}</p>
                  </div>
                  <div style={{ padding: '16px 20px', borderTop: `1px solid ${TOK.border}`, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.indigoHi, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700 }}>Tu evaluación</div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <input type="number" min="0" max="100" placeholder="Nota" value={gradeInput} onChange={e => setGradeInput(e.target.value)} style={{ width: 80, padding: '8px 10px', background: TOK.bg, border: `1px solid ${TOK.border}`, borderRadius: 7, color: TOK.text, fontFamily: TOK.mono, fontSize: 16, fontWeight: 700, textAlign: 'center', outline: 'none' }} />
                      <textarea placeholder="Feedback detallado..." value={feedbackInput} onChange={e => setFeedbackInput(e.target.value)} style={{ flex: 1, padding: '8px 10px', background: TOK.bg, border: `1px solid ${TOK.border}`, borderRadius: 7, color: TOK.text, fontFamily: TOK.sans, fontSize: 13, resize: 'none', height: 64, outline: 'none' }} />
                    </div>
                    <button onClick={handleGradeSubmission} disabled={!gradeInput || !feedbackInput.trim() || isSavingGrade} style={{ padding: '10px', background: `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})`, border: 'none', borderRadius: 8, color: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer', opacity: (!gradeInput || !feedbackInput.trim() || isSavingGrade) ? 0.5 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
                      {isSavingGrade ? <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} /> : <><CheckCircle2 size={14} /> Notu kaydet</>}
                    </button>
                  </div>
                </>
              ) : (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: TOK.textMute }}>
                  <Edit3 size={48} style={{ opacity: 0.2, marginBottom: 12 }} />
                  <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 18 }}>Centro de Correcciones</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── CREATE USER ──────────────────────────────────────────────────── */}
        {activeTab === 'create_user' && (
          <div style={{ padding: isMobile ? '16px 18px' : '24px 32px', maxWidth: 520 }}>
            <div style={{ padding: isMobile ? 24 : 36, background: TOK.surface, borderRadius: 16, border: `1px solid ${TOK.border}` }}>
              <h1 style={{ fontFamily: TOK.serif, fontSize: 26, fontWeight: 400, letterSpacing: -0.8, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 10 }}>
                <UserPlus size={22} color={TOK.indigoHi} /> Alta de Alumno
              </h1>
              <p style={{ fontFamily: TOK.sans, fontSize: 13, color: TOK.textDim, marginBottom: 24 }}>Crea una cuenta nueva para que tu estudiante pueda empezar a aprender.</p>
              {createStatus === 'success' && (
                <div style={{ padding: 12, borderRadius: 10, marginBottom: 18, border: `1px solid ${TOK.green}40`, background: TOK.greenSoft, color: TOK.green, display: 'flex', alignItems: 'center', gap: 8, fontFamily: TOK.mono, fontSize: 12, fontWeight: 700 }}>
                  <CheckCircle size={16} /> ¡Alumno creado correctamente!
                </div>
              )}
              {createStatus === 'error' && (
                <div style={{ padding: 12, borderRadius: 10, marginBottom: 18, border: `1px solid ${TOK.coral}40`, background: TOK.coralSoft, color: TOK.coral, display: 'flex', alignItems: 'flex-start', gap: 8, fontFamily: TOK.mono, fontSize: 12 }}>
                  <Activity size={14} style={{ marginTop: 1, flexShrink: 0 }} /> {createError}
                </div>
              )}
              <form onSubmit={handleCreateStudent} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: 'Nombre de usuario', key: 'name', placeholder: 'Ej: Şeyma', type: 'text', Icon: User },
                  { label: 'Correo electrónico', key: 'email', placeholder: 'correo@estudiante.com', type: 'email', Icon: Mail },
                  { label: 'Contraseña inicial', key: 'password', placeholder: 'Mínimo 6 caracteres', type: 'password', Icon: Lock },
                ].map(({ label, key, placeholder, type, Icon }) => (
                  <div key={key}>
                    <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.textMute, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>{label}</div>
                    <div style={{ position: 'relative' }}>
                      <Icon size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: TOK.textDim }} />
                      <input type={type} placeholder={placeholder} value={newUser[key]} onChange={e => setNewUser({ ...newUser, [key]: e.target.value })} required minLength={key === 'password' ? 6 : undefined} style={{ width: '100%', padding: '10px 12px 10px 34px', background: TOK.bg, border: `2px solid ${TOK.border}`, borderRadius: 9, color: TOK.text, fontFamily: TOK.sans, fontSize: 13, outline: 'none' }} onFocus={e => e.target.style.borderColor = TOK.indigo} onBlur={e => e.target.style.borderColor = TOK.border} />
                    </div>
                  </div>
                ))}
                <button type="submit" disabled={createStatus === 'loading'} style={{ padding: '12px', background: `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})`, border: 'none', borderRadius: 10, color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer', marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  {createStatus === 'loading' ? <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> : <><UserPlus size={16} /> Generar Cuenta</>}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ── STUDENTS ─────────────────────────────────────────────────────── */}
        {activeTab === 'students' && (
          <div style={{ padding: isMobile ? '16px 18px' : '24px 32px' }}>
            <h1 style={{ fontFamily: TOK.serif, fontSize: 28, fontWeight: 400, letterSpacing: -0.8, marginBottom: 20 }}>
              <em style={{ color: TOK.indigoHi, fontFamily: TOK.italic }}>Öğrenciler</em>
            </h1>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
              {students.map(student => {
                const pts = student.progress?.points || 0;
                const streak = student.progress?.streak || 1;
                const exams = Object.keys(student.progress?.grades || {}).length;
                return (
                  <div key={student.id} style={{ padding: 20, background: TOK.surface, border: `1px solid ${TOK.border}`, borderRadius: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})`, color: '#fff', fontFamily: TOK.serif, fontStyle: 'italic', fontWeight: 600, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{(student.username || student.email)?.[0]?.toUpperCase() || '?'}</div>
                      <div>
                        <div style={{ fontFamily: TOK.serif, fontSize: 16, fontStyle: 'italic', fontWeight: 600 }}>{student.username || student.email?.split('@')[0]}</div>
                        <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textDim }}>{student.email}</div>
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, borderTop: `1px solid ${TOK.border}`, paddingTop: 14 }}>
                      {[['XP Total', pts, TOK.green], ['Racha', `${streak}`, TOK.amber], ['Exámenes', exams, TOK.indigoHi]].map(([l, v, c]) => (
                        <div key={l} style={{ textAlign: 'center' }}>
                          <div style={{ fontFamily: TOK.mono, fontSize: 8.5, color: TOK.textMute, textTransform: 'uppercase', letterSpacing: 1.2, fontWeight: 700 }}>{l}</div>
                          <div style={{ fontFamily: TOK.serif, fontSize: 22, fontWeight: 500, color: c, marginTop: 2 }}>{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── CHATS ────────────────────────────────────────────────────────── */}
        {activeTab === 'chats' && (
          <div style={{ padding: isMobile ? '16px 18px' : '24px 32px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 16, height: isMobile ? 'auto' : 'calc(100vh - 48px)' }}>
            <div style={{ width: isMobile ? '100%' : 260, flexShrink: 0, background: TOK.surface, borderRadius: 12, border: `1px solid ${TOK.border}`, padding: 14, display: 'flex', flexDirection: 'column', gap: 6, overflowY: 'auto', maxHeight: isMobile ? 220 : 'none' }} className="noscroll">
              <div style={{ fontFamily: TOK.mono, fontSize: 9.5, color: TOK.textMute, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>Mensajes</div>
              {students.map(s => (
                <div key={s.id} onClick={() => setSelectedStudent(s)} style={{ padding: '10px 12px', borderRadius: 9, background: selectedStudent?.id === s.id ? `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})` : TOK.surface2, border: `1px solid ${selectedStudent?.id === s.id ? TOK.indigo : TOK.border}`, display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: selectedStudent?.id === s.id ? 'rgba(255,255,255,0.2)' : TOK.surface4, color: selectedStudent?.id === s.id ? '#fff' : TOK.textSec, fontFamily: TOK.serif, fontStyle: 'italic', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{(s.username || s.email)?.[0]?.toUpperCase() || '?'}</div>
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: selectedStudent?.id === s.id ? '#fff' : TOK.textSec, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.username || s.email?.split('@')[0]}</span>
                </div>
              ))}
            </div>
            <div style={{ flex: 1, background: TOK.surface, borderRadius: 12, border: `1px solid ${TOK.border}`, display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 400 }}>
              {selectedStudent ? (
                <>
                  <div style={{ padding: '14px 18px', borderBottom: `1px solid ${TOK.border}` }}>
                    <div style={{ fontFamily: TOK.serif, fontSize: 17, fontStyle: 'italic', fontWeight: 600 }}>{selectedStudent.username || selectedStudent.email}</div>
                    <div style={{ fontFamily: TOK.mono, fontSize: 10, color: TOK.textDim, marginTop: 2 }}>Canal privado</div>
                  </div>
                  <div style={{ flex: 1, padding: '16px 20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 10, background: TOK.bg }} className="noscroll">
                    {messages.map(m => (
                      <div key={m.id} style={{ alignSelf: m.sender === 'admin' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
                        <div style={{ padding: '10px 14px', borderRadius: m.sender === 'admin' ? '13px 13px 4px 13px' : '13px 13px 13px 4px', fontFamily: TOK.serif, fontSize: 14, lineHeight: 1.5, ...(m.sender === 'admin' ? { background: `linear-gradient(135deg, ${TOK.indigo}, ${TOK.violet})`, color: '#fff' } : { background: TOK.surface, border: `1px solid ${TOK.border}`, color: TOK.textSec }) }}>{m.text}</div>
                      </div>
                    ))}
                    <div ref={endRef} />
                  </div>
                  <div style={{ padding: '12px 16px', borderTop: `1px solid ${TOK.border}` }}>
                    <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: 8 }}>
                      <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Escribe al alumno..." style={{ flex: 1, padding: '10px 12px', background: TOK.bg, border: `1px solid ${TOK.border}`, borderRadius: 8, color: TOK.text, fontFamily: TOK.sans, fontSize: 13, outline: 'none' }} onFocus={e => e.target.style.borderColor = TOK.indigo} onBlur={e => e.target.style.borderColor = TOK.border} />
                      <button type="submit" disabled={!text.trim()} style={{ padding: '10px 14px', background: TOK.indigo, border: 'none', borderRadius: 8, color: '#fff', cursor: 'pointer', opacity: !text.trim() ? 0.5 : 1 }}><Send size={15} /></button>
                    </form>
                  </div>
                </>
              ) : (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: TOK.textMute }}>
                  <MessageCircle size={48} style={{ opacity: 0.2, marginBottom: 12 }} />
                  <div style={{ fontFamily: TOK.serif, fontStyle: 'italic', fontSize: 18 }}>Centro de Tutoría</div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
