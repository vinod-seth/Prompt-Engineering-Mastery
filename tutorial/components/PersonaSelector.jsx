import React, { useState } from 'react';

const personaData = [
  { id: 'marketer', label: '📣 Marketer', color: 'hsl(340, 80%, 60%)', bg: 'hsl(340, 20%, 97%)' },
  { id: 'researcher', label: '🔬 Researcher', color: 'hsl(200, 80%, 50%)', bg: 'hsl(200, 20%, 97%)' },
  { id: 'pm', label: '📋 Project Manager', color: 'hsl(140, 70%, 45%)', bg: 'hsl(140, 20%, 97%)' },
  { id: 'analyst', label: '💼 Analyst', color: 'hsl(270, 75%, 60%)', bg: 'hsl(270, 20%, 97%)' }
];

export default function PersonaSelector({ marketer, researcher, pm, analyst }) {
  const [activeTab, setActiveTab] = useState('marketer');

  const contentMap = {
    marketer,
    researcher,
    pm,
    analyst
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
      {/* Tabs Header */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        borderBottom: '1px solid hsl(220, 15%, 90%)',
        backgroundColor: 'hsl(220, 15%, 98%)',
        padding: '8px'
      }}>
        {personaData.map((persona) => {
          const isActive = activeTab === persona.id;
          return (
            <button
              key={persona.id}
              onClick={() => setActiveTab(persona.id)}
              style={{
                flex: '1 1 auto',
                padding: '12px 16px',
                margin: '4px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px',
                textAlign: 'center',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                color: isActive ? '#ffffff' : 'hsl(220, 10%, 40%)',
                backgroundColor: isActive ? persona.color : 'transparent',
                boxShadow: isActive ? `0 4px 10px rgba(0,0,0,0.15)` : 'none',
                outline: 'none'
              }}
            >
              {persona.label}
            </button>
          );
        })}
      </div>

      {/* Tab Body */}
      <div style={{
        padding: '24px',
        minHeight: '120px',
        backgroundColor: '#ffffff',
        transition: 'opacity 0.2s ease-in-out'
      }}>
        <div style={{
          fontSize: '15px',
          lineHeight: '1.6',
          color: 'hsl(220, 15%, 25%)'
        }}>
          {contentMap[activeTab] || <p style={{ color: 'hsl(0, 0%, 50%)' }}>No persona content provided for this tab.</p>}
        </div>
      </div>
    </div>
  );
}
