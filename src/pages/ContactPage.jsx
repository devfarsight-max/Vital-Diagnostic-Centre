import { motion } from 'framer-motion'
import { useState } from 'react'
import { Clock3, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'

const contactDetails = [
  { icon: Phone, label: 'Phone', value: '[PHONE NUMBER]', href: 'tel:[PHONE NUMBER]' },
  { icon: Phone, label: 'WhatsApp', value: '[WHATSAPP NUMBER]', href: 'https://wa.me/[WHATSAPP NUMBER]' },
  { icon: Mail, label: 'Email', value: '[EMAIL ADDRESS]', href: 'mailto:[EMAIL ADDRESS]' },
  { icon: MapPin, label: 'Address', value: '[CENTRE ADDRESS]', href: '#contact' },
  { icon: Clock3, label: 'Opening Hours', value: '[OPENING HOURS]', href: '#contact' },
]

const initialFormState = {
  fullName: '',
  mobile: '',
  email: '',
  test: '',
  date: '',
  time: '',
  message: '',
}

const visitHighlights = [
  'Warm and helpful front-desk support',
  'Comfortable testing environment and guidance',
  'Clear communication around results and next steps',
]

const supportOptions = [
  'Appointments for routine blood tests and preventive screening',
  'Support for health monitoring and follow-up recommendations',
  'Guidance for first-time patients and family bookings',
]

const bookingSteps = [
  'Tell us which test or health concern you need help with.',
  'Share your preferred date and time for a smooth visit.',
  'Our team confirms the details and prepares the process for you.',
]

const faqItems = [
  {
    question: 'Do I need an appointment for every test?',
    answer: 'Appointments are recommended to help us plan the visit comfortably and keep the process efficient.',
  },
  {
    question: 'Can I ask for guidance before choosing a test?',
    answer: 'Yes. Our team can help you understand which tests are relevant to your health concerns and schedule.',
  },
  {
    question: 'Are the services suitable for family health checks?',
    answer: 'Yes. Many patients use our centre for routine family testing, monitoring and preventive care.',
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

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    if (successMessage) {
      setSuccessMessage('')
    }
  }

  const validateForm = () => {
    const nextErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your full name.'
    if (!formData.mobile.trim()) {
      nextErrors.mobile = 'Please enter your mobile number.'
    } else if (!/^\d{7,15}$/.test(formData.mobile.replace(/\s+/g, ''))) {
      nextErrors.mobile = 'Please enter a valid mobile number.'
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.test) nextErrors.test = 'Please select a test.'
    if (!formData.date) nextErrors.date = 'Please choose a preferred date.'
    if (!formData.time) nextErrors.time = 'Please choose a preferred time.'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSuccessMessage('')
      return
    }

    setErrors({})
    setSuccessMessage('Your test request has been received. Our team will contact you to confirm the appointment.')
    setFormData(initialFormState)
  }

  return (
    <motion.div
      className="page-shell section"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <div className="container contact-wrap">
        <motion.div className="contact-heading" variants={fadeUp}>
          <span className="section-tag">Contact</span>
          <h1>We&apos;re Here to Help</h1>
          <p>
            Speak with our team to book a check-up, discuss available tests or get support for your
            next healthcare decision. We aim to make every conversation helpful, clear and stress-free.
          </p>
        </motion.div>

        <motion.div className="contact-grid" variants={fadeUp}>
          <div className="contact-panel">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="contact-item"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact-icon">
                  <Icon size={18} />
                </span>
                <div>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              </a>
            ))}

            <div className="quick-actions">
              <a href="tel:[PHONE NUMBER]" className="btn btn-primary">Call Us</a>
              <a href="https://wa.me/[WHATSAPP NUMBER]" className="btn btn-secondary">WhatsApp</a>
              <a href="#contact" className="btn btn-secondary">Get Directions</a>
            </div>
          </div>

          <motion.div className="booking-form white-form" onSubmit={handleSubmit} variants={fadeUp}>
            <h2>Need a Diagnostic Test?</h2>
            <p className="booking-intro">Request your test today and our team can help you with the next steps.</p>

            <form className="booking-form-inner" noValidate>
              <div className="form-grid">
                <label>
                  <span>Full Name</span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFieldChange}
                    placeholder="Enter your full name"
                    aria-invalid={Boolean(errors.fullName)}
                  />
                  {errors.fullName && <small>{errors.fullName}</small>}
                </label>

                <label>
                  <span>Mobile Number</span>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleFieldChange}
                    placeholder="Enter your mobile number"
                    aria-invalid={Boolean(errors.mobile)}
                  />
                  {errors.mobile && <small>{errors.mobile}</small>}
                </label>

                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFieldChange}
                    placeholder="Enter your email address"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <small>{errors.email}</small>}
                </label>

                <label>
                  <span>Select Test</span>
                  <select name="test" value={formData.test} onChange={handleFieldChange} aria-invalid={Boolean(errors.test)}>
                    <option value="">Choose a test</option>
                    <option value="CBC / Blood Test">CBC / Blood Test</option>
                    <option value="HbA1c">HbA1c</option>
                    <option value="Lipid Profile">Lipid Profile</option>
                    <option value="Thyroid / TSH">Thyroid / TSH</option>
                    <option value="LFT">LFT</option>
                    <option value="KFT">KFT</option>
                    <option value="Biochemistry">Biochemistry</option>
                    <option value="Hormonal Tests">Hormonal Tests</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.test && <small>{errors.test}</small>}
                </label>

                <label>
                  <span>Preferred Date</span>
                  <input type="date" name="date" value={formData.date} onChange={handleFieldChange} aria-invalid={Boolean(errors.date)} />
                  {errors.date && <small>{errors.date}</small>}
                </label>

                <label>
                  <span>Preferred Time</span>
                  <input type="time" name="time" value={formData.time} onChange={handleFieldChange} aria-invalid={Boolean(errors.time)} />
                  {errors.time && <small>{errors.time}</small>}
                </label>
              </div>

              <label className="full-width">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleFieldChange}
                  placeholder="Add any notes or specific concerns"
                />
              </label>

              <button type="button" className="btn btn-primary submit-button" onClick={handleSubmit}>
                Request a Test
              </button>

              {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
          </motion.div>
        </motion.div>

        <motion.div className="contact-support-grid mt-large" variants={fadeUp}>
          <div className="page-box">
            <span className="section-tag">Support we offer</span>
            <h2>How we can help</h2>
            <ul className="feature-list">
              {supportOptions.map((item) => (
                <li key={item}>
                  <ShieldCheck size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="page-box">
            <span className="section-tag">Booking steps</span>
            <h2>Simple process</h2>
            <ol className="steps-list">
              {bookingSteps.map((step, index) => (
                <li key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        <motion.div className="story-panel contact-panel-extra" variants={fadeUp}>
          <div className="story-copy">
            <span className="section-tag">Visit experience</span>
            <h2>Comfortable care from the moment you arrive</h2>
            <ul className="feature-list compact-list">
              {visitHighlights.map((item) => (
                <li key={item}>
                  <ShieldCheck size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="story-image">
            <img
              src="/images/WhatsApp%20Image%202026-08-08%20at%2012.19.55%20PM.jpeg"
              alt="Modern healthcare clinic with a calm patient environment"
            />
          </div>
        </motion.div>

        <motion.div className="faq-stack mt-large" variants={fadeUp}>
          <div className="section-heading center-heading">
            <span className="section-tag">FAQ</span>
            <h2>Common questions from patients</h2>
          </div>
          <div className="faq-box-list">
            {faqItems.map(({ question, answer }, index) => (
              <motion.article
                key={question}
                className="faq-box-item"
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
              >
                <h3>{question}</h3>
                <p>{answer}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
