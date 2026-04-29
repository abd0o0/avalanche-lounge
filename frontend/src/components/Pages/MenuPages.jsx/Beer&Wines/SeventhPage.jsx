import React from 'react';
import beerBg from '../../../../assets/avalanche/beer.jpg';
import wineBg from '../../../../assets/avalanche/wine.jpg';

const MI = ({ name, arabic, price, desc }) => (
  <div className="flex justify-between items-start border-b border-white/15 pb-1.5 mb-1.5">
    <div className="flex-1 pr-2">
      <div className="flex items-baseline gap-1.5 flex-wrap">
        <span className="font-semibold text-xs md:text-sm text-white">{name}</span>
        {arabic && <span className="text-white/60 text-xs" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>{arabic}</span>}
      </div>
      {desc && <p className="text-white/50 text-xs">{desc}</p>}
    </div>
    <span className="text-cyan-300 font-bold text-xs md:text-sm whitespace-nowrap">{price}</span>
  </div>
);
const ST = ({ en, ar }) => (
  <div className="text-center mb-2">
    <h2 className="text-xs md:text-base font-bold text-cyan-300 uppercase tracking-widest">{en}</h2>
    {ar && <p className="text-white/40 text-xs" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>{ar}</p>}
    <div className="w-8 h-px bg-cyan-400/50 mx-auto mt-1" />
  </div>
);

const SeventhPage = () => (
  <div className="h-full w-full relative overflow-hidden">
    {/* Split background: beer left, wine right */}
    <div className="absolute inset-0 flex">
      <img src={beerBg} alt="" className="w-1/2 h-full object-cover" />
      <img src={wineBg} alt="" className="w-1/2 h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />

    <div className="relative z-10 h-full flex flex-col p-3 md:p-5 overflow-hidden">
      <div className="text-center mb-3">
        <h1 className="text-base md:text-2xl font-bold text-white tracking-widest uppercase"> Beer &amp;  Wine</h1>
        <div className="w-12 h-px bg-cyan-400/60 mx-auto mt-1" />
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="mb-3">
          <ST en="Beer" ar="بيرة" />
          <MI name="Becks (0.33L)" price="€3.50" desc="German lager" />
          <MI name="Heineken (0.33L)" price="€3.50" />
          <MI name="Corona (0.33L)" price="€4.00" desc="With lime" />
          <MI name="Craft Beer (0.33L)" price="€5.00" desc="Rotating local selection" />
          <MI name="Non-Alcoholic Beer" arabic="بلا كحول" price="€3.50" />
        </div>
        <div>
          <ST en="Wine & Sparkling" ar="نبيذ" />
          <MI name="White Wine (0.2L)" arabic="أبيض" price="€5.50" />
          <MI name="Red Wine (0.2L)" arabic="أحمر" price="€5.50" />
          <MI name="Rosé (0.2L)" arabic="روزيه" price="€5.50" />
          <MI name="Prosecco (glass)" price="€6.00" />
          <MI name="Aperol Spritz" price="€7.50" />
        </div>
      </div>
    </div>
  </div>
);
export default SeventhPage;
