import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import IntroSection from "../components/IntroSection";
import InclusaoSection from "../components/InclusaoSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import "./Home.css";
import VoltarArrow from "../components/button-back";

function Home() {
  return (
    <div className="home">
      <Header />
      <h1>LAWRENCE, A CONFIGURAÇÃO DO BOTÃO!!! ELE TEM QUE MUDAR AS ROTAS PARA UMA PAGINA ATRAS, LEMBRA!!!!!</h1>
      <VoltarArrow/>
      <Banner />
      <IntroSection />
      <InclusaoSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default Home;