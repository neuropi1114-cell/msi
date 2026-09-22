'use client';
import React, { useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

const emptySubscribe = () => () => {};
const useIsMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

const Drawer = ({ open, onClose, title, children, side = 'right' }) => {
  const mounted = useIsMounted();
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

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Glassmorphic Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs"
            onClick={onClose}
          />
          {/* Drawer Panel */}
          <motion.aside
            initial={{ x: fromLeft ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: fromLeft ? '-100%' : '100%' }}
            transition={{ type: 'tween', duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 z-[10000] h-full w-full max-w-lg md:max-w-xl bg-white shadow-2xl overflow-y-auto ${
              fromLeft ? 'left-0 rounded-r-3xl' : 'right-0 rounded-l-3xl'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label={typeof title === 'string' ? title : 'Program Details'}
          >
            {/* Top Decorative Color Accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-msi-purple via-msi-orange to-msi-yellow" />

            {/* Sticky Drawer Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md flex justify-between items-center gap-4 px-6 md:px-8 py-5 border-b border-gray-100/80 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-msi-purple/10 flex items-center justify-center text-msi-purple shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-linotte font-bold text-lg sm:text-xl md:text-2xl leading-tight text-msi-purple !mb-0" style={{ marginBottom: 0 }}>
                  {title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close drawer"
                className="w-9 h-9 shrink-0 rounded-full bg-gray-100 hover:bg-msi-purple text-gray-500 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body Content */}
            <div className="px-6 md:px-8 pb-8 pt-6">{children}</div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Drawer;