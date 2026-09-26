'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { VideoModal } from '../home/VideoShowcase';

export default function WatchCentreButton({
  video = {
    title: "My School ITALY - HITEX HQ",
    url: "https://www.youtube.com/watch?v=IP8qcrDVeD0",
  },
  buttonText = "Watch This Centre",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`relative group inline-block ${className}`}>
        {/* Animated glowing backdrop ring */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-msi-orange via-amber-400 to-msi-yellow opacity-80 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative inline-flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#d16827] via-[#e27c38] to-[#FFC000] text-white font-linotte font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/40 cursor-pointer"
          aria-label={buttonText}
        >
          {/* White circular play icon badge */}
          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-msi-orange flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0">
            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
          </span>

          <span className="drop-shadow-sm">{buttonText}</span>
        </button>
      </div>

      {isOpen && (
        <VideoModal
          video={video}
          aspect="landscape"
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
