import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/OurStory.css';

const OurStory = () => {
  return (
    <section className="our-story section">
      <div className="container">
        <div className="our-story__grid">
          <motion.div
            className="our-story__content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">
              Established in{' '}
              <span className="accent">January 2014</span>
            </h2>
            <p className="our-story__text">
              Tujiinue began its journey as the <strong>Tujiinue Chemalal Youth Group</strong> in Eldoret City. 
              Our name, meaning <em>"Let us uplift ourselves"</em> in Swahili, reflects our founding belief: 
              that the solutions to our community's greatest challenges lie within the hands of the community itself.
            </p>
            <p className="our-story__text">
              For over a decade, we worked on the frontlines of Uasin Gishu County, evolving from a local 
              youth collective into a professional <strong>Community-Based Organisation (CBO)</strong>. 
              Today, Tujiinue CBO is a premier agent of change, blending deep grassroots trust with 
              cutting-edge technological innovation.
            </p>
            <div className="our-story__stats">
              <div className="our-story__stat">
                <span className="our-story__stat-number">12+</span>
                <span className="our-story__stat-label">Years of Service</span>
              </div>
              <div className="our-story__stat">
                <span className="our-story__stat-number">3</span>
                <span className="our-story__stat-label">Wards Transformed</span>
              </div>
              <div className="our-story__stat">
                <span className="our-story__stat-number">15+</span>
                <span className="our-story__stat-label">Professional Staff</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="our-story__image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="our-story__image-wrapper">
              <div className="our-story__image-placeholder">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="180" fill="var(--color-primary-dim)" />
                  <path d="M200,80 L220,140 L280,140 L230,180 L250,240 L200,200 L150,240 L170,180 L120,140 L180,140 Z" 
                    fill="var(--color-primary)" opacity="0.8" />
                  <circle cx="200" cy="200" r="60" fill="var(--color-secondary-dim)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;