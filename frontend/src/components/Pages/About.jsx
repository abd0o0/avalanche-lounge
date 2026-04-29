'use client';
import bgpic from '../../assets/img/abt1.jpg';
import React, { useEffect } from 'react';
import { useTranslation } from '../../i18n/useTranslation.jsx';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="about" className="dark relative w-full h-screen md:mt-28 dark:mt-0">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgpic})` }}
      >
        {/* Black overlay with 40% opacity */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content container */}
        <div className="relative z-10 grid items-center justify-center h-full grid-cols-1 p-4 md:grid-cols-2">
          {/* Heading */}
          <div className="p-4 text-center">
            <h1 className="text-4xl font-bold text-white md:text-7xl lg:text-9xl">
              {t('about.title') || 'About Us'}
            </h1>
            <p className="text-xl text-cyan-300 mt-2" style={{fontFamily: '"Noto Naskh Arabic", serif'}}>{t('about.arabic') || 'عنا'}</p>
          </div>

          {/* Paragraph */}
          <div className="relative z-10 flex justify-center w-full mt-6 md:mt-0 md:px-36 ">
            <p className="w-full text-sm text-gray-200 md:text-base lg:text-xl">
              Welcome to <span className="text-cyan-300 font-bold">Avalanche — الشلال</span>, your premium lounge
              destination in Dortmund. Whether you're here to unwind with a
              shisha, sip on handcrafted cocktails, or enjoy great food with
              friends — this is your place.
              <br />
              <br />
              We offer a warm, modern atmosphere with oriental touches, outdoor
              seating, free Wi-Fi, and an unforgettable vibe. Private events are
              welcome — just get in touch!
              <br />
              <br />
              <strong>Opening Hours</strong>
              <br />
              Mon – Thu: 16:00 – 02:00
              <br />
              Fri – Sat: 16:00 – 05:00
              <br />
              Sunday: 16:00 – 02:00
              <br />
              <br />
              <strong>Location</strong>
              <br />
              Am Sittardsberg, Dortmund, Germany
              <br />
              <a
                href="https://maps.google.com/?q=Sarab+Lounge+Dortmund"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 underline hover:text-cyan-100 transition-colors"
              >
                View on Google Maps →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
