import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {getEmbedURL} from '../utils/yt';
import "./DescubraVideo.css";

const questionsData = [
  {
    id: 1,
    word: "Mouse",
    options: [
      { id: "a", src: "", isCorrect: true }, //Vazio para colocar o link yt depois!!
      { id: "b", src: "", isCorrect: false }
    ]
  },
  {
    id: 2,
    word: "Monitor",
    options: [
      { id: "a", src: "", isCorrect: false }, //Vazio para colocar o link yt depois!!
      { id: "b", src: "", isCorrect: true }
    ]
  },
  {
    id: 3,
    word: "Fone de Ouvido",
    options: [
      { id: "a", src: "", isCorrect: true }, //Vazio para colocar o link yt depois!!
      { id: "b", src: "", isCorrect: false }
    ]
  }
];

export default function DescubraVideo() {
  const [perguntas, setPerguntas] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  // Função para embaralhar qualquer array
  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  // Inicializa o jogo embaralhando perguntas e opções
  useEffect(() => {
    const perguntasEmbaralhadas = shuffle(questionsData).map(q => ({
      ...q,
      options: shuffle(q.options) // Embaralha as opções dentro de cada pergunta
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
    const novasPerguntas = shuffle(questionsData).map(q => ({
      ...q,
      options: shuffle(q.options)
    }));
    setPerguntas(novasPerguntas);
    setCurrentIdx(0);
    setSelectedId(null);
    setIsFinished(false);
  };

  return (
    <>
      <Header />
      <div className="descubra-wrapper">
        <div className="descubra-container">
          
          <div className="game-header">
            <Link to="/jogos" className="btn-voltar-compacto">← Sair</Link>
          </div>

          {isFinished ? (
            <div className="final-box">
              <h2>🎉 Parabéns!</h2>
              <p>Você completou todos os níveis deste desafio!</p>
              <button onClick={restart} className="btn-next">Jogar Novamente</button>
            </div>
          ) : (
            <>
              <div className="question-box">
                <h2>Escolha o sinal de:</h2>
                <span>{currentQuestion.word}</span>
              </div>

              <div className="options-grid">
                {currentQuestion.options.map((opt) => {
                  const isSelected = selectedId === opt.id;
                  const showCorrect = selectedId && opt.isCorrect;
                  const showWrong = isSelected && !opt.isCorrect;

                  return (
                    <div
                      key={opt.id}
                      className={`option-card 
                        ${showCorrect ? "correct-border" : ""} 
                        ${showWrong ? "wrong-border" : ""}`}
                      onClick={() => handleSelect(opt)}
                    >
                     <iframe
  src={getEmbedURL(opt.src)}
  title="Video opção"
  className="video-option"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
                    </div>
                  );
                })}
              </div>

              {selectedId && (
                <>
                  <div className={`feedback-msg ${
                    currentQuestion.options.find(o => o.id === selectedId).isCorrect 
                    ? "success" : "error"
                  }`}>
                    {currentQuestion.options.find(o => o.id === selectedId).isCorrect 
                      ? "✔️ Excelente! Você acertou." 
                      : "❌ Ops! Esse não é o sinal correto."}
                  </div>

                  <button onClick={handleNext} className="btn-next">
                    {currentIdx + 1 < perguntas.length ? "Próxima Pergunta" : "Finalizar ✔"}
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}