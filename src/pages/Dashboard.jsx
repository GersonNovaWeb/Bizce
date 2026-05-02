import React, { useState, useEffect } from 'react';
import { Star, BookOpen, Volume2, Map as MapIcon, Lock, Trophy, LogOut, Activity, Users } from 'lucide-react';
import { collection, query, onSnapshot } from "firebase/firestore";
import { a1Curriculum } from '../data/a1_curriculum';

const SERIF  = '"Fraunces", "Instrument Serif", Georgia, serif';
const ITALIC = '"Instrument Serif", Georgia, serif';
const MONO   = '"JetBrains Mono", ui-monospace, monospace';

export const StudentDashboard = ({ progress, onSelectNode, userEmail, logout }) => {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#eef0f6', fontFamily: '"Inter", sans-serif', paddingBottom: 96 }}>

      {/* Header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 20, height: 60,
        background: 'rgba(17,17,24,0.85)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #272735', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: ITALIC, fontStyle: 'italic', fontWeight: 600, color: '#fff', fontSize: 17, lineHeight: 1 }}>b</span>
          </div>
          <span style={{ fontFamily: ITALIC, fontStyle: 'italic', fontSize: 17, letterSpacing: -0.3, color: '#eef0f6' }}>
            bizce<span style={{ color: '#ff6b6b', fontSize: 10 }}>♥</span>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            padding: '5px 11px', background: '#1e1e3a',
            border: '1px solid rgba(99,102,241,0.3)', borderRadius: 7,
            color: '#818cf8', display: 'flex', alignItems: 'center', gap: 5,
            fontSize: 12.5, fontFamily: MONO, fontWeight: 700,
          }}>
            <Star style={{ width: 12, height: 12, fill: 'currentColor' }}/> {progress?.points || 0} XP
          </div>
          <button
            onClick={logout}
            style={{
              padding: '7px 9px', background: 'transparent',
              border: '1px solid #272735', borderRadius: 7,
              color: '#7e8090', display: 'flex', alignItems: 'center',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#f87171'}
            onMouseLeave={e => e.currentTarget.style.color = '#7e8090'}
          >
            <LogOut style={{ width: 15, height: 15 }}/>
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="anim-fade-up" style={{ maxWidth: 640, margin: '0 auto', padding: '44px 24px 0' }}>
        <div style={{ fontFamily: MONO, fontSize: 10, color: '#818cf8', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 14 }}>
          Español A1 · En progreso
        </div>
        <h1 style={{ fontFamily: SERIF, fontSize: 52, fontWeight: 400, letterSpacing: -2, lineHeight: 0.95, margin: '0 0 16px' }}>
          ¡Hola, <em style={{ fontFamily: ITALIC, fontStyle: 'italic', color: '#818cf8' }}>Estudiante</em>!
        </h1>
        <p style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 300, color: '#b3b5c2', lineHeight: 1.6, margin: 0 }}>
          Continúa tu camino de aprendizaje.
        </p>
      </div>

      {/* Lesson map */}
      <div style={{ maxWidth: 640, margin: '44px auto 0', padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 36 }}>
        {a1Curriculum.units.map((unit, unitIdx) => (
          <div key={unit.id} style={{ animation: `fadeInUp 0.6s ${0.08 + unitIdx * 0.05}s cubic-bezier(0.16,1,0.3,1) backwards` }}>

            {/* Unit card */}
            <div style={{ background: '#111118', border: '1px solid #272735', borderRadius: 16, padding: '20px 24px', marginBottom: 16 }}>
              <h2 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 400, fontStyle: 'italic', letterSpacing: -0.8, margin: '0 0 6px', color: '#eef0f6' }}>
                {unit.title}
              </h2>
              <p style={{ fontSize: 13, color: '#7e8090', margin: 0 }}>{unit.description}</p>
            </div>

            {/* Nodes */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', paddingLeft: 60 }}>
              <div style={{ position: 'absolute', left: 27, top: 8, bottom: 8, width: 1, background: '#272735', borderRadius: 1 }} />
              {unit.nodes.map((node) => {
                const isUnlocked = progress?.unlockedNodes?.includes(node.id) || false;
                const isCompleted = progress?.completedNodes?.includes(node.id) || false;
                const grade = progress?.grades?.[node.id];

                let Icon = Star;
                if (node.type === 'theory')  Icon = BookOpen;
                if (node.type === 'reading') Icon = Volume2;
                if (node.type === 'quiz')    Icon = MapIcon;
                if (node.type === 'exam')    Icon = Trophy;

                let nodeStyle, labelColor;
                if (isCompleted) {
                  nodeStyle = { background: 'linear-gradient(135deg, #4ade80, #2d8d4c)', border: '2px solid rgba(74,222,128,0.35)', color: '#fff', boxShadow: '0 6px 20px -8px rgba(74,222,128,0.6)' };
                  labelColor = '#4ade80';
                } else if (isUnlocked && node.type === 'exam') {
                  nodeStyle = { background: 'linear-gradient(135deg, #fbbf24, #d97706)', border: '2px solid rgba(251,191,36,0.4)', color: '#fff', boxShadow: '0 0 0 4px rgba(251,191,36,0.1), 0 6px 20px -8px rgba(251,191,36,0.5)' };
                  labelColor = '#fbbf24';
                } else if (isUnlocked) {
                  nodeStyle = { background: 'linear-gradient(135deg, #6366f1, #4f46e5)', border: '2px solid rgba(99,102,241,0.4)', color: '#fff', boxShadow: '0 0 0 4px rgba(99,102,241,0.1), 0 6px 20px -8px rgba(99,102,241,0.6)' };
                  labelColor = '#818cf8';
                } else {
                  nodeStyle = { background: '#16161e', border: '1px solid #272735', color: '#54566a', opacity: 0.7 };
                  labelColor = '#54566a';
                }

                const typeLabel =
                  node.type === 'theory'  ? 'Teoría'   :
                  node.type === 'reading' ? 'Lectura'  :
                  node.type === 'exam'    ? 'Examen'   : 'Práctica';

                return (
                  <div key={node.id} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 20, paddingTop: 14, paddingBottom: 14, zIndex: 1 }}>
                    <button
                      onClick={() => isUnlocked && onSelectNode(node)}
                      disabled={!isUnlocked}
                      className="lesson-node"
                      style={{
                        position: 'absolute', left: -60,
                        width: 54, height: 54, borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, cursor: isUnlocked ? 'pointer' : 'not-allowed',
                        ...nodeStyle,
                      }}
                    >
                      {isUnlocked
                        ? <Icon style={{ width: 20, height: 20, fill: 'currentColor', opacity: 0.9 }}/>
                        : <Lock style={{ width: 16, height: 16 }}/>
                      }
                    </button>
                    <div style={{ flex: 1 }}>
                      <span style={{ display: 'block', fontFamily: MONO, fontSize: 9.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: labelColor, marginBottom: 4 }}>
                        {typeLabel}
                      </span>
                      <span style={{ fontSize: 16, fontFamily: isUnlocked ? SERIF : '"Inter", sans-serif', fontStyle: isUnlocked ? 'italic' : 'normal', fontWeight: isUnlocked ? 500 : 400, color: isUnlocked ? '#eef0f6' : '#54566a' }}>
                        {node.title}
                      </span>
                    </div>
                    {grade !== undefined && (
                      <div style={{ padding: '4px 10px', background: '#0d2118', border: '1px solid rgba(74,222,128,0.3)', borderRadius: 8, color: '#4ade80', fontFamily: MONO, fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                        {grade}/100
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AdminDashboard = ({ logout, db }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsub = onSnapshot(q, (snap) => {
      const usersData = [];
      snap.forEach(doc => {
        if (doc.data().role === 'student') usersData.push({ id: doc.id, ...doc.data() });
      });
      setStudents(usersData);
    });
    return () => unsub();
  }, [db]);

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#eef0f6', fontFamily: '"Inter", sans-serif', paddingBottom: 96 }}>

      {/* Header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 20, height: 60,
        background: 'rgba(17,17,24,0.85)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #272735', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: 'linear-gradient(135deg, #ff6b6b, #6366f1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Activity style={{ width: 15, height: 15, color: '#fff' }}/>
          </div>
          <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 17, letterSpacing: -0.3 }}>Panel del Profesor</span>
        </div>
        <button
          onClick={logout}
          style={{
            padding: '7px 13px', background: 'transparent',
            border: '1px solid #272735', borderRadius: 7,
            color: '#7e8090', display: 'flex', alignItems: 'center', gap: 6,
            fontSize: 13, fontWeight: 600, transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#eef0f6'}
          onMouseLeave={e => e.currentTarget.style.color = '#7e8090'}
        >
          <LogOut style={{ width: 15, height: 15 }}/> Salir
        </button>
      </header>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '44px 24px' }}>
        <div className="anim-fade-up" style={{ fontFamily: MONO, fontSize: 10, color: '#818cf8', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 12 }}>
          Panel de administración
        </div>
        <h1 className="anim-fade-up" style={{ fontFamily: SERIF, fontSize: 44, fontWeight: 400, letterSpacing: -1.5, lineHeight: 1, margin: '0 0 36px' }}>
          Progreso de <em style={{ fontFamily: ITALIC, fontStyle: 'italic', color: '#818cf8' }}>Alumnos</em>
        </h1>

        {students.length === 0 ? (
          <div className="anim-scale-in" style={{ background: '#111118', border: '1px solid #272735', padding: 48, borderRadius: 20, textAlign: 'center' }}>
            <Users style={{ width: 32, height: 32, margin: '0 auto 12px', color: '#54566a' }}/>
            <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 16, color: '#54566a', margin: 0 }}>
              Aún no hay estudiantes registrados.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {students.map((student, idx) => (
              <div key={student.id} style={{
                background: '#111118', border: '1px solid #272735',
                borderRadius: 20, padding: '24px 28px',
                animation: `fadeInUp 0.5s ${0.1 + idx * 0.07}s cubic-bezier(0.16,1,0.3,1) backwards`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid #272735' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                      background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontSize: 16, fontWeight: 700, fontFamily: SERIF,
                    }}>
                      {(student.email?.[0] || '?').toUpperCase()}
                    </div>
                    <div>
                      <h2 style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 18, fontWeight: 500, margin: '0 0 3px', letterSpacing: -0.4 }}>
                        {student.email}
                      </h2>
                      <p style={{ fontFamily: MONO, fontSize: 11, color: '#7e8090', margin: 0 }}>
                        {student.progress?.completedNodes?.length || 0} lecciones completadas
                      </p>
                    </div>
                  </div>
                  <div style={{
                    padding: '10px 16px', background: '#1e1e3a',
                    border: '1px solid rgba(99,102,241,0.3)', borderRadius: 12,
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <Star style={{ width: 15, height: 15, color: '#818cf8', fill: '#818cf8' }}/>
                    <span style={{ fontFamily: MONO, fontSize: 22, fontWeight: 700, color: '#818cf8', letterSpacing: -0.5 }}>
                      {student.progress?.points || 0}
                    </span>
                    <span style={{ fontFamily: MONO, fontSize: 10, color: '#7e8090', fontWeight: 700 }}>XP</span>
                  </div>
                </div>

                <div style={{ fontFamily: MONO, fontSize: 9.5, color: '#54566a', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 700 }}>
                  Calificaciones de Exámenes
                </div>
                {Object.keys(student.progress?.grades || {}).length === 0 ? (
                  <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: '#54566a', margin: 0 }}>
                    Sin exámenes completados aún.
                  </p>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
                    {Object.entries(student.progress?.grades || {}).map(([nodeId, grade]) => {
                      const nodeTitle = a1Curriculum.units.flatMap(u => u.nodes).find(n => n.id === nodeId)?.title || nodeId;
                      const gradeColor = grade >= 80 ? '#4ade80' : grade >= 60 ? '#fbbf24' : '#f87171';
                      const gradeBg   = grade >= 80 ? '#0d2118'  : grade >= 60 ? '#2a1f0a'  : '#2a1416';
                      return (
                        <div key={nodeId} style={{ background: '#16161e', border: '1px solid #272735', padding: '12px 16px', borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: 13, color: '#b3b5c2', flex: 1, marginRight: 12 }}>{nodeTitle}</span>
                          <span style={{ fontFamily: MONO, fontSize: 14, fontWeight: 700, color: gradeColor, background: gradeBg, padding: '3px 8px', borderRadius: 6 }}>
                            {grade}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
