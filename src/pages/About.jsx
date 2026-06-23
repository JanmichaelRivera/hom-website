import { Link } from "react-router-dom";
export default function About() {
  return (
    <div
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
    backgroundColor: "#F8F5F0",
    minHeight: "100vh",
    color: "#0D1B2A",
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
<h1
  style={{
    fontSize: "64px",
    color: "#F7F3EC",backgroundColor: "#F8F5F0",
minHeight: "100vh",
    marginBottom: "10px",
  }}
>
  About HOM
</h1>

<h2
  style={{
    color: "#E07A5F",
    fontSize: "28px",
    marginBottom: "30px",
  }}
>
  Hispanic Opportunities in Medicine
</h2>
<p
  style={{
    fontSize: "24px",
    color: "#B8BDC7",
    maxWidth: "800px",
    lineHeight: "1.7",
  }}
>
  Building a future where Hispanic students have equal access to
  mentorship, opportunity, and leadership in healthcare.
</p>

<hr
  style={{
    margin: "50px 0",
    border: "none",
    height: "1px",
    backgroundColor: "#2D3748",
  }}
/>

<h2 style={{ color: "#E07A5F", marginBottom: "20px" }}>
  Why HOM Exists
</h2>

<p
  style={{
    fontSize: "20px",
    lineHeight: "1.8",
    maxWidth: "900px",
  }}
>
  Hispanic Opportunities in Medicine was founded to help bridge the gap
  in healthcare representation by connecting students with mentorship,
  resources, scholarships, research opportunities, and professional
  development. Many aspiring healthcare professionals come from
  communities where these opportunities are difficult to access.
</p>

<p
  style={{
    fontSize: "20px",
    lineHeight: "1.8",
    maxWidth: "900px",
  }}
>
  HOM exists to create pathways toward success while building a
  supportive network of future physicians, nurses, researchers, public
  health leaders, and healthcare professionals.
</p>
    </div>
  );
}