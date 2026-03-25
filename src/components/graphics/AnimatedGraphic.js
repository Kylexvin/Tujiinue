import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGraphic = ({ type = 'seedling', className = '' }) => {
  const graphics = {
    seedling: (
      <motion.svg
        className={`animated-graphic ${className}`}
        viewBox="0 0 100 100"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.path
          d="M50,30 L50,80 M35,45 L50,30 L65,45"
          stroke="#2e7d32"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.circle
          cx="50"
          cy="25"
          r="8"
          fill="rgba(46, 125, 50, 0.2)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.path
          d="M50,80 L45,90 L55,90 Z"
          fill="#ff9800"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </motion.svg>
    ),
    heart: (
      <motion.svg
        className={`animated-graphic ${className}`}
        viewBox="0 0 100 100"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.path
          d="M50,30 C35,15 15,20 15,40 C15,60 50,85 50,85 C50,85 85,60 85,40 C85,20 65,15 50,30Z"
          fill="#e91e63"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.svg>
    ),
    growth: (
      <motion.svg
        className={`animated-graphic ${className}`}
        viewBox="0 0 100 100"
      >
        <motion.path
          d="M20,80 L40,60 L60,70 L80,40"
          stroke="#2e7d32"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
        {[20, 40, 60, 80].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={[80, 60, 70, 40][i]}
            r="4"
            fill="#2e7d32"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.2 }}
          />
        ))}
      </motion.svg>
    )
  };

  return graphics[type] || graphics.seedling;
};

export default AnimatedGraphic;