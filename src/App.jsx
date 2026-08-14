import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import {
  AnimatePresence,
  MotionConfig,
  animate,
  inView,
  motion,
  useReducedMotion,
} from "framer-motion";
import "./App.css";
import "./Search.css";
import "./Brand.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TestsPage from "./pages/TestsPage";
import ContactPage from "./pages/ContactPage";
import {
  AboutExtra,
  ContactExtra,
  HomeExtra,
  ProgramShowcase,
  ServicesExtra,
} from "./components/PageExtras";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Tests", "/tests"],
  ["Contact", "/contact"],
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

const revealSelector = [
  ".page-hero .container",
  ".section-head",
  ".split > *",
  ".cards > *",
  ".steps > *",
  ".trust-grid > *",
  ".services-list > *",
  ".illustrated-programs > *",
  ".values-grid > *",
  ".detail-list > *",
  ".contact-layout > *",
  ".search-panel",
  ".result-row",
  ".empty-state",
  ".cta-band",
].join(", ");

function ScrollReveals({ children }) {
  const root = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !root.current) return undefined;

    const elements = [...root.current.querySelectorAll(revealSelector)];
    const cleanups = elements.map((element, index) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(24px)";

      return inView(
        element,
        () => {
          animate(
            element,
            { opacity: 1, transform: "translateY(0px)" },
            {
              duration: 0.65,
              delay: Math.min((index % 4) * 0.055, 0.16),
              ease: [0.22, 1, 0.36, 1],
            },
          );
        },
        { amount: 0.14, margin: "0px 0px -5% 0px", once: true },
      );
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [reduceMotion]);

  return <div ref={root}>{children}</div>;
}

export default function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-shell">
        <ScrollToTop />
        <div className="utility-bar">
          <div className="container utility-inner">
            <span>Reliable pathology. Clear answers.</span>
            <span className="utility-right">
              <span>Mon–Sat · 7:00 AM–7:00 PM</span>
              <a href="tel:+919525119096">
                <Phone size={13} /> +91 95251 19096
              </a>
            </span>
          </div>
        </div>
        <header className="header">
          <div className="container nav-wrap">
            <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
              <img
                className="brand-logo"
                src="/vital-logo.png"
                alt="Vital Diagnostic Centre logo"
              />
              <span>
                <strong>Vital</strong>
                <small>Diagnostic Centre</small>
              </span>
            </NavLink>
            <nav className="nav-links" aria-label="Main navigation">
              {navItems.map(([label, to]) => (
                <NavLink key={to} to={to}>
                  {label}
                </NavLink>
              ))}
            </nav>
            <div className="nav-actions">
              <NavLink className="button button-dark nav-cta" to="/contact">
                Book a test <ArrowUpRight size={17} />
              </NavLink>
              <button
                className="menu-button"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          <AnimatePresence initial={false}>
            {open && (
              <motion.nav
                className="mobile-nav open"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {navItems.map(([label, to], index) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 }}
                  >
                    <NavLink to={to} onClick={() => setOpen(false)}>
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 }}
                >
                  <NavLink
                    className="button button-lime"
                    to="/contact"
                    onClick={() => setOpen(false)}
                  >
                    Book a test
                  </NavLink>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>
        <main>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <ScrollReveals>
                <Routes location={location}>
                  <Route
                    path="/"
                    element={
                      <>
                        <HomePage />
                        <ProgramShowcase />
                        <HomeExtra />
                      </>
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <>
                        <AboutPage />
                        <AboutExtra />
                      </>
                    }
                  />
                  <Route
                    path="/services"
                    element={
                      <>
                        <ServicesPage />
                        <ServicesExtra />
                      </>
                    }
                  />
                  <Route path="/tests" element={<TestsPage />} />
                  <Route
                    path="/contact"
                    element={
                      <>
                        <ContactPage />
                        <ContactExtra />
                      </>
                    }
                  />
                  <Route
                    path="*"
                    element={
                      <>
                        <HomePage />
                        <ProgramShowcase />
                        <HomeExtra />
                      </>
                    }
                  />
                </Routes>
              </ScrollReveals>
            </motion.div>
          </AnimatePresence>
        </main>
        <footer className="footer">
          <div className="container footer-top">
            <div>
              <NavLink to="/" className="brand footer-logo">
                <span className="footer-logo-box">
                  <img className="brand-logo" src="/vital-logo.png" alt="" />
                </span>
                <span>
                  <strong>Vital</strong>
                  <small>Diagnostic Centre</small>
                </span>
              </NavLink>
              <p>Thoughtful diagnostics for healthier everyday decisions.</p>
            </div>
            <div>
              <span className="footer-label">Explore</span>
              {navItems.slice(1).map(([label, to]) => (
                <NavLink key={to} to={to}>
                  {label}
                </NavLink>
              ))}
            </div>
            <div>
              <span className="footer-label">Popular tests</span>
              <NavLink to="/tests">CBC / Blood Test</NavLink>
              <NavLink to="/tests">Thyroid / TSH</NavLink>
              <NavLink to="/tests">Lipid Profile</NavLink>
              <NavLink to="/tests">HbA1c</NavLink>
            </div>
            <div>
              <span className="footer-label">Visit us</span>
              <p>
                S/O Damodar Sah, Narahia, Ward-06,
                  Narahia, Madhubani,
                  Bihar – 847108
              </p>
              <a href="mailto:hukumdevkumar9525@gmail.com">
                hukumdevkumar9525@gmail.com
              </a>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© 2026 Vital Diagnostic Centre</span>
            <span>Care you can count on.</span>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
