import { Link } from "react-router-dom";
export default function About() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 20px",
        color: "#F7F3EC",
        fontFamily: "Arial"
      }}
    >
      <Link
  to="/"
  style={{
    textDecoration: "none",
    color: "#E07A5F",
    fontWeight: "bold",
    fontSize: "18px",
  }}
>
  ← Back to Home
</Link>
<h1 style={{ fontSize: "56px", color: "#0D1B2A" }}>
  About HOM
</h1>

<h2 style={{ color: "#E07A5F" }}>
  Hispanic Opportunities in Medicine
</h2>

      <p style={{ fontSize: "22px", lineHeight: "1.8" }}>
        Hispanic Opportunities in Medicine (HOM) exists to increase
        Hispanic representation throughout healthcare by connecting
        students with mentorship, resources, scholarships, clinical
        experiences, and professional development opportunities.
      </p>

      <h2>Our Vision</h2>

      <p>
        We envision a future where Hispanic students have equal access
        to the opportunities, networks, and guidance necessary to
        succeed in medicine and healthcare leadership.
      </p>

      <h2>Why HOM Matters</h2>

      <p>
        Representation matters. Hispanic communities remain
        underrepresented in many healthcare professions. HOM aims to
        help close that gap by creating pathways for future physicians,
        nurses, researchers, public health leaders, and healthcare
        professionals.
      </p>
    </div>
  );
}