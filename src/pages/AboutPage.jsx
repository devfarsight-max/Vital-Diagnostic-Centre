import { CheckCircle2, Microscope, ShieldCheck, Stethoscope } from 'lucide-react'

const highlights = [
  'Reliable Testing',
  'Affordable Diagnostic Care',
  'Timely Reports',
  'Patient-Focused Service',
]

export default function AboutPage() {
  return (
    <div className="page-shell section">
      <div className="container page-block">
        <div className="page-header narrow-header">
          <span className="section-tag">About</span>
          <h1>Your Health Deserves Accurate Answers</h1>
          <p>
            Vital Diagnostic Centre is focused on providing reliable, affordable and accessible
            diagnostic and pathology testing services to the local community. Our goal is to make
            essential diagnostic services easier to access while focusing on accuracy, timely
            reporting and patient-friendly service.
          </p>
        </div>

        <div className="about-grid page-split">
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=80"
              alt="Modern medical diagnostics centre"
            />
          </div>

          <div className="about-content">
            <h2>Built around trust and patient care</h2>
            <p>
              We are creating a diagnostic experience that is simple, transparent and focused on
              patient comfort. Every step is designed to help patients feel supported while receiving
              reliable testing and clear follow-up guidance.
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
        </div>

        <div className="info-grid compact-grid">
          <article className="info-card">
            <div className="icon-box">
              <ShieldCheck size={22} />
            </div>
            <h3>Accuracy First</h3>
            <p>Careful testing and dependable reporting are central to our approach.</p>
          </article>
          <article className="info-card">
            <div className="icon-box">
              <Stethoscope size={22} />
            </div>
            <h3>Patient Support</h3>
            <p>We aim to make the experience supportive, comfortable and easy to understand.</p>
          </article>
          <article className="info-card">
            <div className="icon-box">
              <Microscope size={22} />
            </div>
            <h3>Modern Vision</h3>
            <p>We are building toward a more complete and future-ready diagnostic centre.</p>
          </article>
        </div>
      </div>
    </div>
  )
}
