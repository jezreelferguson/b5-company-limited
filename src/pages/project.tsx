// import React from "react";
import COLOR from "../../constants/color";
import { MapPin, Eye, ArrowRight } from "lucide-react";
import '../assets/project.css'
function Project() {
  const projects = [
    {
      title: "Modern Residential Home",
      location: "Accra, Ghana",
      image:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200",
      category: "House Painting",
    },
    {
      title: "Corporate Office Complex",
      location: "Tema, Ghana",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
      category: "Commercial Painting",
    },
    {
      title: "Luxury Villa Renovation",
      location: "East Legon",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
      category: "Interior Painting",
    },
  ];

  return (
    <section className="py-5 bg-light" id="projects">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <span
            className="badge px-3 py-2 mb-3"
            style={{ backgroundColor: COLOR.SECONDARY, color: "#fff" }}
          >
            Our Portfolio
          </span>

          <h2 className="display-5 fw-bold">Recent Projects</h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Explore some of our completed painting and finishing projects.
            Every project reflects our commitment to quality, precision, and
            customer satisfaction.
          </p>
        </div>

        {/* Grid */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">

              <div className="card border-0 shadow-sm h-100 project-card overflow-hidden">

                {/* Image */}
                <div className="position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                  />

                  {/* Hover overlay */}
                  <div className="overlay d-flex align-items-center justify-content-center">
                    <button className="btn btn-light d-flex align-items-center gap-2">
                      <Eye size={16} />
                      Preview
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="card-body">
                  <span
                    className="badge px-3 py-2 mb-2"
                    style={{
                      backgroundColor: COLOR.SECONDARY,
                      color: "#fff",
                    }}
                  >
                    {project.category}
                  </span>

                  <h5 className="fw-bold">{project.title}</h5>

                  <p className="text-muted mb-3 d-flex align-items-center gap-2">
                    <MapPin size={16} />
                    {project.location}
                  </p>

                  <button
                    className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                    style={{
                      borderColor: COLOR.SECONDARY,
                      color: COLOR.SECONDARY,
                    }}
                  >
                    View Project
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <button
            className="btn btn-lg px-5 text-white d-flex align-items-center gap-2 mx-auto"
            style={{
              backgroundColor: COLOR.SECONDARY,
              borderColor: COLOR.SECONDARY,
            }}
          >
            View All Projects
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Project;