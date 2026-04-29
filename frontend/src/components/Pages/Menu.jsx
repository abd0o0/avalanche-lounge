import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Mybook from './MyBook';
import { GiArrowDunk } from 'react-icons/gi';
import MainHOC from '../MainHOC';

// Shisha flavors inline
const shishaFlavors = [
  { name: 'Double Apple', arabic: 'تفاحتان', description: 'Classic sweet apple blend — our bestseller.', price: '€14' },
  { name: 'Grape Mint', arabic: 'عنب بالنعناع', description: 'Fresh grape with cool mint finish.', price: '€14' },
  { name: 'Watermelon Ice', arabic: 'بطيخ بالثلج', description: 'Chilled watermelon with icy freshness.', price: '€15' },
  { name: 'Blue Mist', arabic: 'ضباب أزرق', description: 'Blueberry & anise — smooth and deep.', price: '€15' },
  { name: 'Lemon Mint', arabic: 'ليمون بالنعناع', description: 'Zesty citrus with a minty punch.', price: '€14' },
  { name: 'Rose Gold', arabic: 'ورد ذهبي', description: 'Floral rose with a hint of vanilla.', price: '€16' },
  { name: 'Guava Passion', arabic: 'جوافة وباشن', description: 'Tropical guava & passion fruit.', price: '€16' },
  { name: 'Melon Breeze', arabic: 'نسيم البطيخ', description: 'Light honeydew melon, smooth smoke.', price: '€14' },
];

function Menu() {
  const [activeTab, setActiveTab] = useState('flipmenu');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full min-h-screen"
      style={{ background: 'linear-gradient(160deg, #050810 0%, #0a1628 50%, #050810 100%)' }}
    >
      {/* Hero */}
      <div className="pt-28 pb-10 px-6 text-center">
        <h1
          className="text-5xl md:text-8xl font-bold mb-2"
          style={{
            background: 'linear-gradient(135deg, #67e8f9, #3b82f6, #67e8f9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Our Menu
        </h1>
        <p
          className="text-2xl md:text-4xl text-gray-500 mb-6"
          style={{ fontFamily: '"Noto Naskh Arabic", serif' }}
        >
          قائمتنا
        </p>
        <p className="text-gray-400 text-base max-w-xl mx-auto">
          Cocktails, mocktails, coffee, food — and of course, premium shisha.
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex justify-center gap-4 px-4 mb-8">
        <button
          onClick={() => setActiveTab('flipmenu')}
          className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
            activeTab === 'flipmenu'
              ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/20'
              : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-cyan-500/40'
          }`}
        >
          🍹 Drinks & Food
        </button>
        <button
          onClick={() => setActiveTab('shisha')}
          className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
            activeTab === 'shisha'
              ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/20'
              : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-cyan-500/40'
          }`}
        >
          💨 Shisha
        </button>
      </div>

      {/* Drinks & Food Flip Book */}
      {activeTab === 'flipmenu' && (
        <div className="w-full">
          <div className="flex flex-col items-center mb-4">
            <p className="text-gray-500 text-sm tracking-widest uppercase mb-2">Flip through the menu</p>
            <GiArrowDunk size={40} className="text-cyan-500" />
          </div>
          <div className="w-full flex justify-center mb-20">
            <Mybook />
          </div>
        </div>
      )}

      {/* Shisha Tab */}
      {activeTab === 'shisha' && (
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-5xl font-bold mb-2"
              style={{
                background: 'linear-gradient(90deg, #67e8f9, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Shisha Menu
            </h2>
            <p
              className="text-2xl text-gray-500"
              style={{ fontFamily: '"Noto Naskh Arabic", serif' }}
            >
              قائمة الشيشة
            </p>
            <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
              Premium tobacco & coal. All shisha orders include coal refreshes and your choice of mouthpiece.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {shishaFlavors.map((flavor) => (
              <div
                key={flavor.name}
                className="group relative border border-gray-700 hover:border-cyan-500 rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] hover:-translate-y-1"
                style={{ background: 'rgba(13,26,46,0.8)' }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Shisha</span>
                    <span className="text-lg font-bold text-white">{flavor.price}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{flavor.name}</h3>
                  <p
                    className="text-gray-400 text-sm mb-2"
                    style={{ fontFamily: '"Noto Naskh Arabic", serif', direction: 'rtl' }}
                  >
                    {flavor.arabic}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">{flavor.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-block bg-blue-900/30 border border-blue-700/40 rounded-xl px-8 py-4">
              <p className="text-blue-300 text-sm">
                🪬 All prices include VAT &nbsp;·&nbsp; Coal refreshes included &nbsp;·&nbsp; Private shisha bookings available
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainHOC(Menu);
