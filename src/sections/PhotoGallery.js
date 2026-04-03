import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';
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

const allImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const breakpointColumns = {
  default: 4,
  1100: 3,
  768: 2,
  480: 2,
};

function PhotoGallery() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = useMemo(() => shuffle(allImages), []);

  const openLightbox = (img, index) => {
    setLightbox(img);
    setLightboxIndex(index);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (lightboxIndex - 1 + images.length) % images.length;
    setLightbox(images[newIndex]);
    setLightboxIndex(newIndex);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (lightboxIndex + 1) % images.length;
    setLightbox(images[newIndex]);
    setLightboxIndex(newIndex);
  };

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
        <Masonry
          breakpointCols={breakpointColumns}
          className="photo-gallery__masonry"
          columnClassName="photo-gallery__masonry-col"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="photo-gallery__item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              onClick={() => openLightbox(img, i)}
            >
              <img
                src={img}
                alt={`Tujiinue field work ${i + 1}`}
                loading="lazy"
                decoding="async"
              />
              <div className="photo-gallery__overlay">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </Masonry>

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

          <button
            className="photo-gallery__lightbox-nav photo-gallery__lightbox-nav--prev"
            onClick={prevImage}
          >
            ‹
          </button>

          <img
            src={lightbox}
            alt="Tujiinue field work"
            className="photo-gallery__lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="photo-gallery__lightbox-nav photo-gallery__lightbox-nav--next"
            onClick={nextImage}
          >
            ›
          </button>

          <div className="photo-gallery__lightbox-counter">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}

export default PhotoGallery; 