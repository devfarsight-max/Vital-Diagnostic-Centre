import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import './Search.css'
import './Brand.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import TestsPage from './pages/TestsPage'
import ContactPage from './pages/ContactPage'
import { AboutExtra, ContactExtra, HomeExtra, ProgramShowcase, ServicesExtra } from './components/PageExtras'

const navItems = [['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Tests', '/tests'], ['Contact', '/contact']]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  const [open, setOpen] = useState(false)
  return <div className="site-shell">
    <ScrollToTop />
    <div className="utility-bar">
      <div className="container utility-inner">
        <span>Reliable pathology. Clear answers.</span>
        <span className="utility-right"><span>Mon–Sat · 7:00 AM–7:00 PM</span><a href="tel:+910000000000"><Phone size={13}/> +91 00000 00000</a></span>
      </div>
    </div>
    <header className="header">
      <div className="container nav-wrap">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img className="brand-logo" src="/vital-logo.png" alt="Vital Diagnostic Centre logo"/>
          <span><strong>Vital</strong><small>Diagnostic Centre</small></span>
        </NavLink>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map(([label, to]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        </nav>
        <div className="nav-actions">
          <NavLink className="button button-dark nav-cta" to="/contact">Book a test <ArrowUpRight size={17}/></NavLink>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
        </div>
      </div>
      <nav className={`mobile-nav ${open ? 'open' : ''}`}>
        {navItems.map(([label, to]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
        <NavLink className="button button-lime" to="/contact" onClick={() => setOpen(false)}>Book a test</NavLink>
      </nav>
    </header>
    <main><Routes>
      <Route path="/" element={<><HomePage/><ProgramShowcase/><HomeExtra/></>}/><Route path="/about" element={<><AboutPage/><AboutExtra/></>}/>
      <Route path="/services" element={<><ServicesPage/><ServicesExtra/></>}/><Route path="/tests" element={<TestsPage/>}/>
      <Route path="/contact" element={<><ContactPage/><ContactExtra/></>}/><Route path="*" element={<><HomePage/><ProgramShowcase/><HomeExtra/></>}/>
    </Routes></main>
    <footer className="footer">
      <div className="container footer-top">
        <div><NavLink to="/" className="brand footer-logo"><span className="footer-logo-box"><img className="brand-logo" src="/vital-logo.png" alt=""/></span><span><strong>Vital</strong><small>Diagnostic Centre</small></span></NavLink><p>Thoughtful diagnostics for healthier everyday decisions.</p></div>
        <div><span className="footer-label">Explore</span>{navItems.slice(1).map(([label,to]) => <NavLink key={to} to={to}>{label}</NavLink>)}</div>
        <div><span className="footer-label">Popular tests</span><NavLink to="/tests">CBC / Blood Test</NavLink><NavLink to="/tests">Thyroid / TSH</NavLink><NavLink to="/tests">Lipid Profile</NavLink><NavLink to="/tests">HbA1c</NavLink></div>
        <div><span className="footer-label">Visit us</span><p>123 Health Avenue<br/>Your City, India</p><a href="mailto:care@vitaldiagnosticcentre.com">care@vitaldiagnosticcentre.com</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Vital Diagnostic Centre</span><span>Care you can count on.</span></div>
    </footer>
  </div>
}
