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
    color: "#0D1B2A",
    marginTop: "20px",
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

<h2 style={{ color: "#0D1B2A",
backgroundColor: "#F8F5F0", marginBottom: "20px" }}>
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
</p> <div
  style={{
    display: "flex",
    gap: "50px",
    alignItems: "center",
    marginTop: "80px",
    marginBottom: "80px",
    flexWrap: "wrap",
  }}
>
  <img
    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    alt="Healthcare students"
    style={{
      width: "500px",
      borderRadius: "24px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    }}
  />

  <div style={{ flex: 1, minWidth: "300px" }}>
    <h2
      style={{
        color: "#0D1B2A",
        fontSize: "40px",
        marginBottom: "20px",
      }}
    >
      Why I Started HOM
    </h2>

    <p
      style={{
        fontSize: "20px",
        lineHeight: "1.9",
        color: "#374151",
      }}
    >
      Growing up, I saw talented students with aspirations in healthcare
      but limited access to mentors, research opportunities, scholarships,
      and professional guidance. HOM was created to help bridge that gap
      and provide students with the support, resources, and network
      necessary to pursue careers in medicine and healthcare leadership.
    </p>

  </div>
<div
  style={{
    textAlign: "center",
    marginBottom: "60px",
  }}
>
  <p
    style={{
      color: "#E07A5F",
      letterSpacing: "3px",
      fontWeight: "bold",
      marginBottom: "10px",
    }}
  >
    OUR FOCUS
  </p>

  <h2
    style={{
      fontSize: "48px",
      color: "#0D1B2A",
      margin: 0,
    }}
  >
    Building Opportunity Through Community
  </h2>

  <p
    style={{
      maxWidth: "700px",
      margin: "20px auto",
      color: "#6B7280",
      fontSize: "20px",
      lineHeight: "1.8",
    }}
  >
    HOM connects students with the people, resources, and opportunities
    needed to pursue careers in healthcare and create meaningful impact.
  </p>
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginBottom: "100px",
  }}

<div
  style={{
    backgroundColor: "#0D1B2A",
    color: "white",
    width: "320px",
    minHeight: "220px",
    padding: "35px",
    borderRadius: "18px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  }}
>
  <h3>Mentorship</h3>
  <p>Connect students with healthcare professionals and role models.</p>
</div>

<div
  style={{
    backgroundColor: "#0D1B2A",
    color: "white",
    width: "320px",
minHeight: "220px",
    padding: "35px",
    borderRadius: "18px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  }}
>
  <h3>Opportunity</h3>
  <p>
    Share research, volunteer, scholarship, and leadership opportunities.
  </p>
</div>

<div
  style={{
    backgroundColor: "#0D1B2A",
    color: "white",
    width: "320px",
minHeight: "220px",
    padding: "35px",
    borderRadius: "18px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  }}
>
  <h3>Representation</h3>
  <p>
    Increase Hispanic representation throughout medicine and healthcare.
  </p>
</div>
</div>
</div>
    </div>
  );
}