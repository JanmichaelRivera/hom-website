import {
  Microscope,
  Stethoscope,
  GraduationCap,
  Users,
} from "lucide-react";

import logo from "../../assets/hom-logo.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">

        {/* LEFT COLUMN */}

        <div className="hero-left">

          <h1 className="hero-title">
            Creating Tomorrow's
            <br />
            Hispanic Healthcare
            <br />
            Leaders
          </h1>

          <p className="hero-description">
            Hispanic Opportunities in Medicine empowers Hispanic students
            through mentorship, research, scholarships, leadership
            development, and meaningful opportunities that strengthen
            representation across healthcare.
          </p>

          <div className="hero-buttons">

            <a
              href="https://forms.gle/36tvAVX6qR1hR2YBA"
              className="primary-btn"
            >
              Join HOM
            </a>

            <a
              href="/about"
              className="secondary-btn"
            >
              Learn More
            </a>

          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div className="hero-right">

          <div className="hero-network">

            <div className="floating-card research">
              <Microscope size={20} />
              <span>Research</span>
            </div>

            <div className="floating-card mentorship">
              <Stethoscope size={20} />
              <span>Mentorship</span>
            </div>

            <div className="hero-logo-card">

              <img
                src={logo}
                alt="Hispanic Opportunities in Medicine"
                className="hero-logo"
              />

            </div>

            <div className="floating-card scholarships">
              <GraduationCap size={20} />
              <span>Scholarships</span>
            </div>

            <div className="floating-card community">
              <Users size={20} />
              <span>Community</span>
            </div>

          </div>

          <p className="hero-caption">
            Building the Future of Hispanic Healthcare Leadership
          </p>

        </div>

      </div>
    </section>
  );
}