import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { Mail, Lock, Activity, ArrowRight } from 'lucide-react';
import { db, auth } from './firebase';
import logo from './assets/logo.png';
import { a1Curriculum, allNodeIds as allA1NodeIds } from './data/a1_curriculum';
import { a2Curriculum, allA2NodeIds } from './data/a2_curriculum';
import { b1Curriculum, allB1NodeIds } from './data/b1_curriculum';
import { b2Curriculum, allB2NodeIds } from './data/b2_curriculum';
import { c1Curriculum, allC1NodeIds } from './data/c1_curriculum';
import { c2Curriculum, allC2NodeIds } from './data/c2_curriculum';
import { StudentDashboard } from './pages/EstudianteDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { TheoryScreen, ReadingScreen, QuizScreen, WorkshopScreen } from './pages/Screens';

const SERIF  = '"Fraunces", "Instrument Serif", Georgia, serif';
const ITALIC = '"Instrument Serif", Georgia, serif';
const MONO   = '"JetBrains Mono", ui-monospace, monospace';

// ==========================================
// PANTALLA DE LOGIN
// ==========================================
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        await setDoc(doc(db, "users", userCredential.user.uid), {
          email: email,
          role: role,
          progress: { points: 0, unlockedNodes: ['u1_n1'], completedNodes: [], grades: {}, streak: 1, lastActive: new Date().toISOString().split('T')[0] }
        });
      } else {
        await signInWithEmailAndPassword(auth, email, pass);
      }
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password') {
        setError("Error: El correo o la contraseña son incorrectos.");
      } else if (err.code === 'auth/email-already-in-use') {
        setError("Error: Este correo ya tiene una cuenta registrada.");
      } else if (err.code === 'auth/weak-password') {
        setError("Error: La contraseña debe tener al menos 6 caracteres.");
      } else {
        setError("Ocurrió un error inesperado. Inténtalo de nuevo.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%', display: 'flex', background: '#0a0a0f', color: '#eef0f6', fontFamily: '"Inter", sans-serif' }}>

      {/* IZQUIERDA — editorial hero */}
      <div style={{
        display: 'none', width: '50%', position: 'relative', overflow: 'hidden',
        background: '#111118', borderRight: '1px solid #272735',
        flexDirection: 'column', justifyContent: 'space-between', padding: '56px 64px',
      }} className="lg-flex-col">
        {/* Radial glows */}
        <div style={{ position: 'absolute', top: -150, left: -150, width: 500, height: 500, background: 'radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', bottom: -100, right: -100, width: 320, height: 320, background: 'radial-gradient(circle, rgba(255,107,107,0.12), transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }}/>

        {/* Logo */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={logo} alt="Bizce" style={{ height: 36, width: 'auto', objectFit: 'contain' }}/>
          <span style={{ fontFamily: ITALIC, fontStyle: 'italic', fontSize: 20, letterSpacing: -0.3 }}>
            bizce<span style={{ color: '#ff6b6b', fontSize: 12 }}>♥</span>
          </span>
          <div style={{ marginLeft: 8, padding: '2px 8px', background: '#1e1e3a', border: '1px solid rgba(99,102,241,0.4)', borderRadius: 4, fontFamily: MONO, fontSize: 9.5, fontWeight: 700, letterSpacing: '0.15em', color: '#818cf8' }}>
            v2.0
          </div>
        </div>

        {/* Hero copy */}
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: MONO, fontSize: 10.5, color: '#818cf8', letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 24, height: 1, background: '#818cf8', display: 'inline-block' }}/>
            Español · A1 → C2
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: 72, fontWeight: 400, lineHeight: 0.95, letterSpacing: -2.5, margin: '0 0 24px', color: '#eef0f6' }}>
            Domina el <em style={{ fontStyle: 'italic', color: '#818cf8', fontFamily: ITALIC }}>español</em>.<br/>
            Conquista el mundo.
          </h1>
          <p style={{ fontFamily: SERIF, fontSize: 17, fontWeight: 300, lineHeight: 1.6, color: '#b3b5c2', maxWidth: 460, margin: 0 }}>
            El sistema académico diseñado para llevarte desde tu primera palabra hasta el bilingüismo perfecto.
          </p>
          <div style={{ display: 'flex', gap: 32, marginTop: 36 }}>
            {[['340', 'Lecciones'], ['12k+', 'Alumnos'], ['6', 'Niveles']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 500, color: '#eef0f6', letterSpacing: -1, lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: MONO, fontSize: 9.5, color: '#54566a', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 5 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', fontFamily: MONO, fontSize: 10, color: '#54566a', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          © {new Date().getFullYear()} Bizce Learning System
        </div>
      </div>

      {/* DERECHA — formulario */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: 280, background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15), transparent 70%)', pointerEvents: 'none' }}/>

        <div style={{ width: '100%', maxWidth: 400, position: 'relative', zIndex: 1 }} className="anim-fade-up">

          {/* Mobile logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }} className="lg-hide">
            <img src={logo} alt="Bizce" style={{ height: 56, width: 'auto', objectFit: 'contain' }}/>
          </div>

          {/* Tabs Entrar / Registrarse */}
          <div style={{ display: 'flex', gap: 4, padding: 4, background: '#111118', border: '1px solid #272735', borderRadius: 12, marginBottom: 32 }}>
            <button
              type="button"
              onClick={() => { setIsRegistering(false); setError(''); }}
              style={{ flex: 1, padding: '10px 0', textAlign: 'center', borderRadius: 9, fontSize: 13, fontWeight: 700, border: 'none', transition: 'all 0.2s', background: !isRegistering ? '#1d1d28' : 'transparent', color: !isRegistering ? '#eef0f6' : '#7e8090', boxShadow: !isRegistering ? '0 0 0 1px #3a3a4e' : 'none' }}
            >
              Iniciar Sesión
            </button>
            <button
              type="button"
              onClick={() => { setIsRegistering(true); setError(''); }}
              style={{ flex: 1, padding: '10px 0', textAlign: 'center', borderRadius: 9, fontSize: 13, fontWeight: 700, border: 'none', transition: 'all 0.2s', background: isRegistering ? '#1d1d28' : 'transparent', color: isRegistering ? '#eef0f6' : '#7e8090', boxShadow: isRegistering ? '0 0 0 1px #3a3a4e' : 'none' }}
            >
              Crear Cuenta
            </button>
          </div>

          <h2 style={{ fontFamily: SERIF, fontSize: 36, fontWeight: 400, letterSpacing: -1, lineHeight: 1.05, margin: '0 0 8px', color: '#eef0f6' }}>
            {isRegistering ? 'Únete a Bizce.' : 'Bienvenido de nuevo.'}
          </h2>
          <p style={{ fontSize: 13.5, color: '#7e8090', margin: '0 0 28px' }}>
            {isRegistering ? 'Empieza tu camino hacia el español hoy.' : 'Accede a tu biblioteca de español.'}
          </p>

          {error && (
            <div style={{ background: '#2a1416', border: '1px solid rgba(248,113,113,0.3)', color: '#f87171', padding: '14px 16px', borderRadius: 12, marginBottom: 20, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <Activity style={{ width: 16, height: 16, flexShrink: 0, marginTop: 1 }}/>
              <p style={{ fontSize: 13, fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <label style={{ fontFamily: MONO, fontSize: 9.5, color: '#7e8090', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                Correo electrónico
              </label>
              <div style={{ position: 'relative' }}>
                <Mail style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 15, height: 15, color: '#54566a' }}/>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  style={{ width: '100%', background: '#111118', border: '1px solid #272735', color: '#eef0f6', borderRadius: 10, padding: '12px 14px 12px 40px', fontSize: 14, outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={e => e.currentTarget.style.borderColor = '#6366f1'}
                  onBlur={e => e.currentTarget.style.borderColor = '#272735'}
                />
              </div>
            </div>
            <div>
              <label style={{ fontFamily: MONO, fontSize: 9.5, color: '#7e8090', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, display: 'block', marginBottom: 6 }}>
                Contraseña
              </label>
              <div style={{ position: 'relative' }}>
                <Lock style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 15, height: 15, color: '#54566a' }}/>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={pass}
                  onChange={e => setPass(e.target.value)}
                  required
                  minLength={6}
                  style={{ width: '100%', background: '#111118', border: '1px solid #272735', color: '#eef0f6', borderRadius: 10, padding: '12px 14px 12px 40px', fontSize: 14, outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={e => e.currentTarget.style.borderColor = '#6366f1'}
                  onBlur={e => e.currentTarget.style.borderColor = '#272735'}
                />
              </div>
            </div>

            {isRegistering && (
              <div style={{ display: 'flex', background: '#111118', padding: 4, borderRadius: 10, border: '1px solid #272735', marginTop: 4 }}>
                <button type="button" onClick={() => setRole('student')} style={{ flex: 1, padding: '10px 0', borderRadius: 8, fontWeight: 700, fontSize: 13, border: 'none', transition: 'all 0.2s', background: role === 'student' ? '#6366f1' : 'transparent', color: role === 'student' ? '#fff' : '#7e8090' }}>
                  Soy Alumno
                </button>
                <button type="button" onClick={() => setRole('admin')} style={{ flex: 1, padding: '10px 0', borderRadius: 8, fontWeight: 700, fontSize: 13, border: 'none', transition: 'all 0.2s', background: role === 'admin' ? '#6366f1' : 'transparent', color: role === 'admin' ? '#fff' : '#7e8090' }}>
                  Soy Profesor
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%', background: '#6366f1', color: '#fff',
                fontWeight: 700, fontSize: 15, padding: '14px 0',
                borderRadius: 12, border: 'none', marginTop: 8,
                boxShadow: '0 0 24px -8px rgba(99,102,241,0.6), 0 0 0 1px rgba(129,140,248,0.3) inset',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                transition: 'background 0.2s, opacity 0.2s',
                opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={e => { if (!isLoading) e.currentTarget.style.background = '#818cf8'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#6366f1'; }}
            >
              {isLoading ? (
                <div style={{ width: 20, height: 20, border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}/>
              ) : (
                <>
                  {isRegistering ? 'Crear mi cuenta' : 'Entrar a la plataforma'}
                  <ArrowRight style={{ width: 17, height: 17 }}/>
                </>
              )}
            </button>
          </form>

          <p style={{ marginTop: 28, textAlign: 'center', fontSize: 13, color: '#54566a' }}>
            {isRegistering ? '¿Ya tienes una cuenta?' : '¿No tienes cuenta?'}
            <button
              onClick={() => { setIsRegistering(!isRegistering); setError(''); }}
              style={{ marginLeft: 6, background: 'none', border: 'none', color: '#818cf8', fontWeight: 700, fontSize: 13, cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={e => e.currentTarget.style.color = '#818cf8'}
            >
              {isRegistering ? 'Inicia sesión aquí' : 'Regístrate ahora'}
            </button>
          </p>
        </div>
      </div>

    </div>
  );
};

// ==========================================
// APLICACIÓN PRINCIPAL (ROUTER)
// ==========================================
export default function App() {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [currentRoute, setCurrentRoute] = useState('dashboard');
  const [activeNode, setActiveNode] = useState(null);
  const [progress, setProgress] = useState(null);
  const [dashboardLevel, setDashboardLevel] = useState(null);
  const [dashboardScroll, setDashboardScroll] = useState(0);
  const [authLoading, setAuthLoading] = useState(true);

  const allCurriculums = {
    A1: a1Curriculum,
    A2: a2Curriculum,
    B1: b1Curriculum,
    B2: b2Curriculum,
    C1: c1Curriculum,
    C2: c2Curriculum
  };

  const currentAllIds =
    dashboardLevel === 'C2' ? allC2NodeIds :
    dashboardLevel === 'C1' ? allC1NodeIds :
    dashboardLevel === 'B2' ? allB2NodeIds :
    dashboardLevel === 'B1' ? allB1NodeIds :
    dashboardLevel === 'A2' ? allA2NodeIds :
    allA1NodeIds;

  const currentCurriculum = dashboardLevel ? allCurriculums[dashboardLevel] : null;

  useEffect(() => {
    let userDocUnsub = null;

    const authUnsub = onAuthStateChanged(auth, (currentUser) => {
      if (userDocUnsub) { userDocUnsub(); userDocUnsub = null; }
      setUser(currentUser);

      if (currentUser) {
        userDocUnsub = onSnapshot(doc(db, "users", currentUser.uid), (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserRole(data.role ?? null);
            if (data.role === 'student') {
              setProgress(data.progress ?? null);
            }
          }
          setAuthLoading(false);
        });
      } else {
        setUserRole(null);
        setProgress(null);
        setAuthLoading(false);
      }
    });

    return () => { authUnsub(); if (userDocUnsub) userDocUnsub(); };
  }, []);

  const handleLogout = () => signOut(auth);

  const navigateToNode = (node) => {
    if (currentRoute === 'dashboard') setDashboardScroll(window.scrollY);
    setActiveNode(node);
    setCurrentRoute(node.type);
    window.scrollTo(0, 0);
  };

  const returnToDashboard = () => {
    setActiveNode(null);
    setCurrentRoute('dashboard');
  };

  const processProgress = async (earnedPoints = 0, newGrade = null) => {
    if (!user || userRole !== 'student' || !progress || !activeNode) return;
    let p = { ...progress };
    p.points += earnedPoints;
    
    if (newGrade !== null) {
      if (!p.grades) p.grades = {};
      p.grades[activeNode.id] = newGrade;
    }

    if (!p.completedNodes.includes(activeNode.id)) {
      p.completedNodes.push(activeNode.id);
      
      const currentIndex = currentAllIds.indexOf(activeNode.id);
      if (currentIndex !== -1 && currentIndex < currentAllIds.length - 1) {
        const nextNodeId = currentAllIds[currentIndex + 1];
        if (!p.unlockedNodes.includes(nextNodeId)) p.unlockedNodes.push(nextNodeId);
      }
      
      if (activeNode.id === 'u8_exam' && !p.unlockedNodes.includes('a2_u1_n1')) p.unlockedNodes.push('a2_u1_n1');
      if (activeNode.id === 'a2_u12_exam' && !p.unlockedNodes.includes('b1_u1_n1')) p.unlockedNodes.push('b1_u1_n1');
      if (activeNode.id === 'b1_u15_n15' && !p.unlockedNodes.includes('b2_u1_n1')) p.unlockedNodes.push('b2_u1_n1');
      if (activeNode.id === 'b2_u16_n15' && !p.unlockedNodes.includes('c1_u1_n1')) p.unlockedNodes.push('c1_u1_n1');
      if (activeNode.id === 'c1_u20_n16' && !p.unlockedNodes.includes('c2_u1_n1')) p.unlockedNodes.push('c2_u1_n1');
    }
    await setDoc(doc(db, "users", user.uid), { progress: p }, { merge: true });
  };

  const completeCurrentNode = async (earnedPoints = 0, newGrade = null) => {
    await processProgress(earnedPoints, newGrade);
    returnToDashboard();
  };

  const goToNextNode = async (earnedPoints = 0, newGrade = null) => {
    await processProgress(earnedPoints, newGrade);
    const currentIndex = currentAllIds.indexOf(activeNode.id);
    const nextNodeId = currentAllIds[currentIndex + 1];
    
    if (currentCurriculum && currentCurriculum.units) {
      const nextNode = currentCurriculum.units.flatMap(u => u.nodes).find(n => n.id === nextNodeId);
      if (nextNode) {
        setActiveNode(nextNode);
        setCurrentRoute(nextNode.type);
        window.scrollTo(0, 0);
        return;
      }
    }
    returnToDashboard();
  };

  const updateGrade = (nodeId, grade) => {
    if (!progress) return;
    let p = { ...progress };
    if (!p.grades) p.grades = {};
    if (!p.grades[nodeId] || grade > p.grades[nodeId]) {
      p.grades[nodeId] = grade;
      setDoc(doc(db, "users", user.uid), { progress: p }, { merge: true });
    }
  };

  if (authLoading) return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
      <div style={{ width: 40, height: 40, border: '3px solid #272735', borderTop: '3px solid #6366f1', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}/>
      <p style={{ color: '#818cf8', fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>Cargando plataforma…</p>
    </div>
  );
  if (!user) return <LoginScreen />;
  if (userRole === 'admin') return <AdminDashboard logout={handleLogout} />;
  if (!progress) return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
      <div style={{ width: 40, height: 40, border: '3px solid #272735', borderTop: '3px solid #6366f1', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}/>
      <p style={{ color: '#818cf8', fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>Sincronizando progreso…</p>
    </div>
  );

  const currentIndex = activeNode ? currentAllIds.indexOf(activeNode.id) : -1;
  const hasNextNode = currentIndex !== -1 && currentIndex < currentAllIds.length - 1;

  switch (currentRoute) {
    case 'theory':
      return <TheoryScreen node={activeNode} onBack={returnToDashboard} onComplete={() => completeCurrentNode(5)} onNext={() => goToNextNode(5)} hasNextNode={hasNextNode} />;
    case 'reading':
      return <ReadingScreen node={activeNode} onBack={returnToDashboard} onComplete={() => completeCurrentNode(10)} onNext={() => goToNextNode(10)} hasNextNode={hasNextNode} />;
    case 'quiz':
    case 'exam':
      return <QuizScreen node={activeNode} onBack={returnToDashboard} onComplete={(pts, grade) => completeCurrentNode(pts, grade)} onNext={(pts, grade) => goToNextNode(pts, grade)} hasNextNode={hasNextNode} updateGrade={updateGrade} />;
    case 'workshop':
      return <WorkshopScreen node={activeNode} onBack={returnToDashboard} onComplete={returnToDashboard} user={user} />;
    case 'dashboard':
    default:
      return (
        <StudentDashboard
          progress={progress}
          onSelectNode={navigateToNode}
          user={user}
          logout={handleLogout}
          curriculum={currentCurriculum}
          allCurriculums={allCurriculums}
          selectedLevel={dashboardLevel}
          setSelectedLevel={setDashboardLevel}
          scrollPos={dashboardScroll}
        />
      );
  }
}