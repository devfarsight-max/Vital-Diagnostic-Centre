import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What diagnostic tests are available?',
    answer:
      'Vital Diagnostic Centre provides a range of pathology and diagnostic tests including blood tests, biochemistry, hematology, hormonal tests, HbA1c, lipid profile, thyroid/TSH, LFT and KFT.',
  },
  {
    question: 'Can I book a test online?',
    answer:
      'You can submit a test request through the website. Our team can then contact you for confirmation.',
  },
  {
    question: 'Are X-Ray and Ultrasound services currently available?',
    answer:
      'These services are planned for future expansion and should be treated as coming soon until officially available.',
  },
  {
    question: 'How will I receive my report?',
    answer:
      'Reports will be provided according to the centre\'s applicable reporting process.',
  },
  {
    question: 'Are diagnostic tests affordable?',
    answer:
      'Vital Diagnostic Centre aims to provide reliable diagnostic services at reasonable and affordable prices.',
  },
]

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="page-shell section">
      <div className="container faq-wrap">
        <div className="section-heading faq-heading">
          <span className="section-tag">FAQ</span>
          <h1>Frequently Asked Questions</h1>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <article key={faq.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={18} />
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
