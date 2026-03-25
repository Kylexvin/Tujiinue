import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero__overlay"></div>
      <div className="container about-hero__container">
        <motion.div
          className="about-hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-hero__tag">Our Story</span>
          <h1 className="about-hero__title">
            From Youth Group to{' '}
            <span className="about-hero__accent">Community Powerhouse</span>
          </h1>
          <p className="about-hero__subtitle">
            For over a decade, we've grown from a small collective of passionate youth
            into a professional organization transforming lives across Uasin Gishu County.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;