import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/components/Partners.css';

// Import local images from assets folder
// Import local images from assets folder
import usaidLogo from '../assets/usaid.jpeg';
import rtiLogo from '../assets/rti.jpeg';
import edcLogo from '../assets/edc.jpeg';
import kemriLogo from '../assets/kemri.jpeg';
import ministryLogo from '../assets/ministry_of_ed.jpeg';
import uasinGishuLogo from '../assets/county.jpeg';

const partners = [
  {
    name: 'USAID',
    label: 'United States Agency for International Development',
    logo: usaidLogo,
    alt: 'USAID Logo'
  },
  {
    name: 'RTI International',
    label: 'Research Triangle Institute',
    logo: rtiLogo,
    alt: 'RTI International Logo'
  },
  {
    name: 'EDC',
    label: 'Education Development Center',
    logo: edcLogo,
    alt: 'Education Development Center Logo'
  },
  {
    name: 'KEMRI',
    label: 'Kenya Medical Research Institute',
    logo: kemriLogo,
    alt: 'KEMRI Logo'
  },
  {
    name: 'Ministry of Education',
    label: 'Ministry of Education, Kenya',
    logo: ministryLogo,
    alt: 'Kenya Ministry of Education Logo'
  },
  {
    name: 'Uasin Gishu',
    label: 'Uasin Gishu County Government',
    logo: uasinGishuLogo,
    alt: 'Uasin Gishu County Logo'
  }
];

function Partners() {
  const { ref, inView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true,
    rootMargin: '-50px'
  });

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="partners section" ref={ref}>
      <div className="container">

        {/* Header */}
        <motion.div
          className="partners__header"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <span className="partners__tag">Our Partners</span>
          <h2 className="partners__title">
            Trusted by <span className="accent">Leading Organisations</span>
          </h2>
          <p className="partners__subtitle">
            We work alongside world-class institutions to deliver
            measurable, accountable impact across Uasin Gishu County.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className="partners__grid"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="partners__card"
              variants={cardVariant}
              whileHover={{ 
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              {/* Logo */}
              <div className="partners__logo-wrapper">
                <img 
                  src={partner.logo} 
                  alt={partner.alt}
                  className="partners__logo"
                  loading="lazy"
                />
              </div>
              
              {/* Text Content */}
              <span className="partners__card-name">{partner.name}</span>
              <span className="partners__card-label">{partner.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="partners__cta-wrap"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ delay: 0.4 }}
        >
          <p className="partners__cta-text">
            Interested in partnering with Tujiinue CBO?
          </p>
          <a href="/contact" className="partners__cta-btn">
            Start a Conversation
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Partners;