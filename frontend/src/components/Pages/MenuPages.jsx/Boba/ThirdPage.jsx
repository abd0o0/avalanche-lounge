import React from 'react';

const pageStyle = {
  background: 'linear-gradient(160deg, #0a0a0f 0%, #0d1a2e 100%)',
  height: '100%',
  width: '100%',
  fontFamily: 'Poppins, sans-serif',
  color: '#f1f5f9',
};

const MenuItem = ({ name, arabic, price, desc }) => (
  <div className="flex justify-between items-start border-b border-white/10 pb-2 mb-2">
    <div className="flex-1 pr-2">
      <div className="flex items-baseline gap-2">
        <span className="font-semibold text-xs md:text-sm text-white">{name}</span>
        {arabic && (
          <span className="text-gray-400 text-xs" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>
            {arabic}
          </span>
        )}
      </div>
      {desc && <p className="text-gray-500 text-xs">{desc}</p>}
    </div>
    <span className="text-cyan-400 font-semibold text-xs md:text-sm whitespace-nowrap">{price}</span>
  </div>
);

const SectionTitle = ({ en, ar }) => (
  <div className="text-center mb-3">
    <h2 className="text-lg md:text-2xl font-bold"
      style={{ background: 'linear-gradient(90deg, #67e8f9, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
      {en}
    </h2>
    {ar && <p className="text-gray-500 text-xs" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>{ar}</p>}
    <div className="w-10 h-px bg-cyan-500/50 mx-auto mt-1" />
  </div>
);

const ThirdPage = () => (
  <div style={pageStyle} className="p-4 md:p-8 overflow-hidden">
    <SectionTitle en="MOCKTAILS" ar="موكتيلات" />
    <MenuItem name="Virgin Mojito" arabic="موهيتو بلا كحول" price="€6.00" desc="Mint, lime, soda, crushed ice" />
    <MenuItem name="Waterfall" arabic="الشلال" price="€6.50" desc="Watermelon, mint, lemon, soda — our signature" />
    <MenuItem name="Tropical Bliss" arabic="النعيم الاستوائي" price="€6.50" desc="Mango, passion fruit, pineapple" />
    <MenuItem name="Berry Breeze" arabic="نسيم التوت" price="€6.00" desc="Mixed berries, lemon, honey, soda" />
    <MenuItem name="Lemon Ginger Fizz" arabic="ليمون وزنجبيل" price="€5.50" desc="Fresh lemon, ginger, sparkling water" />
    <MenuItem name="Rose Sunrise" arabic="شروق الورد" price="€6.50" desc="Rose syrup, orange, grenadine, soda" />

    <div className="mt-3">
      <SectionTitle en="FRESH JUICES" ar="عصائر طازجة" />
      <MenuItem name="Orange Juice" arabic="عصير برتقال" price="€4.50" desc="Freshly squeezed" />
      <MenuItem name="Mango Juice" arabic="عصير مانجو" price="€5.00" />
      <MenuItem name="Mixed Fruit" arabic="فواكه مشكلة" price="€5.50" desc="Seasonal blend" />
      <MenuItem name="Lemonade" arabic="ليمونادة" price="€4.50" desc="Classic or mint" />
    </div>
  </div>
);

export default ThirdPage;
