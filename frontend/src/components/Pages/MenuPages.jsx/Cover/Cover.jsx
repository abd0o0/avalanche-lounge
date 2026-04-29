import React from 'react';

const Cover = ({ coverImg }) => {
  return (
    <div
      className="h-full w-full flex flex-col justify-between items-center"
      style={{
        background: 'linear-gradient(160deg, #0a0a0f 0%, #0d1a2e 50%, #0a0a0f 100%)',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Top decorative line */}
      <div className="w-full flex flex-col items-center pt-8 px-6">
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-3" />
        <p className="text-cyan-400 tracking-[0.3em] text-xs uppercase">Est. 2025 · Dortmund</p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-3" />
      </div>

      {/* Center logo text */}
      <div className="flex flex-col items-center text-center px-4">
        <div className="w-20 h-20 rounded-full border-2 border-cyan-500/40 flex items-center justify-center mb-4"
          style={{ background: 'radial-gradient(circle, #0d2a4a, #050a12)' }}>
          <span className="text-3xl">❄️</span>
        </div>
        <h1
          className="text-5xl md:text-7xl font-bold tracking-widest mb-1"
          style={{
            background: 'linear-gradient(135deg, #67e8f9, #3b82f6, #67e8f9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          AVALANCHE
        </h1>
        <p
          className="text-2xl md:text-3xl text-gray-400 mb-4"
          style={{ fontFamily: '"Noto Naskh Arabic", serif' }}
        >
          الشلال
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-px bg-cyan-500/50" />
          <p className="text-gray-400 text-xs tracking-[0.2em] uppercase">Lounge · Shisha · Bar</p>
          <div className="w-10 h-px bg-cyan-500/50" />
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-center pb-8 px-6">
        <p className="text-gray-600 text-xs tracking-widest uppercase mb-2">Drinks & Menu</p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </div>
    </div>
  );
};

export default Cover;
