import { useState, useEffect } from 'react';
import Logo from '../../assets/Logo/playcafe.png';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../../components/ThemeToggle';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { useTranslation } from '../../i18n/useTranslation.jsx';

const Navbar = () => {
  const { t, locale, setLocale } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.menu'), path: '/menu' },
    { name: t('nav.reservation'), path: '/reservation' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 z-50 transition-all duration-500">
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`} />

      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 transition-all duration-500 ${
        isScrolled ? 'w-full opacity-100' : 'w-0 opacity-0'
      }`} />

      <div className="relative z-10 mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-all duration-300" />
                <img className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full shadow-xl border-2 border-white/20 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" alt="Avalanche Lounge Logo" src={Logo} loading="lazy" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">{t('brand.name')}</h1>
                {locale === 'ar' && (
                  <p className="text-xs text-gray-500 font-medium tracking-widest" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>
                    {t('brand.arabic')}
                  </p>
                )}
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex">
            <ul className="flex space-x-1">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg overflow-hidden block group ${
                    location.pathname === item.path
                      ? 'text-white bg-gradient-to-r from-blue-500 to-cyan-600 shadow-lg'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}>
                    <span className="relative z-10">{item.name}</span>
                    {location.pathname !== item.path && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <ThemeToggle />
            </div>
            <Link to="/reservation" className="px-5 py-2 font-semibold text-white text-sm bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">{t('nav.reservation')}</Link>
            <div className="ml-2 flex items-center gap-1">
              <button
                onClick={() => setLocale(locale === 'en' ? 'de' : locale === 'de' ? 'ar' : 'en')}
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-blue-400 dark:hover:border-cyan-500 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-200"
                aria-label="Switch language"
              >
                <FiGlobe size={15} />
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-xl text-gray-300 hover:bg-white/10 transition-all duration-300">
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 transform ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-gray-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <div className="px-6 py-6 space-y-2">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-white bg-gradient-to-r from-blue-500 to-cyan-600 shadow-lg'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
              }`}>
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10">
              <Link to="/reservation" onClick={() => setIsMenuOpen(false)} className="block text-center px-4 py-3 font-semibold text-white text-sm bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl shadow-lg">{t('nav.reservation')}</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
