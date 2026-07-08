import { HOM } from "../../content/foundation";

export default function Pillars() {
  return (
    <section className="pillars">
      <div className="container">

        <p className="section-eyebrow">
          OUR APPROACH
        </p>

        <h2 className="section-title">
          The Five Strategic Pillars
        </h2>

        <p className="section-description">
          Everything HOM does is built around five pillars that guide our
          mission and create meaningful opportunities for students.
        </p>

        <div className="pillar-grid">
          {HOM.pillars.map((pillar) => (
            <div key={pillar.title} className="pillar-card">

              <h3>{pillar.title}</h3>

              <p>{pillar.purpose}</p>

              <span>{pillar.impact}</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}