// import React from "react";
import COLOR from "../../constants/color";
function About() {
  return (
    <section className="py-5 bg-light" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Image */}
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200"
              alt="B5 Painting Team"
              className="img-fluid rounded-4 shadow"
            />
          </div>

          {/* Content */}
          <div className="col-lg-6">
            <span className="badge px-3 py-2 mb-3" style={{ backgroundColor: COLOR.SECONDARY, color: "#fff" }}>
              About Us
            </span>

            <h2 className="display-5 fw-bold mb-4">
              Bringing Excellence to Every Brush Stroke
            </h2>

            <p className="text-muted mb-4">
              B5 Painting Company Limited is a professional painting and
              finishing company dedicated to transforming residential,
              commercial, and industrial spaces. We combine skilled
              craftsmanship, premium materials, and attention to detail to
              deliver results that exceed expectations.
            </p>

            <p className="text-muted mb-4">
              From house painting and room renovations to roof coatings,
              spray painting, wall skimming, and decorative Graffiato
              finishes, we provide solutions tailored to each client's
              vision and needs.
            </p>

            {/* Stats */}
            <div className="row text-center mb-4">
              <div className="col-4">
                <h3 className="fw-bold" style={{ color: COLOR.PRIMARY }}>
                  100+
                </h3>
                <p className="text-muted small">Projects Completed</p>
              </div>

              <div className="col-4">
                <h3 className="fw-bold" style={{ color: COLOR.PRIMARY }}>
                  50+
                </h3>
                <p className="text-muted small">Happy Clients</p>
              </div>

              <div className="col-4">
                <h3 className="fw-bold" style={{ color: COLOR.PRIMARY }}>
                  5+
                </h3>
                <p className="text-muted small">Years Experience</p>
              </div>
            </div>

            <button className="btn btn-lg text-white" style={{ backgroundColor: COLOR.SECONDARY }}>
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;