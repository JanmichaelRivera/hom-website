import Navbar from "../components/layout/Navbar";

import Hero from "../components/home/Hero";
import Why from "../components/home/Why";
import Journey from "../components/home/Journey";
import Mission from "../components/home/Mission";
import Pillars from "../components/home/Pillars";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Why />
      <Journey />
      <Mission />
      <Pillars />
    </>
  );
}