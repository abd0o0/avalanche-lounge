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
    <img src={coffeeBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black/85" />

    <div className="relative z-10 h-full flex flex-col p-3 md:p-5 overflow-hidden">
      <div className="text-center mb-3">
        <h1 className="text-base md:text-2xl font-bold text-white tracking-widest uppercase drop-shadow"> Hot &amp; Cold Coffee</h1>
        <div className="w-12 h-px bg-cyan-400/60 mx-auto mt-1" />
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="mb-3">
          <SectionTitle en="Heisse Getranke" />
          <MenuItem name="Espresso" price="2,50 EUR" />
          <MenuItem name="Doppelter Espresso" price="4,00 EUR" />
          <MenuItem name="Cappuccino" price="4,00 EUR" />
          <MenuItem name="Latte Macchiato" price="4,00 EUR" />
          <MenuItem name="Kaffee Crema" price="3,50 EUR" />
          <MenuItem name="Alle Arten von Tee" price="3,00 EUR" />
          <MenuItem name="Arabischen Kaffee" price="3,50 EUR" />
          <MenuItem name="Marokkanischer Tee" price="3,50 EUR" />
        </div>
        <div>
          <SectionTitle en="Eiskaffee" />
          <MenuItem name="Frappé" price="4,50 EUR" />
          <MenuItem name="Fredo Cappuccino" price="4,50 EUR" />
          <MenuItem name="Frappuccino" price="4,50 EUR" />
          <MenuItem name="Eiscafé-Karamell" price="4,50 EUR" />
          <MenuItem name="Eiscafé-Schokolade" price="4,50 EUR" />
        </div>
      </div>
    </div>
  </div>
);

export default FirstPage;
