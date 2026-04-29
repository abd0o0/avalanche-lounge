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

const FourthPage = () => (
  <div style={pageStyle} className="p-4 md:p-8 overflow-hidden">
    <SectionTitle en="SHISHA" ar="شيشة" />
    <MenuItem name="Double Apple" arabic="تفاح مزدوج" price="€14" desc="Classic — our bestseller" />
    <MenuItem name="Grape Mint" arabic="عنب بالنعناع" price="€14" desc="Fresh & cool" />
    <MenuItem name="Watermelon Ice" arabic="بطيخ بالثلج" price="€15" desc="Chilled summer vibe" />
    <MenuItem name="Blue Mist" arabic="ضباب أزرق" price="€15" desc="Blueberry & anise" />
    <MenuItem name="Lemon Mint" arabic="ليمون بالنعناع" price="€14" desc="Zesty & refreshing" />
    <MenuItem name="Rose Gold" arabic="ورد ذهبي" price="€16" desc="Floral rose & vanilla" />
    <MenuItem name="Guava Passion" arabic="جوافة وباشن" price="€16" desc="Tropical blend" />
    <MenuItem name="Melon Breeze" arabic="نسيم البطيخ" price="€14" desc="Light honeydew" />
    <div className="mt-2 p-2 rounded-lg border border-cyan-500/20 bg-cyan-900/10">
      <p className="text-gray-400 text-xs text-center">
        🪬 Coal refreshes included · Private shisha events welcome
      </p>
    </div>
  </div>
);

export default FourthPage;
