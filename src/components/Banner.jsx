import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Home.css";
import BannerHomeImage from '../assets/ReditBanner.png'

function Banner() {
  const navigate = useNavigate();

  const handleLearnClick = () => {
    navigate("/conceitos");
  };

  return (
    <section className="banner">
      <div className="banner-content">
        <div className="BannerHomeImage">
          <img src={BannerHomeImage} ></img>
        </div>
        
        <div className="banner-text">
          <span className="badge">🎓 Educação Digital Inclusiva</span>
          <h1 id='h'>
            Aprenda <span className="highlight">Informática</span> <br /> em{" "}
            <span className="highlight underline">Libras</span>
          </h1>
          <p id='pp'>
            Plataforma educacional <strong>100% acessível</strong> com vídeos em Língua Brasileira
            de Sinais, criada por estudantes para promover a{" "}
            <strong id='c'>inclusão digital</strong>.
          </p>
          <div className="banner-icons">
            <div className="cem"> <strong className='sem'>100%</strong> Gratuito</div>
            <div className="aces"><strong className="sem">♿</strong> Acessível</div>
            <div className="libra"><strong className="sem">🤟</strong> <br /> Em Libras</div>
          </div>
          <button className="cta-button" onClick={handleLearnClick}>
            🌟 Começar a Aprender
          </button>
          <p>Faço parte do projeto SINAP do IFMA</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;