import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import lounge from '../../assets/avalanche/lounge.jpg';
import cocktails from '../../assets/avalanche/cocktails.jpg';
import food from '../../assets/avalanche/food.jpg';
import drinks from '../../assets/avalanche/drinks.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' } }),
};

function Landing() {
  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <img src={lounge} alt="Avalanche Lounge" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Floating cards (decorative) */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 6 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute right-8 top-1/4 hidden lg:block w-48 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
        >
          <img src={cocktails} alt="" className="w-full h-32 object-cover" />
          <div className="bg-black/80 px-3 py-2">
            <p className="text-xs text-cyan-400 font-semibold">Signature Cocktails</p>
            <p className="text-white text-xs">From €8.50</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -80, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute left-8 bottom-1/4 hidden lg:block w-44 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
        >
          <img src={drinks} alt="" className="w-full h-28 object-cover" />
          <div className="bg-black/80 px-3 py-2">
            <p className="text-xs text-cyan-400 font-semibold">Premium Shisha</p>
            <p className="text-white text-xs">From €14</p>
          </div>
        </motion.div>

        {/* Hero text */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="text-cyan-400 tracking-[0.4em] text-xs md:text-sm uppercase mb-4 font-medium"
          >
            Est. 2025 · Dortmund
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-6xl md:text-[9rem] font-bold text-white leading-none mb-2 tracking-tight"
            style={{ textShadow: '0 0 80px rgba(6,182,212,0.3)' }}
          >
            AVALANCHE
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-3xl md:text-5xl text-cyan-200/80 mb-6"
            style={{ fontFamily: '"Noto Naskh Arabic", serif' }}
          >
            الشلال
          </motion.p>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-gray-300 text-base md:text-xl mb-10 max-w-lg mx-auto"
          >
            Lounge · Shisha · Bar — where every night becomes a memory
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/reservation"
              className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20"
            >
              Reserve a Table
            </Link>
            <Link
              to="/menu"
              className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              View Menu
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <p className="text-gray-400 text-xs tracking-widest uppercase">Scroll</p>
          <div className="w-px h-10 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────── */}
      <section className="py-24 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative h-96 lg:h-[500px]">
            <motion.img
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }} viewport={{ once: true }}
              src={lounge} alt="Lounge"
              className="absolute inset-0 w-4/5 h-full object-cover rounded-2xl shadow-2xl"
            />
            <motion.img
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}
              src={food} alt="Food"
              className="absolute right-0 bottom-8 w-1/2 h-2/5 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-950"
            />
            {/* Badge */}
            <div className="absolute -bottom-4 left-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-xs font-semibold tracking-wider uppercase">Open until 5am on weekends</p>
            </div>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
          >
            <p className="text-cyan-500 text-xs tracking-[0.3em] uppercase font-semibold mb-3">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              More than just<br />a lounge
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
              Welcome to <strong className="text-gray-900 dark:text-white">Avalanche — الشلال</strong>, your premium lounge destination in Dortmund.
              We blend oriental warmth with modern elegance to create an atmosphere that feels like nowhere else.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
              Handcrafted cocktails, premium shisha, great food, and an energy that builds through the night. Whether you're here to unwind or celebrate — this is your place.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { stat: '8+', label: 'Shisha Flavours' },
                { stat: '20+', label: 'Cocktails' },
                { stat: '5am', label: 'Fri & Sat Close' },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                  <p className="text-2xl font-bold text-blue-600 dark:text-cyan-400">{stat}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
            <Link
              to="/reservation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform"
            >
              Book a Table →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── OFFERS GRID ──────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-500 text-xs tracking-[0.3em] uppercase font-semibold mb-2">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Experience Avalanche
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: drinks, title: 'Premium Shisha', arabic: 'شيشة', desc: '8+ flavours. Premium tobacco. Coal refreshes included.', tag: 'From €14' },
              { img: cocktails, title: 'Cocktails & Bar', arabic: 'بار وكوكتيل', desc: 'Signature creations and classic favourites. Mixed to perfection.', tag: 'From €7.50' },
              { img: food, title: 'Kitchen & Bites', arabic: 'مطبخ', desc: 'From loaded fries to wagyu burgers. Food that hits.', tag: 'From €6.50' },
            ].map(({ img, title, arabic, desc, tag }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer"
              >
                <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs text-cyan-400 font-semibold tracking-wider uppercase">{tag}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
                  <p className="text-gray-300 text-xs" style={{ fontFamily: '"Noto Naskh Arabic", serif' }}>{arabic}</p>
                  <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="relative py-28 px-4 overflow-hidden">
        <img src={cocktails} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/95" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Ready for a night out?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Reserve your table now — or just show up and let the night take you.
          </p>
          <Link
            to="/reservation"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl text-lg hover:scale-105 transition-transform shadow-2xl shadow-cyan-500/30"
          >
            Reserve a Table →
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Landing;
