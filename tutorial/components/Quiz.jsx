import React, { useState } from 'react';

export default function Quiz({ question, options = [], answerIndex, explanation }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  return (
    <div style={{
      border: '1px solid hsl(220, 15%, 85%)',
      borderRadius: '12px',
      overflow: 'hidden',
      margin: '24px 0',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      backgroundColor: '#ffffff'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'hsl(220, 15%, 98%)',
        padding: '14px 18px',
        borderBottom: '1px solid hsl(220, 15%, 90%)',
        fontWeight: '700',
        color: 'hsl(220, 20%, 20%)',
        fontSize: '14px'
      }}>
        ✍️ Concept Check Question
      </div>

      {/* Body */}
      <div style={{ padding: '20px' }}>
        <p style={{ margin: '0 0 16px 0', fontWeight: '600', color: 'hsl(220, 15%, 15%)', fontSize: '15px', lineHeight: '1.5' }}>
          {question}
        </p>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {options.map((option, idx) => {
            let itemBg = '#ffffff';
            let itemBorder = 'hsl(220, 15%, 88%)';
            let itemColor = 'hsl(220, 15%, 25%)';

            if (submitted) {
              if (idx === answerIndex) {
                itemBg = 'hsl(140, 80%, 94%)';
                itemBorder = 'hsl(140, 70%, 40%)';
                itemColor = 'hsl(140, 75%, 20%)';
              } else if (idx === selected) {
                itemBg = 'hsl(350, 80%, 95%)';
                itemBorder = 'hsl(350, 70%, 50%)';
                itemColor = 'hsl(350, 75%, 25%)';
              }
            } else if (selected === idx) {
              itemBg = 'hsl(200, 80%, 96%)';
              itemBorder = 'hsl(200, 80%, 50%)';
            }

            return (
              <button
                key={idx}
                disabled={submitted}
                onClick={() => setSelected(idx)}
                style={{
                  padding: '12px 16px',
                  border: `2px solid ${itemBorder}`,
                  borderRadius: '8px',
                  backgroundColor: itemBg,
                  color: itemColor,
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: submitted ? 'default' : 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  outline: 'none'
                }}
              >
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: selected === idx ? 'hsl(200, 80%, 50%)' : 'hsl(220, 15%, 90%)',
                  color: selected === idx ? '#ffffff' : 'hsl(220, 15%, 40%)',
                  marginRight: '12px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  {String.fromCharCode(65 + idx)}
                </span>
                {option}
              </button>
            );
          })}
        </div>

        {/* Buttons & Explanations */}
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              style={{
                alignSelf: 'flex-start',
                padding: '10px 20px',
                backgroundColor: selected === null ? 'hsl(220, 10%, 80%)' : 'hsl(200, 80%, 50%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: selected === null ? 'default' : 'pointer',
                boxShadow: selected === null ? 'none' : '0 2px 6px rgba(0, 150, 255, 0.2)'
              }}
            >
              Submit Answer
            </button>
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: 'hsl(220, 20%, 97%)',
              borderLeft: `4px solid ${selected === answerIndex ? 'hsl(140, 70%, 45%)' : 'hsl(350, 70%, 50%)'}`
            }}>
              <span style={{
                fontWeight: '700',
                fontSize: '14px',
                color: selected === answerIndex ? 'hsl(140, 70%, 30%)' : 'hsl(350, 70%, 35%)'
              }}>
                {selected === answerIndex ? '🎉 Correct Answer!' : '❌ Incorrect. Try again!'}
              </span>
              <p style={{ margin: '0', fontSize: '13.5px', lineHeight: '1.5', color: 'hsl(220, 15%, 35%)' }}>
                {explanation}
              </p>
              <button
                onClick={handleReset}
                style={{
                  alignSelf: 'flex-start',
                  padding: '6px 12px',
                  backgroundColor: '#ffffff',
                  color: 'hsl(220, 15%, 30%)',
                  border: '1px solid hsl(220, 15%, 80%)',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '4px'
                }}
              >
                Reset Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
