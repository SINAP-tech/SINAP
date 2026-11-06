// Opção A: Alinhando a importação com a tag
import React from "react";
import "../styles/Home.css";
import logoBanner from "../assets/logo-banner.png"; // Nome importado

export default function InclusaoSection() {
  return (
    <section className="inclusao-section">
      <div className="inclusao-container">
        <div className="inclusao-logo-wrapper">
          <img 
            src={logoBanner} /* Use logoBanner em vez de logo */
            alt="Símbolo SINAP" 
            className="inclusao-logo-symbol" 
          />
        </div>

        <div className="inclusao-content">
          <h2>Inclusão em Libras</h2>
          <p>
            Aqui você aprende conceitos de informática também em Língua Brasileira de
            Sinais (Libras), com vídeos feitos pelos próprios alunos. Nossa plataforma
            promove a acessibilidade e a inclusão digital, garantindo que todos tenham
            acesso ao conhecimento tecnológico.
          </p>
        </div>

        <div className="inclusao-badges">
          <div className="inclusao-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Vídeos em Libras</span>
          </div>

          <div className="inclusao-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 1 0 3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>Criado por estudantes</span>
          </div>

          <div className="inclusao-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>100% gratuito</span>
          </div>
        </div>
      </div>
    </section>
  );
}