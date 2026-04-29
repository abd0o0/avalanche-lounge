import React from 'react';
import mocktailsBg from '../../../../assets/avalanche/mocktails.jpg';

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

const ThirdPage = () => (
  <div className="avalanche-page h-full">
    <div className="relative h-20 md:h-28 overflow-hidden">
      <img src={mocktailsBg} alt="Mocktails" className="w-full h-full object-cover object-top" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70 flex items-end justify-center pb-2">
        <h1 className="text-white font-bold text-lg md:text-2xl tracking-widest uppercase drop-shadow">🧃 Mocktails & Juices</h1>
      </div>
    </div>

    <div className="p-3 md:p-5">
      <div className="mb-3">
        <SectionTitle en="Mocktails" ar="موكتيلات" />
        <MenuItem name="Virgin Mojito" arabic="موهيتو" price="€6.00" desc="Mint, lime, soda" />
        <MenuItem name="Waterfall ★" arabic="الشلال" price="€6.50" desc="Watermelon, mint, lemon — our signature" />
        <MenuItem name="Tropical Bliss" arabic="نعيم استوائي" price="€6.50" desc="Mango, passion fruit, pineapple" />
        <MenuItem name="Berry Breeze" arabic="نسيم التوت" price="€6.00" desc="Mixed berries, honey, soda" />
        <MenuItem name="Lemon Ginger Fizz" price="€5.50" desc="Fresh lemon, ginger, sparkling water" />
        <MenuItem name="Rose Sunrise" arabic="شروق الورد" price="€6.50" desc="Rose syrup, orange, grenadine" />
      </div>
      <div>
        <SectionTitle en="Fresh Juices" ar="عصائر طازجة" />
        <MenuItem name="Orange" arabic="برتقال" price="€4.50" desc="Freshly squeezed" />
        <MenuItem name="Mango" arabic="مانجو" price="€5.00" />
        <MenuItem name="Lemonade" arabic="ليمونادة" price="€4.50" desc="Classic or mint" />
        <MenuItem name="Mixed Fruit" arabic="فواكه مشكلة" price="€5.50" />
      </div>
    </div>
  </div>
);

export default ThirdPage;
