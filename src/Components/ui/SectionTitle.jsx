export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}) {
  return (
    <div
      className="section-heading"
      style={{
        textAlign: center ? "center" : "left",
      }}
    >
      {eyebrow && (
        <p className="section-subtitle">
          {eyebrow}
        </p>
      )}

      <h2 className="section-title">
        {title}
      </h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  );
}