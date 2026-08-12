import { motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Droplets,
  FlaskConical,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  TestTube,
  Microscope,
  Phone,
} from 'lucide-react'

const trustHighlights = [
  {
    icon: ShieldCheck,
    title: 'Accurate Testing',
    text: 'Evidence-led diagnostics that help patients and doctors make confident health decisions.',
  },
  {
    icon: Clock3,
    title: 'Timely Reports',
    text: 'A streamlined process that focuses on early results and clear communication.',
  },
  {
    icon: Activity,
    title: 'Affordable Care',
    text: 'Quality diagnostic services designed to remain accessible, transparent and reasonable.',
  },
  {
    icon: Stethoscope,
    title: 'Patient Focused',
    text: 'Comfort-first care with guidance from booking through reporting and follow-up.',
  },
]

const services = [
  {
    icon: Droplets,
    title: 'Blood Tests',
    text: 'Routine blood investigations for monitoring key health indicators and preventive care.',
  },
  {
    icon: FlaskConical,
    title: 'Biochemistry',
    text: 'Biochemical investigations that assess organ function, metabolism and overall health.',
  },
  {
    icon: HeartPulse,
    title: 'Hematology',
    text: 'Detailed assessments of blood cells and related parameters for diagnosis and monitoring.',
  },
  {
    icon: Stethoscope,
    title: 'Hormonal Tests',
    text: 'Supportive endocrine testing to help understand hormonal balance and common concerns.',
  },
]

const popularTests = [
  'CBC / Blood Test',
  'HbA1c',
  'Lipid Profile',
  'Thyroid / TSH',
  'LFT',
  'KFT',
  'Hormonal Tests',
  'Biochemistry Tests',
]

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: 'Reliable Testing',
    text: 'Dependable diagnostics supported by a strong quality-first patient approach.',
  },
  {
    icon: Clock3,
    title: 'Timely Reports',
    text: 'We prioritize efficient workflows to keep reporting as timely and clear as possible.',
  },
  {
    icon: Activity,
    title: 'Affordable Pricing',
    text: 'Transparent, patient-friendly pricing built to support ongoing health management.',
  },
  {
    icon: TestTube,
    title: 'Wide Range of Tests',
    text: 'A practical suite of investigations designed to support everyday and preventive care.',
  },
  {
    icon: Stethoscope,
    title: 'Patient-Focused Care',
    text: 'A smooth, respectful and reassuring experience from arrival to follow-up.',
  },
  {
    icon: Microscope,
    title: 'Future-Ready Centre',
    text: 'A growing centre with a vision for a wider, modern, more complete healthcare offering.',
  },
]

const experiencePoints = [
  'Friendly clinical support and test guidance',
  'Comfortable, efficient centre experience',
  'Clear communication and follow-up support',
]

const stats = [
  { value: '12+', label: 'Service Focus Areas' },
  { value: '24/7', label: 'Booking Support' },
  { value: '96%', label: 'Patient Satisfaction Goal' },
]

const carePromise = [
  {
    title: 'Clinical clarity',
    text: 'We help patients understand the purpose of testing and how it supports their care journey.',
  },
  {
    title: 'Comfort-first care',
    text: 'Every patient interaction is designed to feel respectful, calm and straightforward.',
  },
  {
    title: 'Reliable follow-through',
    text: 'Our process supports timely reporting, communication and practical next-step guidance.',
  },
]

const patientGroups = [
  'Routine health screening and preventive checkups',
  'Monitoring chronic health conditions',
  'Pre-employment and wellness assessment needs',
  'Family health planning and early intervention',
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export default function HomePage() {
  return (
    <>
      <motion.section
        className="hero section"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">Trusted Diagnostic &amp; Pathology Care</span>
            <h1>Accurate Diagnostics. Trusted Care. Better Health.</h1>
            <p className="lead">
              Reliable and affordable diagnostic and pathology testing services designed around your
              health, comfort and peace of mind. We make it easier for individuals and families to
              access the information they need for better health decisions.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn btn-primary">
                Book a Test
              </a>
              <a href="/services" className="btn btn-secondary">
                Explore Services
              </a>
            </div>
            <div className="mini-contact">
              <Phone size={18} />
              <span>Call Us for Guidance</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Modern healthcare laboratory">
            <div className="image-panel">
              <img
                src="/images/WhatsApp%20Image%202026-08-08%20at%2012.19.53%20PM.jpeg"
                alt="Healthcare professional working in a modern laboratory"
              />
            </div>
            <div className="floating-tag floating-top">
              <ShieldCheck size={18} />
              <span>Accurate Testing</span>
            </div>
            <div className="floating-tag floating-middle">
              <Clock3 size={18} />
              <span>Timely Reports</span>
            </div>
            <div className="floating-tag floating-bottom">
              <Activity size={18} />
              <span>Affordable Care</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section trust-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        <div className="container trust-grid">
          {trustHighlights.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              className="info-card"
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
            >
              <div className="icon-box">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        <div className="container about-grid">
          <div className="about-image-wrap">
            <img
              src="/images/WhatsApp%20Image%202026-08-08%20at%2012.19.54%20PM%20(1).jpeg"
              alt="Professional medical laboratory with diagnostic equipment"
            />
          </div>
          <div className="about-content">
            <span className="section-tag">About Us</span>
            <h2>Your Health Deserves Accurate Answers</h2>
            <p>
              Vital Diagnostic Centre is focused on providing reliable, affordable and accessible
              diagnostic and pathology testing services to the local community. Our goal is to make
              essential diagnostic services easier to access while focusing on accuracy, supportive
              care, timely reporting and patient-friendly service.
            </p>
            <ul className="feature-list">
              <li>
                <CheckCircle2 size={18} />
                <span>Reliable Testing</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span>Affordable Diagnostic Care</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span>Timely Reports</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span>Patient-Focused Service</span>
              </li>
            </ul>
            <a href="/about" className="btn btn-secondary">
              Learn More About Us
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section stats-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container stats-grid">
          {stats.map((item) => (
            <article key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section why-us-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container">
          <div className="section-heading center-heading">
            <span className="section-tag">Why Choose Us</span>
            <h2>Why Choose Vital Diagnostic Centre?</h2>
          </div>
          <div className="feature-grid">
            {whyChooseUs.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                className="feature-card"
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
              >
                <div className="icon-box feature-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section promise-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container">
          <div className="section-heading center-heading">
            <span className="section-tag">Our Promise</span>
            <h2>Everything we do supports a healthier journey</h2>
          </div>
          <div className="promise-grid">
            {carePromise.map(({ title, text }, index) => (
              <motion.article
                key={title}
                className="promise-card"
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
              >
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section experience-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        <div className="container experience-grid">
          <div className="experience-copy">
            <span className="section-tag">Designed for peace of mind</span>
            <h2>A smoother, more reassuring diagnostic experience</h2>
            <p>
              We believe healthcare should feel clear, respectful and easy to navigate. That is why
              the patient journey is built around simple scheduling, helpful guidance and transparent
              support. Whether you are booking a routine blood test or monitoring a long-term health
              concern, our team aims to make the process efficient and reassuring.
            </p>
            <ul className="feature-list compact-list">
              {experiencePoints.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="experience-visual">
            <img
              src="/images/WhatsApp%20Image%202026-08-08%20at%2012.19.54%20PM.jpeg"
              alt="Doctor reviewing laboratory reports with a patient"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section patient-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        <div className="container patient-grid">
          <div className="patient-copy">
            <span className="section-tag">Who we support</span>
            <h2>Helpful care for everyday health and long-term wellbeing</h2>
            <p>
              We support individuals, families and professionals who want simple, reliable access to
              important diagnostic information. Our services are especially useful for preventive care,
              condition monitoring and health planning.
            </p>
            <ul className="feature-list compact-list">
              {patientGroups.map((group) => (
                <li key={group}>
                  <CheckCircle2 size={18} />
                  <span>{group}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="story-panel patient-panel">
            <div className="story-copy">
              <span className="section-tag">Our approach</span>
              <h3>Better health decisions start with dependable data.</h3>
              <p>
                The result is not only a lab report but a more informed healthcare journey. We help
                patients feel supported every step of the way.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section service-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container">
          <div className="section-heading center-heading">
            <span className="section-tag">Our Services</span>
            <h2>Our Diagnostic Services</h2>
            <p>Comprehensive pathology and diagnostic testing for everyday healthcare needs.</p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                className="service-card"
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
              >
                <div className="service-icon">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="/services" className="inline-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section tests-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container">
          <div className="section-heading center-heading">
            <span className="section-tag">Popular Tests</span>
            <h2>Popular Diagnostic Tests</h2>
          </div>
          <div className="test-grid">
            {popularTests.map((item, index) => (
              <motion.article
                key={item}
                className="test-card"
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
              >
                <h3>{item}</h3>
                <p>Reliable and patient-friendly diagnostic support for everyday health needs.</p>
                <a href="/contact" className="inline-link">
                  Book Test <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}
