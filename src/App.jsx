import logo from "./assets/hom-logo.png";
import { Link } from "react-router-dom";
export default function App() {
  return (
<div
  style={{
    fontFamily: "Arial",
    padding: "40px",
    maxWidth: "900px",
    margin: "auto",
    backgroundColor: "#F8F5F0",
    minHeight: "100vh",
  }}
>
  <nav
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "40px",
  }}
>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#0D1B2A" }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{ textDecoration: "none", color: "#0D1B2A" }}
        >
          About
        </Link>

        <Link
          to="/resources"
          style={{ textDecoration: "none", color: "#0D1B2A" }}
        >
          Resources
        </Link>

        <Link
          to="/"
          style={{ textDecoration: "none", color: "#0D1B2A" }}
        >
          Programs
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#0D1B2A" }}
        >
          Join HOM
        </Link>
      </nav>
      <img
        src={logo}
        alt="HOM Logo"
        style={{
          width: "220px",
          display: "block",
          margin: "0 auto 20px auto"
        }}
      />
      <h1
        style={{
          fontSize: "72px",
          color: "#0D1B2A",
          textAlign: "center",
          lineHeight: "1.1",
          marginBottom: "20px",
        }}
      >
        Rooted in Heritage.
        <br />
        Driven by Purpose.
      </h1>

      <h2
        style={{
          color: "#E07A5F",
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "30px",
        }}
      >
        What is HOM?
      </h2>
      <p
        style={{
          fontSize: "22px",
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >

        Hispanic Opportunities in Medicine (HOM) is a student-led initiative dedicated to increasing Hispanic representation in healthcare. We connect aspiring healthcare professionals with mentorship, resources, scholarships, clinical experiences, and leadership opportunities.
      </p>
      <div
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          textAlign: "center",
        }}
      >
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
          marginBottom: "50px",
        }}
      >
        <button
          style={{
            backgroundColor: "#0D1B2A",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Our Mission
        </button>

        <button
          style={{
            backgroundColor: "#E07A5F",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Join HOM
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "50px",
          }}
>
<Link to="/resources" style={{ textDecoration: "none" }}>
        <div
          style={{
            backgroundColor: "#0D1B2A",
            color: "white",
            padding: "25px",
            width: "180px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <h3>Pre-Med Resources</h3>
          <p>Roadmaps, MCAT prep, GPA planning, and healthcare career guides.</p>
        </div>
</Link>
        <div
          style={{
            backgroundColor: "#0D1B2A",
            color: "white",
            padding: "25px",
            width: "180px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <h3>Professional Mentorship</h3>
          <p>Connect with physicians, nurses, researchers, and healthcare leaders.</p>
        </div>

        <div
          style={{
            backgroundColor: "#0D1B2A",
            color: "white",
            padding: "25px",
            width: "180px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <h3>Networking & Events</h3>
          <p>Virtual events, guest speakers, workshops, and career panels.</p>
        </div>

      <div
        style={{
          backgroundColor: "#0D1B2A",
          color: "white",
          padding: "25px",
          width: "180px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h3>Join the Community</h3>
        <p>Volunteer, mentor, collaborate, and help grow the next generation.</p>
      </div>
      </div>
    </div>
  );
}