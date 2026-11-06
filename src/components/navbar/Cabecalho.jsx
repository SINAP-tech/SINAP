import React from "react";
import VoltarArrow from "../input/button-back";
import '../../styles/Conceitos.css';

export default function Cabecalho() {
  return (
    <section className="original-page-heading">
      <div className="original-page-heading-container">
        {/* Adicionada a classe 'seta-branca' aqui */}
        <div className="back-wrapper seta-branca">
          <VoltarArrow />
        </div>

        <span className="eyebrow-tag">BIBLIOTECA DE APRENDIZAGEM</span>
        <h1>Conceitos em Informática em Libras</h1>
        <p>
          Aprenda os sinais da informática com vídeos explicativos em Língua Brasileira de Sinais (Libras), 
          criados especialmente para garantir a acessibilidade e inclusão digital.
        </p>
      </div>
    </section>
  );
}