import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import '../styles/components/AboutSnippet.css';

const values = [
  {
    title: 'Integrity',
    desc: 'Transparent and accountable in every community engagement and resource we manage.',
  },
  {
    title: 'Inclusivity',
    desc: 'Equal access for youth, women, and persons with disabilities — no one left behind.',
  },
  {
    title: 'Innovation',
    desc: 'Modern AI and technology applied to real grassroots challenges in education and agriculture.',
  },
  {
    title: 'Collaboration',
    desc: 'School, community, and home working together to drive lasting impact across Uasin Gishu.',
  },
];

function AboutSnippet() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="about-snippet section" ref={ref}>
      <div className="container about-snippet__inner">

        {/* Left */}
        <motion.div
          className="about-snippet__left"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="about-snippet__tag">Who We Are</span>
          <h2 className="about-snippet__title">
            A Decade of <span className="accent">Grassroots</span> Impact
          </h2>
          <p className="about-snippet__body">
            Founded in January 2014 as the Tujiinue Chemalal Youth Group in
            Eldoret, we have grown into a fully registered Community-Based
            Organisation. Our name means <em>"Let us uplift ourselves"</em> —
            and that belief drives everything we do.
          </p>
          <p className="about-snippet__body">
            We operate at the intersection of human potential and artificial
            intelligence, serving the communities of Uasin Gishu County with
            programmes in education, agriculture, and healthcare.
          </p>

          <div className="about-snippet__ctas">
            <Link to="/about" className="about-snippet__btn about-snippet__btn--primary">
              Our Full Story
            </Link>
            <Link to="/team" className="about-snippet__btn about-snippet__btn--ghost">
              Meet the Team
            </Link>
          </div>
        </motion.div>

        {/* Right — values grid */}
        <motion.div
          className="about-snippet__right"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="about-snippet__values">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="about-snippet__value-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <div className="about-snippet__value-dot" />
                <div>
                  <h4 className="about-snippet__value-title">{v.title}</h4>
                  <p className="about-snippet__value-desc">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Year badge */}
          <div className="about-snippet__year-badge">
            <span className="about-snippet__year-number">12</span>
            <span className="about-snippet__year-label">Years of Service</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default AboutSnippet;