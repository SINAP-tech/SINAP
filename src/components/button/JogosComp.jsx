import React, { useState } from "react";
import Header from "../navbar/Header";
import Modal from "./modalgames";
import VoltarArrow from "../input/button-back";
import "../../styles/JogosCSS.css";

const jogos = [
  {
    id: "quiz",
    nome: "Quiz de Conceitos",
    descricao: "Escolha a alternativa correta para o sinal de informática exibido no vídeo.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    id: "arrasta",
    nome: "Arrasta e Solta",
    descricao: "Associe o vídeo do sinal de Libras ao nome do componente correspondente.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 9l4-4 4 4" />
        <path d="M9 5v14" />
        <path d="M19 15l-4 4-4-4" />
        <path d="M15 19V5" />
      </svg>
    ),
  },
  {
    id: "descubra",
    nome: "Descubra pelo Vídeo",
    descricao: "Assista aos sinais gravados pelos alunos e identifique o conceito correto.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
];

export default function JogosVideos() {
  const [abrirModal, setAbrirModal] = useState(false);

  return (
    <div className="jogos-page-wrapper">
      <Header />

      {/* CABEÇALHO PADRÃO CONCEITOS */}
      <section className="original-page-heading">
        <div className="original-page-heading-container">
          <div className="back-wrapper seta-branca">
            <VoltarArrow />
          </div>
          <span className="eyebrow-tag">PRÁTICA INTERATIVA</span>
          <h1>Jogos Educativos</h1>
          <p>
            Reforce o seu aprendizado em informática de forma lúdica com jogos 
            interativos 100% integrados em Libras.
          </p>
        </div>
      </section>

      {/* CARDS MINIMALISTAS */}
      <main className="jogos-container">
        <div className="cards-jogos-grid">
          {jogos.map((jogo) => (
            <article className="card-jogo-minimal" key={jogo.id}>
              <div className="card-thumb">
                {jogo.icon}
              </div>
              
              <div className="card-content">
                <h3>{jogo.nome}</h3>
                <p>{jogo.descricao}</p>
                
                <button 
                  className="btn-jogar-minimal" 
                  onClick={() => setAbrirModal(jogo.id)}
                >
                  Jogar Agora
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {abrirModal && (
        <Modal
          jogoSelecionado={abrirModal}
          fechar={() => setAbrirModal(false)}
        />
      )}
    </div>
  );
}