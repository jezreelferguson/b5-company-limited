import React from "react";
import COLOR from "../../constants/color";
import logo from '/logo.jpeg'
function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
        <div className="container">
          <a
  className="navbar-brand d-flex align-items-center gap-2"
  href="#"
>
  <img
    src={logo}
    alt="B5 Painting Logo"
    className="rounded-circle"
    style={{
      width: "50px",
      height: "50px",
      objectFit: "cover",
    }}
  />

  <span
    className="fw-bold fs-4"
    style={{ color: COLOR.SECONDARY }}
  >
    B5 Painting Company Limited
  </span>
</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#header">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item ms-lg-3">
                <button className="btn btn-primary" style={{ backgroundColor: COLOR.PRIMARY, borderColor: COLOR.PRIMARY }}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container py-5">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-6">
            <span className="badge mb-3 fs-6" style={{ backgroundColor: COLOR.SECONDARY, color: "#fff" }}>
              Professional Painting Services
            </span>

            <h1
              className="display-2 fw-bold mb-4"
            style={{ color: COLOR.PRIMARY }}
            >
              Bringing Color & Life To Every Space
            </h1>

            <p className="lead text-muted mb-4">
              B5 Painting Company Limited delivers premium residential,
              commercial, and industrial painting services with exceptional
              craftsmanship and lasting quality.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-primary btn-lg" style={{ backgroundColor: COLOR.SECONDARY, borderColor: COLOR.SECONDARY }}>
                Get In Touch
              </button>

              <button className="btn btn-outline-secondary btn-lg" style={{ borderColor: COLOR.PRIMARY, color: COLOR.PRIMARY }}>
                View Our Work
              </button>
            </div>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <img
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200"
              alt="Painting Project"
              className="img-fluid rounded-4 shadow"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;