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

const SeventhPage = () => (
  <div style={pageStyle} className="p-4 md:p-8 overflow-hidden">
    <SectionTitle en="BEER" ar="بيرة" />
    <MenuItem name="Becks (0.33L)" price="€3.50" desc="German lager" />
    <MenuItem name="Heineken (0.33L)" price="€3.50" />
    <MenuItem name="Corona (0.33L)" price="€4.00" desc="With lime" />
    <MenuItem name="Craft Beer (0.33L)" price="€5.00" desc="Rotating local selection" />
    <MenuItem name="Non-Alcoholic Beer" arabic="بيرة بلا كحول" price="€3.50" />

    <div className="mt-3">
      <SectionTitle en="WINES" ar="نبيذ" />
      <MenuItem name="House White (0.2L)" arabic="نبيذ أبيض" price="€5.50" />
      <MenuItem name="House Red (0.2L)" arabic="نبيذ أحمر" price="€5.50" />
      <MenuItem name="Rosé (0.2L)" arabic="نبيذ روزيه" price="€5.50" />
      <MenuItem name="Prosecco (glass)" price="€6.00" desc="Italian sparkling" />
      <MenuItem name="Aperol Spritz" price="€7.50" desc="Aperol, prosecco, orange" />
    </div>
  </div>
);

export default SeventhPage;
