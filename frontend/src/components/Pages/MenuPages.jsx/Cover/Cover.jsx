import React from 'react';
import lounge from '../../../../assets/avalanche/lounge.jpg';

const Cover = () => (
  <div className="h-full w-full relative overflow-hidden">
    {/* Background image */}
    <img
      src={lounge}
      alt="Avalanche Lounge"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-between items-center py-8 px-4">
      {/* Top */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-2" />
        <p className="text-cyan-300 tracking-[0.3em] text-xs uppercase">Est. 2026 · Essen</p>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2" />
      </div>

      {/* Center */}
      <div className="text-center">
        <div className="w-16 h-16 rounded-full border-2 border-cyan-400/50 flex items-center justify-center mx-auto mb-4 bg-black/30 backdrop-blur-sm">
          <span className="text-2xl">❄️</span>
        </div>
        <h1
          className="text-4xl md:text-6xl font-bold tracking-widest text-white drop-shadow-lg mb-1"
          style={{
            textShadow: '0 0 30px rgba(6,182,212,0.6)',
          }}
        >
          AVALANCHE
        </h1>
        <p
          className="text-xl md:text-2xl text-cyan-200 mb-3"
          style={{ fontFamily: '"Noto Naskh Arabic", serif' }}
        >
          الشلال
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-px bg-cyan-400/60" />
          <p className="text-gray-300 text-xs tracking-[0.2em] uppercase">Lounge · Shisha · Bar</p>
          <div className="w-8 h-px bg-cyan-400/60" />
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center">
        <p className="text-gray-400 text-xs tracking-widest uppercase">Drinks & Menu</p>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-2" />
      </div>
    </div>
  </div>
);

export default Cover;
