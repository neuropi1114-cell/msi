'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Drawer = ({ open, onClose, title, children, side = 'right' }) => {
  const fromLeft = side === 'left';

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: fromLeft ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: fromLeft ? '-100%' : '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 z-[100] h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto ${
              fromLeft ? 'left-0' : 'right-0'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <div className="sticky top-0 z-10 bg-white flex justify-between items-center gap-4 px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold leading-tight text-msi-purple !mb-0" style={{ marginBottom: 0 }}>
                {title}
              </h3>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-9 h-9 shrink-0 rounded-full border border-gray-200 text-gray-500 flex items-center justify-center hover:border-gray-400 hover:text-gray-700 transition-colors text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="px-6 pb-6 pt-4">{children}</div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;