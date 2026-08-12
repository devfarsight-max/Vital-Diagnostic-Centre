import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Stethoscope, HeartPulse } from 'lucide-react'

const highlights = [
  'Reliable Testing',
  'Affordable Diagnostic Care',
  'Timely Reports',
  'Patient-Focused Service',
]

const values = [
  {
    title: 'Accuracy First',
    text: 'Every sample and evaluation is treated with care, focus and attention to detail.',
  },
  {
    title: 'Patient Comfort',
    text: 'We aim to reduce stress by making the experience clear, calm and respectful.',
  },
  {
    title: 'Transparent Care',
    text: 'We keep communication simple so patients know what to expect before and after testing.',
  },
]

const servicePhilosophy = [
  'We believe better care starts with timely information and practical support.',
  'Our approach blends compassionate service with strong diagnostic discipline.',
  'We aim to remove confusion so patients feel empowered to take the next step.',
]

const communityCare = [
  'Routine preventive testing and health checkups',
  'Monitoring long-term conditions with clear follow-up',
  'Support for family health planning and early intervention',
  'Simple access to trusted testing information',
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export default function AboutPage() {
  return (
    <motion.div
      className="page-shell section"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <div className="container page-block">
        <motion.div className="page-header narrow-header" variants={fadeUp}>
          <span className="section-tag">About</span>
          <h1>Your Health Deserves Accurate Answers</h1>
          <p>
            Vital Diagnostic Centre is focused on providing reliable, affordable and accessible
            diagnostic and pathology testing services to the local community. Our mission is to help
            patients feel supported while receiving clear answers, timely reporting and convenient
            healthcare access.
          </p>
        </motion.div>

        <motion.div className="about-grid page-split" variants={fadeUp}>
          <div className="about-image-wrap">
            <img
              src="/images/WhatsApp%20Image%202026-08-08%20at%2012.19.54%20PM%20(1).jpeg"
              alt="Modern medical diagnostics centre"
            />
          </div>

          <div className="about-content">
            <h2>Built around trust and patient care</h2>
            <p>
              We are creating a diagnostic experience that is simple, transparent and focused on
              patient comfort. Every step is designed to help patients feel informed and confident,
              whether they are booking a routine test or seeking a more focused health assessment.
              Our centre aims to make healthcare feel less stressful, easier to understand and more
              responsive to real patient needs.
            </p>
            <ul className="feature-list">
              {highlights.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div className="info-grid compact-grid" variants={fadeUp}>
          {values.map(({ title, text }, index) => (
            <motion.article
              key={title}
              className="info-card"
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
            >
              <div className="icon-box">
                {title === 'Accuracy First' ? <ShieldCheck size={22} /> : title === 'Patient Comfort' ? <Stethoscope size={22} /> : <HeartPulse size={22} />}
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="story-panel" variants={fadeUp}>
          <div className="story-copy">
            <span className="section-tag">Our mission</span>
            <h2>Better healthcare starts with clearer information.</h2>
            <p>
              We blend modern diagnostic thinking with compassionate care to help the community make
              smarter and earlier health decisions. Our centre is designed to be accessible, thoughtful
              and focused on long-term wellbeing. Through clear communication and practical support,
              we aim to make testing feel easier, more transparent and less overwhelming.
            </p>
          </div>
          <div className="story-image">
            <img
              src="/images/WhatsApp%20Image%202026-08-08%20at%2012.19.55%20PM%20(1).jpeg"
              alt="Medical professional supporting patient care"
            />
          </div>
        </motion.div>

        <div className="about-extended-grid">
          <div className="page-box">
            <span className="section-tag">Our philosophy</span>
            <h2>Why patients trust us</h2>
            <ul className="feature-list">
              {servicePhilosophy.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="page-box">
            <span className="section-tag">Community focus</span>
            <h2>Support for everyday health needs</h2>
            <ul className="feature-list">
              {communityCare.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
