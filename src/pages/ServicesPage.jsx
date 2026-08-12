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
  { icon: Droplets, title: 'Blood Tests', text: 'Routine blood investigations for monitoring important health parameters.' },
  { icon: FlaskConical, title: 'Biochemistry', text: 'Biochemical investigations for evaluating important body functions.' },
  { icon: HeartPulse, title: 'Hematology', text: 'Testing related to blood cells and blood-related parameters.' },
  { icon: Stethoscope, title: 'Hormonal Tests', text: 'Testing to evaluate important hormonal parameters.' },
  { icon: Activity, title: 'HbA1c', text: 'A commonly used test for assessing average blood glucose levels over time.' },
  { icon: TestTube, title: 'Lipid Profile', text: 'Testing of important cholesterol and lipid parameters.' },
  { icon: Microscope, title: 'Thyroid / TSH', text: 'Testing to evaluate thyroid-related parameters.' },
  { icon: HeartPulse, title: 'LFT', text: 'Liver Function Tests for evaluating important liver-related parameters.' },
  { icon: ShieldCheck, title: 'KFT', text: 'Kidney Function Tests for evaluating important kidney-related parameters.' },
]

const futureServices = [
  { title: 'X-Ray', badge: 'Coming Soon' },
  { title: 'Ultrasound', badge: 'Coming Soon' },
  { title: 'Advanced Imaging', badge: 'Coming Soon' },
]

export default function ServicesPage() {
  return (
    <div className="page-shell section">
      <div className="container">
        <div className="page-header center-heading">
          <span className="section-tag">Services</span>
          <h1>Our Diagnostic Services</h1>
          <p>Comprehensive pathology and diagnostic testing for everyday healthcare needs.</p>
        </div>

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

        <div className="future-section mt-large">
          <div className="page-header center-heading future-heading">
            <span className="section-tag">Future Expansion</span>
            <h2>Expanding Our Diagnostic Capabilities</h2>
            <p>
              Vital Diagnostic Centre plans to expand its services with modern imaging and
              diagnostic facilities to make more healthcare services accessible under one roof.
            </p>
          </div>

          <div className="future-grid">
            {futureServices.map(({ title, badge }) => (
              <article key={title} className="future-card">
                <span className="status-badge">{badge}</span>
                <h3>{title}</h3>
                <p>Planned for future expansion to support more accessible and modern diagnostic care.</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
