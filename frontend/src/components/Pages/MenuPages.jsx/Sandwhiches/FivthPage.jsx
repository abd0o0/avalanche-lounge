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

const FifthPage = () => (
  <div style={pageStyle} className="p-4 md:p-8 overflow-hidden">
    <SectionTitle en="STARTERS & SNACKS" ar="مقبلات وسناكس" />
    <MenuItem name="Hummus & Bread" arabic="حمص بالخبز" price="€6.50" desc="Creamy hummus with warm pita" />
    <MenuItem name="Chicken Wings" arabic="أجنحة الدجاج" price="€9.00" desc="Crispy, choice of sauce" />
    <MenuItem name="Nachos" price="€7.50" desc="Cheese, jalapeño, salsa, sour cream" />
    <MenuItem name="Mozzarella Sticks" price="€7.00" desc="Fried, marinara dip" />
    <MenuItem name="Loaded Fries" arabic="بطاطس محملة" price="€8.00" desc="Cheese, chili, sour cream" />

    <div className="mt-3">
      <SectionTitle en="MAINS" ar="أطباق رئيسية" />
      <MenuItem name="Grilled Halloumi Wrap" arabic="رول حلوم مشوي" price="€9.50" desc="Halloumi, greens, tahini" />
      <MenuItem name="Chicken Caesar Salad" arabic="سلطة سيزر" price="€10.00" desc="Romaine, chicken, parmesan" />
      <MenuItem name="Pasta Arrabiata" arabic="باستا أرابياتا" price="€10.00" desc="Spicy tomato, al dente" />
      <MenuItem name="Wagyu Burger" arabic="برغر واغيو" price="€14.00" desc="Wagyu patty, truffle mayo, brioche" />
    </div>
  </div>
);

export default FifthPage;
