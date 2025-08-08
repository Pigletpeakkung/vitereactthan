import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [moonPosition, setMoonPosition] = useState(0);

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './styles/hero.css';

const Hero: React.FC = () => {
  // ... (same as above)
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="hero__background absolute inset-0" />

      {/* Moon */}
      <div className="moon" />

      {/* Hero Content */}
      <div className="z-20 text-center px-6">
        {/* ... */}
      </div>
    </section>
  );
};

  useEffect(() => {
  const moon = document.querySelector('.moon');
  if (!moon) return;

  const scrollTween = gsap.to(moon, {
    y: -200, // Move moon up as you scroll down
    x: 100,  // Move moon right as you scroll
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  });

  return () => scrollTrigger.kill();
}, []);

  // Typewriter effect for title
  useEffect(() => {
    const fullText = "AI Content Developer & Creative Technologist";
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Moon scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const moonSpeed = 0.5; // Adjust speed
      setMoonPosition(scrollY * moonSpeed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animations (optional)
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from('.hero__name', { y: 30, opacity: 0 })
      .from('.hero__title', { y: 30, opacity: 0 }, '-=0.5')
      .from('.hero__description', { y: 30, opacity: 0 }, '-=0.5')
      .from('.hero__cta', { y: 30, opacity: 0 }, '-=0.5');

    return () => tl.kill();
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200" />

      {/* Moon Animation */}
      <div
        className="absolute top-0 left-0 w-32 h-32 rounded-full bg-yellow-300 z-10"
        style={{ transform: `translateY(-${moonPosition}px)` }}
      />

      {/* Hero Content */}
      <div className="z-20 text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Thanatsitt Santisamranwilai
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-white mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </motion.h2>
        <motion.p
          className="text-lg text-white mb-8 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        >
          Multilingual creative technologist with expertise in AI content development, voice acting, and digital solutions.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-white text-purple-700 font-medium rounded-full shadow-lg hover:shadow-xl transition"
          >
            Get in Touch
          </motion.button>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-full transition"
          >
            View Portfolio
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-4 h-4 border-2 border-white rounded-full animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
