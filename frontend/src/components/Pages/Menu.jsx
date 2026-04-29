import React, { useEffect, useState } from 'react';
import Mybook from './MyBook';
import MainHOC from '../MainHOC';
import drinks from '../../assets/avalanche/drinks.jpg';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from '../../i18n/useTranslation.jsx';

const shishaFlavors = [
  { nameKey: 'doubleApple',   name: 'Double Apple',   arabic: 'تفاحتان',        descKey: 'classicShisha', price: '€14' },
  { nameKey: 'grapeMint',     name: 'Grape Mint',     arabic: 'عنب بالنعناع',   descKey: 'freshGrapeMint', price: '€14' },
  { nameKey: 'watermelonIce', name: 'Watermelon Ice', arabic: 'بطيخ بالثلج',    descKey: 'icyFreshness',   price: '€15' },
  { nameKey: 'blueMist',      name: 'Blue Mist',      arabic: 'ضباب أزرق',      descKey: 'blueberryAnise', price: '€15' },
  { nameKey: 'lemonMint',     name: 'Lemon Mint',     arabic: 'ليمون بالنعناع', descKey: 'zestyCitrus',    price: '€14' },
  { nameKey: 'roseGold',      name: 'Rose Gold',      arabic: 'ورد ذهبي',       descKey: 'floralRose',     price: '€16' },
  { nameKey: 'guavaPassion',  name: 'Guava Passion',  arabic: 'جوافة وباشن',    descKey: 'tropicalGuava',  price: '€16' },
  { nameKey: 'melonBreeze',   name: 'Melon Breeze',   arabic: 'نسيم البطيخ',    descKey: 'honeydewSmoke',  price: '€14' },
];

function Menu() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('flipmenu');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <img src={drinks} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white dark:to-gray-950" />
        <div className="relative z-10 pt-36 pb-16 px-6 text-center">
          <p className="text-cyan-400 text-xs tracking-[0.4em] uppercase font-semibold mb-3">
            {t('brand.name')} · {t('brand.slogan')}
          </p>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-3 tracking-tight">
            {t('menu.title') || 'Our Menu'}
          </h1>
          <p className="text-2xl md:text-3xl text-white/60 mb-4" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>
            {t('menu.arabicTitle') || 'قائمتنا'}
          </p>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            {t('menu.subtitle') || 'Cocktails, mocktails, coffee, food — and of course, premium shisha.'}
          </p>
          <div className="mt-8 flex justify-center">
            <FaChevronDown className="text-cyan-400 animate-bounce" size={20} />
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-3 px-4 py-8 bg-white dark:bg-gray-950 sticky top-16 z-30 border-b border-gray-100 dark:border-white/5">
        {[  
          { key: 'flipmenu', label: '🍹 ' + t('menu.tabDrinks') },
          { key: 'shisha',   label: '💨 ' + t('menu.tabShisha') },
        ].map(({ key, label }) => (
          <button key={key} onClick={() => setActiveTab(key)}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              activeTab === key
                ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/20'
                : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-500'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* FLIP BOOK */}
      {activeTab === 'flipmenu' && (
        <div className="w-full bg-white dark:bg-gray-950 pt-4 pb-20">
          <p className="text-center text-gray-400 dark:text-gray-500 text-xs tracking-widest uppercase mb-4">
            {t('menu.flipPrompt')}
          </p>
          <div className="w-full flex justify-center">
            <Mybook />
          </div>
        </div>
      )}

      {/* SHISHA */}
      {activeTab === 'shisha' && (
        <div className="bg-white dark:bg-gray-950 pt-8 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                {t('menu.shishaTitle')}
              </h2>
              <p className="text-2xl text-gray-400 dark:text-gray-500" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>
                {t('menu.shishaArabic')}
              </p>
              <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
                {t('menu.shishaDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {shishaFlavors.map((f) => (
                <div key={f.name} className="group relative bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-500 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg dark:hover:shadow-cyan-500/5 hover:-translate-y-1" style={{ willChange: 'transform' }}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold tracking-widest text-blue-500 dark:text-cyan-400 uppercase">{t('menu.shishaFlavours')}</span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{f.price}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{f.name}</h3>
                    <p className="text-gray-400 dark:text-gray-500 text-sm mb-2" style={{ fontFamily: '"Noto Naskh Arabic", serif', direction: 'rtl' }}>{f.arabic}</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs leading-relaxed">{t(`menu.shishaFlavoursList.${f.nameKey}_arabic`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <div className="inline-block bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 rounded-xl px-8 py-4">
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  🪬 {t('menu.shishaDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainHOC(Menu);
