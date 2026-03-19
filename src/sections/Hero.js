import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/components/Hero.css';

import hero1 from '../assets/cbo1.jpeg';
import hero2 from '../assets/cbo.jpeg';
import hero3 from '../assets/cbo3.jpeg';
import hero4 from '../assets/cbo4.jpeg';

const heroImages = [hero1, hero2, hero3, hero4];

// Preload all images
heroImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

const stats = [
  { value: '1.2M+', label: 'Seedlings Distributed' },
  { value: '1,000+', label: 'Learners Reached' },
  { value: '12 Yrs', label: 'Community Service' },
  { value: '3', label: 'Wards Transformed' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.4, ease: 'easeOut' },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 0.4, ease: 'easeOut' },
  },
};

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused) {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }
    }, 4500);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="hero"
      style={{ '--hero-bg': `url(${heroImages[currentSlide]})` }}
    >

      {/* Decorations */}
      <div className="hero__glow" />
      <div className="hero__glow-2" />
      <div className="hero__grid" />
      <div className="hero__overlay" />

      {/* Main content */}
      <div className="hero__body">
        <div className="container hero__inner">

          {/* Left */}
          <div className="hero__left">
            <motion.div
              className="hero__badge"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="hero__badge-dot" />
              Eldoret, Uasin Gishu · Est. 2014
            </motion.div>

            <motion.h1
              className="hero__headline"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Empowering <br />
              <span className="hero__accent">People,</span><br />
              Building Futures
            </motion.h1>

            <motion.p
              className="hero__sub"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Tujiinue CBO has spent over a decade uplifting communities
              across Uasin Gishu — through education, sustainable agriculture,
              and AI-powered healthcare built for the last mile.
            </motion.p>

            <motion.div
              className="hero__ctas"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <Link to="/programs" className="hero__btn hero__btn--primary">
                Explore Our Work
              </Link>
              <Link to="/about" className="hero__btn hero__btn--ghost">
                Our Story
              </Link>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            className="hero__right"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <div
              className="hero__image-wrap"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="hero__image-placeholder">
                {heroImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Tujiinue Community ${i + 1}`}
                    className={`hero__slide ${i === currentSlide ? 'hero__slide--active' : ''}`}
                    loading="eager"
                    decoding="async"
                  />
                ))}
              </div>

              {/* Dot indicators */}
              <div className="hero__slide-dots">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    className={`hero__slide-dot ${i === currentSlide ? 'hero__slide-dot--active' : ''}`}
                    onClick={() => setCurrentSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="hero__float-card hero__float-card--tl">
                <span className="hero__float-value">1.2M+</span>
                <span className="hero__float-label">Seedlings</span>
              </div>
              <div className="hero__float-card hero__float-card--br">
                <span className="hero__float-value">AI</span>
                <span className="hero__float-label">Powered Tools</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Stats bar */}
      <div className="hero__stats">
        <div className="container hero__stats-inner">
          {stats.map((stat, i) => (
            <div key={i} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Hero;