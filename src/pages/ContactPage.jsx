import { useState } from 'react'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'

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
    <div className="page-shell section">
      <div className="container contact-wrap">
        <div className="contact-heading">
          <span className="section-tag">Contact</span>
          <h1>We&apos;re Here to Help</h1>
        </div>

        <div className="contact-grid">
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
              <a href="tel:[PHONE NUMBER]" className="btn btn-primary">
                Call Us
              </a>
              <a href="https://wa.me/[WHATSAPP NUMBER]" className="btn btn-secondary">
                WhatsApp
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get Directions
              </a>
            </div>
          </div>

          <div className="booking-form white-form" onSubmit={handleSubmit}>
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
          </div>
        </div>
      </div>
    </div>
  )
}
