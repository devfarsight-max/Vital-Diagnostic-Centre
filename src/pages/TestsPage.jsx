import { ArrowRight, CheckCircle2 } from 'lucide-react'

const popularTests = [
  { title: 'CBC / Blood Test', text: 'Routine blood investigation for general health assessment.' },
  { title: 'HbA1c', text: 'Average blood glucose monitoring over time.' },
  { title: 'Lipid Profile', text: 'Assess cholesterol and lipid levels.' },
  { title: 'Thyroid / TSH', text: 'Check thyroid function and hormone balance.' },
  { title: 'LFT', text: 'Evaluate liver-related health markers.' },
  { title: 'KFT', text: 'Assess kidney health and function markers.' },
  { title: 'Hormonal Tests', text: 'Support evaluation of endocrine function.' },
  { title: 'Biochemistry Tests', text: 'Assess vital body functions and metabolism.' },
]

export default function TestsPage() {
  return (
    <div className="page-shell section">
      <div className="container">
        <div className="page-header center-heading">
          <span className="section-tag">Tests</span>
          <h1>Popular Diagnostic Tests</h1>
          <p>Designed to support better health decisions with reliable, patient-friendly testing.</p>
        </div>

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

        <div className="page-box mt-large">
          <h2>What to expect</h2>
          <ul className="feature-list">
            <li>
              <CheckCircle2 size={18} />
              <span>Simple test selection and scheduling support</span>
            </li>
            <li>
              <CheckCircle2 size={18} />
              <span>Reliable collections and good patient guidance</span>
            </li>
            <li>
              <CheckCircle2 size={18} />
              <span>Timely reporting according to applicable processes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
