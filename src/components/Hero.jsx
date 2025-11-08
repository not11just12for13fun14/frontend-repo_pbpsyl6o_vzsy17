import React from 'react';
import { motion } from 'framer-motion';
import BackgroundSpline from './BackgroundSpline';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100vh] w-full items-center justify-center">
      <BackgroundSpline />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
          style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
        >
          AarogyaAI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-200"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Building equitable healthcare access — powered by intelligence, designed for everyone.
        </motion.p>
      </div>
    </section>
  );
}
