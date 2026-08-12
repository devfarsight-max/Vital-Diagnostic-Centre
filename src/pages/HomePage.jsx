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
    text: 'Reliable diagnostic testing with a patient-first approach.',
  },
  {
    icon: Clock3,
    title: 'Timely Reports',
    text: 'Focus on providing reports within the applicable timeframe.',
  },
  {
    icon: Activity,
    title: 'Affordable Care',
    text: 'Diagnostic services designed to remain accessible and reasonably priced.',
  },
  {
    icon: Stethoscope,
    title: 'Patient Focused',
    text: 'A simple, comfortable and supportive patient experience.',
  },
]

const services = [
  {
    icon: Droplets,
    title: 'Blood Tests',
    text: 'Routine blood investigations for monitoring important health parameters.',
  },
  {
    icon: FlaskConical,
    title: 'Biochemistry',
    text: 'Biochemical investigations for evaluating important body functions.',
  },
  {
    icon: HeartPulse,
    title: 'Hematology',
    text: 'Testing related to blood cells and blood-related parameters.',
  },
  {
    icon: Stethoscope,
    title: 'Hormonal Tests',
    text: 'Testing to evaluate important hormonal parameters.',
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
    text: 'Dependable diagnostic testing with a focus on quality and accuracy.',
  },
  {
    icon: Clock3,
    title: 'Timely Reports',
    text: 'We focus on making reports available within the applicable reporting timeframe.',
  },
  {
    icon: Activity,
    title: 'Affordable Pricing',
    text: 'Quality diagnostic services at reasonable prices.',
  },
  {
    icon: TestTube,
    title: 'Wide Range of Tests',
    text: 'Multiple pathology and diagnostic investigations under one roof.',
  },
  {
    icon: Stethoscope,
    title: 'Patient-Focused Care',
    text: 'A simple and comfortable experience for patients.',
  },
  {
    icon: Microscope,
    title: 'Future-Ready Centre',
    text: 'Building toward modern diagnostic and imaging capabilities.',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">Trusted Diagnostic &amp; Pathology Care</span>
            <h1>Accurate Diagnostics. Trusted Care. Better Health.</h1>
            <p className="lead">
              Reliable and affordable diagnostic and pathology testing services designed around your
              health and convenience.
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
              <span>Call Us</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Modern healthcare laboratory">
            <div className="image-panel">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
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
      </section>

      <section className="section trust-section">
        <div className="container trust-grid">
          {trustHighlights.map(({ icon: Icon, title, text }) => (
            <article key={title} className="info-card">
              <div className="icon-box">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895973?auto=format&fit=crop&w=900&q=80"
              alt="Professional medical laboratory with diagnostic equipment"
            />
          </div>
          <div className="about-content">
            <span className="section-tag">About Us</span>
            <h2>Your Health Deserves Accurate Answers</h2>
            <p>
              Vital Diagnostic Centre is focused on providing reliable, affordable and accessible
              diagnostic and pathology testing services to the local community. Our goal is to make
              essential diagnostic services easier to access while focusing on accuracy, timely
              reporting and patient-friendly service.
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
      </section>

      <section className="section why-us-section">
        <div className="container">
          <div className="section-heading center-heading">
            <span className="section-tag">Why Choose Us</span>
            <h2>Why Choose Vital Diagnostic Centre?</h2>
          </div>
          <div className="feature-grid">
            {whyChooseUs.map(({ icon: Icon, title, text }) => (
              <article key={title} className="feature-card">
                <div className="icon-box feature-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-section">
        <div className="container">
          <div className="section-heading center-heading">
            <span className="section-tag">Our Services</span>
            <h2>Our Diagnostic Services</h2>
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
                <a href="/services" className="inline-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tests-section">
        <div className="container">
          <div className="section-heading center-heading">
            <span className="section-tag">Popular Tests</span>
            <h2>Popular Diagnostic Tests</h2>
          </div>
          <div className="test-grid">
            {popularTests.map((item) => (
              <article key={item} className="test-card">
                <h3>{item}</h3>
                <p>Reliable and patient-friendly diagnostic support for everyday health needs.</p>
                <a href="/contact" className="inline-link">
                  Book Test <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
