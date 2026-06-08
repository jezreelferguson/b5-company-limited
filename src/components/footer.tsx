import React from "react";
import COLOR from "../../constants/color";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  PaintBucket,
  ArrowRight,
} from "lucide-react";

function Footer() {
  return (
    <footer
      className="text-light pt-5 pb-3"
      style={{ backgroundColor: COLOR.SECONDARY }}
    >
      <div className="container">

        <div className="row g-4">

          {/* Company Info */}
          <div className="col-lg-4">
            <h4 className="fw-bold mb-3">
              B5 Painting Company Limited
            </h4>

            <p className="text-light-emphasis">
              Delivering professional painting and finishing services for
              residential, commercial, and industrial properties with
              quality, precision, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 col-lg-2">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              {[
                "Home",
                "About",
                "Services",
                "Projects",
                "Contact",
              ].map((item, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-decoration-none text-light d-flex align-items-center gap-2"
                  >
                    <ArrowRight size={14} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-4 col-lg-3">
            <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
              <PaintBucket size={18} /> Our Services
            </h5>

            <ul className="list-unstyled text-light-emphasis">
              <li>House Painting</li>
              <li>Room Painting</li>
              <li>Roof Painting</li>
              <li>Component Painting</li>
              <li>Spray Painting</li>
              <li>Wall Skimming</li>
              <li>Graffiato Finishing</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-lg-3">
            <h5 className="fw-bold mb-3">Contact Us</h5>

            <p className="mb-2 d-flex align-items-center gap-2">
              <MapPin size={16} />
              Kumasi, Ahenema Kokoben
            </p>

            <p className="mb-2 d-flex align-items-center gap-2">
              <Phone size={16} />
              +233 592132002
            </p>

            <p className="mb-2 d-flex align-items-center gap-2">
              <Mail size={16} />
              b5companylimited1@gmail.com
            </p>

            <p className="d-flex align-items-center gap-2">
              <Clock size={16} />
              Mon - Sat: 8:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 opacity-25" />

        {/* Bottom */}
        <div className="text-center small text-light-emphasis">
          © {new Date().getFullYear()} B5 Painting Company Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;