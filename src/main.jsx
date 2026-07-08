import "./styles/navbar.css";
import "./styles/pillars.css";
import "./styles/journey.css";
import "./styles/mission.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import "./styles/hero.css";
import "./index.css";
import App from "./App";
import About from "./pages/About";
import Resources from "./pages/Resources";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />s
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
