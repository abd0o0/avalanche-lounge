import React from 'react';
import bg from '../../../../assets/avalanche/food.jpg';

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

const FifthPage = () => (
  <div className="h-full w-full relative overflow-hidden">
    <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/88" />
    <div className="relative z-10 h-full flex flex-col p-3 md:p-5 overflow-hidden">
      <div className="text-center mb-3">
        <h1 className="text-base md:text-2xl font-bold text-white tracking-widest uppercase"> Food</h1>
        <div className="w-12 h-px bg-cyan-400/60 mx-auto mt-1" />
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="mb-3">
          <ST en="Starters" ar="مقبلات" />
          <MI name="Hummus & Bread" arabic="حمص" price="€6.50" desc="Creamy with warm pita" />
          <MI name="Chicken Wings" arabic="أجنحة دجاج" price="€9.00" desc="Crispy, choice of sauce" />
          <MI name="Nachos" price="€7.50" desc="Cheese, jalapeño, salsa" />
          <MI name="Loaded Fries" arabic="بطاطس محملة" price="€8.00" desc="Cheese, chili, sour cream" />
        </div>
        <div>
          <ST en="Mains" ar="أطباق رئيسية" />
          <MI name="Halloumi Wrap" arabic="رول حلوم" price="€9.50" desc="Grilled, tahini, greens" />
          <MI name="Caesar Salad" arabic="سلطة سيزر" price="€10.00" desc="Chicken, romaine, parmesan" />
          <MI name="Pasta Arrabiata" arabic="باستا" price="€10.00" desc="Spicy tomato, al dente" />
          <MI name="Wagyu Burger" arabic="برغر واغيو" price="€14.00" desc="Truffle mayo, brioche" />
        </div>
      </div>
    </div>
  </div>
);
export default FifthPage;
