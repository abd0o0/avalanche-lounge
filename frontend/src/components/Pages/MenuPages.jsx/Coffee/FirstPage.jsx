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

const FirstPage = () => (
  <div style={pageStyle} className="p-4 md:p-8 overflow-hidden">
    <div className="mb-4">
      <SectionTitle en="HOT DRINKS" ar="مشروبات ساخنة" />
      <MenuItem name="Espresso" arabic="إسبريسو" price="€2.50" desc="Rich double shot" />
      <MenuItem name="Cappuccino" arabic="كابتشينو" price="€3.50" desc="Espresso, steamed milk & foam" />
      <MenuItem name="Latte" arabic="لاتيه" price="€4.00" desc="Smooth & creamy" />
      <MenuItem name="Rose Latte" arabic="لاتيه بالورد" price="€4.50" desc="Floral & aromatic" />
      <MenuItem name="Matcha Latte" arabic="لاتيه ماتشا" price="€4.50" desc="Earthy & smooth" />
      <MenuItem name="Turkish Coffee" arabic="قهوة تركية" price="€3.00" desc="Traditional preparation" />
      <MenuItem name="Hot Chocolate" arabic="شوكولاتة ساخنة" price="€4.00" desc="Rich & indulgent" />
    </div>
    <div>
      <SectionTitle en="COLD COFFEE" ar="قهوة باردة" />
      <MenuItem name="Iced Latte" arabic="لاتيه بارد" price="€4.50" />
      <MenuItem name="Cold Brew" arabic="كولد برو" price="€4.50" desc="Slow-steeped 12h" />
      <MenuItem name="Iced Matcha" arabic="ماتشا باردة" price="€5.00" />
    </div>
  </div>
);

export default FirstPage;
