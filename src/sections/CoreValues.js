import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/CoreValues.css';

const CoreValues = () => {
  const values = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 12V20H4V12M2 8H22M16 4L12 8L8 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      title: "Integrity",
      description: "We act with transparency and accountability in all our community engagements and resource management.",
      color: "primary"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 8H22L16 12L19 18L12 14L5 18L8 12L2 8H9L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      title: "Inclusivity",
      description: "We promote gender equity and ensure that youth, women, and persons with disabilities have equal access to opportunities.",
      color: "secondary"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      title: "Innovation",
      description: "We embrace modern techniques in education and agriculture to solve local challenges.",
      color: "highlight"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21L12 16L7 21M12 3V16M12 16L8 12M12 16L16 12" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Collaboration",
      description: "We believe in the power of school-community-home linkages to drive lasting impact.",
      color: "primary"
    }
  ];

  return (
    <section className="core-values section">
      <div className="container">
        <div className="core-values__header">
          <span className="section-tag">Our Foundation</span>
          <h2 className="section-title">Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
        </div>
        
        <div className="core-values__grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={`core-values__card core-values__card--${value.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="core-values__icon">
                {value.icon}
              </div>
              <h3 className="core-values__title">{value.title}</h3>
              <p className="core-values__description">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;