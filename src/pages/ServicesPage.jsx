import { motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  Droplets,
  FlaskConical,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
  TestTube,
} from 'lucide-react'

const services = [
  { icon: Droplets, title: 'Blood Tests', text: 'Routine blood investigations for monitoring important health parameters and general wellness.' },
  { icon: FlaskConical, title: 'Biochemistry', text: 'Biochemical investigations for evaluating organ function, metabolism and internal health markers.' },
  { icon: HeartPulse, title: 'Hematology', text: 'Testing related to blood cells, clotting and blood-related parameters.' },
  { icon: Stethoscope, title: 'Hormonal Tests', text: 'Testing to evaluate endocrine and hormone-related balance in the body.' },
  { icon: Activity, title: 'HbA1c', text: 'A commonly used test for assessing average blood glucose levels over time.' },
  { icon: TestTube, title: 'Lipid Profile', text: 'Testing of important cholesterol and lipid parameters for preventive care.' },
  { icon: Microscope, title: 'Thyroid / TSH', text: 'Testing to evaluate thyroid-related health and hormonal function.' },
  { icon: HeartPulse, title: 'LFT', text: 'Liver Function Tests for evaluating important liver-related parameters.' },
  { icon: ShieldCheck, title: 'KFT', text: 'Kidney Function Tests for evaluating important kidney-related health markers.' },
]

const futureServices = [
  { title: 'X-Ray', badge: 'Coming Soon' },
  { title: 'Ultrasound', badge: 'Coming Soon' },
  { title: 'Advanced Imaging', badge: 'Coming Soon' },
]

const careSteps = [
  'Initial consultation and test selection guidance',
  'Comfortable sample collection and patient support',
  'Accurate analysis and efficient report preparation',
  'Clear next-step recommendations when needed',
]

const keyBenefits = [
  {
    title: 'For preventive care',
    text: 'Support routine screening and early health detection before symptoms become more serious.',
  },
  {
    title: 'For chronic monitoring',
    text: 'Track the progress of long-term conditions and understand how treatment is working over time.',
  },
  {
    title: 'For family wellbeing',
    text: 'Offer practical testing support for the whole family and help guide health decisions with confidence.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export default function ServicesPage() {
  return (
    <motion.div
      className="page-shell section"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <div className="container">
        <motion.div className="page-header center-heading" variants={fadeUp}>
          <span className="section-tag">Services</span>
          <h1>Our Diagnostic Services</h1>
          <p>Comprehensive pathology and diagnostic testing for everyday healthcare needs.</p>
        </motion.div>

        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="service-card">
              <div className="service-icon">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="/contact" className="inline-link">
                Learn More <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

        <motion.div className="story-panel service-panel mt-large" variants={fadeUp}>
          <div className="story-copy">
            <span className="section-tag">How we work</span>
            <h2>Simple, structured and patient-friendly support</h2>
            <p>
              Every test is handled with a focus on clarity, reliability and respectful care. We aim
              to make the process easier for patients while helping clinicians access the information
              they need. The experience is designed to reduce uncertainty and make each appointment
              feel more organized and reassuring.
            </p>
            <ul className="feature-list compact-list">
              {careSteps.map((step) => (
                <li key={step}>
                  <ShieldCheck size={18} />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="story-image">
            <img
              src="/images/WhatsApp%20Image%202026-08-08%20at%2012.19.54%20PM.jpeg"
              alt="Healthcare staff preparing patient diagnostics"
            />
          </div>
        </motion.div>

        <motion.div className="service-benefits mt-large" variants={fadeUp}>
          <div className="section-heading center-heading">
            <span className="section-tag">Why it matters</span>
            <h2>Healthcare insight that supports better decisions</h2>
          </div>
          <div className="info-grid">
            {keyBenefits.map(({ title, text }, index) => (
              <motion.article
                key={title}
                className="info-card"
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
              >
                <div className="icon-box">
                  <ShieldCheck size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div className="future-section mt-large" variants={fadeUp}>
          <div className="page-header center-heading future-heading">
            <span className="section-tag">Future Expansion</span>
            <h2>Expanding Our Diagnostic Capabilities</h2>
            <p>
              Vital Diagnostic Centre plans to expand its services with modern imaging and
              diagnostic facilities to make more healthcare services accessible under one roof.
              This growth helps us serve a wider range of health concerns while maintaining a calm,
              patient-centred environment.
            </p>
          </div>

          <div className="future-grid">
            {futureServices.map(({ title, badge }, index) => (
              <motion.article
                key={title}
                className="future-card"
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
              >
                <span className="status-badge">{badge}</span>
                <h3>{title}</h3>
                <p>Planned for future expansion to support more accessible and modern diagnostic care.</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
