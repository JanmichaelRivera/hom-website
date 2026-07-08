import "../../styles/why.css";
import { Microscope, Users, GraduationCap } from "lucide-react";
import { HOM } from "../../content/foundation";

export default function Why() {
  return (
    <section className="why">

      <div className="container why-container">

        <p className="section-eyebrow">
          WHY HOM EXISTS
        </p>

        <h2 className="why-title">
          Opportunity Should
          <br />
          Never Depend on Access
        </h2>

        <p className="why-description">
          Every year, talented Hispanic students begin pursuing careers in
          healthcare with the passion to serve—but without the mentorship,
          professional network, or guidance that often shapes opportunity.
        </p>

        <p className="why-description mission">
          {HOM.mission.statement}
        </p>

        <div className="why-grid">

          <div className="why-card">

            <div className="why-icon">
              <Users size={28} />
            </div>

            <h3>Mentorship</h3>

            <p>
              Connect with physicians, healthcare professionals,
              and mentors who help students navigate their path.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              <Microscope size={28} />
            </div>

            <h3>Research</h3>

            <p>
              Discover research, volunteering,
              shadowing and clinical opportunities that build experience.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              <GraduationCap size={28} />
            </div>

            <h3>Scholarships</h3>

            <p>
              Find scholarships, internships,
              and educational resources that make healthcare careers attainable.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}