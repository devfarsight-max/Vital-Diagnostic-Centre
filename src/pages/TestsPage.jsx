import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'

const popularTests = [
  { title: 'CBC / Blood Test', text: 'Routine blood investigation for general health assessment and wellness screening.' },
  { title: 'HbA1c', text: 'Average blood glucose monitoring over time for long-term health awareness.' },
  { title: 'Lipid Profile', text: 'Assess cholesterol and lipid levels to support proactive heart health management.' },
  { title: 'Thyroid / TSH', text: 'Check thyroid function and hormone balance for ongoing monitoring and diagnosis.' },
  { title: 'LFT', text: 'Evaluate liver-related health markers and support clearer follow-up care.' },
  { title: 'KFT', text: 'Assess kidney health and function markers for timely clinical insight.' },
  { title: 'Hormonal Tests', text: 'Support evaluation of endocrine function and overall balance.' },
  { title: 'Biochemistry Tests', text: 'Assess vital body functions, metabolism and organ health markers.' },
]

const preparationTips = [
  'Bring a valid ID and any prior prescription or referral information if available.',
  'Follow any fasting or preparation guidelines provided when booking your test.',
  'Share any medications or ongoing health concerns with the centre before your visit.',
]

const testCategories = [
  {
    title: 'General health',
    list: ['CBC / Blood Test', 'Biochemistry', 'HbA1c'],
  },
  {
    title: 'Heart and metabolic health',
    list: ['Lipid Profile', 'LFT', 'KFT'],
  },
  {
    title: 'Hormonal and endocrine',
    list: ['Thyroid / TSH', 'Hormonal Tests'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export default function TestsPage() {
  return (
    <motion.div
      className="page-shell section"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <div className="container">
        <motion.div className="page-header center-heading" variants={fadeUp}>
          <span className="section-tag">Tests</span>
          <h1>Popular Diagnostic Tests</h1>
          <p>Designed to support better health decisions with reliable, patient-friendly testing.</p>
        </motion.div>

        <div className="test-grid">
          {popularTests.map(({ title, text }) => (
            <article key={title} className="test-card">
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="/contact" className="inline-link">
                Book Test <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

        <motion.div className="story-panel mt-large" variants={fadeUp}>
          <div className="story-copy">
            <span className="section-tag">What to expect</span>
            <h2>Clear guidance for your visit</h2>
            <ul className="feature-list compact-list">
              <li>
                <CheckCircle2 size={18} />
                <span>Simple test selection and scheduling support</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span>Reliable collections and practical patient guidance</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span>Timely reporting according to applicable processes</span>
              </li>
            </ul>
          </div>
          <div className="story-image">
            <img
              src="/images/WhatsApp%20Image%202026-08-08%20at%2012.19.55%20PM%20(1).jpeg"
              alt="Patient receiving diagnostic consultation"
            />
          </div>
        </motion.div>

        <motion.div className="mt-large info-grid" variants={fadeUp}>
          {testCategories.map(({ title, list }, index) => (
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
              <ul className="mini-list">
                {list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="page-box mt-large" variants={fadeUp}>
          <h2>Before your appointment</h2>
          <ul className="feature-list">
            {preparationTips.map((tip) => (
              <li key={tip}>
                <ShieldCheck size={18} />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}
