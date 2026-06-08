import { useState } from "react";
import COLOR from "../../constants/color";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  PhoneCall,
  Send,
  PaintBucket,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge  px-3 py-2 mb-3" style={{ backgroundColor: COLOR.SECONDARY, color: "#fff" }}>
            Get In Touch
          </span>

          <h2 className="display-5 fw-bold">
            Request For Our Services
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Tell us about your project and our team will get back to you
            with a free consultation and quotation.
          </p>
        </div>

        <div className="row g-4">

          {/* CONTACT INFO */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">

                <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <PhoneCall size={20} /> Contact Information
                </h4>

                <div className="mb-4">
                  <h6 className="fw-bold d-flex align-items-center gap-2">
                    <MapPin size={18} color={COLOR.PRIMARY} /> Address
                  </h6>
                  <p className="text-muted mb-0">
                    Kumasi, Ahenema Kokoben
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold d-flex align-items-center gap-2">
                    <Phone size={18} color={COLOR.PRIMARY} /> Phone
                  </h6>
                  <a
                    href="tel:+233592132002"
                    className="text-muted text-decoration-none"
                  >
                    +233 592132002
                  </a>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold d-flex align-items-center gap-2">
                    <Mail size={18} color={COLOR.PRIMARY} /> Email
                  </h6>
                  <a
                    href="mailto:b5companylimited1@gmail.com"
                    className="text-muted text-decoration-none"
                  >
                    b5companylimited1@gmail.com
                  </a>
                </div>

                <div>
                  <h6 className="fw-bold d-flex align-items-center gap-2">
                    <Clock size={18}  color={COLOR.PRIMARY}/> Working Hours
                  </h6>
                  <p className="text-muted mb-0">
                    Monday - Saturday <br />
                    8:00 AM - 6:00 PM
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-5">

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label d-flex align-items-center gap-2">
                        <User size={16} /> Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label d-flex align-items-center gap-2">
                        <Phone size={16} /> Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="+233 XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label d-flex align-items-center gap-2">
                        <Mail size={16} /> Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label d-flex align-items-center gap-2">
                        <PaintBucket size={16} /> Service Needed
                      </label>

                      <select
                        name="service"
                        className="form-select"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a Service</option>
                        <option>House Painting</option>
                        <option>Room Painting</option>
                        <option>Roof Painting</option>
                        <option>Component Painting</option>
                        <option>Spray Painting</option>
                        <option>Wall Skimming</option>
                        <option>Graffiato Finishing</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        className="form-control"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-lg w-100 text-white d-flex align-items-center justify-content-center gap-2"
                        style={{
                          backgroundColor: COLOR.SECONDARY,
                          borderColor: COLOR.SECONDARY,
                        }}
                      >
                        <Send size={18} />
                        Request For Our Services
                      </button>
                    </div>

                  </div>
                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;