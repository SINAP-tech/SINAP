import React from "react";
import "../pages/Home.css";

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="feature-card">
        <h4>📘 Conceitos Fundamentais</h4>
        <p>
          Aprenda desde o básico até conceitos avançados de informática de forma
          clara e didática.
        </p>
        <small>Hardware • Software • Redes</small>
      </div>
      <div className="feature-card">
        <h4>🎞️ Vídeos em Libras</h4>
        <p>
          Conteúdo criado por estudantes, garantindo uma comunicação autêntica e
          acessível.
        </p>
        <small>Interpretação • Legendas • Qualidade</small>
      </div>
      <div className="feature-card">
        <h4>🎮 Jogos Educativos</h4>
        <p>
          Aprenda brincando com jogos interativos que reforçam o aprendizado de
          forma divertida.
        </p>
        <small>Quiz • Memória • Simuladores</small>
      </div>
    </section>
  );
}

export default FeaturesSection;