import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import '../../styles/components/Programs.css';
import educationImg from '../../assets/cbo4.jpeg';

const steps = [
  {
    number: '01',
    title: 'School Identification',
    desc: 'We identify underperforming schools in Turbo, Ainabkoi, and Moiben wards through MoE data and community mapping.',
  },
  {
    number: '02',
    title: 'TA Deployment',
    desc: 'Trained Teaching Assistants are deployed into classrooms to run structured remedial sessions alongside regular teachers.',
  },
  {
    number: '03',
    title: 'Reading Camps',
    desc: 'After-school and community reading camps give Grade 3 learners extra time with books, guided by literacy champions.',
  },
  {
    number: '04',
    title: 'Progress Tracking',
    desc: 'M&E Officer Purity Kimutai tracks reading benchmarks — from non-reader to fluent — for every enrolled learner.',
  },
];

const stats = [
  { value: '1,000+', label: 'Learners Reached', desc: 'Grade 3 students enrolled in remedial reading across 3 wards', color: 'var(--color-primary)' },
  { value: '3', label: 'Wards Covered', desc: 'Turbo, Ainabkoi, and Moiben wards actively served', color: 'var(--color-secondary)' },
  { value: '10+', label: 'Teaching Assistants', desc: 'Part-time TAs trained and deployed in partner schools', color: 'var(--color-highlight)' },
  { value: 'KPLP', label: 'USAID Partnership', desc: 'Kenya Primary Literacy Program — our flagship donor partner', color: 'var(--color-primary)' },
];



function Education() {
  const { ref: overviewRef, inView: overviewInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: howRef, inView: howInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="program-page">

      {/* ── HERO ── */}
      <section className="program-hero">
        <div className="program-hero__glow" style={{ background: 'radial-gradient(circle, rgba(41,7,158,0.2) 0%, transparent 70%)' }} />
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
              <span style={{ color: 'var(--color-primary)' }}>Education</span>
            </div>
            <div
              className="program-hero__tag"
              style={{ color: 'var(--color-primary)', borderColor: 'rgba(41,7,158,0.3)', background: 'rgba(41,7,158,0.1)' }}
            >
              Education & Literacy
            </div>
            <h1 className="program-hero__title">
              Tusome Early Grade<br />
              <span style={{ color: 'var(--color-secondary)' }}>Reading Programme</span>
            </h1>
            <p className="program-hero__sub">
              No child should fall behind because of where they were born.
              We deploy trained Teaching Assistants and community reading camps
              to bridge the literacy gap for Grade 3 learners across Uasin Gishu.
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
                Closing the Literacy Gap in Uasin Gishu
              </h2>
              <p className="program-overview__body">
                Through our partnership with the USAID/Kenya Primary Literacy Program (KPLP),
                Tujiinue CBO implements the Tusome Early Grade Reading Programme across schools
                in Turbo, Ainabkoi, and Moiben wards. Our focus is Grade 3 learners who have
                fallen behind expected reading benchmarks.
              </p>
              <p className="program-overview__body">
                We work directly inside schools — training and deploying Teaching Assistants
                who run structured remedial sessions alongside regular class teachers.
                Outside school hours, community reading camps give learners additional
                practice in a safe, supportive environment.
              </p>
              <p className="program-overview__body">
                Our school-community-home linkage model ensures that parents and guardians
                are active participants in their children's literacy journey — not just
                passive observers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
           <div className="program-overview__image">
  <img 
    src={educationImg} 
    alt="Children participating in Tusome reading programme"
    className="program-overview__real-image"
  />
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
            <h2 className="program-how__title">From Identification to Fluency</h2>
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
                    background: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)'
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
            <h2 className="section-title">Education by the Numbers</h2>
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
              Help Us Put a Book in Every Child's Hand
            </h2>
            <p className="program-cta__sub">
              Whether you are a donor, a volunteer, or an organisation looking to partner —
              there is a role for you in this programme.
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

export default Education;