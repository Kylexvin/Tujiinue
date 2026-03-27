import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import useCountUp from '../hooks/useCountUp';
import '../styles/components/Impact.css';

const stats = [
  { value: '1200000', suffix: '+', label: 'Seedlings Distributed', desc: 'Coffee and avocado seedlings distributed to smallholder farmers across Uasin Gishu', color: 'var(--color-secondary)' },
  { value: '1000', suffix: '+', label: 'Learners Reached', desc: 'Grade 3 students supported through remedial reading camps and TA deployment', color: 'var(--color-primary)' },
  { value: '12', suffix: '', label: 'Years of Service', desc: 'Serving communities in Uasin Gishu County since January 2014', color: 'var(--color-highlight)' },
  { value: '15', suffix: '+', label: 'Professional Staff', desc: 'Degree and MSc-level professionals delivering programmes on the ground', color: 'var(--color-secondary)' },
  { value: '3', suffix: '', label: 'Wards Transformed', desc: 'Turbo, Ainabkoi, and Moiben wards actively served across all programmes', color: 'var(--color-primary)' },
  { value: '17', suffix: 'M+ KES', label: 'Grants Managed', desc: 'Multi-million shilling grants delivered with full accountability to donors', color: 'var(--color-highlight)' },
];

const stories = [
  {
    tag: 'Education',
    title: 'From Non-Reader to Fluent in One Term',
    body: 'A Grade 3 learner in Turbo ward could not identify letters at the start of the programme. After 12 weeks of remedial reading camps with a Tujiinue Teaching Assistant, she reached the Fluent Reader benchmark — the highest level on the Tusome scale.',
    color: 'var(--color-primary)',
  },
  {
    tag: 'Agriculture',
    title: 'A Farmer Who Tripled His Income',
    body: 'A 60-year-old coffee farmer in Ainabkoi had been selling his harvest to local brokers at a fraction of its value. After joining the Agri-Hub and using the AI quality grading tool, he was linked directly to an export buyer — tripling his per-kilogram income in one season.',
    color: 'var(--color-secondary)',
  },
  {
    tag: 'Health',
    title: 'A Child Who Would Have Been Sent Home',
    body: 'A 2-year-old presented at a rural dispensary in Moiben with fever and rapid breathing. The health worker used M-IMCI and received an alert for severe pneumonia — a diagnosis that would have been missed without specialist training. The child was referred immediately and recovered fully.',
    color: 'var(--color-highlight)',
  },
];

const partners = ['USAID', 'RTI International', 'EDC', 'KEMRI', 'MoE Kenya', 'Uasin Gishu County'];

function StatItem({ stat, inView }) {
  const count = useCountUp(stat.value, 2000, inView);
  const display = isNaN(parseFloat(stat.value))
    ? stat.value
    : Number(count).toLocaleString();

  return (
    <div className="impact-stat">
      <div className="impact-stat__value" style={{ color: stat.color }}>
        {display}
        {stat.suffix && <span className="impact-stat__suffix">{stat.suffix}</span>}
      </div>
      <div className="impact-stat__label">{stat.label}</div>
      <p className="impact-stat__desc">{stat.desc}</p>
    </div>
  );
}

function Impact() {
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: storiesRef, inView: storiesInView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: partnersRef, inView: partnersInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="impact-page">

      {/* ── HERO ── */}
      <section className="impact-hero">
        <div className="impact-hero__glow" />
        <div className="impact-hero__glow-2" />
        <div className="container">
          <motion.div
            className="impact-hero__inner"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="impact-hero__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Our Impact</span>
            </div>
            <span className="impact-hero__tag">Measurable. Accountable. Real.</span>
            <h1 className="impact-hero__title">
              Over a Decade of <br />
              <span className="impact-hero__accent">Tangible Change</span>
            </h1>
            <p className="impact-hero__sub">
              Every number on this page represents a life touched, a farm transformed,
              or a child who can now read. Here is what Tujiinue CBO has delivered
              across Uasin Gishu County since 2014.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="impact-stats section" ref={statsRef}>
        <div className="container">
          <motion.div
            className="impact-stats__header"
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">By the Numbers</span>
            <h2 className="section-title">Impact That Speaks for Itself</h2>
            <p className="section-subtitle">
              Verified data from our programmes across education, agriculture, and healthcare.
            </p>
          </motion.div>

          <div className="impact-stats__grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <StatItem stat={stat} inView={statsInView} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORIES ── */}
      <section className="impact-stories section" ref={storiesRef}>
        <div className="container">
          <motion.div
            className="impact-stories__header"
            initial={{ opacity: 0, y: 20 }}
            animate={storiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Success Stories</span>
            <h2 className="section-title">The Faces Behind the Numbers</h2>
            <p className="section-subtitle">
              Data tells you how many. Stories tell you why it matters.
            </p>
          </motion.div>

          <div className="impact-stories__grid">
            {stories.map((story, i) => (
              <motion.div
                key={story.title}
                className="impact-story-card"
                initial={{ opacity: 0, y: 30 }}
                animate={storiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div
                  className="impact-story-card__tag"
                  style={{ color: story.color, borderColor: story.color, background: `${story.color}15` }}
                >
                  {story.tag}
                </div>
                <h3 className="impact-story-card__title">{story.title}</h3>
                <p className="impact-story-card__body">{story.body}</p>
                <div className="impact-story-card__bar" style={{ background: story.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="impact-partners section" ref={partnersRef}>
        <div className="container">
          <motion.div
            className="impact-partners__header"
            initial={{ opacity: 0, y: 20 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Partners</span>
            <h2 className="section-title">Who We Work With</h2>
            <p className="section-subtitle">
              Our impact is amplified by partnerships with world-class organisations.
            </p>
          </motion.div>

          <div className="impact-partners__grid">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                className="impact-partner-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={partnersInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <span className="impact-partner-card__name">{partner}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="impact-partners__cta"
            initial={{ opacity: 0 }}
            animate={partnersInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>Want to become a partner?</p>
            <Link to="/contact" className="impact-partners__cta-btn">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}


export default Impact;