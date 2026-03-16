import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import '../styles/components/PresidentQuote.css';

function PresidentQuote() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="president-quote section" ref={ref}>
      <div className="container president-quote__inner" ref={ref}>

        {/* Left — photo */}
        <motion.div
          className="president-quote__left"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="president-quote__photo-wrap">
            <div className="president-quote__photo-placeholder">
              <span>Felix Cherwon</span>
            </div>
            <div className="president-quote__photo-ring" />
          </div>
          <div className="president-quote__identity">
            <span className="president-quote__name">Felix Cherwon, MSc.</span>
            <span className="president-quote__role">President & Founder, Tujiinue CBO</span>
          </div>
        </motion.div>

        {/* Right — quote */}
        <motion.div
          className="president-quote__right"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="president-quote__mark">"</div>
          <blockquote className="president-quote__text">
            When we founded this organisation in 2014 as a small youth group
            in Eldoret, our goal was simple — to uplift ourselves through
            collective action. Today, we stand at a critical crossroads for
            rural Kenya. Our children face a literacy crisis, and our farmers
            are transitioning to high-value exports. At Tujiinue, we believe
            AI is the bridge that will close these gaps.
          </blockquote>
          <p className="president-quote__sub">
            Putting the power of the future into the hands of the community today.
          </p>
          <Link to="/about" className="president-quote__link">
            Read Full Message
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default PresidentQuote;