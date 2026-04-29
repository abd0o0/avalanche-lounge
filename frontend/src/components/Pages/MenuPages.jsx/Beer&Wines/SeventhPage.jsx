import React from 'react';
import wineBg from '../../../../assets/avalanche/wine.jpg';
import beerBg from '../../../../assets/avalanche/beer.jpg';

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

const SeventhPage = () => (
  <div className="avalanche-page h-full">
    {/* Split header image */}
    <div className="relative h-20 md:h-28 overflow-hidden flex">
      <img src={beerBg} alt="Beer" className="w-1/2 h-full object-cover" />
      <img src={wineBg} alt="Wine" className="w-1/2 h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/75 flex items-end justify-center pb-2">
        <h1 className="text-white font-bold text-lg md:text-2xl tracking-widest uppercase drop-shadow">🍺 Beer & 🍷 Wine</h1>
      </div>
    </div>

    <div className="p-3 md:p-5">
      <div className="mb-3">
        <SectionTitle en="Beer" ar="بيرة" />
        <MenuItem name="Becks (0.33L)" price="€3.50" desc="German lager" />
        <MenuItem name="Heineken (0.33L)" price="€3.50" />
        <MenuItem name="Corona (0.33L)" price="€4.00" desc="With lime" />
        <MenuItem name="Craft Beer (0.33L)" price="€5.00" desc="Rotating local selection" />
        <MenuItem name="Non-Alcoholic Beer" arabic="بلا كحول" price="€3.50" />
      </div>
      <div>
        <SectionTitle en="Wine & Sparkling" ar="نبيذ" />
        <MenuItem name="White Wine (0.2L)" arabic="أبيض" price="€5.50" />
        <MenuItem name="Red Wine (0.2L)" arabic="أحمر" price="€5.50" />
        <MenuItem name="Rosé (0.2L)" arabic="روزيه" price="€5.50" />
        <MenuItem name="Prosecco (glass)" price="€6.00" />
        <MenuItem name="Aperol Spritz" price="€7.50" />
      </div>
    </div>
  </div>
);

export default SeventhPage;
