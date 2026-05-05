import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TOK } from '../tokens';
import { detectTurkishErrors } from '../utils/turkishErrorDetector';
import { logError } from '../pages/ErrorDiary';

const SEVERITY_COLOR = {
  high:   TOK.coral,
  medium: TOK.amber,
  low:    TOK.textDim,
};

const SEVERITY_BG = {
  high:   TOK.coralSoft,
  medium: TOK.amberSoft,
  low:    TOK.surface3,
};

export function TurkishErrorDetector({ value, onChange, placeholder, style, user, db, disabled, onFocus, onBlur, wrapperStyle }) {
  const [errors, setErrors] = useState([]);
  const [analyzed, setAnalyzed] = useState(false);
  const timerRef = useRef(null);
  const loggedRef = useRef(new Set());

  const analyze = useCallback((text) => {
    const found = detectTurkishErrors(text);
    setErrors(found);
    setAnalyzed(true);

    if (user && db) {
      for (const e of found) {
        if (e.severity === 'high') {
          const key = e.type + '|' + e.original;
          if (!loggedRef.current.has(key)) {
            loggedRef.current.add(key);
            logError(db, user.uid, {
              nodeId:        '',
              nodeTitle:     'Yazı Atölyesi',
              errorType:     e.type,
              userAnswer:    e.original,
              correctAnswer: e.suggestion,
            });
          }
        }
      }
    }
  }, [user, db]);

  useEffect(() => {
    loggedRef.current = new Set();
  }, [value === '']);

  const handleChange = (e) => {
    const newVal = e.target.value;
    onChange(e);
    setAnalyzed(false);

    if (timerRef.current) clearTimeout(timerRef.current);
    if (newVal.trim().length >= 5) {
      timerRef.current = setTimeout(() => analyze(newVal), 800);
    } else {
      setErrors([]);
      setAnalyzed(false);
    }
  };

  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const showPanel = analyzed && value.trim().length >= 5;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...wrapperStyle }}>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        style={{ flex: 1, ...style }}
      />

      {showPanel && (
        <div style={{
          background: TOK.surface2,
          border: `1px solid ${TOK.border}`,
          borderRadius: 10,
          overflow: 'hidden',
        }}>
          <div style={{
            padding: '8px 14px',
            borderBottom: errors.length ? `1px solid ${TOK.border}` : 'none',
            fontFamily: TOK.mono,
            fontSize: 10,
            color: TOK.textMute,
            letterSpacing: 1.6,
            textTransform: 'uppercase',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 7,
          }}>
            <span>🇹🇷</span> Türkçe Hata Tespiti
          </div>

          {errors.length === 0 ? (
            <div style={{
              padding: '10px 14px',
              fontFamily: TOK.mono,
              fontSize: 11,
              color: TOK.green,
              fontWeight: 600,
            }}>
              ✓ Harika! Hata bulunamadı.
            </div>
          ) : (
            <div>
              {errors.map((e, i) => (
                <div key={i} style={{
                  padding: '10px 14px',
                  borderBottom: i < errors.length - 1 ? `1px solid ${TOK.border}` : 'none',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5, flexWrap: 'wrap' }}>
                    <span style={{
                      textDecoration: 'line-through',
                      color: TOK.coral,
                      fontFamily: TOK.mono,
                      fontSize: 12,
                      fontWeight: 600,
                    }}>
                      {e.original}
                    </span>
                    <span style={{ color: TOK.textMute, fontSize: 11 }}>→</span>
                    <span style={{
                      color: TOK.green,
                      fontFamily: TOK.mono,
                      fontSize: 12,
                      fontWeight: 600,
                    }}>
                      {e.suggestion}
                    </span>
                    <span style={{
                      marginLeft: 'auto',
                      padding: '2px 7px',
                      background: SEVERITY_BG[e.severity],
                      color: SEVERITY_COLOR[e.severity],
                      borderRadius: 4,
                      fontFamily: TOK.mono,
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      flexShrink: 0,
                    }}>
                      {e.severity}
                    </span>
                  </div>
                  <div style={{
                    fontFamily: TOK.sans,
                    fontSize: 12,
                    color: TOK.textSec,
                    lineHeight: 1.5,
                    marginBottom: 3,
                  }}>
                    {e.explanation_tr}
                  </div>
                  <div style={{
                    fontFamily: TOK.sans,
                    fontSize: 11,
                    color: TOK.textDim,
                    lineHeight: 1.4,
                    fontStyle: 'italic',
                  }}>
                    {e.explanation_es}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
