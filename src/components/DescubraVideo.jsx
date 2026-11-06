import React, { useState, useEffect } from "react";

import Mouse from "../Gifs/Gif Mouse OTIMIZADO.mp4";
import Fones from "../Gifs/Gif Fone de Ouvido OTIMIZADO.mp4";
import Monitor from "../Gifs/Monitor OTIMIZADO.mp4";
import Gabinete from "../Gifs/Gif Gabinete OTIMIZADO.mp4";

import "../styles/DescubraVideo.css";

const questionsData = [
  {
    id: 1,
    word: "Mouse",
    options: [
      { id: "a", src: Mouse, isCorrect: true },
      { id: "b", src: Gabinete, isCorrect: false },
    ],
  },
  {
    id: 2,
    word: "Monitor",
    options: [
      { id: "a", src: Gabinete, isCorrect: false },
      { id: "b", src: Monitor, isCorrect: true },
    ],
  },
  {
    id: 3,
    word: "Fone de Ouvido",
    options: [
      { id: "a", src: Fones, isCorrect: true },
      { id: "b", src: Mouse, isCorrect: false },
    ],
  },
];

export default function DescubraVideo() {
  const [perguntas, setPerguntas] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [videoZoom, setVideoZoom] = useState(null);

  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  useEffect(() => {
    const perguntasEmbaralhadas = shuffle(questionsData).map((q) => ({
      ...q,
      options: shuffle(q.options),
    }));
    setPerguntas(perguntasEmbaralhadas);
  }, []);

  if (perguntas.length === 0) return null;

  const currentQuestion = perguntas[currentIdx];

  const handleSelect = (option) => {
    if (selectedId !== null) return;
    setSelectedId(option.id);
  };

  const handleNext = () => {
    if (currentIdx + 1 < perguntas.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedId(null);
    } else {
      setIsFinished(true);
    }
  };

  const restart = () => {
    const novasPerguntas = shuffle(questionsData).map((q) => ({
      ...q,
      options: shuffle(q.options),
    }));
    setPerguntas(novasPerguntas);
    setCurrentIdx(0);
    setSelectedId(null);
    setIsFinished(false);
  };

  return (
    <div className="descubra-wrapper">
      <div className="descubra-container">
        {isFinished ? (
          <div className="final-box">
            <span className="final-badge">Desafio Concluído</span>
            <h2>Excelente trabalho!</h2>
            <p>Você descobriu todos os sinais em Libras com sucesso.</p>
            <button onClick={restart} className="btn-next">
              Reiniciar Jogo
            </button>
          </div>
        ) : (
          <>
            {/* Topo: Indicador e Pergunta */}
            <div className="descubra-header">
              <div className="descubra-header-top">
                <span className="descubra-tag">Descubra pelo Vídeo</span>
                <span className="descubra-step">
                  Pergunta {currentIdx + 1} de {perguntas.length}
                </span>
              </div>
              <h3>
                Qual é o sinal correto para:{" "}
                <span className="word-highlight">{currentQuestion.word}</span>?
              </h3>
            </div>

            {/* Grid de Opções de Vídeo */}
            <div className="options-grid">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedId === opt.id;
                const showCorrect = selectedId && opt.isCorrect;
                const showWrong = isSelected && !opt.isCorrect;

                return (
                  <div
                    key={`${currentQuestion.id}-${opt.id}`}
                    className={`option-card 
                      ${showCorrect ? "correct-border" : ""} 
                      ${showWrong ? "wrong-border" : ""}`}
                    onClick={() => handleSelect(opt)}
                  >
                    <video autoPlay loop muted playsInline className="video-option">
                      <source src={opt.src} type="video/mp4" />
                    </video>

                    {/* Ícone Vetorial de Zoom */}
                    <button
                      type="button"
                      className="btn-zoom-video"
                      onClick={(e) => {
                        e.stopPropagation();
                        setVideoZoom(opt.src);
                      }}
                      title="Ampliar vídeo"
                      aria-label="Ampliar vídeo"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Área de Feedback & Botão Avançar */}
            <div className="feedback-area">
              {selectedId ? (
                <>
                  <div
                    className={`feedback-msg ${
                      currentQuestion.options.find((o) => o.id === selectedId).isCorrect
                        ? "success"
                        : "error"
                    }`}
                  >
                    {currentQuestion.options.find((o) => o.id === selectedId).isCorrect
                      ? "✓ Excelente! Você acertou."
                      : "✕ Ops! Esse não é o sinal correto."}
                  </div>

                  <button onClick={handleNext} className="btn-next">
                    {currentIdx + 1 < perguntas.length
                      ? "Próxima Pergunta →"
                      : "Ver Resultado"}
                  </button>
                </>
              ) : (
                <p className="dica-selecao">Clique no vídeo que representa o sinal correto.</p>
              )}
            </div>
          </>
        )}
      </div>

      {/* Modal de Ampliação de Vídeo */}
      {videoZoom && (
        <div className="video-zoom-overlay" onClick={() => setVideoZoom(null)}>
          <div className="video-zoom-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="btn-close-zoom"
              onClick={() => setVideoZoom(null)}
            >
              ✕
            </button>
            <video autoPlay loop muted playsInline className="video-zoomed">
              <source src={videoZoom} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}