import React from 'react';
import bg from '../../../../assets/avalanche/cocktails.jpg';

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

const SecondPage = () => (
  <div className="h-full w-full relative overflow-hidden">
    <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/88" />
    <div className="relative z-10 h-full flex flex-col p-3 md:p-5 overflow-hidden">
      <div className="text-center mb-3">
        <h1 className="text-base md:text-2xl font-bold text-white tracking-widest uppercase">🍹 Cocktails</h1>
        <div className="w-12 h-px bg-cyan-400/60 mx-auto mt-1" />
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="mb-3">
          <ST en="Signature" ar="كوكتيلات مميزة" />
          <MI name="Avalanche Sour" arabic="أفالانش ساور" price="€9.50" desc="Vodka, lemon, blue curaçao, egg white" />
          <MI name="Midnight Storm" arabic="عاصفة الليل" price="€10.00" desc="Dark rum, blackberry, lime, ginger beer" />
          <MI name="Desert Rose" arabic="وردة الصحراء" price="€9.50" desc="Gin, rose water, lychee, tonic" />
          <MI name="Blue Glacier" arabic="الجليد الأزرق" price="€10.00" desc="Vodka, blue curaçao, mint, soda" />
          <MI name="Smoking Mirror" arabic="مرآة الدخان" price="€11.00" desc="Mezcal, honey, lemon, chili" />
        </div>
        <div>
          <ST en="Classics" ar="كلاسيكية" />
          <MI name="Mojito" arabic="موهيتو" price="€8.50" desc="Rum, mint, lime, soda" />
          <MI name="Aperol Spritz" price="€7.50" desc="Aperol, prosecco, orange" />
          <MI name="Gin & Tonic" price="€8.00" desc="Premium gin, cucumber" />
          <MI name="Negroni" price="€9.00" desc="Gin, Campari, vermouth" />
        </div>
      </div>
    </div>
  </div>
);
export default SecondPage;
