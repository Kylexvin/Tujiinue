import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/components/TeamPreview.css';

const TeamPreview = () => {
  const team = [
    {
      name: "Felix Cherwon, MSc.",
      role: "President & Founder",
      color: "primary"
    },
    {
      name: "Titus Kibiwott",
      role: "Program Manager",
      color: "secondary"
    },
    {
      name: "Abednego Sigilai",
      role: "Finance & Procurement",
      color: "highlight"
    },
    {
      name: "Purity Kimutai",
      role: "Monitoring & Evaluation",
      color: "primary"
    }
  ];

  return (
    <section className="team-preview section">
      <div className="container">
        <div className="team-preview__header">
          <span className="section-tag">Meet the Team</span>
          <h2 className="section-title">Driving Change</h2>
          <p className="section-subtitle">
            A dedicated team of professionals committed to community transformation
          </p>
        </div>
        
        <div className="team-preview__grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className={`team-preview__card team-preview__card--${member.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="team-preview__avatar">
                <div className="team-preview__avatar-placeholder">
                  <svg viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" fill={`var(--color-${member.color}-dim)`} />
                    <circle cx="50" cy="35" r="12" fill={`var(--color-${member.color})`} />
                    <path d="M30,70 Q50,85 70,70" stroke={`var(--color-${member.color})`} strokeWidth="3" fill="none" />
                  </svg>
                </div>
              </div>
              <h3 className="team-preview__name">{member.name}</h3>
              <p className="team-preview__role">{member.role}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="team-preview__cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/team" className="btn btn--ghost">
            View Full Team
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10H15M15 10L11 6M15 10L11 14" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;