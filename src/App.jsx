import { useEffect, useState } from 'react'
import { HeartPulse, Menu, X } from 'lucide-react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import TestsPage from './pages/TestsPage'
import ContactPage from './pages/ContactPage'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Tests', to: '/tests' },
  { label: 'Contact', to: '/contact' },
]

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <ScrollToTop />
      <div className="app-shell">
      <header className="topbar">
        <div className="container navbar">
          <NavLink to="/" className="brand" aria-label="Vital Diagnostic Centre home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">
              <HeartPulse size={18} />
            </span>
            <span className="brand-text">Vital Diagnostic Centre</span>
          </NavLink>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <NavLink to="/contact" className="btn btn-primary btn-nav">
              Book a Test
            </NavLink>
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} onClick={() => setMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-primary mobile-book" onClick={() => setMenuOpen(false)}>
            Book a Test
          </NavLink>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tests" element={<TestsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand footer-column">
            <div className="brand footer-brand-row">
              <span className="brand-mark">
                <HeartPulse size={18} />
              </span>
              <span className="brand-text">Vital Diagnostic Centre</span>
            </div>
            <p>Reliable diagnostics and compassionate care for everyday health decisions.</p>
            <a href="/contact" className="btn btn-primary btn-footer">
              Book a Test
            </a>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/tests">Tests</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Popular Tests</h3>
            <ul>
              <li>Blood Tests</li>
              <li>Biochemistry</li>
              <li>Hematology</li>
              <li>Hormonal Tests</li>
              <li>HbA1c</li>
              <li>Thyroid / TSH</li>
              <li>LFT</li>
              <li>KFT</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <ul className="footer-contact-list">
              <li><a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a></li>
              <li><a href="mailto:care@vitaldiagnosticcentre.com">care@vitaldiagnosticcentre.com</a></li>
              <li>123 Health Avenue, Your City</li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Vital Diagnostic Centre. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
