import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/components/PhotoGallery.css';

import g1 from './gallery/gallery1.jpeg';
import g2 from './gallery/gallery2.jpeg';
import g3 from './gallery/gallery3.jpeg';
import g4 from './gallery/gallery4.jpeg';
import g5 from './gallery/gallery5.jpeg';
import g6 from './gallery/gallery6.jpeg';
import g7 from './gallery/gallery7.jpeg';
import g8 from './gallery/gallery8.jpeg';
import g9 from './gallery/gallery9.jpeg';
import g10 from './gallery/gallery10.jpeg';
import g11 from './gallery/gallery11.jpeg';
// import g12 from '../assets/gallery/gallery12.jpg';
// import g13 from '../assets/gallery/gallery13.jpg';
// import g14 from '../assets/gallery/gallery14.jpg';
// import g15 from '../assets/gallery/gallery15.jpg';
// import g16 from '../assets/gallery/gallery16.jpg';
// import g17 from '../assets/gallery/gallery17.jpg';
// import g18 from '../assets/gallery/gallery18.jpg';
// import g19 from '../assets/gallery/gallery19.jpg';
// import g20 from '../assets/gallery/gallery20.jpg';

const allImages = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, // g12, g13, g14, g15, g16, g17, g18, g19, g20
];

// Shuffle array
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function PhotoGallery() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [lightbox, setLightbox] = useState(null);

  // Shuffle once on mount, show 12 on home
  const images = useMemo(() => shuffle(allImages).slice(0, 12), []);

  return (
    <section className="photo-gallery section" ref={ref}>
      <div className="container">

        {/* Header */}
        <motion.div
          className="photo-gallery__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">In the Field</span>
          <h2 className="section-title">
            Life Across <span style={{ color: 'var(--color-secondary)' }}>Uasin Gishu</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into the communities, classrooms, farms, and clinics
            where Tujiinue does its work every day.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="photo-gallery__grid">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`photo-gallery__item photo-gallery__item--${(i % 5) + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img}
                alt={`Tujiinue community photo ${i + 1}`}
                loading="lazy"
                decoding="async"
              />
              <div className="photo-gallery__overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="photo-gallery__lightbox"
          onClick={() => setLightbox(null)}
        >
          <button
            className="photo-gallery__lightbox-close"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <img
            src={lightbox}
            alt="Tujiinue community"
            className="photo-gallery__lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default PhotoGallery;