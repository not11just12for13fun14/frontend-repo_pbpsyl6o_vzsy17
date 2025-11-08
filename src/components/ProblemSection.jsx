import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bullets = [
  '65 % of Indians live in rural areas with doctor shortage',
  '1 doctor for every 10 000 + people in villages',
  'Delayed detection → preventable diseases & deaths',
  'Digital health apps exist — but not in local languages or offline',
];

export default function ProblemSection() {
  const [quoteText, setQuoteText] = useState('');
  const fullQuote = useMemo(
    () =>
      '“The story we shared isn’t isolated — it represents millions of families who struggle daily because healthcare access ends where the road does.”',
    []
  );

  // typewriter effect for the closing line
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setQuoteText(fullQuote.slice(0, i + 1));
      i += 1;
      if (i >= fullQuote.length) clearInterval(interval);
    }, 28);
    return () => clearInterval(interval);
  }, [fullQuote]);

  return (
    <section
      className="relative min-h-[94vh] w-full flex items-center justify-center text-white"
      style={{
        background: 'linear-gradient(180deg, #07103A 0%, #0F2B66 100%)',
      }}
    >
      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:gap-14">
        {/* Left: Textual narrative */}
        <div className="flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
          >
            The Problem We’re Solving
          </motion.h2>

          {/* Flame underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
            className="mt-3 h-1 origin-left rounded-full"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,106,61,0.1), rgba(255,106,61,0.95), rgba(255,106,61,0.2))',
            }}
          />

          {/* Bullets */}
          <ul className="mt-8 space-y-4">
            {bullets.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.35 + idx * 0.1 }}
                className="flex items-start gap-3 text-base leading-relaxed text-slate-200 md:text-lg"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <span
                  className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full"
                  style={{ background: '#FF6A3D', boxShadow: '0 0 12px rgba(255,106,61,0.65)' }}
                />
                <span className="/text">{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Closing quote with typewriter */}
          <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <AnimatePresence>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-slate-100 md:text-lg"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {quoteText}
                <span className="ml-0.5 inline-block animate-pulse">▌</span>
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Right: subtle animated map silhouette */}
        <div className="relative">
          <IndiaMapGlow />
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}

function IndiaMapGlow() {
  return (
    <div className="relative h-[420px] w-full md:h-[520px]">
      {/* Soft orb background */}
      <div
        className="absolute -top-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(15,43,102,0.6) 0%, rgba(7,16,58,0) 70%)' }}
      />

      {/* India map silhouette using clip-path and gradient stroke illusion */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="relative"
        >
          {/* SVG outline of India with glow */}
          <svg
            viewBox="0 0 400 500"
            className="h-[360px] w-auto md:h-[440px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#66A3FF" />
                <stop offset="100%" stopColor="#FF6A3D" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M134 69l17 7 4 13 10 8-6 9 8 8-4 8 8 12 12 1 6 7 14-5 10 8 11-2 6 6 1 14 10 7-5 15 8 14-10 11 2 9-8 9 3 10-9 8 1 10-9 12-2 13-9 11-12 6-10 9-12 2-10 9-14 3-9 9-13 3-9 10-12 5-8 6-10-2-7-5-5-9 1-8 7-7 8-4 4-8 10-7 7-9 10-6 6-9 10-7 6-10 9-8 5-10 9-9 4-11 10-9 3-12 8-10 5-11 0-9 6-10-1-10 7-10z"
              stroke="url(#grad)"
              strokeWidth="2.2"
              filter="url(#glow)"
              opacity="0.9"
            />
          </svg>

          {/* moving light sweep */}
          <motion.div
            initial={{ x: '-20%' }}
            animate={{ x: '120%' }}
            transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
            className="pointer-events-none absolute top-1/3 h-24 w-24 rotate-12 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,106,61,0.4), rgba(255,106,61,0.0))',
              filter: 'blur(12px)',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
      <div className="flex flex-col items-center gap-2">
        <div className="h-5 w-5 animate-pulse rounded-full" style={{ background: '#FF6A3D', boxShadow: '0 0 14px rgba(255,106,61,0.8)' }} />
        <div className="text-xs text-slate-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Scroll</div>
      </div>
    </div>
  );
}
