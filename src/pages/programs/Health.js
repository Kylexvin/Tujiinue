import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import '../../styles/components/Programs.css';

const steps = [
  {
    number: '01',
    title: 'Dispensary Setup',
    desc: 'Rural dispensaries in Uasin Gishu are equipped with the M-IMCI tool — installed on standard Android smartphones already in use at the facility.',
  },
  {
    number: '02',
    title: 'Symptom Input',
    desc: 'A community health worker enters the patient\'s symptoms into the app — age, weight, temperature, and clinical signs — in under two minutes.',
  },
  {
    number: '03',
    title: 'AI Triage',
    desc: 'The on-device AI model analyses the inputs against the top 5 childhood illness protocols — malaria, pneumonia, diarrhoea, malnutrition, measles — and returns a triage recommendation.',
  },
  {
    number: '04',
    title: 'Referral or Treatment',
    desc: 'The health worker acts on the recommendation — treating at the facility or referring to a higher-level facility with a documented triage summary.',
  },
];

const stats = [
  { value: '5', label: 'Illnesses Covered', desc: 'Malaria, pneumonia, diarrhoea, malnutrition, and measles — the top 5 childhood killers', color: 'var(--color-highlight)' },
  { value: '100%', label: 'Offline Capable', desc: 'M-IMCI runs fully on-device — no internet required at any point', color: 'var(--color-primary)' },
  { value: 'Edge', label: 'AI Technology', desc: 'LiteRT and RAG-based edge AI running on standard Android smartphones', color: 'var(--color-secondary)' },
  { value: 'Rural', label: 'Last Mile Focus', desc: 'Built specifically for dispensaries with no specialist access', color: 'var(--color-highlight)' },
];

function Health() {
  const { ref: overviewRef, inView: overviewInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: howRef, inView: howInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="program-page">

      {/* ── HERO ── */}
      <section className="program-hero">
        <div className="program-hero__glow" style={{ background: 'radial-gradient(circle, rgba(239,61,150,0.2) 0%, transparent 70%)' }} />
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
              <span style={{ color: 'var(--color-highlight)' }}>Health</span>
            </div>
            <div
              className="program-hero__tag"
              style={{ color: 'var(--color-highlight)', borderColor: 'rgba(239,61,150,0.3)', background: 'rgba(239,61,150,0.1)' }}
            >
              Health & Innovation
            </div>
            <h1 className="program-hero__title">
              M-IMCI Edge AI<br />
              <span style={{ color: 'var(--color-highlight)' }}>Diagnostic Tool</span>
            </h1>
            <p className="program-hero__sub">
              Rural dispensaries in Uasin Gishu face a specialist gap that costs lives.
              Our M-IMCI tool transforms a standard smartphone into a clinical assistant —
              delivering AI-driven triage for the top 5 childhood killers, entirely offline.
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
                Specialist-Level Care at the Last Mile
              </h2>
              <p className="program-overview__body">
                The M-IMCI (Malaria-Integrated Management of Childhood Illness) tool is
                Tujiinue's most innovative programme — a direct response to the diagnostic
                gap in rural Kenya's healthcare system. Community health workers in remote
                dispensaries often lack the training to distinguish between illnesses with
                overlapping symptoms.
              </p>
              <p className="program-overview__body">
                Our solution uses LiteRT and Retrieval-Augmented Generation (RAG) to run
                a clinical-grade AI model directly on a standard Android smartphone —
                no internet, no server, no specialist required. The tool guides a health
                worker through a structured assessment and returns a triage recommendation
                in under three minutes.
              </p>
              <p className="program-overview__body">
                This is not a replacement for doctors — it is a bridge that ensures no
                child in a remote Uasin Gishu dispensary is sent home with an undiagnosed
                life-threatening illness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="program-overview__image">
                <div className="program-overview__image-placeholder">
                  M-IMCI health programme photo
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
            <h2 className="program-how__title">From Symptoms to Triage in Minutes</h2>
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
                    background: i % 2 === 0 ? 'var(--color-highlight)' : 'var(--color-primary)'
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
            <h2 className="section-title">M-IMCI by the Numbers</h2>
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
              Help Us Reach Every Rural Dispensary
            </h2>
            <p className="program-cta__sub">
              We are seeking health sector partners, technology funders, and
              county government collaborators to scale M-IMCI across Uasin Gishu.
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

export default Health;