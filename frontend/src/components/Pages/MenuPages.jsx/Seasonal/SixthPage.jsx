import React from 'react';
import dessertBg from '../../../../assets/avalanche/dessert.jpg';

const MenuItem = ({ name, arabic, price, desc }) => (
  <div className="flex justify-between items-start border-b avalanche-border pb-1.5 mb-1.5">
    <div className="flex-1 pr-2">
      <div className="flex items-baseline gap-1.5 flex-wrap">
        <span className="font-semibold text-xs md:text-sm avalanche-text-primary">{name}</span>
        {arabic && (
          <span className="avalanche-text-secondary text-xs" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>{arabic}</span>
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

const SixthPage = () => (
  <div className="avalanche-page h-full">
    <div className="relative h-20 md:h-28 overflow-hidden">
      <img src={dessertBg} alt="Soft Drinks" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/75 flex items-end justify-center pb-2">
        <h1 className="text-white font-bold text-lg md:text-2xl tracking-widest uppercase drop-shadow">🥤 Soft Drinks & Shakes</h1>
      </div>
    </div>

    <div className="p-3 md:p-5">
      <div className="mb-3">
        <SectionTitle en="Soft Drinks" ar="مشروبات غازية" />
        <MenuItem name="Coca-Cola" price="€3.00" />
        <MenuItem name="Coca-Cola Zero" price="€3.00" />
        <MenuItem name="Fanta / Sprite" price="€3.00" />
        <MenuItem name="Red Bull" price="€4.50" />
        <MenuItem name="Still / Sparkling Water" arabic="ماء" price="€2.50" />
      </div>
      <div>
        <SectionTitle en="Milkshakes & Smoothies" ar="ميلك شيك وسموذي" />
        <MenuItem name="Vanilla Shake" arabic="فانيليا" price="€6.00" />
        <MenuItem name="Chocolate Shake" arabic="شوكولاتة" price="€6.00" />
        <MenuItem name="Strawberry Shake" arabic="فراولة" price="€6.00" />
        <MenuItem name="Mango Smoothie" arabic="سموذي مانجو" price="€6.50" desc="Mango, banana, orange" />
        <MenuItem name="Berry Blast" arabic="بيري بلاست" price="€6.50" desc="Mixed berries, yogurt" />
      </div>
    </div>
  </div>
);

export default SixthPage;
