'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ReadMoreButton from '../common/ReadMoreButton';
import ScrollReveal from '../common/ScrollReveal';

export default function VenturePhilanthropyCta() {
  const [showIframeModal, setShowIframeModal] = useState(false);
  const targetUrl = 'https://mission2000.in/';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowIframeModal(false);
      }
    };
    if (showIframeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showIframeModal]);

  return (
    <>
      <ScrollReveal
        direction="up"
        duration={0.6}
        className="mt-16 max-w-4xl mx-auto text-center"
      >
        <h3>MSI Venture Philanthropy</h3>
        <h2>
          EDUCATION EXCELLENCE EVERYWHERE
        </h2>

        <p>
          We work to make quality early education accessible to communities that need it most — through training programmes, hiring initiatives, and partnerships that create real opportunities for young people.
        </p>
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="text-center">
            <ReadMoreButton onClick={() => setShowIframeModal(true)} />
          </div>
        </div>
      </ScrollReveal>

      {/* Embedded Iframe Modal */}
      <AnimatePresence>
        {showIframeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowIframeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-5xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-msi-purple text-white">
                <div>
                  <h3 className="font-bold text-lg leading-tight">MSI Venture Philanthropy</h3>
                  <p className="text-xs text-white/80">Mission 2000 — Official Site</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowIframeModal(false)}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body / Iframe */}
              <div className="flex-1 w-full h-full bg-gray-50 relative">
                <iframe
                  src={targetUrl}
                  title="MSI Venture Philanthropy — Mission 2000"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}