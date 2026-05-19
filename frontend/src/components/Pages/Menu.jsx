import React, { useEffect } from 'react';
import Mybook from './MyBook';
import MainHOC from '../MainHOC';
import drinks from '../../assets/avalanche/drinks.jpg';
import { FaChevronDown, FaBookOpen } from 'react-icons/fa';
import { useTranslation } from '../../i18n/useTranslation.jsx';

function Menu() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="relative overflow-hidden">
        <img src={drinks} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white dark:to-gray-950" />
        <div className="relative z-10 pt-36 pb-16 px-6 text-center">
          <p className="text-cyan-400 text-xs tracking-[0.4em] uppercase font-semibold mb-3">
            {t('brand.name')} {t('brand.slogan')}
          </p>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-3 tracking-tight">
            {t('menu.title') || 'Our Menu'}
          </h1>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            {t('menu.subtitle') || 'cocktails, mocktails, coffee  and of course, premium shisha.'}
          </p>
          <div className="mt-8 flex justify-center">
            <FaChevronDown className="text-cyan-400 animate-bounce" size={20} />
          </div>
        </div>
      </div>

      <div className="w-full bg-white dark:bg-gray-950 pt-4 pb-20">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400 animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.15)] dark:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <FaBookOpen size={18} />
            <span className="text-xs md:text-sm tracking-widest uppercase font-bold">
              {t('menu.flipPrompt')}
            </span>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Mybook />
        </div>
      </div>
    </div>
  );
}

export default MainHOC(Menu);

