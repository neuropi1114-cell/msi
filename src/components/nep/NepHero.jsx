export default function NepHero() {
  return (
    <section
      className="relative flex items-end min-h-screen bg-cover bg-top"
      style={{ backgroundImage: 'url(/images/nep/hero-classroom.webp)' }}
    >
      <div className="container mx-auto px-4 md:px-12 w-full">
        <div
          className="w-full md:w-[41.831%]"
          style={{ backgroundColor: '#159ED9', padding: '50px', borderRadius: '10px 10px 0 0' }}
        >
          <h2 className="font-lato text-[35px] font-bold text-white mb-6">ABOUT NEUROPI CHILDREN</h2>
          <p className="font-lato text-base text-white/90 leading-relaxed">
            Once upon a time, in the world of NeuroPi, every child was seen as a tiny universe - full of dreams, neurons, and sparkles of curiosity. Their laughter wasn&apos;t just joy - it was learning in motion, connecting the brain and heart in beautiful harmony. Each child here grows at their own rhythm, blooming in colours of confidence, calm, and creativity. We don&apos;t rush them toward the future - we walk beside them as they discover it. In every classroom, magic and science hold hands. Mindful play becomes their compass; empathy becomes their light. They learn to breathe before they speak, to listen before they lead, and to care before they conquer. Every giggle builds a pathway, every question unlocks a possibility, and every hug strengthens the science of love. At NeuroPi, children don&apos;t just learn - they awaken. Because here, childhood isn&apos;t a race... it&apos;s a beautiful unfolding of brilliance.
          </p>
        </div>
      </div>
    </section>
  );
}