import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import '../styles/components/Contact.css';

const contactInfo = [
  {
    label: 'Address',
    value: 'Komora Center, Eldoret, Uasin Gishu County, Kenya',
    color: 'var(--color-primary)',
  },
  {
    label: 'Email',
    value: 'info@tujiinue-cbo.org',
    color: 'var(--color-secondary)',
  },
  {
    label: 'Phone',
    value: '+254 722 760 630',
    color: 'var(--color-highlight)',
  },
  {
    label: 'Working Hours',
    value: 'Monday – Friday, 8:00 AM – 5:00 PM EAT',
    color: 'var(--color-primary)',
  },
];

const reasons = [
  'Partner with us on a programme',
  'Make a donation',
  'Volunteer or intern',
  'Media or press inquiry',
  'General inquiry',
];

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    reason: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: infoRef, inView: infoInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Clear error when user types
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError('');

  // Create form data for FormSubmit
  const formData = new FormData();
  formData.append('name', form.name);
  formData.append('email', form.email);
  formData.append('organisation', form.organisation || 'Not provided');
  formData.append('reason', form.reason);
  formData.append('message', form.message);
  formData.append('_subject', `Tujiinue CBO Contact Form: ${form.reason}`);
  formData.append('_captcha', 'false');

  try {
    // Using your activation code instead of email address
    const response = await fetch('https://formsubmit.co/2b1f2b207c04ac24607d53338f9b248c', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
      setForm({
        name: '',
        email: '',
        organisation: '',
        reason: '',
        message: '',
      });
    } else {
      throw new Error('Failed to send message');
    }
  } catch (err) {
    setError('Failed to send message. Please try again or email us directly at info@tujiinuecbo.or.ke');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="contact-page">

      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero__glow" />
        <div className="contact-hero__glow-2" />
        <div className="container">
          <motion.div
            className="contact-hero__inner"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-hero__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </div>
            <span className="contact-hero__tag">We Would Love to Hear from You</span>
            <h1 className="contact-hero__title">
              Get In <span className="contact-hero__accent">Touch</span>
            </h1>
            <p className="contact-hero__sub">
              Whether you want to partner with us, make a donation, volunteer,
              or simply learn more — our team in Eldoret is ready to talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="contact-main section">
        <div className="container contact-main__inner">

          {/* Form */}
          <motion.div
            className="contact-form-wrap"
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="contact-form-success">
                <div className="contact-form-success__icon">✓</div>
                <h3 className="contact-form-success__title">Message Sent Successfully!</h3>
                <p className="contact-form-success__body">
                  Thank you for reaching out to Tujiinue CBO. Our team will get back to you
                  within 2 business days.
                </p>
                <button
                  className="contact-form-success__reset"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="contact-form-wrap__title">Send Us a Message</h2>
                <p className="contact-form-wrap__sub">
                  Fill in the form and we will get back to you within 2 business days.
                </p>
                
                {error && (
                  <div className="contact-form__error">
                    {error}
                  </div>
                )}
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label className="contact-form__label">Full Name *</label>
                      <input
                        className="contact-form__input"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label">Email Address *</label>
                      <input
                        className="contact-form__input"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label">Organisation</label>
                    <input
                      className="contact-form__input"
                      type="text"
                      name="organisation"
                      value={form.organisation}
                      onChange={handleChange}
                      placeholder="Your organisation (optional)"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label">Reason for Contact *</label>
                    <select
                      className="contact-form__input contact-form__select"
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select a reason</option>
                      {reasons.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label">Message *</label>
                    <textarea
                      className="contact-form__input contact-form__textarea"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      required
                      rows={5}
                      disabled={isSubmitting}
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="contact-form__submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            className="contact-info"
            ref={infoRef}
            initial={{ opacity: 0, x: 30 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="contact-info__title">Contact Information</h2>
            <p className="contact-info__sub">
              Our office is based in Eldoret, Uasin Gishu County.
              We serve communities across Turbo, Ainabkoi, and Moiben wards.
            </p>

            <div className="contact-info__list">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-info__item">
                  <div
                    className="contact-info__dot"
                    style={{ background: item.color }}
                  />
                  <div>
                    <span className="contact-info__item-label">{item.label}</span>
                    <span className="contact-info__item-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            {/* <div className="contact-map">
              <div className="contact-map__placeholder">
                <span>Komora Center, Eldoret</span>
                <span className="contact-map__sub">Google Map will be embedded here</span>
              </div>
            </div> */}

            {/* Social links */}
            {/* <div className="contact-social">
              <span className="contact-social__label">Follow Tujiinue CBO</span>
              <div className="contact-social__links">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="contact-social__link">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="contact-social__link">Twitter / X</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-social__link">LinkedIn</a>
              </div>
            </div> */}
          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default Contact;