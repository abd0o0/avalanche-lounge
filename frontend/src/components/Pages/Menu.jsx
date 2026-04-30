import React, { useEffect } from 'react';
import Mybook from './MyBook';
import MainHOC from '../MainHOC';
import drinks from '../../assets/avalanche/drinks.jpg';
import { FaChevronDown } from 'react-icons/fa';
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
            {t('brand.name')} · {t('brand.slogan')}
          </p>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-3 tracking-tight">
            {t('menu.title') || 'Our Menu'}
          </h1>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            {t('menu.subtitle') || 'cocktails, mocktails, coffee — and of course, premium shisha.'}
          </p>
          <div className="mt-8 flex justify-center">
            <FaChevronDown className="text-cyan-400 animate-bounce" size={20} />
          </div>
        </div>
      </div>

      <div className="w-full bg-white dark:bg-gray-950 pt-4 pb-20">
        <p className="text-center text-gray-400 dark:text-gray-500 text-xs tracking-widest uppercase mb-4">
          {t('menu.flipPrompt')}
        </p>
        <div className="w-full flex justify-center">
          <Mybook />
        </div>
      </div>
    </div>
  );
}

export default MainHOC(Menu);

