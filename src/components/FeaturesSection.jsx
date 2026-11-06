import React from "react";

// Importação das imagens da equipe
import Law from "../assets/LourencoIMG.jpeg";
import Thata from "../assets/ThataIMG.jpeg";
import Daiane from "../assets/DaianeIMG.png";
import Tototz from "../assets/ArthurIMG.jpeg";

// Importação das ilustrações dos cards
import LivroImg from "../assets/Livro.png";
import VideoImg from "../assets/Video.png";
import MaoImg from "../assets/mao.png"; // Verifique se o nome do arquivo na pasta assets é exatamente 'mao.png'

import "../styles/Home.css";

export default function FeaturesSection() {
  return (
    <section className="features-section">
      
      {/* Grid de Cards de Recursos */}
      <div className="features-cards-container">
        
        {/* Card 1: Conceitos Fundamentais */}
        <div className="feature-card">
          <div className="feature-card-banner banner-blue-light">
            <img src={MaoImg} alt="" className="banner-bg-mao" />
            <div className="feature-card-badge">
              <img src={LivroImg} alt="Conceitos Fundamentais" className="badge-icon-img blue-filter" />
            </div>
          </div>
          <div className="feature-card-content">
            <h4>Conceitos Fundamentais</h4>
            <p>
              Aprenda desde o básico até conceitos avançados de informática de forma
              clara, acessível e didática para o seu dia a dia.
            </p>
            <small className="blue-tag">Hardware • Software • Internet</small>
          </div>
        </div>

        {/* Card 2: Vídeos em Libras */}
        <div className="feature-card">
          <div className="feature-card-banner banner-blue-light">
            <img src={MaoImg} alt="" className="banner-bg-mao" />
            <div className="feature-card-badge">
              <img src={VideoImg} alt="Vídeos em Libras" className="badge-icon-img blue-filter" />
            </div>
          </div>
          <div className="feature-card-content">
            <h4>Vídeos em Libras</h4>
            <p>
              Conteúdo em Língua Brasileira de Sinais criado por estudantes, garantindo
              uma comunicação autêntica, inclusiva e com máxima acessibilidade.
            </p>
          </div>
        </div>

        {/* Card 3: Jogos Educativos */}
        <div className="feature-card">
          <div className="feature-card-banner banner-blue-light">
            <img src={MaoImg} alt="" className="banner-bg-mao" />
            <div className="feature-card-badge">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 11h4" />
                <path d="M8 9v4" />
                <path d="M15 12h.01" />
                <path d="M18 10h.01" />
                <path d="M17.7 5H6.3A4.3 4.3 0 0 0 2 9.3v5.4A4.3 4.3 0 0 0 6.3 19l2.2-2h7l2.2 2a4.3 4.3 0 0 0 4.3-4.3V9.3A4.3 4.3 0 0 0 17.7 5Z" />
              </svg>
            </div>
          </div>
          <div className="feature-card-content">
            <h4>Jogos Educativos</h4>
            <p>
              Aprenda brincando com jogos e exercícios interativos especialmente
              desenvolvidos para reforçar o aprendizado de forma divertida.
            </p>
            <small className="blue-tag">Quiz • Arrasta e solta • Descubra</small>
          </div>
        </div>

      </div>

    </section>
  );
}