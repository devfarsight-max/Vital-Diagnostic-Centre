import { useState } from "react";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const initial = {
  name: "",
  phone: "",
  email: "",
  test: "",
  date: "",
  message: "",
};
export default function ContactPage() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSent(false);
  };
  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\+?[\d\s-]{7,15}$/.test(form.phone))
      next.phone = "Enter a valid phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email.";
    if (!form.test) next.test = "Please select a test.";
    setErrors(next);
    if (!Object.keys(next).length) {
      setSent(true);
      setForm(initial);
    }
  };
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Book & contact</span>
          <h1>Let’s make your next test simple.</h1>
          <p className="lead">
            Share a few details and our team will contact you to confirm the
            appointment and preparation instructions.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <h2>Visit Vital</h2>
            <p>
              Questions about a test? Call or visit us and our team will help.
            </p>
            <div className="contact-detail">
              <Phone size={20} />
              <div>
                <strong>Phone & WhatsApp</strong>
                <span>+91 00000 00000</span>
              </div>
            </div>
            <div className="contact-detail">
              <Mail size={20} />
              <div>
                <strong>Email</strong>
                <span>care@vitaldiagnosticcentre.com</span>
              </div>
            </div>
            <div className="contact-detail">
              <MapPin size={20} />
              <div>
                <strong>Address</strong>
                <span>123 Health Avenue, Your City</span>
              </div>
            </div>
            <div className="contact-detail">
              <Clock3 size={20} />
              <div>
                <strong>Opening hours</strong>
                <span>Monday–Saturday · 7:00 AM–7:00 PM</span>
              </div>
            </div>
          </aside>
          <form className="form-panel" onSubmit={submit} noValidate>
            <h2>Request an appointment</h2>
            <p>We’ll get back to you to confirm availability.</p>
            <div className="form-grid">
              <label className="field">
                <span>Full name *</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={change}
                  placeholder="Your name"
                />
                {errors.name && <small>{errors.name}</small>}
              </label>
              <label className="field">
                <span>Phone number *</span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={change}
                  placeholder="+91"
                />
                {errors.phone && <small>{errors.phone}</small>}
              </label>
              <label className="field">
                <span>Email (optional)</span>
                <input
                  name="email"
                  value={form.email}
                  onChange={change}
                  placeholder="you@example.com"
                />
                {errors.email && <small>{errors.email}</small>}
              </label>
              <label className="field">
                <span>Test *</span>
                <select name="test" value={form.test} onChange={change}>
                  <option value="">Choose a test</option>
                  <option>CBC / Blood Test</option>
                  <option>HbA1c</option>
                  <option>Lipid Profile</option>
                  <option>Thyroid / TSH</option>
                  <option>LFT</option>
                  <option>KFT</option>
                  <option>Other / Not sure</option>
                </select>
                {errors.test && <small>{errors.test}</small>}
              </label>
              <label className="field">
                <span>Preferred date</span>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={change}
                />
              </label>
              <label className="field full">
                <span>Anything we should know?</span>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={change}
                  placeholder="Prescription details, preferred time or questions"
                />
              </label>
            </div>
            <button className="button button-dark" type="submit">
              Send appointment request
            </button>
            {sent && (
              <p className="success" role="status">
                Thank you. Your request has been received and our team will
                contact you shortly.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
