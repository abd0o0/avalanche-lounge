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

const SixthPage = () => (
  <div style={pageStyle} className="p-4 md:p-8 overflow-hidden">
    <SectionTitle en="SOFT DRINKS" ar="مشروبات غازية" />
    <MenuItem name="Coca-Cola" price="€3.00" />
    <MenuItem name="Coca-Cola Zero" price="€3.00" />
    <MenuItem name="Fanta Orange" price="€3.00" />
    <MenuItem name="Sprite" price="€3.00" />
    <MenuItem name="Red Bull" price="€4.50" />
    <MenuItem name="Still Water (0.5L)" arabic="ماء" price="€2.50" />
    <MenuItem name="Sparkling Water (0.5L)" price="€2.50" />

    <div className="mt-3">
      <SectionTitle en="MILKSHAKES & SMOOTHIES" ar="ميلك شيك وسموذي" />
      <MenuItem name="Vanilla Milkshake" arabic="ميلك شيك فانيليا" price="€6.00" />
      <MenuItem name="Chocolate Milkshake" arabic="ميلك شيك شوكولاتة" price="€6.00" />
      <MenuItem name="Strawberry Milkshake" arabic="ميلك شيك فراولة" price="€6.00" />
      <MenuItem name="Mango Smoothie" arabic="سموذي مانجو" price="€6.50" desc="Mango, banana, orange" />
      <MenuItem name="Berry Blast" arabic="بيري بلاست" price="€6.50" desc="Mixed berries & yogurt" />
    </div>
  </div>
);

export default SixthPage;
