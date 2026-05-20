import React, { useRef } from 'react';
import loungeBg from '../../../../assets/avalanche/lounge.jpg';
import { useTranslation } from '../../../../i18n/useTranslation.jsx';

const ThankPage = () => {
  const { t } = useTranslation();
  const touchStartRef = useRef({ x: 0, y: 0 });
  const isScrollingRef = useRef(false);

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      isScrollingRef.current = false;
    }
  };

  const handleTouchMove = (e) => {
    // Calculate movement distance
    if (e.touches && e.touches.length > 0 && touchStartRef.current) {
      const deltaX = Math.abs(e.touches[0].clientX - touchStartRef.current.x);
      const deltaY = Math.abs(e.touches[0].clientY - touchStartRef.current.y);

      // If any vertical movement has occurred, mark as scrolling
      if (deltaY > 5) {
        isScrollingRef.current = true;
      }

      // Prevent page flip if scrolling is active
      if (isScrollingRef.current) {
        e.stopPropagation();
      }
    }
  };

  const handleTouchEnd = () => {
    isScrollingRef.current = false;
  };

  return (
    <div className="h-full w-full relative overflow-hidden" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <img src={loungeBg} alt="Avalanche Lounge" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />

      <div className="relative z-10 h-full flex flex-col justify-between items-center py-8 px-4">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        <div className="flex flex-col items-center text-center space-y-3">
       
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            {t('menu.thankYou', 'Thank You')}
          </h2>
          <p className="text-2xl text-cyan-200" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>
            {t('menu.thankYouArabic', 'شكراً لزيارتكم')}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-cyan-400/60" />
            <div className="w-8 h-px bg-cyan-400/60" />
          </div>
          <p className="text-gray-300 text-sm max-w-xs leading-relaxed">
            {t('menu.hopeToSeeYou', 'We hope to see you again soon. Enjoy your evening at')}{' '}
            <span className="text-cyan-300 font-semibold">{t('brand.name', 'Avalanche')}</span>.
          </p>

          <div className="mt-2 p-4 rounded-xl border border-cyan-500/30 bg-black/40 backdrop-blur-sm text-left w-full max-w-xs">
            <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-2 text-center">
              {t('footer.hours', 'Opening Hours')}
            </p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-gray-300">
                <span>{t('footer.sunThu', 'Sun – Thu')}</span><span>13:00 – 01:00</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>{t('footer.friSat', 'Fri & Sat')}</span><span>13:00 – 03:00</span>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-xs">Kastanienallee 93, Essen</p>
        </div>

        <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </div>
    </div>
  );
};

export default ThankPage;
