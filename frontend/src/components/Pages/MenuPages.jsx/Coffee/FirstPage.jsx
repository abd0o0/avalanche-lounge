import React from 'react';
import coffeeBg from '../../../../assets/avalanche/coffee.jpg';

const MenuItem = ({ name, arabic, price, desc }) => (
  <div className="flex justify-between items-start border-b border-white/15 pb-1.5 mb-1.5">
    <div className="flex-1 pr-2">
      <div className="flex items-baseline gap-1.5 flex-wrap">
        <span className="font-semibold text-xs md:text-sm text-white">{name}</span>
        {arabic && (
          <span className="text-white/60 text-xs" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>{arabic}</span>
        )}
      </div>
      {desc && <p className="text-white/50 text-xs">{desc}</p>}
    </div>
    <span className="text-cyan-300 font-bold text-xs md:text-sm whitespace-nowrap">{price}</span>
  </div>
);

const SectionTitle = ({ en, ar }) => (
  <div className="text-center mb-2">
    <h2 className="text-xs md:text-base font-bold text-cyan-300 uppercase tracking-widest">{en}</h2>
    {ar && <p className="text-white/40 text-xs" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>{ar}</p>}
    <div className="w-8 h-px bg-cyan-400/50 mx-auto mt-1" />
  </div>
);

const FirstPage = () => (
  <div className="h-full w-full relative overflow-hidden">
    {/* Full background image */}
    <img src={coffeeBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    {/* Faded overlay — stronger at bottom where text is */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black/85" />

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col p-3 md:p-5 overflow-hidden">
      {/* Title strip */}
      <div className="text-center mb-3">
        <h1 className="text-base md:text-2xl font-bold text-white tracking-widest uppercase drop-shadow">☕ Hot &amp; Cold Coffee</h1>
        <div className="w-12 h-px bg-cyan-400/60 mx-auto mt-1" />
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="mb-3">
          <SectionTitle en="Hot Coffee" ar="قهوة ساخنة" />
          <MenuItem name="Espresso" arabic="إسبريسو" price="€2.50" desc="Rich double shot" />
          <MenuItem name="Cappuccino" arabic="كابتشينو" price="€3.50" />
          <MenuItem name="Latte" arabic="لاتيه" price="€4.00" desc="Smooth & creamy" />
          <MenuItem name="Rose Latte" arabic="لاتيه بالورد" price="€4.50" />
          <MenuItem name="Matcha Latte" arabic="ماتشا" price="€4.50" />
          <MenuItem name="Turkish Coffee" arabic="قهوة تركية" price="€3.00" />
          <MenuItem name="Hot Chocolate" arabic="شوكولاتة ساخنة" price="€4.00" />
        </div>
        <div>
          <SectionTitle en="Cold Coffee" ar="قهوة باردة" />
          <MenuItem name="Iced Latte" arabic="لاتيه بارد" price="€4.50" />
          <MenuItem name="Cold Brew" arabic="كولد برو" price="€4.50" desc="Slow-steeped 12h" />
          <MenuItem name="Iced Matcha" arabic="ماتشا باردة" price="€5.00" />
        </div>
      </div>
    </div>
  </div>
);

export default FirstPage;
