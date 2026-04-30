import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../i18n/useTranslation.jsx';
import MainHOC from '../MainHOC';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

function Reservation() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    guests: '',
    date: '',
    time: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);
  const minDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      // Try to send to backend; gracefully handle if backend is not running
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'}/api/reservation/create`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );
      if (res.ok) {
        setStatus('success');
        setForm({ firstName: '', lastName: '', guests: '', date: '', time: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-blue-500 dark:focus:border-cyan-500 outline-none rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm transition-all duration-200';

  return (
    <div
      className="min-h-screen w-full pt-24 pb-20 bg-white dark:bg-gray-950 transition-colors duration-300"
      
    >
      {/* Page title */}
      <div className="text-center mb-12 px-4">
        <h1
          className="text-5xl md:text-7xl font-bold mb-2"
          style={{
            background: 'linear-gradient(135deg, #67e8f9, #3b82f6)',
            webkitBackgroundClip: 'text',
            webkitTextFillColor: 'transparent',
          }}
        >
          Reservation
        </h1>

      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* LEFT — Info panel */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Contact */}
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-blue-950/40 p-6">
            <h3
              className="text-lg font-bold mb-4"
              style={{
                background: 'linear-gradient(90deg, #67e8f9, #3b82f6)',
                webkitBackgroundClip: 'text',
                webkitTextFillColor: 'transparent',
              }}
            >
              Contact
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-cyan-400 mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Avalanche Lounge</p>
                  <p className="text-gray-600 dark:text-gray-400">Kastanienallee 93, 45127 </p>
                  <p className="text-gray-600 dark:text-gray-400">Essen, Germany</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-cyan-400 shrink-0" />
                <a href="tel:+49" className="hover:text-cyan-400 transition-colors">+49 (0)1631937607</a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400 shrink-0" />
                <a href="mailto:abod.hajareen@gmail.com" className="hover:text-cyan-400 transition-colors">
                  abod.hajareen@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Opening hours */}
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-blue-950/40 p-6">
            <h3
              className="text-lg font-bold mb-4 flex items-center gap-2"
              style={{
                background: 'linear-gradient(90deg, #67e8f9, #3b82f6)',
                webkitBackgroundClip: 'text',
                webkitTextFillColor: 'transparent',
              }}
            >
              <FaClock className="text-cyan-400" style={{ webkitTextFillColor: 'initial' }} />
              Opening Hours
            </h3>
            <div className="space-y-2 text-sm">
              {[
                { day: 'Monday – Thursday', hours: '16:00 – 02:00' },
                { day: 'Friday & Saturday', hours: '16:00 – 05:00' },
                { day: 'Sunday', hours: '16:00 – 02:00' },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-600 dark:text-gray-400">{day}</span>
                  <span className="text-gray-900 dark:text-white font-medium">{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: '200px' }}>
            <iframe
              title="Avalanche Lounge Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5!2d7.0081281!3d51.4589541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c3e48272802d%3A0x94bc506828aa9c19!2sSarab%20Lounge!5e0!3m2!1sen!2sde!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* RIGHT — Reservation form */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-blue-950/40 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("reservation.title")}</h2>

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-green-900/30 border border-green-500/40 text-green-300 text-sm">
                {t("reservation.success")}
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-900/30 border border-red-500/40 text-red-300 text-sm">
                {t("reservation.error")}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">{t("reservation.firstName")} *</label>
                  <input
                    className={inputClass}
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">{t("reservation.lastName")} *</label>
                  <input
                    className={inputClass}
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">{t("reservation.guests")} *</label>
                <select
                  className={inputClass}
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>{t("reservation.guestsPlaceholder")}</option>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n} style={{ background: '#ffffff', color: '#111827' }}>{n} {n === 1 ? 'Person' : 'People'}</option>
                  ))}
                  <option value="10+" style={{ background: '#ffffff', color: '#111827' }}>10+ (Large group)</option>
                </select>
              </div>

              {/* {t("reservation.date")} & {t("reservation.time")} row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">{t("reservation.date")} *</label>
                  <input
                    className={inputClass}
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={minDate}
                    required
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">{t("reservation.time")} *</label>
                  <input
                    className={inputClass}
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
              </div>

              {/* {t("reservation.email")} */}
              <div>
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">{t("reservation.email")} *</label>
                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">{t("reservation.message")}</label>
                <textarea
                  className={`${inputClass} resize-none`}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any special requests, shisha preferences, or occasion details..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-semibold text-white text-sm tracking-wide transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: loading
                    ? 'rgba(59,130,246,0.5)'
                    : 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                  boxShadow: loading ? 'none' : '0 0 20px rgba(6,182,212,0.2)',
                }}
              >
                {loading ? t("reservation.sending") : t("reservation.send")}
              </button>

              <p className="text-gray-600 text-xs text-center">
                {t("reservation.confirmation")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHOC(Reservation);
