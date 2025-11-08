import React from 'react';

export default function SectionContainer({ children }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #07103A 0%, #0F2B66 100%)' }}>
      {children}
    </div>
  );
}
