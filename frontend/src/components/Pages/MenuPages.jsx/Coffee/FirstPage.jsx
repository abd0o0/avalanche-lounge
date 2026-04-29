import React from 'react';
import coffeeBg from '../../../../assets/avalanche/coffee.jpg';

const MenuItem = ({ name, arabic, price, desc }) => (
  <div className="flex justify-between items-start border-b avalanche-border pb-1.5 mb-1.5">
    <div className="flex-1 pr-2">
      <div className="flex items-baseline gap-1.5 flex-wrap">
        <span className="font-semibold text-xs md:text-sm avalanche-text-primary">{name}</span>
        {arabic && (
          <span className="avalanche-text-secondary text-xs" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>
            {arabic}
          </span>
        )}
      </div>
      {desc && <p className="avalanche-text-secondary text-xs">{desc}</p>}
    </div>
    <span className="avalanche-text-price font-bold text-xs md:text-sm whitespace-nowrap">{price}</span>
  </div>
);

const SectionTitle = ({ en, ar }) => (
  <div className="text-center mb-2">
    <h2 className="text-sm md:text-lg font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">{en}</h2>
    {ar && <p className="avalanche-text-secondary text-xs" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>{ar}</p>}
    <div className="w-8 h-px bg-blue-400 dark:bg-cyan-500 mx-auto mt-1" />
  </div>
);

const FirstPage = () => (
  <div className="avalanche-page h-full">
    {/* Cover strip */}
    <div className="relative h-20 md:h-28 overflow-hidden">
      <img src={coffeeBg} alt="Coffee" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70 flex items-end justify-center pb-2">
        <h1 className="text-white font-bold text-lg md:text-2xl tracking-widest uppercase drop-shadow">☕ Hot & Cold Drinks</h1>
      </div>
    </div>

    <div className="p-3 md:p-5 overflow-hidden">
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
);

export default FirstPage;
