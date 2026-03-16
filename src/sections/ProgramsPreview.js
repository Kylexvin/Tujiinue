import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import '../styles/components/ProgramsPreview.css';

const programs = [
  {
    tag: 'Education & Literacy',
    title: 'Tusome Early Grade Reading Programme',
    body: 'Partnering with USAID/KPLP, we run structured remedial reading camps for Grade 3 learners who have fallen behind. Our Teaching Assistants work directly in schools across Turbo, Ainabkoi, and Moiben — turning struggling readers into fluent ones.',
    highlights: ['Remedial reading camps', 'Trained Teaching Assistants', 'Parental engagement sessions', 'M-IMCI literacy tracking'],
    link: '/programs/education',
    color: 'blue',
    number: '01',
  },
  {
    tag: 'Agriculture & Livelihoods',
    title: 'AI-Powered Agri-Hub Value Chain',
    body: 'We are leading Uasin Gishu\'s transition from maize to high-value coffee and avocado exports. Our Agri-Hub uses Computer Vision to grade produce quality on-device — no internet required — connecting smallholder farmers directly to global buyers.',
    highlights: ['Computer Vision quality grading', 'Coffee & avocado value chains', 'Agripreneur training', 'Direct market linkages'],
    link: '/programs/agri-hub',
    color: 'green',
    number: '02',
  },
  {
    tag: 'Health & Innovation',
    title: 'M-IMCI Edge AI Diagnostic Tool',
    body: 'Rural dispensaries in Uasin Gishu face a specialist gap. Our M-IMCI tool runs entirely offline on standard smartphones — providing AI-driven triage for malaria, pneumonia, diarrhoea, malnutrition, and measles at the point of care.',
    highlights: ['100% offline functionality', 'Top 5 childhood illness triage', 'Smartphone-based diagnostics', 'Community health worker support'],
    link: '/programs/health',
    color: 'red',
    number: '03',
  },
];

function ProgramsPreview() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="programs-preview section" ref={ref}>
      <div className="container">

        {/* Header */}
        <motion.div
          className="programs-preview__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="programs-preview__tag">Our Programs</span>
          <h2 className="programs-preview__title">
            Work Built for the <span className="accent">Last Mile</span>
          </h2>
          <p className="programs-preview__subtitle">
            Each programme is designed around one principle — technology should
            serve the community, not the other way around.
          </p>
        </motion.div>

        {/* Program rows */}
        <div className="programs-preview__list">
          {programs.map((program, i) => (
            <motion.div
              key={program.number}
              className={`program-row program-row--${program.color}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              {/* Left */}
              <div className="program-row__left">
                <span className="program-row__number">{program.number}</span>
                <div className="program-row__meta">
                  <span className="program-row__tag">{program.tag}</span>
                  <h3 className="program-row__title">{program.title}</h3>
                </div>
              </div>

              {/* Divider */}
              <div className="program-row__divider" />

              {/* Right */}
              <div className="program-row__right">
                <p className="program-row__body">{program.body}</p>
                <ul className="program-row__highlights">
                  {program.highlights.map((h) => (
                    <li key={h} className="program-row__highlight">
                      <span className="program-row__highlight-dot" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link to={program.link} className="program-row__link">
                  View Programme
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProgramsPreview;