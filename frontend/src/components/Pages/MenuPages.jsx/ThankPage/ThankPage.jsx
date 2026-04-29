import React from 'react';
import loungeBg from '../../../../assets/avalanche/lounge.jpg';

const ThankPage = () => (
  <div className="h-full w-full relative overflow-hidden">
    <img src={loungeBg} alt="Avalanche Lounge" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />

    <div className="relative z-10 h-full flex flex-col justify-between items-center py-8 px-4">
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="flex flex-col items-center text-center space-y-3">
        <span className="text-4xl">🙏</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Thank You
        </h2>
        <p className="text-2xl text-cyan-200" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>
          شكراً لزيارتكم
        </p>
        <div className="flex items-center gap-2">
          <div className="w-8 h-px bg-cyan-400/60" />
          <div className="w-8 h-px bg-cyan-400/60" />
        </div>
        <p className="text-gray-300 text-sm max-w-xs leading-relaxed">
          We hope to see you again soon. Enjoy your evening at{' '}
          <span className="text-cyan-300 font-semibold">Avalanche</span>.
        </p>

        <div className="mt-2 p-4 rounded-xl border border-cyan-500/30 bg-black/40 backdrop-blur-sm text-left w-full max-w-xs">
          <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-2 text-center">
            Opening Hours
          </p>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between text-gray-300">
              <span>Mon – Thu</span><span>16:00 – 02:00</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Fri – Sat</span><span>16:00 – 05:00</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Sunday</span><span>16:00 – 02:00</span>
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-xs">Am Sittardsberg · Dortmund</p>
      </div>

      <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
    </div>
  </div>
);

export default ThankPage;
