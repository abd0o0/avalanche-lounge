import React from 'react';
import bg from '../../../../assets/avalanche/drinks.jpg';

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

const FourthPage = () => (
  <div className="h-full w-full relative overflow-hidden">
    <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/72 to-black/90" />
    <div className="relative z-10 h-full flex flex-col p-3 md:p-5 overflow-hidden">
      <div className="text-center mb-3">
        <h1 className="text-base md:text-2xl font-bold text-white tracking-widest uppercase">💨 Shisha</h1>
        <div className="w-12 h-px bg-cyan-400/60 mx-auto mt-1" />
      </div>
      <div className="flex-1 overflow-hidden">
        <ST en="Flavours" ar="النكهات" />
        <MI name="Double Apple" arabic="تفاح مزدوج" price="€14" desc="Classic — bestseller" />
        <MI name="Grape Mint" arabic="عنب بالنعناع" price="€14" />
        <MI name="Watermelon Ice" arabic="بطيخ بالثلج" price="€15" />
        <MI name="Blue Mist" arabic="ضباب أزرق" price="€15" desc="Blueberry & anise" />
        <MI name="Lemon Mint" arabic="ليمون بالنعناع" price="€14" />
        <MI name="Rose Gold" arabic="ورد ذهبي" price="€16" desc="Floral & vanilla" />
        <MI name="Guava Passion" arabic="جوافة وباشن" price="€16" />
        <MI name="Melon Breeze" arabic="نسيم البطيخ" price="€14" />
        <div className="mt-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-cyan-400/20">
          <p className="text-cyan-200 text-xs text-center">🪬 Coal refreshes included · Private bookings welcome</p>
        </div>
      </div>
    </div>
  </div>
);
export default FourthPage;
