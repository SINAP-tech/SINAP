import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import IntroSection from "../components/IntroSection";
import InclusaoSection from "../components/InclusaoSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <IntroSection />
      <InclusaoSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default Home;