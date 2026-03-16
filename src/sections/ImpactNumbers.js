import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import useCountUp from '../hooks/useCountUp';
import '../styles/components/ImpactNumbers.css';

const impacts = [
  { value: '1200000', suffix: '+', label: 'Seedlings Distributed', desc: 'Coffee & avocado seedlings across Uasin Gishu farms' },
  { value: '1000', suffix: '+', label: 'Learners Reached', desc: 'Grade 3 students supported through remedial reading camps' },
  { value: '12', suffix: '', label: 'Years of Service', desc: 'Serving communities in Uasin Gishu since January 2014' },
  { value: '15', suffix: '+', label: 'Professional Staff', desc: 'Degree and MSc-level professionals on the ground' },
  { value: '3', suffix: '', label: 'Wards Transformed', desc: 'Turbo, Ainabkoi, and Moiben wards actively served' },
  { value: '17', suffix: 'M+ KES', label: 'Grants Managed', desc: 'Multi-million shilling grants delivered with full accountability' },
];

function CountItem({ item, inView }) {
  const count = useCountUp(item.value, 2200, inView);

  const display = isNaN(parseFloat(item.value))
    ? item.value
    : Number(count).toLocaleString();

  return (
    <div className="impact-numbers__item">
      <div className="impact-numbers__value">
        {display}
        {item.suffix && (
          <span className="impact-numbers__suffix">{item.suffix}</span>
        )}
      </div>
      <div className="impact-numbers__label">{item.label}</div>
      <p className="impact-numbers__desc">{item.desc}</p>
    </div>
  );
}

function ImpactNumbers() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="impact-numbers section" ref={ref}>
      <div className="container">

        {/* Header */}
        <motion.div
          className="impact-numbers__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="impact-numbers__tag">Our Impact</span>
          <h2 className="impact-numbers__title">
            Numbers That <span className="accent">Tell the Story</span>
          </h2>
          <p className="impact-numbers__subtitle">
            Every figure represents a life touched, a farm transformed, or a
            child who can now read.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="impact-numbers__grid">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <CountItem item={item} inView={inView} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ImpactNumbers;