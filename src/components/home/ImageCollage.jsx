'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shuffle } from 'lucide-react';
import ageGroupsData from '../../data/age-groups.json';

const defaultImages = ageGroupsData.sections[2]?.growing?.images || [];

// Comprehensive pool of 49 verified images from across the entire website
const websiteImagePool = [
  { src: '/images/believe/Web_2.png', alt: 'Early childhood exploration' },
  { src: '/images/believe/believe-brilliance-hero.webp', alt: 'Children learning together' },
  { src: '/images/believe/believe-brilliance-collage.png', alt: 'Happy preschooler' },
  { src: '/images/programs/Programs_2_1.png', alt: 'Infant and toddler care' },
  { src: '/images/programs/Aperna_5.png', alt: 'Nursery classroom discovery' },
  { src: '/images/programs/Programs_4.png', alt: 'Kindergarten K1 activities' },
  { src: '/images/programs/Batch_3_6.png', alt: 'Kindergarten K2 group learning' },
  { src: '/images/programs/Daycare.png', alt: 'Daycare after-school routine' },
  { src: '/images/programs/early_drop_off.png', alt: 'Early drop-off care' },
  { src: '/images/programs/Aperna_17.png', alt: 'Saturday and holiday care' },
  { src: '/images/programs/Aperna_23.png', alt: 'Preschool robotics activity' },
  { src: '/images/programs/Aperna_24.png', alt: 'Dance and creative movement' },
  { src: '/images/programs/Aperna_25.png', alt: 'Storytelling and creative arts' },
  { src: '/images/programs/Aperna_27.png', alt: 'Summer program adventures' },
  { src: '/images/nep/The_NeuroPi_Way_2.png', alt: 'NeuroPi approach learning' },
  { src: '/images/nep/The_NeuroPi_Way_3.png', alt: 'Mindful classroom environment' },
  { src: '/images/nep/The_NeuroPi_Way_4.png', alt: 'Heartful classroom interaction' },
  { src: '/images/nep/The_NeuroPi_Way_5.jpeg', alt: 'Kinesthetic motor-based learning' },
  { src: '/images/corporatechildcare/Corporate_Childcare_4.png', alt: 'Corporate daycare space' },
  { src: '/images/corporatechildcare/Corporate_Childcare_5.png', alt: 'On-campus crèche environment' },
  { src: '/images/corporatechildcare/Corporate_Childcare_6.png', alt: 'Childcare reserved seats' },
  { src: '/images/corporatechildcare/Corporate_Childcare_9.png', alt: 'Employee childcare journey' },
  { src: '/images/corporatechildcare/Corporate_Childcare_10.png', alt: 'Modern family childcare' },
  { src: '/images/corporatechildcare/Corporate_Childcare_11.png', alt: 'Workplace crèche partner' },
  { src: '/images/whyus/hero_playroom.png', alt: 'Playroom environment' },
  { src: '/images/whyus/Why_MSI_3.png', alt: 'European early years approach' },
  { src: '/images/parents/hero_mangalyam.jpeg', alt: 'Parent-school connection' },
  { src: '/images/growing-in-confidence/img-01.png', alt: 'Child playing with building blocks' },
  { src: '/images/growing-in-confidence/img-02.png', alt: 'Child painting and exploring colors' },
  { src: '/images/growing-in-confidence/img-03.png', alt: 'Children reading books together' },
  { src: '/images/growing-in-confidence/img-04.png', alt: 'Child solving puzzles' },
  { src: '/images/growing-in-confidence/img-05.png', alt: 'Children playing outdoors' },
  { src: '/images/growing-in-confidence/img-06.png', alt: 'Child engaged in sensory play' },
  { src: '/images/growing-in-confidence/img-07.png', alt: 'Children in classroom activity' },
  { src: '/images/growing-in-confidence/img-08.png', alt: 'Child learning with educational toys' },
  { src: '/images/growing-in-confidence/img-09.png', alt: 'Children collaborating on a project' },
  { src: '/images/growing-in-confidence/img-10.png', alt: 'Child practicing motor skills' },
  { src: '/images/growing-in-confidence/img-11.png', alt: 'Children during music and movement' },
  { src: '/images/growing-in-confidence/img-12.png', alt: 'Child exploring nature and outdoors' },
  { src: '/images/gallery/gallery-1.png', alt: 'Morning circle time' },
  { src: '/images/gallery/gallery-2.png', alt: 'Hands-on discovery' },
  { src: '/images/gallery/gallery-3.png', alt: 'Outdoor adventures' },
  { src: '/images/gallery/gallery-4.png', alt: 'Creative expression' },
  { src: '/images/gallery/gallery-5.png', alt: 'Quiet moments' },
  { src: '/images/gallery/gallery-6.png', alt: 'Learning together' },
  { src: '/images/gallery/gallery-7.png', alt: 'Growing every day' },
  { src: '/images/gallery/gallery-8.png', alt: 'Joy in the making' },
  { src: '/images/stepintoaday/kid_image.webp', alt: 'A day built on neuroscience & joy' },
  { src: '/images/stepintoaday/better-understanding-2.png', alt: 'Better understanding around every child' }
];

function getRandom12(pool) {
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 12);
}

function CollageImageItem({ img, flexClass }) {
  if (!img) return null;
  return (
    <div className={`relative overflow-hidden rounded-xl bg-gray-100 shadow-xs ${flexClass}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={img.src}
          src={img.src}
          alt={img.alt || 'School glimpse'}
          initial={{ scale: 0.15, opacity: 0, borderRadius: '50%' }}
          animate={{ scale: [0.15, 1.1, 1], opacity: 1, borderRadius: '0.75rem' }}
          exit={{ scale: 0.15, opacity: 0, borderRadius: '50%' }}
          transition={{ duration: 0.75, ease: [0.34, 1.56, 0.64, 1] }}
          className="w-full h-full object-cover shadow-sm hover:scale-[1.03] transition-transform duration-300"
          loading="lazy"
        />
      </AnimatePresence>
    </div>
  );
}

export default function ImageCollage({ images = defaultImages, title = "Glimpses from Our Schools" }) {
  const [currentImages, setCurrentImages] = useState(
    images && images.length >= 12 ? images.slice(0, 12) : defaultImages.slice(0, 12)
  );

  const shuffleAllImages = useCallback(() => {
    const newSelection = getRandom12(websiteImagePool);
    setCurrentImages(newSelection);
  }, []);

  useEffect(() => {
    // Initial random shuffle on client mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    shuffleAllImages();
  }, [shuffleAllImages]);

  // Every 10 seconds, pop-replace 1 random image slot with a fresh image from the website pool
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImages((prev) => {
        if (!prev || prev.length < 12) return prev;
        const targetSlot = Math.floor(Math.random() * 12);
        const currentSrcs = new Set(prev.map((item) => item.src));
        const unused = websiteImagePool.filter((item) => !currentSrcs.has(item.src));
        const poolToUse = unused.length > 0 ? unused : websiteImagePool;
        const nextImg = poolToUse[Math.floor(Math.random() * poolToUse.length)];

        const updated = [...prev];
        updated[targetSlot] = nextImg;
        return updated;
      });
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  if (!currentImages || currentImages.length < 12) return null;

  return (
    <div className="w-full mt-12 relative">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex-1" />
        {title && (
          <h2 className="text-center">
            {title}
          </h2>
        )}
        <div className="flex-1 flex justify-center sm:justify-end">
          <button
            onClick={shuffleAllImages}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-msi-purple/10 text-msi-purple hover:bg-msi-purple hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-2xs hover:shadow-md active:scale-95 cursor-pointer"
            title="Shuffle all glimpses from across our schools"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Shuffle Glimpses</span>
          </button>
        </div>
      </div>

      <div className="w-full h-[420px]">
        <div className="flex gap-3 h-full">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col gap-3 pt-8">
            <CollageImageItem img={currentImages[0]} flexClass="flex-[1]" />
            <CollageImageItem img={currentImages[1]} flexClass="flex-[2]" />
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col gap-3">
            <CollageImageItem img={currentImages[2]} flexClass="flex-[1]" />
            <CollageImageItem img={currentImages[3]} flexClass="flex-[1]" />
          </div>

          {/* Column 3 */}
          <div className="flex-1 flex flex-col gap-3 pt-12">
            <CollageImageItem img={currentImages[4]} flexClass="flex-[1]" />
            <CollageImageItem img={currentImages[5]} flexClass="flex-[1.2]" />
            <CollageImageItem img={currentImages[6]} flexClass="flex-[1]" />
          </div>

          {/* Column 4 */}
          <div className="flex-1 flex flex-col gap-3 pt-4">
            <CollageImageItem img={currentImages[7]} flexClass="flex-[1]" />
            <CollageImageItem img={currentImages[8]} flexClass="flex-[1.3]" />
          </div>

          {/* Column 5 */}
          <div className="flex-1 flex flex-col gap-3">
            <CollageImageItem img={currentImages[9]} flexClass="flex-[1]" />
            <CollageImageItem img={currentImages[10]} flexClass="flex-[1.2]" />
            <CollageImageItem img={currentImages[11]} flexClass="flex-[1.5]" />
          </div>
        </div>
      </div>
    </div>
  );
}
