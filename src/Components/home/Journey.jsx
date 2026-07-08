export default function Journey() {
  const steps = [
    "Student",
    "Mentorship",
    "Opportunity",
    "Leadership",
    "Healthcare Career",
    "Gives Back"
  ];

  return (
    <section className="journey">
      <div className="container">

        <p className="section-eyebrow">
          THE HOM JOURNEY
        </p>

        <h2 className="section-title">
          One Opportunity Can Change a Life
        </h2>

        <div className="journey-grid">
          {steps.map((step, index) => (
            <div key={index} className="journey-step">
              <div className="journey-circle">
                {index + 1}
              </div>

              <h3>{step}</h3>

              {index !== steps.length - 1 && (
                <div className="journey-line"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}