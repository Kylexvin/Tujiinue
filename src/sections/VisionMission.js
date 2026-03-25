import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vision-mission section">
      <div className="container">
        <div className="vision-mission__grid">
          <motion.div
            className="vision-mission__card vision-mission__card--vision"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="vision-mission__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 8H22L16 12L19 18L12 14L5 18L8 12L2 8H9L12 2Z" fill="var(--color-primary)" />
              </svg>
            </div>
            <h3 className="vision-mission__title">Our Vision</h3>
            <p className="vision-mission__text">
              To be a premier agent of change in Uasin Gishu County, where empowered communities 
              lead self-sustaining and dignified lives through innovation and collaboration.
            </p>
          </motion.div>
          
          <motion.div
            className="vision-mission__card vision-mission__card--mission"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="vision-mission__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L20 20H4L12 4Z" fill="var(--color-secondary)" />
                <circle cx="12" cy="12" r="3" fill="white" />
              </svg>
            </div>
            <h3 className="vision-mission__title">Our Mission</h3>
            <p className="vision-mission__text">
              To foster community-led development by empowering vulnerable groups through education, 
              modern agriculture, skills training, and sustainable environmental practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;