import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../assets/hom-logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Hispanic Opportunities in Medicine"
            className="navbar-logo-image"
          />

          <div className="navbar-logo-text">
            <span className="navbar-name">HOM</span>
            <span className="navbar-subtitle">
              Hispanic Opportunities in Medicine
            </span>
          </div>
        </Link>

        <nav className="navbar-links">
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/leadership">Leadership</Link>
          <Link to="/impact">Impact</Link>
        </nav>

        <a
          href="https://forms.gle/36tvAVX6qR1hR2YBA"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-button"
        >
          Join HOM
        </a>

      </div>
    </header>
  );
}