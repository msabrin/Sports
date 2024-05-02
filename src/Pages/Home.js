import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Hero />
      <About />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;
