import React from "react";

import Header from "../components/navbar/Header";
import Banner from "../components/navbar/Banner";
import IntroSection from "../components/IntroSection";
import InclusaoSection from "../components/InclusaoSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/navbar/Footer";;

import "../styles/Home.css";

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