import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import '../styles/components/Team.css';

const leadership = [
  {
    name: 'Felix Cherwon',
    title: 'President & Founder',
    quals: 'MSc.',
    bio: 'Felix founded Tujiinue in 2014 as a youth group in Eldoret and has led its growth into a fully registered CBO. He oversees governance, strategy, and donor relations — and serves as the primary signatory for the organisation.',
    color: 'var(--color-primary)',
  },
  {
    name: 'Titus Kibiwott',
    title: 'Program Manager',
    quals: '',
    bio: 'Titus manages day-to-day operations across all three programme pillars. He serves as the primary liaison with MoE, USAID/KPLP, and RTI International, and leads risk mitigation and field delivery.',
    color: 'var(--color-secondary)',
  },
  {
    name: 'Abednego Sigilai',
    title: 'Finance & Procurement Officer',
    quals: '',
    bio: 'Abednego oversees budget management, donor compliance, and vendor selection. He has managed multi-million shilling grant disbursements with full accountability to RTI International and USAID.',
    color: 'var(--color-highlight)',
  },
  {
    name: 'Purity Kimutai',
    title: 'M&E Officer',
    quals: '',
    bio: 'Purity tracks impact across all programme sectors — from literacy benchmarks in the Education programme to farmer income data in the Agri-Hub. She ensures Tujiinue\'s results are measurable, documented, and donor-ready.',
    color: 'var(--color-primary)',
  },
  {
    name: 'Alice Keroy',
    title: 'Education Staff Manager',
    quals: '',
    bio: 'Alice oversees the deployment and performance of Teaching Assistants across partner schools in Turbo, Ainabkoi, and Moiben. She manages school implementation and ensures the Tusome programme runs to standard.',
    color: 'var(--color-secondary)',
  },
  {
    name: 'Japheth Kipleting',
    title: 'Materials & Resources Lead',
    quals: '',
    bio: 'Japheth manages the procurement, storage, and distribution of supplementary readers, learning tools, and agricultural inputs across all programme sites.',
    color: 'var(--color-highlight)',
  },
  {
    name: 'Kipruto Cherwon',
    title: 'Logistics & IT Officer',
    quals: '',
    bio: 'Kipruto manages vehicles, equipment, and digital infrastructure across all Tujiinue programmes — including the M-IMCI smartphones and the Agri-Hub devices deployed in the field.',
    color: 'var(--color-primary)',
  },
];

const board = [
  {
    name: 'Felix Cherwon',
    role: 'Board Chair & President',
    desc: 'Provides legal oversight, policy direction, and approves major budgets.',
  },
  {
    name: 'Titus Kibiwott',
    role: 'Executive Member',
    desc: 'Represents programme operations at board level and ensures delivery accountability.',
  },
  {
    name: 'Abednego Sigilai',
    role: 'Finance Member',
    desc: 'Oversees financial governance and donor compliance at the board level.',
  },
];

function TeamCard({ member, i, inView }) {
  return (
    <motion.div
      className="team-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.6 }}
    >
      <div className="team-card__photo">
        <div className="team-card__photo-placeholder">
          {member.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="team-card__color-bar" style={{ background: member.color }} />
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">
          {member.name}
          {member.quals && <span className="team-card__quals">, {member.quals}</span>}
        </h3>
        <span className="team-card__title" style={{ color: member.color }}>
          {member.title}
        </span>
        <p className="team-card__bio">{member.bio}</p>
      </div>
    </motion.div>
  );
}

function Team() {
  const { ref: teamRef, inView: teamInView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: boardRef, inView: boardInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="team-page">

      {/* ── HERO ── */}
      <section className="team-hero">
        <div className="team-hero__glow" />
        <div className="team-hero__glow-2" />
        <div className="container">
          <motion.div
            className="team-hero__inner"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="team-hero__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Our Team</span>
            </div>
            <span className="team-hero__tag">The People Behind the Work</span>
            <h1 className="team-hero__title">
              Meet the <span className="team-hero__accent">Tujiinue</span> Team
            </h1>
            <p className="team-hero__sub">
              Degree and MSc-level professionals with boots on the ground —
              our team combines deep community trust with technical expertise
              to deliver lasting impact across Uasin Gishu County.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TEAM GRID ── */}
      <section className="team-grid-section section" ref={teamRef}>
        <div className="container">
          <motion.div
            className="team-grid-section__header"
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">Key Staff Members</h2>
            <p className="section-subtitle">
              15+ professional staff working across education, agriculture,
              health, finance, and logistics.
            </p>
          </motion.div>

          <div className="team-grid">
            {leadership.map((member, i) => (
              <TeamCard
                key={member.name}
                member={member}
                i={i}
                inView={teamInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOARD ── */}
      <section className="team-board section" ref={boardRef}>
        <div className="container">
          <motion.div
            className="team-board__header"
            initial={{ opacity: 0, y: 20 }}
            animate={boardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Governance</span>
            <h2 className="section-title">Board of Directors</h2>
            <p className="section-subtitle">
              Our Board provides legal oversight, policy direction, and
              approves major budgets — ensuring full accountability to
              our donors and community.
            </p>
          </motion.div>

          <div className="team-board__grid">
            {board.map((member, i) => (
              <motion.div
                key={member.name}
                className="team-board__card"
                initial={{ opacity: 0, y: 20 }}
                animate={boardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="team-board__card-top">
                  <div className="team-board__avatar">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="team-board__name">{member.name}</h4>
                    <span className="team-board__role">{member.role}</span>
                  </div>
                </div>
                <p className="team-board__desc">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="team-cta" ref={ctaRef}>
        <div className="container">
          <motion.div
            className="team-cta__inner"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="team-cta__tag">Join Us</span>
            <h2 className="team-cta__title">
              Want to Work With Tujiinue?
            </h2>
            <p className="team-cta__sub">
              We are always looking for passionate professionals, volunteers,
              and partner organisations to join our mission across Uasin Gishu.
            </p>
            <div className="team-cta__btns">
              <Link to="/contact" className="team-cta__btn team-cta__btn--primary">
                Get In Touch
              </Link>
              <Link to="/about" className="team-cta__btn team-cta__btn--ghost">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default Team;