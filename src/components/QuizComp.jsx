import React, { useState, useEffect } from "react";

import Mouse from "../Gifs/Gif Mouse OTIMIZADO.mp4";
import Teclado from "../Gifs/Gif Teclado OTIMIZADO.mp4";
import Monitor from "../Gifs/Monitor OTIMIZADO.mp4";
import Gabinete from "../Gifs/Gif Gabinete OTIMIZADO.mp4";

import "../styles/QuizCSS.css";

const perguntasIniciais = [
  {
    id: 1,
    video: Mouse,
    pergunta: "Qual conceito este sinal representa?",
    alternativas: ["Teclado", "Monitor", "Mouse", "Gabinete"],
    correta: "Mouse",
  },
  {
    id: 2,
    video: Teclado,
    pergunta: "Qual conceito este sinal representa?",
    alternativas: ["Teclado", "Monitor", "Mouse", "Gabinete"],
    correta: "Teclado",
  },
  {
    id: 3,
    video: Monitor,
    pergunta: "Qual conceito este sinal representa?",
    alternativas: ["Monitor", "Gabinete", "Teclado", "Mouse"],
    correta: "Monitor",
  },
  {
    id: 4,
    video: Gabinete,
    pergunta: "Qual conceito este sinal representa?",
    alternativas: ["Monitor", "Gabinete", "Teclado", "Mouse"],
    correta: "Gabinete",
  },
];

export default function QuizComp() {
  const [perguntas, setPerguntas] = useState([]);
  const [atual, setAtual] = useState(0);
  const [respostaUsuario, setRespostaUsuario] = useState(null);
  const [respondido, setRespondido] = useState(false);
  const [quizFinalizado, setQuizFinalizado] = useState(false);

  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  useEffect(() => {
    const preparadas = shuffle(perguntasIniciais).map((p) => ({
      ...p,
      alternativas: shuffle(p.alternativas),
    }));
    setPerguntas(preparadas);
  }, []);

  if (perguntas.length === 0) return null;

  const perguntaAtual = perguntas[atual];

  const escolherOpcao = (opcao) => {
    if (respondido) return;
    setRespostaUsuario(opcao);
    setRespondido(true);
  };

  const proximaPergunta = () => {
    if (atual < perguntas.length - 1) {
      setAtual(atual + 1);
      setRespostaUsuario(null);
      setRespondido(false);
    } else {
      setQuizFinalizado(true);
    }
  };

  const reiniciar = () => {
    const preparadas = shuffle(perguntasIniciais).map((p) => ({
      ...p,
      alternativas: shuffle(p.alternativas),
    }));
    setPerguntas(preparadas);
    setAtual(0);
    setRespostaUsuario(null);
    setRespondido(false);
    setQuizFinalizado(false);
  };

  return (
    <div className="quiz-page-wrapper">
      <div className="quiz-container">
        {quizFinalizado ? (
          <div className="final-box">
            <span className="final-badge">Quiz Concluído</span>
            <h2>Excelente trabalho!</h2>
            <p>Você respondeu a todos os conceitos em Libras com sucesso.</p>
            <button onClick={reiniciar} className="btn-proxima">
              Reiniciar Quiz
            </button>
          </div>
        ) : (
          <>
            {/* Cabeçalho do Quiz com Barra de Progresso */}
            <div className="quiz-header">
              <div className="quiz-header-top">
                <span className="quiz-tag">Quiz de Conceitos</span>
                <span className="quiz-step">
                  {atual + 1} de {perguntas.length}
                </span>
              </div>
              <div className="quiz-progress-bar">
                <div
                  className="quiz-progress-fill"
                  style={{
                    width: `${((atual + 1) / perguntas.length) * 100}%`,
                  }}
                ></div>
              </div>
              <h3>{perguntaAtual.pergunta}</h3>
            </div>

            {/* Layout em 2 colunas: Esquerda (Vídeo) / Direita (Opções) */}
            <div className="quiz-body-layout">
              <div className="video-wrapper">
                <video
                  key={perguntaAtual.id}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="video-libras-quiz"
                >
                  <source src={perguntaAtual.video} type="video/mp4" />
                </video>
              </div>

              <div className="quiz-interactive-side">
                <div className="opcoes-grid">
                  {perguntaAtual.alternativas.map((opcao, index) => {
                    let classeFeedback = "";
                    if (respondido) {
                      if (opcao === perguntaAtual.correta)
                        classeFeedback = "correta";
                      else if (opcao === respostaUsuario)
                        classeFeedback = "errada";
                    }

                    return (
                      <button
                        key={`${perguntaAtual.id}-${opcao}`}
                        className={`btn-opcao ${classeFeedback}`}
                        onClick={() => escolherOpcao(opcao)}
                        disabled={respondido}
                      >
                        <span className="opcao-letra">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="opcao-texto">{opcao}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Rodapé de Feedback & Avanço */}
                {respondido && (
                  <div className="feedback-area">
                    <div
                      className={`msg-feedback ${
                        respostaUsuario === perguntaAtual.correta
                          ? "sucesso"
                          : "erro"
                      }`}
                    >
                      {respostaUsuario === perguntaAtual.correta
                        ? "✓ Resposta correta!"
                        : `✕ Incorreto. O correto é: ${perguntaAtual.correta}`}
                    </div>

                    <button className="btn-proxima" onClick={proximaPergunta}>
                      {atual < perguntas.length - 1
                        ? "Próxima Pergunta →"
                        : "Ver Resultado"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}