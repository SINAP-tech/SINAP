import React from "react";
import { useNavigate } from "react-router-dom";
import BannerHomeImage from "../../assets/ReditBanner.png";
import "../../styles/Home.css";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <section className="home-hero">
      <div className="home-hero-container">
        
        {/* Lado Esquerdo: Imagem do Banner */}
        <div className="home-hero-image">
          <img
            src={BannerHomeImage}
            alt="Estudantes se comunicando em Libras durante uma aula de informática"
          />
        </div>

        {/* Lado Direito: Texto + Cards + Botão */}
        <div className="home-hero-content">
          <h1>
            Aprenda <br />
            <em>Informática</em> <br />
            em <em>Libras</em>
          </h1>

          <p>
            Plataforma educacional <strong className="gray-text">100% acessível</strong> com vídeos
            em Língua Brasileira de Sinais, criada por estudantes para promover a{" "}
            <strong>inclusão digital.</strong>
          </p>

          {/* Cards e Botão */}
          <div className="hero-features">
            <div className="hero-feature-card">
              <strong className="blue-text">100%</strong>
              <span>Gratuito</span>
            </div>

            <div className="hero-feature-card">
              <span className="icon-emoji">♿</span>
              <span>Acessível</span>
            </div>

            <div className="hero-feature-card">
              <span className="icon-emoji">🤟</span>
              <span>Em Libras</span>
            </div>
          </div>

          <button className="hero-cta-button" onClick={() => navigate("/conceitos")}>
            <span>Começar a aprender</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}