import React from "react";
import "../pages/Home.css";
import logoBanner from "../assets/logo-banner.png";

function InclusaoSection() {
  return (
    <section className="inclusao-section">
      <img src={logoBanner} alt="Logo Banner SINAP" className="banner-logo" />
      <h3>🤟 Inclusão em Libras</h3>
      <p>
        Aqui você aprende conceitos de informática também em Língua Brasileira
        de Sinais (Libras), com vídeos feitos pelos próprios alunos. Nossa
        plataforma promove a acessibilidade e a inclusão digital, garantindo que
        todos tenham acesso ao conhecimento tecnológico.
      </p>
      <div className="inclusao-badges">
        <span>🎥 Vídeos em Libras</span>
        <span>💬 Legendas disponíveis</span>
        <span>🎓 Criado por estudantes</span>
        <span>💯 100% gratuito</span>
      </div>
    </section>
  );
}

export default InclusaoSection;