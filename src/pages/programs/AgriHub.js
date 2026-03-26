import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import '../../styles/components/Programs.css';

const steps = [
  {
    number: '01',
    title: 'Farmer Onboarding',
    desc: 'Smallholder farmers in Ainabkoi, Moiben, and Turbo wards are onboarded onto the Agri-Hub platform and trained on smartphone usage.',
  },
  {
    number: '02',
    title: 'AI Quality Grading',
    desc: 'Our Computer Vision tool runs entirely on-device — farmers scan coffee cherries or avocados and receive instant export-readiness scores.',
  },
  {
    number: '03',
    title: 'Market Linkage',
    desc: 'Graded produce is linked directly to verified buyers including export companies like Kakuzi — cutting out middlemen and increasing farmer income.',
  },
  {
    number: '04',
    title: 'Agripreneur Training',
    desc: 'We train youth Agripreneurs as local extension agents — they support farmers in the field and help sustain the value chain long-term.',
  },
];

const stats = [
  { value: '1.2M+', label: 'Seedlings Distributed', desc: 'Coffee and avocado seedlings distributed across Uasin Gishu farms', color: 'var(--color-secondary)' },
  { value: '3', label: 'Wards Covered', desc: 'Ainabkoi, Moiben, and Turbo wards actively served by the Agri-Hub', color: 'var(--color-primary)' },
  { value: 'CV', label: 'Computer Vision', desc: 'On-device AI quality grading — works fully offline in the field', color: 'var(--color-highlight)' },
  { value: '100%', label: 'Offline First', desc: 'All AI tools function without internet — built for rural Kenya', color: 'var(--color-secondary)' },
];

function AgriHub() {
  const { ref: overviewRef, inView: overviewInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: howRef, inView: howInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="program-page">

      {/* ── HERO ── */}
      <section className="program-hero">
        <div className="program-hero__glow" style={{ background: 'radial-gradient(circle, rgba(208,122,67,0.2) 0%, transparent 70%)' }} />
        <div className="container">
          <motion.div
            className="program-hero__inner"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="program-hero__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/programs">Programs</Link>
              <span>/</span>
              <span style={{ color: 'var(--color-secondary)' }}>Agri-Hub</span>
            </div>
            <div
              className="program-hero__tag"
              style={{ color: 'var(--color-secondary)', borderColor: 'rgba(208,122,67,0.3)', background: 'rgba(208,122,67,0.1)' }}
            >
              Agriculture & Livelihoods
            </div>
            <h1 className="program-hero__title">
              AI-Powered Agri-Hub<br />
              <span style={{ color: 'var(--color-secondary)' }}>Value Chain</span>
            </h1>
            <p className="program-hero__sub">
              Uasin Gishu is transitioning from maize to high-value coffee and avocado exports.
              Tujiinue is leading the way — using Computer Vision and Agentic AI to connect
              smallholder farmers directly to global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="program-overview" ref={overviewRef}>
        <div className="container">
          <div className="program-overview__inner">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="program-overview__tag">Overview</span>
              <h2 className="program-overview__title">
                From Smallholder Farm to Global Market
              </h2>
              <p className="program-overview__body">
                The Tujiinue Agri-Hub is built around one insight — Kenyan smallholder farmers
                grow world-class coffee and avocados, but lack the tools to prove it. Our
                Computer Vision platform solves the diagnostic gap by running AI quality
                grading directly on a standard smartphone, fully offline.
              </p>
              <p className="program-overview__body">
                A 60-year-old farmer in Ainabkoi can now scan their coffee harvest, receive
                an export-readiness score in seconds, and be linked to a verified buyer —
                all without leaving their farm or needing an internet connection.
              </p>
              <p className="program-overview__body">
                Beyond technology, we build human capacity. Our Agripreneur training
                programme turns local youth into certified extension agents who sustain
                the value chain in their communities long after our direct involvement ends.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="program-overview__image">
                <div className="program-overview__image-placeholder">
                  Agri-Hub programme photo
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="program-how" ref={howRef}>
        <div className="container">
          <motion.div
            className="program-how__header"
            initial={{ opacity: 0, y: 20 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="program-how__tag">How It Works</span>
            <h2 className="program-how__title">From Farm to Export Market</h2>
          </motion.div>

          <div className="program-how__steps">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="program-step"
                initial={{ opacity: 0, y: 30 }}
                animate={howInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div
                  className="program-step__number"
                  style={{
                    background: i % 2 === 0 ? 'var(--color-secondary)' : 'var(--color-primary)'
                  }}
                >
                  {step.number}
                </div>
                <h4 className="program-step__title">{step.title}</h4>
                <p className="program-step__desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="program-stats" ref={statsRef}>
        <div className="container">
          <motion.div
            className="program-stats__header"
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Impact</span>
            <h2 className="section-title">Agri-Hub by the Numbers</h2>
          </motion.div>

          <div className="program-stats__grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="program-stat-card"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <span className="program-stat-card__value" style={{ color: stat.color }}>
                  {stat.value}
                </span>
                <span className="program-stat-card__label">{stat.label}</span>
                <p className="program-stat-card__desc">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="program-cta">
        <div className="program-cta__glow" />
        <div className="container">
          <div className="program-cta__inner">
            <span className="program-cta__tag">Get Involved</span>
            <h2 className="program-cta__title">
              Partner With Us to Feed the Future
            </h2>
            <p className="program-cta__sub">
              Whether you are a buyer, an investor, a donor, or an NGO —
              there is a role for you in building Kenya's next agricultural value chain.
            </p>
            <div className="program-cta__btns">
              <Link to="/contact" className="program-cta__btn program-cta__btn--primary">
                Partner With Us
              </Link>
              <Link to="/impact" className="program-cta__btn program-cta__btn--ghost">
                See Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AgriHub;