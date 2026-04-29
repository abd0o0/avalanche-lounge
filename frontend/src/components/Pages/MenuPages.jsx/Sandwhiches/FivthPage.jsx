import React from 'react';
import foodBg from '../../../../assets/avalanche/food.jpg';

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

const FifthPage = () => (
  <div className="avalanche-page h-full">
    <div className="relative h-20 md:h-28 overflow-hidden">
      <img src={foodBg} alt="Food" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/75 flex items-end justify-center pb-2">
        <h1 className="text-white font-bold text-lg md:text-2xl tracking-widest uppercase drop-shadow">🍽️ Food</h1>
      </div>
    </div>

    <div className="p-3 md:p-5">
      <div className="mb-3">
        <SectionTitle en="Starters" ar="مقبلات" />
        <MenuItem name="Hummus & Bread" arabic="حمص" price="€6.50" desc="Creamy with warm pita" />
        <MenuItem name="Chicken Wings" arabic="أجنحة دجاج" price="€9.00" desc="Crispy, choice of sauce" />
        <MenuItem name="Nachos" price="€7.50" desc="Cheese, jalapeño, salsa" />
        <MenuItem name="Loaded Fries" arabic="بطاطس محملة" price="€8.00" desc="Cheese, chili, sour cream" />
      </div>
      <div>
        <SectionTitle en="Mains" ar="أطباق رئيسية" />
        <MenuItem name="Halloumi Wrap" arabic="رول حلوم" price="€9.50" desc="Grilled halloumi, tahini, greens" />
        <MenuItem name="Caesar Salad" arabic="سلطة سيزر" price="€10.00" desc="Chicken, romaine, parmesan" />
        <MenuItem name="Pasta Arrabiata" arabic="باستا" price="€10.00" desc="Spicy tomato, al dente" />
        <MenuItem name="Wagyu Burger" arabic="برغر واغيو" price="€14.00" desc="Truffle mayo, brioche bun" />
      </div>
    </div>
  </div>
);

export default FifthPage;
