import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import '../styles/components/Pillars.css';

const pillars = [
  {
    tag: 'Education',
    title: 'Literacy & Early Grade Learning',
    description:
      'Through the USAID/KPLP partnership, we deploy trained Teaching Assistants and community reading camps — bridging the literacy gap for Grade 3 learners across Turbo, Ainabkoi, and Moiben.',
    stats: [{ value: '1,000+', label: 'Learners Reached' }, { value: '3', label: 'Wards Covered' }],
    link: '/programs/education',
    color: 'blue',
  },
  {
    tag: 'Agriculture',
    title: 'Agri-Hub & AI Value Chain',
    description:
      'Our Agri-Hub uses Computer Vision and Agentic AI to support coffee and avocado farmers — helping them verify export quality and connect directly to global markets.',
    stats: [{ value: '1.2M+', label: 'Seedlings Distributed' }, { value: 'AI', label: 'Quality Grading' }],
    link: '/programs/agri-hub',
    color: 'green',
  },
  {
    tag: 'Health',
    title: 'M-IMCI Edge AI Diagnostics',
    description:
      'Our M-IMCI tool transforms standard smartphones into clinical assistants — providing offline, AI-driven triage for the top 5 childhood killers in rural dispensaries.',
    stats: [{ value: 'Offline', label: 'First Technology' }, { value: 'Edge', label: 'AI Powered' }],
    link: '/programs/health',
    color: 'red',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

function Pillars() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="pillars section" ref={ref}>
      <div className="container">

        {/* Header */}
        <motion.div
          className="pillars__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="pillars__tag">What We Do</span>
          <h2 className="pillars__title">
            Three Pillars of <span className="accent">Impact</span>
          </h2>
          <p className="pillars__subtitle">
            Every programme we run is designed to create lasting, measurable change
            — from the classroom to the farm to the clinic.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="pillars__grid">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.tag}
              className={`pillar-card pillar-card--${pillar.color}`}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i}
            >
              {/* Top */}
<div className="pillar-card__top">
  <div className="pillar-card__accent-bar" />
  <span className="pillar-card__tag">{pillar.tag}</span>
</div>

              {/* Content */}
              <h3 className="pillar-card__title">{pillar.title}</h3>
              <p className="pillar-card__desc">{pillar.description}</p>

              {/* Stats */}
              <div className="pillar-card__stats">
                {pillar.stats.map((stat) => (
                  <div key={stat.label} className="pillar-card__stat">
                    <span className="pillar-card__stat-value">{stat.value}</span>
                    <span className="pillar-card__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Link */}
              <Link to={pillar.link} className="pillar-card__link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* Glow */}
              <div className="pillar-card__glow" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pillars;