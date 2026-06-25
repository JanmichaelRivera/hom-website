export default function Button({
  children,
  href,
  variant = "primary",
  target,
}) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
}