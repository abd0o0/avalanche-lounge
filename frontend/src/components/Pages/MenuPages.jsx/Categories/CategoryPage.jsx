import React, { useRef } from 'react';
import { useTranslation } from '../../../../i18n/useTranslation.jsx';

const resolveText = (value, locale) => {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[locale] || value.en || '';
};

const ItemRow = ({ item, locale }) => (
  <div className="grid grid-cols-[1fr_auto] items-start gap-3 border-b border-[#C9A961]/35 pb-4 mb-4 transition-all duration-200 hover:border-[#D4AF37] hover:pl-1">
    <div className="min-w-0">
      <p className="text-[#FAF8F5] text-sm sm:text-base md:text-lg font-semibold leading-tight">{resolveText(item.name, locale)}</p>
      {item.desc ? <p className="text-white/60 text-xs sm:text-sm md:text-base leading-tight mt-1">{resolveText(item.desc, locale)}</p> : null}
    </div>
    <div className="text-right">
      <span className="text-[#D4AF37] font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">{item.price}</span>
    </div>
  </div>
);

const CategoryPage = ({ category }) => {
  const { locale } = useTranslation();
  const touchStartRef = useRef({ x: 0, y: 0 });
  const isScrollingRef = useRef(false);
  const scrollContainerRef = useRef(null);

  if (!category || !Array.isArray(category.items)) {
    return <div className="h-full w-full bg-black" />;
  }

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

  const isShortList = category.items.length <= 5;
  const listWrapClass = isShortList ? 'justify-center' : 'justify-start';

  return (
    <div className="h-full w-full relative overflow-hidden bg-[#1A2332]">
      <img src={category.image} alt={resolveText(category.title, locale)} className="absolute inset-0 w-full h-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A2332]/82 via-[#1A2332]/78 to-[#1A2332]/85" />

      <div className="relative z-10 h-full flex flex-col p-3 md:p-5">
        <div className="mb-3 text-center">
          <p className="text-[#C9A961] text-[11px] sm:text-xs md:text-sm tracking-[0.25em] uppercase mt-1">Avalanche Menu</p>
          <h2 className="text-[#FAF8F5] font-bold text-lg sm:text-xl md:text-2xl tracking-wider" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            {resolveText(category.title, locale)}
          </h2>
          {category.description ? <p className="text-[#FAF8F5]/80 text-xs sm:text-sm md:text-base mt-1 leading-relaxed">{resolveText(category.description, locale)}</p> : null}
          <div className="w-20 h-px bg-[#D4AF37] mx-auto mt-2" />
          <div className="w-10 h-px bg-[#C9A961]/70 mx-auto mt-1" />
        </div>

        <div 
          ref={scrollContainerRef}
          className="rounded-xl border border-[#C9A961]/25 bg-black/22 p-3 md:p-4 flex-1 overflow-y-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {category.items.map((item, index) => <ItemRow key={`${category.key}-${index}`} item={item} locale={locale} />)}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
