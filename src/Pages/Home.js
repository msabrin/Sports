import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Reviews from "../Components/Reviews";

function Home() {
  return (
    <div className="home-section">
      <Hero />
      <About />
      <Reviews />
    </div>
  );
}

export default Home;
