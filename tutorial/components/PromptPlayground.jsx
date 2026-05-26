import React, { useState } from 'react';

export default function PromptPlayground({ template, variables = [], systemInstruction }) {
  // Initialize state for each variable
  const initialValues = {};
  variables.forEach(v => {
    initialValues[v] = `[${v}]`;
  });
  
  const [vals, setVals] = useState(initialValues);

  const handleInputChange = (variable, value) => {
    setVals(prev => ({
      ...prev,
      [variable]: value || `[${variable}]`
    }));
  };

  // Replace variables in the template string
  const renderPrompt = () => {
    let output = template;
    variables.forEach(v => {
      // Use regex to replace all occurrences of {v}
      const regex = new RegExp(`{${v}}`, 'g');
      output = output.replace(regex, vals[v]);
    });
    return output;
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
      {/* Title Header */}
      <div style={{
        backgroundColor: 'hsl(220, 15%, 98%)',
        padding: '12px 18px',
        borderBottom: '1px solid hsl(220, 15%, 90%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span style={{ fontWeight: '700', color: 'hsl(220, 20%, 20%)', fontSize: '14px' }}>
          🎛️ Interactive Prompt Template Sandbox
        </span>
        <span style={{ fontSize: '11px', backgroundColor: 'hsl(200, 85%, 95%)', color: 'hsl(200, 85%, 35%)', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
          Programmatic Playground
        </span>
      </div>

      {/* Input Field Panel */}
      <div style={{ padding: '18px', borderBottom: '1px solid hsl(220, 15%, 93%)', backgroundColor: 'hsl(0, 0%, 100%)' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(220, 10%, 50%)' }}>
          Assign Python Variables:
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          {variables.map((variable) => (
            <div key={variable} style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: '12px', fontWeight: '600', marginBottom: '4px', color: 'hsl(220, 15%, 30%)' }}>
                <code>{variable}</code>
              </label>
              <input
                type="text"
                placeholder={`Value for ${variable}...`}
                onChange={(e) => handleInputChange(variable, e.target.value)}
                style={{
                  padding: '8px 12px',
                  border: '1px solid hsl(220, 15%, 85%)',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  backgroundColor: 'hsl(220, 15%, 99%)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'hsl(200, 80%, 50%)'}
                onBlur={(e) => e.target.style.borderColor = 'hsl(220, 15%, 85%)'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Result Render Panel */}
      <div style={{ backgroundColor: 'hsl(220, 25%, 10%)', padding: '20px', color: 'hsl(220, 20%, 95%)', fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace', fontSize: '13px', lineHeight: '1.6' }}>
        {systemInstruction && (
          <div style={{ marginBottom: '14px', borderBottom: '1px solid hsl(220, 20%, 20%)', paddingBottom: '12px' }}>
            <span style={{ color: 'hsl(270, 70%, 75%)', fontWeight: 'bold' }}># SYSTEM INSTRUCTION:</span>
            <div style={{ color: 'hsl(220, 20%, 80%)', marginTop: '4px' }}>{systemInstruction}</div>
          </div>
        )}
        <div>
          <span style={{ color: 'hsl(140, 70%, 70%)', fontWeight: 'bold' }}># CONSTRUCTED USER PROMPT:</span>
          <pre style={{
            whiteSpace: 'pre-wrap',
            margin: '8px 0 0 0',
            fontFamily: 'inherit',
            color: 'hsl(0, 0%, 100%)'
          }}>{renderPrompt()}</pre>
        </div>
      </div>
    </div>
  );
}
