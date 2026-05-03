import React from 'react';
import { ArrowLeft, Clock, BookOpen, Star } from 'lucide-react';
import { TOK } from '../tokens';

const SERIF = '"Fraunces", "Instrument Serif", Georgia, serif';

export default function UnitPresentation({ presentation, unitTitle, levelColor, levelId, onStart, onBack }) {
  if (!presentation) return null;

  const { subtitle, subtitle_es, tagline, tagline_es, whatYouLearn, turkoTip, estimatedTime, nodeCount, badgeOnComplete } = presentation;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: TOK.bg, overflowY: 'auto',
      fontFamily: TOK.sans, color: TOK.text,
    }}>
      {/* Gradient overlay */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 320,
        background: `radial-gradient(ellipse 80% 100% at 50% 0%, ${levelColor}20 0%, transparent 100%)`,
        pointerEvents: 'none',
      }}/>

      <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto', padding: '28px 24px 80px' }}>

        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: TOK.surface3, border: `1px solid ${TOK.border}`,
            borderRadius: 8, padding: '7px 12px',
            color: TOK.textDim, cursor: 'pointer',
            fontFamily: TOK.mono, fontSize: 11, fontWeight: 700,
          }}
        >
          <ArrowLeft size={14}/> Geri
        </button>

        {/* Level badge */}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: `${levelColor}18`, color: levelColor,
            border: `1px solid ${levelColor}45`,
            borderRadius: 6, fontFamily: TOK.mono,
            fontSize: 13, fontWeight: 700, letterSpacing: 2,
          }}>
            {levelId}
          </span>
        </div>

        {/* Unit title */}
        <h1 style={{
          fontFamily: SERIF, fontSize: 34, fontWeight: 400,
          letterSpacing: -1.3, textAlign: 'center',
          marginTop: 16, marginBottom: 0, lineHeight: 1.1,
        }}>
          <em>{unitTitle}</em>
        </h1>

        {/* Subtitle */}
        <div style={{ textAlign: 'center', marginTop: 14 }}>
          <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 17, color: TOK.textSec }}>
            {subtitle}
          </div>
          <div style={{ fontFamily: TOK.mono, fontSize: 10.5, color: TOK.textMute, marginTop: 5, letterSpacing: 0.5 }}>
            {subtitle_es}
          </div>
        </div>

        {/* Tagline */}
        <div style={{
          marginTop: 20, padding: '16px 20px',
          background: TOK.surface, borderRadius: 12,
          border: `1px solid ${TOK.border}`,
          borderLeft: `3px solid ${levelColor}`,
        }}>
          <div style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 500, color: TOK.text, lineHeight: 1.55 }}>
            {tagline}
          </div>
          <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: TOK.textMute, marginTop: 8 }}>
            {tagline_es}
          </div>
        </div>

        {/* What you'll learn */}
        <div style={{ marginTop: 24 }}>
          <div style={{
            fontFamily: TOK.mono, fontSize: 9.5, color: TOK.textMute,
            letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12,
          }}>
            Ne öğreneceksin?
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {whatYouLearn.map((item, i) => (
              <div key={i} style={{
                padding: '11px 15px',
                background: TOK.surface, borderRadius: 10,
                border: `1px solid ${TOK.border}`,
                borderLeft: `3px solid ${levelColor}60`,
              }}>
                <div style={{ fontFamily: TOK.sans, fontSize: 13.5, fontWeight: 600, color: TOK.text }}>
                  {item.tr}
                </div>
                <div style={{ fontFamily: TOK.mono, fontSize: 10.5, color: TOK.textMute, marginTop: 3 }}>
                  {item.es}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Türkçe İpucu */}
        <div style={{
          marginTop: 20, padding: '16px 18px',
          background: TOK.amberSoft,
          border: `1px solid ${TOK.amber}30`,
          borderRadius: 12,
        }}>
          <div style={{
            fontFamily: TOK.mono, fontSize: 9.5, color: TOK.amber,
            letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10,
          }}>
            Türkçe İpucu 🇹🇷
          </div>
          <div style={{ fontFamily: SERIF, fontSize: 14.5, color: TOK.text, lineHeight: 1.55 }}>
            {turkoTip.tr}
          </div>
          <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 12.5, color: TOK.textMute, marginTop: 7 }}>
            {turkoTip.es}
          </div>
        </div>

        {/* Footer meta */}
        <div style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <span style={{
            display: 'flex', alignItems: 'center', gap: 5,
            fontFamily: TOK.mono, fontSize: 10.5, color: TOK.textDim,
            background: TOK.surface3, padding: '5px 10px', borderRadius: 6,
            border: `1px solid ${TOK.border}`,
          }}>
            <Clock size={11}/> {estimatedTime}
          </span>
          <span style={{
            display: 'flex', alignItems: 'center', gap: 5,
            fontFamily: TOK.mono, fontSize: 10.5, color: TOK.textDim,
            background: TOK.surface3, padding: '5px 10px', borderRadius: 6,
            border: `1px solid ${TOK.border}`,
          }}>
            <BookOpen size={11}/> {nodeCount} nodo
          </span>
          {badgeOnComplete && (
            <span style={{
              display: 'flex', alignItems: 'center', gap: 5,
              fontFamily: TOK.mono, fontSize: 10.5, color: levelColor,
              background: `${levelColor}15`, padding: '5px 10px', borderRadius: 6,
              border: `1px solid ${levelColor}30`,
            }}>
              <Star size={11}/> {badgeOnComplete.tr}
            </span>
          )}
        </div>

        {/* Start button */}
        <button
          onClick={onStart}
          style={{
            width: '100%', marginTop: 32, padding: '16px',
            textAlign: 'center',
            background: `linear-gradient(135deg, ${levelColor}, ${levelColor}bb)`,
            color: '#fff', borderRadius: 12,
            fontFamily: SERIF, fontSize: 20, fontWeight: 400, letterSpacing: -0.3,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            border: 'none', cursor: 'pointer',
            boxShadow: `0 10px 36px -10px ${levelColor}70`,
          }}
        >
          Başla →
        </button>

      </div>
    </div>
  );
}
