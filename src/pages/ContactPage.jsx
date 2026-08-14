import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Book & contact</span>
          <h1>Let’s make your next test simple.</h1>
          <p className="lead">
            Visit our centre or contact our team for appointment and test
            preparation guidance.
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
                <span>+91 9525119096</span>
              </div>
            </div>
            <div className="contact-detail">
              <Mail size={20} />
              <div>
                <strong>Email</strong>
                <span>hukumdevkumar9525@gmail.com</span>
              </div>
            </div>
            <div className="contact-detail">
              <MapPin size={26} />
              <div>
                <strong>Address</strong>
                <span>S/O Damodar Sah, Narahia, Ward-06,
                  Narahia, Madhubani,
                  Bihar – 847108</span>
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

          <section className="map-panel" aria-labelledby="location-heading">
            <div className="map-panel-heading">
              <span className="eyebrow">Our location</span>
              <h2 id="location-heading">Find us on the map</h2>
              <p>Plan your visit and get directions to Vital Diagnostic Centre.</p>
            </div>
            <iframe
              title="Vital Diagnostic Centre location"
              src="https://www.google.com/maps?q=123+Health+Avenue,+Your+City&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </section>
        </div>
      </section>
    </>
  );
}
