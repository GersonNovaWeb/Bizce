import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from '../firebase';
import logo from '../assets/logo.png';
import { TOK, TR } from '../tokens';
import { useIsMobile, BizceWordmark, Ic } from '../components/BizceUI';

export const LoginScreen = () => {
  const [email, setEmail]           = useState('');
  const [pass, setPass]             = useState('');
  const [isRegistering, setIsReg]   = useState(false);
  const [role, setRole]             = useState('student');
  const [error, setError]           = useState('');
  const [isLoading, setIsLoading]   = useState(false);
  const [showPass, setShowPass]     = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        await setDoc(doc(db, "users", userCredential.user.uid), {
          email,
          role,
          progress: {
            points: 0,
            unlockedNodes: ['u1_n1'],
            completedNodes: [],
            grades: {},
            streak: 1,
            lastActive: new Date().toISOString().split('T')[0],
          },
        });
      } else {
        await signInWithEmailAndPassword(auth, email, pass);
      }
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password') {
        setError('E-posta veya şifre hatalı.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('Bu e-posta zaten kullanımda.');
      } else if (err.code === 'auth/weak-password') {
        setError('Şifre en az 6 karakter olmalıdır.');
      } else {
        setError('Beklenmedik bir hata oluştu. Tekrar dene.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const switchTab = (reg) => { setIsReg(reg); setError(''); };

  // ── Shared pieces ──────────────────────────────────────────────────────────

  const tabRow = (
    <div style={{ display:'flex', gap:4, padding:4, background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:10, marginBottom:32 }}>
      {[[false, TR.signIn],[true, TR.signUp]].map(([reg, label]) => (
        <button key={label} type="button" onClick={() => switchTab(reg)} style={{
          flex:1, padding:'9px 0', textAlign:'center',
          background: isRegistering === reg ? TOK.surface3 : 'transparent',
          borderRadius:7, fontSize:13, fontWeight:600,
          color: isRegistering === reg ? TOK.text : TOK.textDim,
          border: isRegistering === reg ? `1px solid ${TOK.borderHi}` : '1px solid transparent',
          cursor:'pointer',
        }}>{label}</button>
      ))}
    </div>
  );

  const emailInput = (
    <div style={{ marginTop:6, marginBottom:16, padding:'12px 14px', background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:9, display:'flex', alignItems:'center', gap:10 }}>
      <Ic.Mail size={15} color={TOK.textMute}/>
      <input
        type="email" value={email} onChange={e => setEmail(e.target.value)} required
        placeholder="e-posta@academia.es"
        style={{ flex:1, background:'transparent', border:'none', outline:'none', fontSize:14, color:TOK.text, fontFamily:TOK.sans }}
      />
    </div>
  );

  const passInput = (
    <div style={{ marginTop:6, marginBottom:24, padding:'12px 14px', background:TOK.surface, border:`1px solid ${TOK.indigo}50`, borderRadius:9, display:'flex', alignItems:'center', gap:10, boxShadow:`0 0 0 3px ${TOK.indigo}15` }}>
      <Ic.Lock2 size={15} color={TOK.textMute}/>
      <input
        type={showPass ? 'text' : 'password'} value={pass}
        onChange={e => setPass(e.target.value)} required minLength={6}
        placeholder="••••••••"
        style={{ flex:1, background:'transparent', border:'none', outline:'none', fontSize:14, color:TOK.text, fontFamily:TOK.sans }}
      />
      <button type="button" onClick={() => setShowPass(p => !p)} style={{ background:'none', border:'none', padding:0, cursor:'pointer', display:'flex', alignItems:'center' }}>
        <Ic.Eye size={15} color={TOK.textMute}/>
      </button>
    </div>
  );

  const roleRow = isRegistering && (
    <div style={{ display:'flex', gap:4, padding:4, background:TOK.surface2, border:`1px solid ${TOK.border}`, borderRadius:8, marginBottom:16 }}>
      {[['student','Öğrenci'],['admin','Öğretmen']].map(([v, l]) => (
        <button key={v} type="button" onClick={() => setRole(v)} style={{
          flex:1, padding:'8px 0', background: role === v ? TOK.indigo : 'transparent',
          border:'none', borderRadius:6, fontSize:12, fontWeight:700,
          color: role === v ? '#fff' : TOK.textDim, cursor:'pointer', transition:'all 0.2s',
        }}>{l}</button>
      ))}
    </div>
  );

  const errorBox = error && (
    <div style={{ padding:'10px 14px', background:TOK.roseSoft, border:`1px solid ${TOK.rose}30`, borderRadius:8, marginBottom:16, display:'flex', alignItems:'center', gap:10 }}>
      <Ic.AlertCircle size={14} color={TOK.rose}/>
      <span style={{ fontSize:12.5, color:TOK.rose, fontWeight:600, fontFamily:TOK.sans }}>{error}</span>
    </div>
  );

  const submitBtn = (
    <button type="submit" disabled={isLoading} className="btn-pri hov" style={{
      width:'100%', padding:'13px 0', background:TOK.indigo, color:'#fff',
      borderRadius:9, fontSize:14, fontWeight:700, letterSpacing:0.2,
      cursor: isLoading ? 'not-allowed' : 'pointer',
      display:'flex', alignItems:'center', justifyContent:'center', gap:8,
      boxShadow:`0 0 0 1px ${TOK.indigoHi} inset, 0 8px 24px -8px ${TOK.indigo}60`,
      border:'none', opacity: isLoading ? 0.75 : 1,
    }}>
      {isLoading
        ? <div style={{ width:18, height:18, border:`2px solid rgba(255,255,255,.3)`, borderTopColor:'#fff', borderRadius:'50%', animation:'spin 0.7s linear infinite' }}/>
        : <>{TR.continue} <Ic.Arrow size={15} sw={2.2}/></>
      }
    </button>
  );

  const orDivider = (
    <div style={{ display:'flex', alignItems:'center', gap:12, margin:'26px 0', color:TOK.textMute, fontFamily:TOK.mono, fontSize:10, letterSpacing:2 }}>
      <div style={{ flex:1, height:1, background:TOK.border }}/>
      <span>VEYA</span>
      <div style={{ flex:1, height:1, background:TOK.border }}/>
    </div>
  );

  const socialBtns = (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
      {['Google','Apple'].map(p => (
        <div key={p} className="btn-sec hov" style={{ padding:'10px 0', textAlign:'center', background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:9, fontSize:13, fontWeight:600, color:TOK.text, cursor:'pointer' }}>
          {p}
        </div>
      ))}
    </div>
  );

  // ── Mobile layout ──────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div style={{ minHeight:'100dvh', color:TOK.text, fontFamily:TOK.sans, display:'flex', flexDirection:'column', position:'relative', overflow:'hidden', background:TOK.bg }}>
        <div style={{ position:'absolute', top:-80, left:-80, width:280, height:280, background:`radial-gradient(circle, ${TOK.indigo}40, transparent 70%)`, filter:'blur(40px)', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', bottom:-60, right:-60, width:200, height:200, background:`radial-gradient(circle, ${TOK.coral}25, transparent 70%)`, filter:'blur(40px)', pointerEvents:'none' }}/>

        <div style={{ position:'relative', padding:'20px 24px 0', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <img src={logo} alt="bizce" style={{ width:32, height:32, objectFit:'contain' }}/>
            <BizceWordmark size={17}/>
          </div>
          <div style={{ padding:'4px 9px', background:TOK.surface, border:`1px solid ${TOK.border}`, borderRadius:100, fontSize:11, color:TOK.textDim, fontWeight:600 }}>TR ▾</div>
        </div>

        <div style={{ position:'relative', flex:1, padding:'32px 24px 32px', display:'flex', flexDirection:'column', justifyContent:'space-between' }} className="noscroll">
          <div className="animFadeUp">
            <div style={{ fontFamily:TOK.mono, fontSize:9.5, color:TOK.indigoHi, letterSpacing:2.2, textTransform:'uppercase', marginBottom:14 }}>İspanyolca · A1 → C2</div>
            <h1 style={{ fontFamily:TOK.serif, fontSize:42, fontWeight:400, lineHeight:0.95, letterSpacing:-1.6, margin:'0 0 18px' }}>
              İspanyolca,<br/><em style={{ color:TOK.indigoHi, fontFamily:TOK.italic }}>nihayet</em> ezbersiz.
            </h1>
            <p style={{ fontFamily:TOK.serif, fontSize:14.5, fontWeight:300, lineHeight:1.5, color:TOK.textSec, margin:0 }}>
              Akademik titizlik. Modern hız.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="animFadeUp" style={{ animationDelay:'0.15s', marginTop:32 }}>
            {errorBox}
            <label style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textDim, textTransform:'uppercase', letterSpacing:2, fontWeight:600 }}>{TR.email}</label>
            {emailInput}
            <label style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textDim, textTransform:'uppercase', letterSpacing:2, fontWeight:600 }}>{TR.password}</label>
            {passInput}
            {roleRow}
            {submitBtn}
            {orDivider}
            {socialBtns}
            <p style={{ marginTop:20, marginBottom:0, fontSize:12, color:TOK.textDim, textAlign:'center' }}>
              {isRegistering ? 'Hesabın var mı?' : 'Hesabın yok mu?'}{' '}
              <button type="button" onClick={() => switchTab(!isRegistering)} style={{ background:'none', border:'none', color:TOK.indigoHi, fontWeight:700, fontSize:12, cursor:'pointer', padding:0, fontFamily:TOK.sans }}>
                {isRegistering ? TR.signIn : 'Kayıt ol'}
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }

  // ── Desktop layout ─────────────────────────────────────────────────────────
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1.05fr 1fr', height:'100vh', color:TOK.text, fontFamily:TOK.sans, background:TOK.bg }}>

      {/* LEFT — editorial */}
      <div style={{ background:TOK.surface, borderRight:`1px solid ${TOK.border}`, padding:'56px 64px', display:'flex', flexDirection:'column', justifyContent:'space-between', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-150, left:-150, width:500, height:500, background:`radial-gradient(circle, ${TOK.indigo}30, transparent 70%)`, filter:'blur(60px)', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', bottom:-100, right:-100, width:300, height:300, background:`radial-gradient(circle, ${TOK.coral}20, transparent 70%)`, filter:'blur(50px)', pointerEvents:'none' }}/>

        {/* Logo */}
        <div style={{ position:'relative', display:'flex', alignItems:'center', gap:12 }}>
          <img src={logo} alt="bizce" style={{ width:38, height:38, objectFit:'contain' }}/>
          <BizceWordmark size={20}/>
          <div style={{ marginLeft:8, padding:'2px 7px', background:TOK.indigoSoft, color:TOK.indigoHi, fontFamily:TOK.mono, fontSize:9.5, fontWeight:700, letterSpacing:1.5, borderRadius:4, border:`1px solid ${TOK.indigo}40` }}>v2.0</div>
        </div>

        {/* Hero copy */}
        <div style={{ position:'relative' }}>
          <div style={{ fontFamily:TOK.mono, fontSize:10.5, color:TOK.indigoHi, letterSpacing:2.4, textTransform:'uppercase', marginBottom:18, display:'flex', alignItems:'center', gap:10 }}>
            <span style={{ width:24, height:1, background:TOK.indigoHi, display:'inline-block' }}/>
            <span>İspanyolca · A1 → C2</span>
          </div>
          <h1 style={{ fontFamily:TOK.serif, fontSize:76, fontWeight:400, lineHeight:0.95, letterSpacing:-2.5, margin:0, color:TOK.text }}>
            İspanyolca, <em style={{ fontStyle:'italic', color:TOK.indigoHi, fontFamily:TOK.italic }}>nihayet</em><br/>
            ezbersiz.
          </h1>
          <p style={{ fontFamily:TOK.serif, fontSize:18, fontWeight:300, lineHeight:1.55, color:TOK.textSec, marginTop:26, maxWidth:480 }}>
            Akademik titizlikle hazırlanmış, modern uygulamanın hızıyla. Türkçeden İspanyolcaya geçişin ihtiyaç duyduğu her şey, tek bir yerde.
          </p>
          <div style={{ display:'flex', gap:28, marginTop:36 }}>
            {[['340','Ders'],['12k+','Öğrenci'],['6','Seviye']].map(([n, l], i) => (
              <div key={i}>
                <div style={{ fontFamily:TOK.serif, fontSize:32, fontWeight:500, color:TOK.text, lineHeight:1, letterSpacing:-1 }}>{n}</div>
                <div style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, letterSpacing:1.8, textTransform:'uppercase', marginTop:6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ position:'relative', display:'flex', alignItems:'center', gap:18, fontFamily:TOK.mono, fontSize:10, color:TOK.textMute, letterSpacing:1.5, textTransform:'uppercase' }}>
          <span>© 2026 bizce</span>
          <span style={{ width:3, height:3, borderRadius:2, background:TOK.textMute, display:'inline-block' }}/>
          <span>Estambul · Madrid</span>
        </div>
      </div>

      {/* RIGHT — form */}
      <div style={{ background:TOK.bg, padding:'56px 64px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <form onSubmit={handleSubmit} style={{ maxWidth:380, margin:'0 auto', width:'100%' }} className="animFadeUp">
          {tabRow}

          <h2 style={{ fontFamily:TOK.serif, fontSize:38, fontWeight:400, letterSpacing:-1, lineHeight:1.05, margin:'0 0 8px', color:TOK.text }}>
            {isRegistering ? TR.signUp : TR.welcome}.
          </h2>
          <p style={{ fontSize:13.5, color:TOK.textDim, marginTop:0, marginBottom:32, fontFamily:TOK.sans }}>
            {isRegistering ? 'Hesabını oluşturmak için doldur.' : 'İspanyolca kütüphanene erişim sağla.'}
          </p>

          {errorBox}

          <label style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textDim, textTransform:'uppercase', letterSpacing:2, fontWeight:600 }}>{TR.email}</label>
          {emailInput}

          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <label style={{ fontFamily:TOK.mono, fontSize:10, color:TOK.textDim, textTransform:'uppercase', letterSpacing:2, fontWeight:600 }}>{TR.password}</label>
            {!isRegistering && (
              <span style={{ fontSize:11, color:TOK.indigoHi, fontWeight:600, cursor:'pointer', fontFamily:TOK.sans }}>{TR.forgot}</span>
            )}
          </div>
          {passInput}

          {roleRow}
          {submitBtn}
          {orDivider}
          {socialBtns}

          <p style={{ marginTop:24, fontSize:11, color:TOK.textMute, textAlign:'center', lineHeight:1.5, fontFamily:TOK.sans }}>
            Devam ederek{' '}
            <span style={{ color:TOK.textDim, textDecoration:'underline', cursor:'pointer' }}>Kullanım Koşulları</span>
            {' '}ve{' '}
            <span style={{ color:TOK.textDim, textDecoration:'underline', cursor:'pointer' }}>Gizlilik</span>
            {' '}politikasını kabul ediyorsun.
          </p>
        </form>
      </div>
    </div>
  );
};
