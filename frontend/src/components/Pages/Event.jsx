import React, { useEffect, useState } from 'react';
import { useTranslation } from '../../i18n/useTranslation.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MainHOC from '../MainHOC';
import img1 from '../../assets/img/event1.jpg';
import img2 from '../../assets/img/event2.jpg';
import img3 from '../../assets/img/event3.jpg';
import img4 from '../../assets/img/event4.jpg';
import img5 from '../../assets/img/event6.jpg';
import lounge from '../../assets/avalanche/lounge.jpg';
import cocktails from '../../assets/avalanche/cocktails.jpg';

const VITE_BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';


// Months handled by translation

function Event() {
  const { t } = useTranslation();
  const translatedMonths = t('months');
  const translatedDays = t('days');
  const months = Array.isArray(translatedMonths)
    ? translatedMonths
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysOfWeek = Array.isArray(translatedDays)
    ? translatedDays
    : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const fallbackEvents = [
    { _id: '1', name: t('events.eventFallback1') || 'Live DJ Night', description: t('events.eventFallback1Desc') || 'Music, vibes and cocktails all night.', date: new Date(Date.now() + 3 * 24 * 3600 * 1000).toISOString(), image: img1 },
    { _id: '2', name: t('events.eventFallback2') || 'Shisha Special', description: t('events.eventFallback2Desc') || 'Enjoy exclusive flavors and lounge ambiance.', date: new Date(Date.now() + 5 * 24 * 3600 * 1000).toISOString(), image: img2 },
    { _id: '3', name: t('events.eventFallback3') || 'Ladies Night', description: t('events.eventFallback3Desc') || 'Special offers and curated playlist.', date: new Date(Date.now() + 10 * 24 * 3600 * 1000).toISOString(), image: img3 },
    { _id: '4', name: t('events.eventFallback4') || 'Weekend Party', description: t('events.eventFallback4Desc') || 'Reserve early for the best tables.', date: new Date(Date.now() + 14 * 24 * 3600 * 1000).toISOString(), image: img4 },
  ];
  const [events, setEvents] = useState([]);
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${VITE_BACKEND}/api/event/all`)
      .then(r => r.json())
      .then(data => setEvents(Array.isArray(data) && data.length ? data : fallbackEvents))
      .catch(() => setEvents(fallbackEvents));
  }, []);

  const displayEvents = events.length ? events : fallbackEvents;

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">

      {/* ── HERO ── */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={lounge} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

        {/* Floating event images */}
        <div className="absolute inset-0 pointer-events-none">
          {[img1, img2, img3, img4, img5].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15 + i * 0.04, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="absolute rounded-2xl overflow-hidden"
              style={{
                width: `${80 + i * 20}px`,
                height: `${60 + i * 15}px`,
                top: `${10 + (i * 17) % 60}%`,
                left: i % 2 === 0 ? `${5 + i * 3}%` : `${70 - i * 3}%`,
                transform: `rotate(${i % 2 === 0 ? 6 : -6}deg)`,
              }}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-cyan-400 tracking-[0.4em] text-xs uppercase font-semibold mb-3"
          >
            What's on
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-3"
            style={{ textShadow: '0 0 60px rgba(6,182,212,0.3)' }}
          >
            Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-300 text-lg"
          >
            Nights you won't forget
          </motion.p>
        </div>
      </section>

      {/* ── EVENTS GRID + CALENDAR ── */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Events */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {t("events.upcoming")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {displayEvents.map((event, i) => {
                const d = new Date(event.date);
                return (
                  <motion.div
                    key={event._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="group rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 bg-white dark:bg-gray-900 hover:shadow-xl dark:hover:shadow-cyan-500/5 transition-all duration-300"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={event.image || [img1,img2,img3,img4,img5][i % 5]}
                        alt={event.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      {/* Date badge */}
                      <div className="absolute top-3 left-3 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-xl px-3 py-2 text-center shadow-lg">
                        <p className="text-lg font-bold leading-none">{d.getDate()}</p>
                        <p className="text-xs font-medium">{months[d.getMonth()].slice(0,3)}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{event.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">{event.description}</p>
                      <Link
                        to="/reservation"
                        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:gap-2 transition-all duration-200"
                      >
                        Reserve a spot →
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Calendar + info */}
          <div className="space-y-6">
            {/* Calendar */}
            <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-gray-900 p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {months[currentMonth]} {currentYear}
              </h3>
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {daysOfWeek.map(d => (
                  <div key={d} className="text-xs font-bold text-gray-400 dark:text-gray-600 pb-1">{d}</div>
                ))}
                {Array(firstDayOfMonth).fill(null).map((_, i) => (
                  <div key={`e-${i}`} />
                ))}
                {dates.map(day => (
                  <div
                    key={day}
                    className={`text-xs py-1.5 rounded-lg transition-colors ${
                      day === currentDate
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* Opening hours */}
            <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-gray-900 p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{t("events.openingHours")}</h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: 'Mon – Thu', hours: '16:00 – 02:00' },
                  { day: 'Fri & Sat', hours: '16:00 – 05:00' },
                  { day: 'Sunday', hours: '16:00 – 02:00' },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between pb-2 border-b border-gray-50 dark:border-white/5">
                    <span className="text-gray-600 dark:text-gray-400">{day}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="relative rounded-2xl overflow-hidden">
              <img src={cocktails} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-cyan-900/90" />
              <div className="relative z-10 p-6 text-center">
                <p className="text-cyan-300 text-xs tracking-widest uppercase mb-2">Got a group?</p>
                <h3 className="text-white font-bold text-lg mb-2">{t("events.privateEvents")}</h3>
                <p className="text-gray-300 text-sm mb-4">Birthday, bachelor, corporate — we've got the space and the vibe.</p>
                <Link to="/reservation"
                  className="block w-full py-2.5 bg-white text-blue-700 font-semibold text-sm rounded-xl hover:scale-105 transition-transform">
                  {t("events.inquire")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENT GALLERY STRIP ── */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .marquee-track { animation: marquee 30s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="marquee-track flex gap-4" style={{ width: 'max-content' }}>
          {[img1,img2,img3,img4,img5,img1,img2,img3,img4,img5].map((img, i) => (
            <div key={i} className="w-64 h-40 rounded-xl overflow-hidden shrink-0">
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default MainHOC(Event);
