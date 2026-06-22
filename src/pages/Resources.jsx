import { Link } from "react-router-dom";
<Link
  to="/"
  style={{
    textDecoration: "none",
    color: "#E07A5F",
    fontWeight: "bold",
  }}
>
  ← Back to Home
</Link>
export default function Resources() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Resources</h1>

      <ul>
        <li>Pre-Med Roadmaps</li>
        <li>Scholarships</li>
        <li>Research Opportunities</li>
        <li>Clinical Experience Guides</li>
      </ul>
    </div>
  );
}