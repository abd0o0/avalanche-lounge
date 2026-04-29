import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaMapMarkerAlt, FaPhone, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loungeBg from '../../../assets/avalanche/lounge.jpg';
import playcafeLogo from '../../../assets/Logo/playcafe.png';

export default function Content() {
  return (
    <div className="relative overflow-hidden">
      {/* Background image with heavy dark overlay */}
      <img src={loungeBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white dark:from-gray-950/90 dark:via-gray-950/95 dark:to-gray-950" />

      <div className="relative z-10">
        {/* Top accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

        <div className="container mx-auto px-6 lg:px-16 pt-14 pb-8">
          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="lg:col-span-1 min-w-0">
              <div className="mb-4">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent leading-tight min-w-0">
                    Avalanche
                  </h2>
                  <img src={playcafeLogo} alt="PlayCafe logo" className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full object-cover border-2 border-cyan-200 dark:border-cyan-500/40 shrink-0" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                Your premium lounge in Essen. Shisha, cocktails, food &amp; unforgettable nights.
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                {[
                  { icon: <FaInstagram />, href: 'https://instagram.com/', label: 'Instagram' },
                  { icon: <FaFacebook />, href: 'https://facebook.com/', label: 'Facebook' },
                  { icon: <FaTiktok />, href: 'https://tiktok.com/', label: 'TikTok' },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 hover:text-white border border-gray-200 dark:border-white/10 transition-all duration-300 hover:scale-110 hover:border-transparent"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Events', path: '/events' },
                  { name: 'Menu', path: '/menu' },
                  { name: 'Reservation', path: '/reservation' },
                ].map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      to={path}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 text-sm flex items-center gap-2 group transition-colors duration-200"
                    >
                      <span className="w-0 h-px bg-cyan-500 group-hover:w-4 transition-all duration-300" />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening hours */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-4">
                Opening Hours
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: 'Mon – Thu', hours: '16:00 – 02:00' },
                  { day: 'Fri & Sat', hours: '16:00 – 05:00' },
                  { day: 'Sunday', hours: '16:00 – 02:00' },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-white/5">
                    <span className="text-gray-600 dark:text-gray-400">{day}</span>
                    <span className="text-gray-900 dark:text-white font-medium">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact + newsletter */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-4">
                Contact
              </h3>
              <div className="space-y-3 text-sm mb-6">
                <a href="https://maps.google.com/?q=Sarab+Lounge+essen" target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  <FaMapMarkerAlt className="mt-0.5 shrink-0 text-cyan-500" />
                  <span>Kastanienallee 93, 45127 Essen</span>
                </a>
                <a href="abod.hajareen@gmail.com"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  <FaEnvelope className="shrink-0 text-cyan-500" />
                  <span>abod.hajareen@gmail.com</span>
                </a>
              </div>

              {/* Newsletter mini */}
              <NewsletterMini />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-100 dark:border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-600 text-xs">
              © 2026 Avalanche Lounge . All rights reserved.
            </p>
            <div className="flex gap-5 text-xs text-gray-400 dark:text-gray-600">
              <a href="/privacy" className="hover:text-cyan-500 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-cyan-500 transition-colors">Terms</a>
              <a href="/reservation" className="hover:text-cyan-500 transition-colors">Reserve a Table</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NewsletterMini = () => {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    setEmail('');
  };

  return (
    <div>
      <p className="text-xs text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wider">Stay updated</p>
      {done ? (
        <p className="text-cyan-600 dark:text-cyan-400 text-xs font-medium">✓ You're subscribed!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 min-w-0 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-cyan-500"
          />
          <button type="submit"
            className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:scale-105 transition-transform shrink-0">
            <FaArrowRight size={12} />
          </button>
        </form>
      )}
    </div>
  );
};
