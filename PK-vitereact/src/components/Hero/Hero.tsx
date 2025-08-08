import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const heroRef = useRef<HTMLElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  
  const fullText = "AI Content Developer & Creative Technologist";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline();
      
      tl.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .from('.hero-description', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.3')
      .from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.3');

      // Moon parallax effect
      if (moonRef.current) {
        gsap.to(moonRef.current, {
          y: -100,
          x: -50,
          rotation: 360,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          }
        });
      }

      // Floating shapes animation
      gsap.to('.shape', {
        y: -30,
        rotation: 360,
        duration: 6,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 2
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Generate stars
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`
      };
      stars.push(<div key={i} className="star" style={style} />);
    }
    return stars;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="hero-section min-h-screen flex items-center justify-center relative">
      {/* Animated Background Elements */}
      <div className="stars">
        {generateStars()}
      </div>
      
      <div className="floating-shapes">
        <div className="shape shape-1 w-20 h-20 bg-white rounded-full" />
        <div className="shape shape-2 w-16 h-16 bg-white rounded-lg" />
        <div className="shape shape-3 w-12 h-12 bg-white rounded-full" />
      </div>

      {/* Moon */}
      <div ref={moonRef} className="moon" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Name */}
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Thanatsitt
            <br />
            <span className="gradient-text">Santisamranwilai</span>
          </h1>

          {/* Typewriter Title */}
          <h2 className="hero-subtitle text-2xl md:text-3xl text-white mb-8 font-light">
            {typedText}
            <span className="typewriter-cursor text-white">|</span>
          </h2>

          {/* Description */}
          <p className="hero-description text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Multilingual creative technologist specializing in AI content development, 
            voice acting, and innovative digital solutions. Bridging technology and creativity 
            to build exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect px-8 py-4 text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 min-w-[200px]"
            >
              Get In Touch
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('portfolio')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 font-semibold rounded-full hover:bg-white/90 transition-all duration-300 min-w-[200px]"
            >
              View Portfolio
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            {[
              { href: 'https://github.com/Pigletpeakkung', icon: '🔗' },
              { href: 'https://linkedin.com/in/thanattsitt-s', icon: '💼' },
              { href: 'https://youtube.com/@pegearts', icon: '📺' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-12 h-12 glass-effect flex items-center justify-center rounded-full text-white text-xl hover:bg-white/30 transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
          <p className="text-white/70 text-sm mt-2">Scroll Down</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
