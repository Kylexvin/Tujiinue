import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import useCountUp from '../hooks/useCountUp';
import presidentImg from '../assets/president.jpeg';
import communityImg from '../assets/cbo1.jpeg'; 
import '../styles/components/About.css';

const values = [
  {
    title: 'Integrity',
    desc: 'We act with transparency and accountability in all our community engagements and resource management.',
    color: 'var(--color-primary)',
  },
  {
    title: 'Inclusivity',
    desc: 'We promote gender equity and ensure that youth, women, and persons with disabilities have equal access to opportunities.',
    color: 'var(--color-secondary)',
  },
  {
    title: 'Innovation',
    desc: 'We embrace modern AI and agricultural techniques to solve local challenges in education and food security.',
    color: 'var(--color-highlight)',
  },
  {
    title: 'Collaboration',
    desc: 'We believe in the power of school-community-home linkages to drive lasting, sustainable impact.',
    color: 'var(--color-primary)',
  },
];

const timeline = [
  {
    year: '2014',
    title: 'Founded',
    desc: 'Tujiinue Chemalal Youth Group established in Eldoret by Felix Cherwon and a small group of community youth.',
    color: 'var(--color-primary)',
  },
  {
    year: '2016',
    title: 'First Partnership',
    desc: 'Partnered with the Ministry of Education to support early grade literacy in Turbo ward schools.',
    color: 'var(--color-secondary)',
  },
  {
    year: '2019',
    title: 'USAID/KPLP Grant',
    desc: 'Awarded the Kenya Primary Literacy Program grant — our first major international funding, totalling KES 17M+.',
    color: 'var(--color-highlight)',
  },
  {
    year: '2021',
    title: 'Agri-Hub Launch',
    desc: 'Launched the Agri-Hub programme — distributing 1.2M+ coffee and avocado seedlings across Uasin Gishu.',
    color: 'var(--color-primary)',
  },
  {
    year: '2023',
    title: 'M-IMCI Development',
    desc: 'Developed the M-IMCI Edge AI diagnostic tool — bringing offline AI healthcare triage to rural dispensaries.',
    color: 'var(--color-secondary)',
  },
  {
    year: '2024',
    title: 'CBO Registration',
    desc: 'Formally transitioned from Youth Group to fully registered Community-Based Organisation — Tujiinue CBO.',
    color: 'var(--color-highlight)',
  },
];

const orgLevels = [
  {
    level: 'Level 1 — Governance',
    title: 'Board of Directors',
    members: ['Felix Cherwon — President / Board Chair'],
    desc: 'Provides legal oversight, policy direction, and approves major budgets.',
    color: 'var(--color-primary)',
  },
  {
    level: 'Level 2 — Executive Management',
    title: 'Senior Leadership',
    members: ['Titus Kibiwott — Program Manager', 'Abednego Sigilai — Finance & Procurement Officer'],
    desc: 'Day-to-day operations, donor liaison, budget management, and risk mitigation.',
    color: 'var(--color-secondary)',
  },
  {
    level: 'Level 3 — Technical Departments',
    title: 'Programme Leads',
    members: ['Alice Keroy — Education & Literacy', 'Japheth Kipleting — Materials & Resources', 'Purity Kimutai — M&E Officer', 'Kipruto Cherwon — Logistics & IT'],
    desc: 'Technical delivery across Education, Agri-Hub, and Health programmes.',
    color: 'var(--color-highlight)',
  },
  {
    level: 'Level 4 — Field Operations',
    title: 'Field Staff & Volunteers',
    members: ['10+ Teaching Assistants', 'Youth Facilitators', 'Community Literacy Champions', 'Agripreneurs'],
    desc: 'Grassroots delivery in Turbo, Ainabkoi, and Moiben wards.',
    color: 'var(--color-primary)',
  },
];

const stats = [
  { value: '12', suffix: '', label: 'Years of Service' },
  { value: '15', suffix: '+', label: 'Professional Staff' },
  { value: '17', suffix: 'M+ KES', label: 'Grants Managed' },
  { value: '3', suffix: '', label: 'Wards Served' },
];

function StatItem({ stat, inView }) {
  const count = useCountUp(stat.value, 2000, inView);
  const display = isNaN(parseFloat(stat.value))
    ? stat.value
    : Number(count).toLocaleString();

  return (
    <div className="about-stat">
      <div className="about-stat__value">
        {display}
        {stat.suffix && <span className="about-stat__suffix">{stat.suffix}</span>}
      </div>
      <div className="about-stat__label">{stat.label}</div>
    </div>
  );
}

function About() {
  const { ref: storyRef, inView: storyInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: missionRef, inView: missionInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: timelineRef, inView: timelineInView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: orgRef, inView: orgInView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: presidentRef, inView: presidentInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero__glow" />
        <div className="about-hero__glow-2" />
        <div className="container">
          <motion.div
            className="about-hero__inner"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-hero__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
            <span className="about-hero__tag">Est. January 2014 · Eldoret, Kenya</span>
            <h1 className="about-hero__title">
              We Are <span className="about-hero__accent">Tujiinue</span>
            </h1>
            <p className="about-hero__sub">
              Our name means "Let us uplift ourselves" in Swahili. For over a decade,
              that belief has driven everything we do — from literacy camps in Turbo
              to AI-powered farms in Ainabkoi to edge health diagnostics in Moiben.
            </p>
            <div className="about-hero__ctas">
              <Link to="/team" className="about-hero__btn about-hero__btn--primary">
                Meet the Team
              </Link>
              <Link to="/contact" className="about-hero__btn about-hero__btn--ghost">
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="about-story section" ref={storyRef}>
        <div className="container about-story__inner">
          <motion.div
            className="about-story__left"
            initial={{ opacity: 0, x: -30 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Our Roots</span>
            <h2 className="section-title">
              From a Youth Group<br />
              to a <span style={{ color: 'var(--color-secondary)' }}>Premier CBO</span>
            </h2>
            <p className="about-story__body">
              Tujiinue began in January 2014 as the <em>Tujiinue Chemalal Youth Group</em> —
              a small collective of young people in Eldoret who believed that the solutions
              to their community's greatest challenges lay within the community itself.
            </p>
            <p className="about-story__body">
              For the first two years, we worked quietly — supporting local schools,
              planting trees, and running community clean-ups. Then in 2016, our
              partnership with the Ministry of Education opened the door to structured
              literacy programming in Turbo ward. That was the turning point.
            </p>
            <p className="about-story__body">
              By 2019, we had earned the trust of USAID and RTI International —
              receiving our first major grant under the Kenya Primary Literacy Program.
              We used it to scale our education work, launch the Agri-Hub, and begin
              development of the M-IMCI health tool.
            </p>
            <p className="about-story__body">
              In 2024, we formally transitioned from a Youth Group to a fully registered
              Community-Based Organisation — a milestone that reflects both our growth
              and our commitment to permanence. We are not a project. We are an institution.
            </p>
          </motion.div>

          <motion.div
            className="about-story__right"
            initial={{ opacity: 0, x: 30 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            
<div className="about-story__image">
  <img 
    src={communityImg} 
    alt="Community members at a Tujiinue event"
    className="about-story__real-image"
  />
</div>


            <div className="about-story__badge">
              <span className="about-story__badge-year">2014</span>
              <span className="about-story__badge-label">Year Founded</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ── */}
      <section className="about-mvv section" ref={missionRef}>
        <div className="container">
          <motion.div
            className="about-mvv__header"
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Identity</span>
            <h2 className="section-title">Our Mission, Vision & Values</h2>
          </motion.div>

          {/* Mission & Vision */}
          <div className="about-mv">
            <motion.div
              className="about-mv__card"
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="about-mv__bar" style={{ background: 'var(--color-primary)' }} />
              <span className="about-mv__label" style={{ color: 'var(--color-primary)' }}>Our Mission</span>
              <p className="about-mv__text">
                To foster community-led development by empowering vulnerable groups
                through education, modern agriculture, skills training, and sustainable
                environmental practices across Uasin Gishu County.
              </p>
            </motion.div>

            <motion.div
              className="about-mv__card"
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="about-mv__bar" style={{ background: 'var(--color-secondary)' }} />
              <span className="about-mv__label" style={{ color: 'var(--color-secondary)' }}>Our Vision</span>
              <p className="about-mv__text">
                To be a premier agent of change in Uasin Gishu County, where empowered
                communities lead self-sustaining and dignified lives through innovation,
                collaboration, and grassroots leadership.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="about-values">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="about-value-card"
                initial={{ opacity: 0, y: 20 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              >
                <div className="about-value-card__bar" style={{ background: value.color }} />
                <h4 className="about-value-card__title" style={{ color: value.color }}>
                  {value.title}
                </h4>
                <p className="about-value-card__desc">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="about-timeline section" ref={timelineRef}>
        <div className="container">
          <motion.div
            className="about-timeline__header"
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">A Decade of Milestones</h2>
            <p className="section-subtitle">
              From a small youth group in Eldoret to a nationally recognised CBO —
              here is how we got here.
            </p>
          </motion.div>

          <div className="about-timeline__list">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="about-timeline__item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <div className="about-timeline__year-wrap">
                  <div
                    className="about-timeline__year"
                    style={{ background: item.color }}
                  >
                    {item.year}
                  </div>
                </div>
                <div className="about-timeline__content">
                  <h4 className="about-timeline__title" style={{ color: item.color }}>
                    {item.title}
                  </h4>
                  <p className="about-timeline__desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORG STRUCTURE ── */}
      <section className="about-org section" ref={orgRef}>
        <div className="container">
          <motion.div
            className="about-org__header"
            initial={{ opacity: 0, y: 20 }}
            animate={orgInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Structure</span>
            <h2 className="section-title">Organisational Structure</h2>
            <p className="section-subtitle">
              A four-level structure built for accountability, technical excellence,
              and grassroots delivery.
            </p>
          </motion.div>

          <div className="about-org__levels">
            {orgLevels.map((level, i) => (
              <motion.div
                key={level.level}
                className="about-org__level"
                initial={{ opacity: 0, y: 20 }}
                animate={orgInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <div
                  className="about-org__level-number"
                  style={{ background: level.color }}
                >
                  {i + 1}
                </div>
                <div className="about-org__level-content">
                  <span
                    className="about-org__level-tag"
                    style={{ color: level.color }}
                  >
                    {level.level}
                  </span>
                  <h4 className="about-org__level-title">{level.title}</h4>
                  <p className="about-org__level-desc">{level.desc}</p>
                  <ul className="about-org__level-members">
                    {level.members.map((member) => (
                      <li key={member} className="about-org__level-member">
                        <div
                          className="about-org__level-dot"
                          style={{ background: level.color }}
                        />
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="about-stats-section" ref={statsRef}>
        <div className="container about-stats-section__inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">By the Numbers</span>
            <h2 className="section-title">Tujiinue at a Glance</h2>
          </motion.div>
          <div className="about-stats__grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <StatItem stat={stat} inView={statsInView} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESIDENT MESSAGE ── */}
      <section className="about-president section" ref={presidentRef}>
        <div className="container about-president__inner">

          <motion.div
            className="about-president__left"
            initial={{ opacity: 0, x: -30 }}
            animate={presidentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
<div className="about-president__photo-wrap">
  <img
    src={presidentImg}
    alt="Felix Cherwon"
    className="about-president__photo"
  />
  <div className="about-president__ring" />
</div>

            <div className="about-president__identity">
              <span className="about-president__name">Felix Cherwon, MSc.</span>
              <span className="about-president__role">President & Founder</span>
              <span
                className="about-president__tag"
                style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)', background: 'var(--color-primary-dim)' }}
              >
                Est. 2014
              </span>
            </div>
          </motion.div>

          <motion.div
            className="about-president__right"
            initial={{ opacity: 0, x: 30 }}
            animate={presidentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="section-tag">Message from the President</span>
            <div className="about-president__mark">"</div>
            <blockquote className="about-president__quote">
              When we founded this organisation in 2014 as a small youth group in Eldoret,
              our goal was simple — to uplift ourselves through collective action. Over the
              past twelve years, I have watched that spark of youth energy evolve into a
              professional, high-impact institution that is now at the forefront of digital
              and agricultural transformation in Uasin Gishu County.
            </blockquote>
            <p className="about-president__quote-cont">
              Today, we stand at a critical crossroads for rural Kenya. Our children face
              a literacy crisis, and our farmers are transitioning from traditional maize
              to high-value coffee and avocado exports. At Tujiinue, we believe that
              Artificial Intelligence is the bridge that will close these gaps — not
              by replacing people, but by putting the power of the future into their hands.
            </p>
            <p className="about-president__quote-cont">
              Our track record with partners like RTI International, EDC, and USAID proves
              that we are ready for the last mile. We do not just build tools — we build
              linkages. We link schools to homes, farmers to buyers, and rural clinics to
              specialist-level care. As we look toward Vision 2030, Tujiinue CBO remains
              committed to transparency, inclusivity, and relentless innovation.
            </p>
            <p className="about-president__sign">
              <em>Tujijenge, Tujiinue.</em>
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="about-cta__glow" />
        <div className="container">
          <motion.div
            className="about-cta__inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="about-cta__tag">Join the Movement</span>
            <h2 className="about-cta__title">
              Ready to Uplift Communities<br />
              <span style={{ color: 'var(--color-secondary)' }}>Together?</span>
            </h2>
            <p className="about-cta__sub">
              Whether you are a donor, a volunteer, a government partner, or an
              organisation aligned with our mission — there is a place for you
              in the Tujiinue story.
            </p>
            <div className="about-cta__btns">
              <Link to="/contact" className="about-cta__btn about-cta__btn--primary">
                Partner With Us
              </Link>
              
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default About;