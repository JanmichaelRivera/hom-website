export default function Card({
  title,
  children,
  centered = false,
}) {
  return (
    <div
      className={`card ${centered ? "card-center" : ""}`}
    >
      {title && <h3>{title}</h3>}

      {children}
    </div>
  );
}