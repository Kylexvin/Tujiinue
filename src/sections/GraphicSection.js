import React from 'react';
import { motion } from 'framer-motion';
import AnimatedGraphic from '../components/graphics/AnimatedGraphic';
import IconCard from '../components/graphics/IconCard';
import WaveDivider from '../components/graphics/WaveDivider';
import '../styles/components/GraphicSection.css';

const GraphicSection = () => {
  const icons = [
    {
      icon: <AnimatedGraphic type="seedling" />,
      title: "Sustainable Growth",
      description: "Promoting sustainable agriculture and environmental conservation",
      color: "primary"
    },
    {
      icon: <AnimatedGraphic type="heart" />,
      title: "Community Care",
      description: "Providing healthcare and support to vulnerable families",
      color: "secondary"
    },
    {
      icon: <AnimatedGraphic type="growth" />,
      title: "Youth Empowerment",
      description: "Equipping young people with skills for a better future",
      color: "accent"
    }
  ];

  return (
    <section className="graphic-section">
      <WaveDivider variant="curved" color="var(--color-bg-light)" />
      
      <div className="container">
        <motion.div
          className="graphic-section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="graphic-section__title">
            Our <span className="gradient-text">Impact</span> in Action
          </h2>
          <p className="graphic-section__subtitle">
            Through innovative programs and community-driven initiatives,
            we're creating lasting change in Uasin Gishu
          </p>
        </motion.div>

        <div className="graphic-section__grid">
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <IconCard {...icon} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="graphic-section__illustration"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <svg className="illustration-svg" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            <circle cx="400" cy="200" r="80" fill="url(#grad1)" />
            <circle cx="280" cy="180" r="40" fill="var(--color-primary-light)" opacity="0.3" />
            <circle cx="520" cy="180" r="40" fill="var(--color-secondary-light)" opacity="0.3" />
            <circle cx="340" cy="280" r="30" fill="var(--color-accent-light)" opacity="0.3" />
            <circle cx="460" cy="280" r="30" fill="var(--color-accent-light)" opacity="0.3" />
            
            <path d="M400 200 L280 180" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M400 200 L520 180" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M400 200 L340 280" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M400 200 L460 280" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="5 5" />
            
            <circle className="animated-particle" cx="280" cy="180" r="3" fill="var(--color-primary)">
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle className="animated-particle" cx="520" cy="180" r="3" fill="var(--color-secondary)">
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle className="animated-particle" cx="340" cy="280" r="3" fill="var(--color-accent)">
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle className="animated-particle" cx="460" cy="280" r="3" fill="var(--color-accent)">
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1.5s" />
            </circle>
          </svg>
        </motion.div>
      </div>
      
      <WaveDivider variant="default" color="var(--color-bg-light)" />
    </section>
  );
};

export default GraphicSection;