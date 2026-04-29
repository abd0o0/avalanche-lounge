import React from 'react';
import cocktailsBg from '../../../../assets/avalanche/cocktails.jpg';

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

const SecondPage = () => (
  <div className="avalanche-page h-full">
    <div className="relative h-20 md:h-28 overflow-hidden">
      <img src={cocktailsBg} alt="Cocktails" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70 flex items-end justify-center pb-2">
        <h1 className="text-white font-bold text-lg md:text-2xl tracking-widest uppercase drop-shadow">🍹 Cocktails</h1>
      </div>
    </div>

    <div className="p-3 md:p-5">
      <div className="mb-3">
        <SectionTitle en="Signature" ar="كوكتيلات مميزة" />
        <MenuItem name="Avalanche Sour" arabic="أفالانش ساور" price="€9.50" desc="Vodka, lemon, blue curaçao, egg white" />
        <MenuItem name="Midnight Storm" arabic="عاصفة الليل" price="€10.00" desc="Dark rum, blackberry, lime, ginger beer" />
        <MenuItem name="Desert Rose" arabic="وردة الصحراء" price="€9.50" desc="Gin, rose water, lychee, tonic" />
        <MenuItem name="Blue Glacier" arabic="الجليد الأزرق" price="€10.00" desc="Vodka, blue curaçao, mint, soda" />
        <MenuItem name="Smoking Mirror" arabic="مرآة الدخان" price="€11.00" desc="Mezcal, honey, lemon, chili" />
      </div>
      <div>
        <SectionTitle en="Classics" ar="كلاسيكية" />
        <MenuItem name="Mojito" arabic="موهيتو" price="€8.50" desc="Rum, mint, lime, soda" />
        <MenuItem name="Aperol Spritz" price="€7.50" desc="Aperol, prosecco, orange" />
        <MenuItem name="Gin & Tonic" price="€8.00" desc="Premium gin, cucumber" />
        <MenuItem name="Negroni" price="€9.00" desc="Gin, Campari, vermouth" />
      </div>
    </div>
  </div>
);

export default SecondPage;
