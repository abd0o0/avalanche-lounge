import React from 'react';

const ThankPage = () => (
  <div
    className="h-full w-full flex flex-col justify-between items-center"
    style={{
      background: 'linear-gradient(160deg, #0a0a0f 0%, #0d1a2e 50%, #0a0a0f 100%)',
      fontFamily: 'Poppins, sans-serif',
    }}
  >
    {/* Top line */}
    <div className="w-full flex flex-col items-center pt-8 px-6">
      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-3" />
    </div>

    {/* Center content */}
    <div className="flex flex-col items-center text-center px-6 space-y-4">
      <span className="text-4xl">🙏</span>
      <h2
        className="text-3xl md:text-5xl font-bold"
        style={{
          background: 'linear-gradient(135deg, #67e8f9, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Thank You
      </h2>
      <p
        className="text-2xl text-gray-400"
        style={{ fontFamily: '"Noto Naskh Arabic", serif' }}
      >
        شكراً لزيارتكم
      </p>
      <div className="flex items-center gap-3 my-2">
        <div className="w-10 h-px bg-cyan-500/50" />
        <span className="text-gray-500 text-xs">·</span>
        <div className="w-10 h-px bg-cyan-500/50" />
      </div>
      <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
        We hope to see you again soon. Enjoy your evening at <span className="text-cyan-400">Avalanche</span>.
      </p>

      {/* Opening hours */}
      <div className="mt-4 p-4 rounded-xl border border-cyan-500/20 bg-cyan-900/10 text-left w-full max-w-xs">
        <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-2 text-center">Opening Hours</p>
        <div className="space-y-1 text-gray-400 text-xs">
          <div className="flex justify-between"><span>Mon – Thu</span><span>16:00 – 02:00</span></div>
          <div className="flex justify-between"><span>Fri – Sat</span><span>16:00 – 05:00</span></div>
          <div className="flex justify-between"><span>Sunday</span><span>16:00 – 02:00</span></div>
        </div>
      </div>

      <p className="text-gray-600 text-xs mt-2">Am Sittardsberg · Dortmund</p>
    </div>

    {/* Bottom */}
    <div className="flex flex-col items-center pb-8 px-6">
      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
    </div>
  </div>
);

export default ThankPage;
