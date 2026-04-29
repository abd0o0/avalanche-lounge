import React from 'react';
import MainHOC from '../MainHOC';
import { useTranslation } from '../../i18n/useTranslation.jsx';

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

function Shisha() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white pt-24 pb-20 px-4 md:px-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
          {t('menu.shishaTitle')}
        </h1>
        <p
          className="text-3xl md:text-5xl text-gray-400 mb-6"
          style={{ fontFamily: '"Noto Naskh Arabic", serif' }}
        >
          {t('menu.shishaArabic') || 'قائمة الشيشة'}
        </p>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          {t('menu.shishaDesc')}
        </p>
      </div>

      {/* Flavor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {shishaFlavors.map((flavor) => (
          <div
            key={flavor.name}
            className="group relative bg-gray-800/60 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Shisha</span>
                <span className="text-xl font-bold text-white">{flavor.price}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{flavor.name}</h3>
              <p
                className="text-gray-400 text-base mb-3"
                style={{ fontFamily: '"Noto Naskh Arabic", serif', direction: 'rtl' }}
              >
                {t(`menu.shishaFlavoursList.${flavor.name === 'Double Apple' ? 'doubleApple' : flavor.name === 'Grape Mint' ? 'grapeMint' : flavor.name === 'Watermelon Ice' ? 'watermelonIce' : flavor.name === 'Blue Mist' ? 'blueMist' : flavor.name === 'Lemon Mint' ? 'lemonMint' : flavor.name === 'Rose Gold' ? 'roseGold' : flavor.name === 'Guava Passion' ? 'guavaPassion' : 'melonBreeze'}_arabic`)}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">{t(`menu.shishaFlavoursList.${flavor.name === 'Double Apple' ? 'doubleApple' : flavor.name === 'Grape Mint' ? 'grapeMint' : flavor.name === 'Watermelon Ice' ? 'watermelonIce' : flavor.name === 'Blue Mist' ? 'blueMist' : flavor.name === 'Lemon Mint' ? 'lemonMint' : flavor.name === 'Rose Gold' ? 'roseGold' : flavor.name === 'Guava Passion' ? 'guavaPassion' : 'melonBreeze'}_arabic`)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-blue-900/30 border border-blue-700/50 rounded-xl px-8 py-5">
          <p className="text-blue-300 text-sm font-medium">
            🪬 All prices include VAT &nbsp;·&nbsp; Coal refreshes included &nbsp;·&nbsp; Private shisha bookings available
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainHOC(Shisha);
