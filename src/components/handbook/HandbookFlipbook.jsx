'use client';
import React, { useState, useCallback, useEffect, useRef } from 'react';

const TOTAL_PAGES = 19;

const HandbookFlipbook = () => {
  const [page, setPage] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef(null);
  const audioCtx = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, [page]);

  const playSound = useCallback(() => {
    try {
      if (!audioCtx.current) {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        if (ctx.state === 'suspended') ctx.resume();
        audioCtx.current = ctx;
      }
      const ctx = audioCtx.current;
      const len = ctx.sampleRate * 0.15;
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) {
        const t = i / ctx.sampleRate;
        const e = Math.exp(-t * 30);
        d[i] = ((Math.random() * 2 - 1) * e * 0.4 + Math.sin(2 * Math.PI * 80 * t) * e * 0.2) * 0.5;
      }
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.5, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      src.connect(g);
      g.connect(ctx.destination);
      src.start(ctx.currentTime);
    } catch (_) {}
  }, []);

  const goTo = useCallback((n) => {
    if (n < 1 || n > TOTAL_PAGES) return;
    setPage(n);
    playSound();
    if (iframeRef.current) {
      iframeRef.current.src = `/Handbook.pdf#page=${n}`;
    }
  }, [playSound]);

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goTo(page + 1); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); goTo(page - 1); }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [page, goTo]);

  const btn = (label, target, disabled, cls = '') => (
    <button
      onClick={() => goTo(target)}
      disabled={disabled}
      className={`transition-all select-none ${cls} ${
        disabled ? 'opacity-30 cursor-not-allowed' : 'hover:bg-msi-orange hover:text-white active:scale-95'
      }`}
    >
      {label}
    </button>
  );

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-msi-purple to-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl  font-bold text-white mb-2">
            Parent Handbook
          </h2>
          <p className="text-white/60 text-sm">
            Use ← → arrow keys &middot; Page turn sound enabled
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              {!loaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <div className="w-8 h-8 border-4 border-msi-purple border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">Loading PDF...</p>
                  </div>
                </div>
              )}
              <div className="aspect-[4/3] md:aspect-[16/9] w-full">
                <iframe
                  ref={iframeRef}
                  src={`/Handbook.pdf#page=${page}`}
                  className="w-full h-full border-0"
                  title="Handbook"
                />
              </div>
            </div>

            <div className="absolute inset-y-0 -left-4 md:-left-5 flex items-center z-10">
              {btn(
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>,
                page - 1,
                page <= 1,
                'w-11 h-11 md:w-13 md:h-13 rounded-full bg-white text-msi-purple shadow-lg flex items-center justify-center'
              )}
            </div>
            <div className="absolute inset-y-0 -right-4 md:-right-5 flex items-center z-10">
              {btn(
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>,
                page + 1,
                page >= TOTAL_PAGES,
                'w-11 h-11 md:w-13 md:h-13 rounded-full bg-white text-msi-purple shadow-lg flex items-center justify-center'
              )}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
            {btn('First', 1, page <= 1, 'px-3 py-1.5 rounded-lg bg-white/20 text-white text-sm')}
            <div className="flex gap-1">
              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => goTo(n)}
                  className={`w-7 h-7 md:w-8 md:h-8 rounded text-xs md:text-sm font-bold transition-all ${
                    n === page
                      ? 'bg-msi-orange text-white scale-110 shadow-md'
                      : 'bg-white/15 text-white/70 hover:bg-white/30 hover:text-white'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            {btn('Last', TOTAL_PAGES, page >= TOTAL_PAGES, 'px-3 py-1.5 rounded-lg bg-white/20 text-white text-sm')}
          </div>

          <div className="flex items-center justify-between mt-3 text-white/70 text-xs max-w-[200px] mx-auto">
            {btn('◀ Prev', page - 1, page <= 1, 'px-3 py-1.5 rounded-lg')}
            <span className="font-bold text-white/90 text-sm">Page {page} / {TOTAL_PAGES}</span>
            {btn('Next ▶', page + 1, page >= TOTAL_PAGES, 'px-3 py-1.5 rounded-lg')}
          </div>

          <div className="text-center mt-4">
            <a
              href="/Handbook.pdf"
              download
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandbookFlipbook;
