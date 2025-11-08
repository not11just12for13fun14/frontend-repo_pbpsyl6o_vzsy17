import React from 'react';
import Spline from '@splinetool/react-spline';

export default function BackgroundSpline() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Spline
        scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Cinematic gradient glaze to enforce flames.blue palette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(7,16,58,0.75) 0%, rgba(15,43,102,0.65) 40%, rgba(7,16,58,0.85) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        style={{
          background:
            'radial-gradient(500px 260px at 70% 40%, rgba(255,106,61,0.18), rgba(255,106,61,0.06) 40%, transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
    </div>
  );
}
