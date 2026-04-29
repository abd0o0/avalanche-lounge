import React from 'react';
import drinksBg from '../../../../assets/avalanche/drinks.jpg';

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

const FourthPage = () => (
  <div className="avalanche-page h-full">
    <div className="relative h-20 md:h-28 overflow-hidden">
      <img src={drinksBg} alt="Shisha" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/75 flex items-end justify-center pb-2">
        <h1 className="text-white font-bold text-lg md:text-2xl tracking-widest uppercase drop-shadow">💨 Shisha</h1>
      </div>
    </div>

    <div className="p-3 md:p-5">
      <SectionTitle en="Flavours" ar="النكهات" />
      <MenuItem name="Double Apple" arabic="تفاح مزدوج" price="€14" desc="Classic — bestseller" />
      <MenuItem name="Grape Mint" arabic="عنب بالنعناع" price="€14" />
      <MenuItem name="Watermelon Ice" arabic="بطيخ بالثلج" price="€15" />
      <MenuItem name="Blue Mist" arabic="ضباب أزرق" price="€15" desc="Blueberry & anise" />
      <MenuItem name="Lemon Mint" arabic="ليمون بالنعناع" price="€14" />
      <MenuItem name="Rose Gold" arabic="ورد ذهبي" price="€16" desc="Floral & vanilla" />
      <MenuItem name="Guava Passion" arabic="جوافة وباشن" price="€16" />
      <MenuItem name="Melon Breeze" arabic="نسيم البطيخ" price="€14" />

      <div className="mt-3 px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-cyan-500/20">
        <p className="text-blue-600 dark:text-cyan-300 text-xs text-center">
          🪬 Coal refreshes included · Private bookings welcome
        </p>
      </div>
    </div>
  </div>
);

export default FourthPage;
