import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loungeBg from '../../../assets/avalanche/lounge.jpg';
import { useTranslation } from '../../../i18n/useTranslation.jsx';

export default function Content() {
  const { t, locale, setLocale } = useTranslation();

  const handleLangSwitch = () => setLocale(locale === 'en' ? 'de' : 'en');

  return (
    <div className="relative overflow-hidden">
      <img src={loungeBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white dark:from-gray-950/90 dark:via-gray-950/95 dark:to-gray-950" />

      <div className="relative z-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

        <div className="container mx-auto px-6 lg:px-16 pt-14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent leading-tight">
                  {t('brand.name')}
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-500 font-medium tracking-widest">
                  {t('brand.slogan')}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                {t('brand.tagline')}
              </p>
              <div className="flex gap-3">
                {[  
                  { icon: <FaInstagram />, href: 'https://instagram.com/', label: 'Instagram' },
                  { icon: <FaFacebook />, href: 'https://facebook.com/', label: 'Facebook' },
                  { icon: <FaTiktok />, href: 'https://tiktok.com/', label: 'TikTok' },
                ].map(({ icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 hover:text-white border border-gray-200 dark:border-white/10 transition-all duration-300 hover:scale-110 hover:border-transparent">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-4">{t('footer.navTitle') || 'Navigation'}</h3>
              <ul className="space-y-2">
                {[  
                  { name: t('nav.home'), path: '/' },
                  { name: t('nav.events'), path: '/events' },
                  { name: t('nav.menu'), path: '/menu' },
                  { name: t('nav.reservation'), path: '/reservation' },
                ].map(({ name, path }) => (
                  <li key={path}>
                    <Link to={path} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 text-sm flex items-center gap-2 group transition-colors duration-200">
                      <span className="w-0 h-px bg-cyan-500 group-hover:w-4 transition-all duration-300" />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening hours */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-4">{t('footer.hours') || 'Opening Hours'}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-white/5">
                  <span className="text-gray-600 dark:text-gray-400">{t('openingHours.monThu')}</span>
                  <span className="text-gray-900 dark:text-white font-medium">16:00 – 02:00</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-white/5">
                  <span className="text-gray-600 dark:text-gray-400">{t('openingHours.friSat')}</span>
                  <span className="text-gray-900 dark:text-white font-medium">16:00 – 05:00</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-white/5">
                  <span className="text-gray-600 dark:text-gray-400">{t('openingHours.sunday')}</span>
                  <span className="text-gray-900 dark:text-white font-medium">16:00 – 02:00</span>
                </div>
              </div>
            </div>

            {/* Contact + newsletter */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-4">{t('footer.contact') || 'Contact'}</h3>
              <div className="space-y-3 text-sm mb-6">
                <a href="https://maps.google.com/?q=Sarab+Lounge+Dortmund" target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  <FaMapMarkerAlt className="mt-0.5 shrink-0 text-cyan-500" />
                  <span>Am Sittardsberg, Dortmund</span>
                </a>
                <a href="mailto:info@avalanche-lounge.de"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  <FaEnvelope className="shrink-0 text-cyan-500" />
                  <span>info@avalanche-lounge.de</span>
                </a>
                <button onClick={handleLangSwitch}
                  className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 text-xs transition-colors mt-2">
                  🌐 Switch to {locale === 'en' ? 'Deutsch' : 'English'}
                </button>
              </div>
              <NewsletterMini />
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-600 text-xs">
              © 2025 {t('brand.name')}. {t('footer.copyright')}
            </p>
            <div className="flex gap-5 text-xs text-gray-400 dark:text-gray-600">
              <a href="/privacy" className="hover:text-cyan-500 transition-colors">{t('footer.privacy')}</a>
              <a href="/terms" className="hover:text-cyan-500 transition-colors">{t('footer.terms')}</a>
              <a href="/reservation" className="hover:text-cyan-500 transition-colors">{t('footer.reserve')}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NewsletterMini = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    setEmail('');
  };

  return (
    <div>
      <p className="text-xs text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">{t('footer.newsletter')}</p>
      {done ? (
        <p className="text-cyan-600 dark:text-cyan-400 text-xs font-medium">✓ {t('footer.subscribed') || 'You\'re subscribed!'}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t('footer.newsletterPlaceholder')}
            required
            className="flex-1 min-w-0 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-cyan-500"
          />
          <button type="submit"
            className="px-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:scale-105 transition-transform shrink-0">
            {t('footer.newsletterSubmit')}
          </button>
        </form>
      )}
    </div>
  );
};
