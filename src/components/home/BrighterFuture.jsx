'use client';
import { motion } from 'framer-motion';

export default function BrighterFuture({
  variant = 'hero',
  bgImage,
  overlayImage,
  subtitle,
  title,
  description,
  boxBg,
}) {
  if (variant === 'card') {
    const defaultBg = bgImage || "/images/growing-in-confidence/brighter-future-bg.jpg";
    const defaultOverlay = overlayImage || "/images/growing-in-confidence/cloud-overlay.png";
    const defaultTitle = title || "A Brighter Future For All";
    const defaultDesc = description || "My School ITALY is designed not just to teach — but to wire the brain for lifelong learning, focusing on pathways that strengthen attention, memory, creativity, empathy, and resilience during the most critical window of growth: the first seven years of life.";

    return (
      <section
        className="relative flex items-center justify-center min-h-[944px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${defaultBg}')` }}
      >
        {defaultOverlay && (
          <div
            className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: `url('${defaultOverlay}')` }}
          />
        )}
        <div className="container mx-auto px-4 md:px-12 relative z-10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`w-full max-w-[49%] text-left rounded-t-[10px] p-[50px] ${boxBg || 'bg-msi-orange/90'}`}
          >
            <h3
              className="text-white uppercase font-bold mb-4 leading-tight"
              style={{
                fontFamily: 'var(--font-lato), sans-serif',
                fontSize: '42px',
                letterSpacing: '1px',
              }}
            >
              {defaultTitle}
            </h3>
            <p
              className="text-white leading-relaxed"
              style={{
                fontFamily: 'var(--font-lato), sans-serif',
                fontWeight: 400,
                fontSize: '16px',
              }}
            >
              {defaultDesc}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  const defaultBg = bgImage || "/images/hero/DSC00928-scaled-1-1024x684.jpg.bv_resized_ipad.jpg.bv.webp";
  const defaultSubtitle = subtitle || "the first seven years change everything";
  const defaultTitle = title || "Childhood isn't a countdown. It's the foundation.";
  const defaultDesc = description || "We don't rush children through stages. We pay attention to what each child needs right now — and build an environment where they can grow at their own pace, with confidence and curiosity intact.";

  return (
    <section className="relative py-32 bg-msi-purple overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('${defaultBg}')` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-msi-purple/80 via-msi-purple/50 to-transparent" />
      <div className="grain-overlay absolute inset-0 pointer-events-none" />
      <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          {defaultSubtitle && (
            <p className="font-lato italic text-msi-gold text-lg mb-4">
              {defaultSubtitle}
            </p>
          )}
          <h3 className="font-lato text-display-md md:text-display-lg text-white mb-6 leading-tight">
            {defaultTitle}
          </h3>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            {defaultDesc}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
