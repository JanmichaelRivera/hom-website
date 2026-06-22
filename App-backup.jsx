import logo from "./assets/hom-logo.png";
export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px", maxWidth: "900px", margin: "auto" }}>
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
    color: "#F7F3EC",
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
  Building the Next Generation of Hispanic Healthcare Leaders
</h2>

<p
  style={{
    fontSize: "22px",
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "center",
  }}
>

  Empowering Hispanic students pursuing healthcare careers

  through mentorship, opportunity, and community.
      </p>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "50px",
  }}
>
  <div style={{ border: "1px solid #ddd", padding: "20px", width: "180px" }}>
    <h3>Resources</h3>
    <p>Guides, tools, and academic support.</p>
  </div>

  <div style={{ border: "1px solid #ddd", padding: "20px", width: "180px" }}>
    <h3>Mentorship</h3>
    <p>Connect with healthcare professionals.</p>
  </div>

  <div style={{ border: "1px solid #ddd", padding: "20px", width: "180px" }}>
    <h3>Scholarships</h3>
    <p>Funding opportunities and financial support.</p>
  </div>

  <div style={{ border: "1px solid #ddd", padding: "20px", width: "180px" }}>
    <h3>Events</h3>
    <p>Workshops, webinars, and networking.</p>
  </div>

  <div style={{ border: "1px solid #ddd", padding: "20px", width: "180px" }}>
    <h3>Get Involved</h3>
    <p>Become part of the HOM community.</p>
  </div>
</div>
      
    </div>
  );
}