// import React from "react";
import {
  House,
  PaintBucket,
  Brush,
  Building,
  Droplets,
  Sparkles,
} from "lucide-react";
import '../assets/styles/services.css'
import COLOR from "../../constants/color";

function Services() {
  const services = [
    {
      icon: <House size={40} />,
      title: "House Painting",
      description:
        "Complete interior and exterior house painting with durable, high-quality finishes.",
    },
    {
      icon: <PaintBucket size={40} />,
      title: "Room Painting",
      description:
        "Refresh your living spaces with clean, vibrant, and professionally applied colors.",
    },
    {
      icon: <Building size={40} />,
      title: "Roof Painting",
      description:
        "Protect and beautify your roof with weather-resistant coatings and finishes.",
    },
    {
      icon: <Brush size={40} />,
      title: "Component Painting",
      description:
        "Professional painting for gates, railings, doors, frames, and structural components.",
    },
    {
      icon: <Droplets size={40} />,
      title: "Spray Painting",
      description:
        "Smooth, even, and efficient spray painting for residential and commercial projects.",
    },
    {
      icon: <Sparkles size={40} />,
      title: "Wall Skimming & Graffiato",
      description:
        "Premium decorative finishes that add elegance, texture, and character to your walls.",
    },
  ];

  return (
    <section className="py-5 bg-light" id="services">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge px-3 py-2 mb-3" style={{ backgroundColor: COLOR.SECONDARY, color: "#fff" }}>
            What We Offer
          </span>

          <h2 className="display-5 fw-bold">
            Professional Painting Services
          </h2>

          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            At B5 Painting Company Limited, we deliver exceptional painting and
            finishing services that transform homes, offices, and commercial
            spaces into beautiful environments.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card h-100 border-0 shadow-sm service-card"
                style={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <div className="card-body p-4 text-center">
                  <div className="mb-3 d-flex align-items-center justify-content-center" style={{ color: COLOR.PRIMARY }}>
                    {service.icon}
                  </div>

                  <h4 className="fw-bold mb-3">
                    {service.title}
                  </h4>

                  <p className="text-muted">
                    {service.description}
                  </p>

                  {/* <button className="btn  mt-2" style={{ borderColor: COLOR.PRIMARY, color: COLOR.PRIMARY, backgroundColor: "transparent" }}>
                    Learn More
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <h4 className="fw-bold mb-3">
            Ready to Transform Your Space?
          </h4>

          <p className="text-muted mb-4">
            Contact us today for a free consultation and let our experts bring your vision to life with our professional painting services.
          </p>

          <button className="btn btn-lg px-5 text-white" style={{ backgroundColor: COLOR.SECONDARY, borderColor: COLOR.SECONDARY }}>
            Request a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;