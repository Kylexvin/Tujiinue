import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/LeadershipMessage.css';

const LeadershipMessage = () => {
  return (
    <section className="leadership-message section">
      <div className="container">
        <div className="leadership-message__header">
          <span className="section-tag">Leadership</span>
          <h2 className="section-title">Words from Our Leaders</h2>
        </div>
        
        <div className="leadership-message__grid">
          <motion.div
            className="leadership-message__card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="leadership-message__avatar">
              <div className="leadership-message__avatar-placeholder">
                <svg viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="45" fill="var(--color-primary-dim)" />
                  <circle cx="50" cy="35" r="12" fill="var(--color-primary)" />
                  <path d="M30,70 Q50,85 70,70" stroke="var(--color-primary)" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </div>
            <div className="leadership-message__content">
              <p className="leadership-message__quote">
                "When we founded this organisation in January 2014 as a small youth group in Eldoret, 
                our goal was simple: to 'uplift ourselves' through collective action. Today, I've watched 
                that spark evolve into a professional, high-impact institution at the forefront of digital 
                and agricultural transformation in Uasin Gishu County."
              </p>
              <h3 className="leadership-message__name">Felix Cherwon, MSc.</h3>
              <p className="leadership-message__title">President & Founder</p>
            </div>
          </motion.div>
          
          <motion.div
            className="leadership-message__card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="leadership-message__avatar">
              <div className="leadership-message__avatar-placeholder">
                <svg viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="45" fill="var(--color-secondary-dim)" />
                  <circle cx="50" cy="35" r="12" fill="var(--color-secondary)" />
                  <path d="M30,70 Q50,85 70,70" stroke="var(--color-secondary)" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </div>
            <div className="leadership-message__content">
              <p className="leadership-message__quote">
                "Our boots-on-the-ground approach ensures that technology reaches the last mile. 
                Whether it's a classroom in a remote village or a coffee farm with no signal, 
                our AI tools work where others fail. We don't just build apps; we build linkages 
                between schools and homes, farmers and buyers."
              </p>
              <h3 className="leadership-message__name">Titus Kibiwott</h3>
              <p className="leadership-message__title">Program Manager</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessage;