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

const SecondPage = () => (
  <div style={pageStyle} className="p-4 md:p-8 overflow-hidden">
    <SectionTitle en="SIGNATURE COCKTAILS" ar="كوكتيلات مميزة" />
    <MenuItem name="Avalanche Sour" arabic="أفالانش ساور" price="€9.50" desc="Vodka, lemon, blue curaçao, egg white" />
    <MenuItem name="Midnight Storm" arabic="عاصفة منتصف الليل" price="€10.00" desc="Dark rum, blackberry, lime, ginger beer" />
    <MenuItem name="Desert Rose" arabic="وردة الصحراء" price="€9.50" desc="Gin, rose water, lychee, tonic" />
    <MenuItem name="Blue Glacier" arabic="الجليد الأزرق" price="€10.00" desc="Vodka, blue curaçao, mint, soda" />
    <MenuItem name="Golden Sunrise" arabic="شروق الذهب" price="€9.00" desc="Tequila, orange, grenadine" />
    <MenuItem name="Smoking Mirror" arabic="مرآة الدخان" price="€11.00" desc="Mezcal, honey, lemon, chili" />
    <div className="mt-3">
      <SectionTitle en="CLASSIC COCKTAILS" ar="كوكتيلات كلاسيكية" />
      <MenuItem name="Mojito" arabic="موهيتو" price="€8.50" desc="Rum, mint, lime, soda" />
      <MenuItem name="Aperol Spritz" price="€7.50" desc="Aperol, prosecco, orange" />
      <MenuItem name="Gin & Tonic" price="€8.00" desc="Premium gin, tonic, cucumber" />
      <MenuItem name="Negroni" price="€9.00" desc="Gin, Campari, sweet vermouth" />
    </div>
  </div>
);

export default SecondPage;
