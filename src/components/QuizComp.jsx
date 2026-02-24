import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./QuizCSS.css";
import {getEmbedURL} from '../utils/yt';

const perguntasIniciais = [
  {
    id: 1,
    video: "", //Vazio para colocar o link yt depois!!
    pergunta: "Qual conceito este sinal representa?",
    alternativas: ["Teclado", "Monitor", "Mouse", "Impressora"],
    correta: "Mouse",
  },
  {
    id: 2,
    video: "", //Vazio para colocar o link yt depois!!
    pergunta: "Qual conceito este sinal representa?",
    alternativas: ["Teclado", "Monitor", "Mouse", "Impressora"],
    correta: "Teclado",
  },
  {
    id: 3,
    video: "", //Vazio para colocar o link yt depois!!
    pergunta: "Qual conceito este sinal representa?",
    alternativas: ["Monitor", "Gabinete", "Webcam", "Mouse"],
    correta: "Monitor",
  }
];

export default function QuizComp() {
  const [perguntas, setPerguntas] = useState([]);
  const [atual, setAtual] = useState(0);
  const [respostaUsuario, setRespostaUsuario] = useState(null);
  const [respondido, setRespondido] = useState(false);
  const [quizFinalizado, setQuizFinalizado] = useState(false);

  // Função para embaralhar arrays
  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  // Inicializa o jogo embaralhando perguntas e alternativas
  useEffect(() => {
    const preparadas = shuffle(perguntasIniciais).map(p => ({
      ...p,
      alternativas: shuffle(p.alternativas)
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
    const preparadas = shuffle(perguntasIniciais).map(p => ({
      ...p,
      alternativas: shuffle(p.alternativas)
    }));
    setPerguntas(preparadas);
    setAtual(0);
    setRespostaUsuario(null);
    setRespondido(false);
    setQuizFinalizado(false);
  };

  return (
    <>
      <Header />
      <div className="quiz-page-wrapper">
        <div className="quiz-container">
          
          <div className="game-header">
            <Link to="/jogos" className="btn-voltar-compacto">← Sair</Link>
          </div>

          {quizFinalizado ? (
            <div className="final-box">
              <h2>🎉 Parabéns!</h2>
              <p>Você completou o Quiz de Conceitos!</p>
              <button onClick={reiniciar} className="btn-proxima">Jogar Novamente</button>
            </div>
          ) : (
            <>
              <div className="quiz-info">
                <span>Pergunta {atual + 1} de {perguntas.length}</span>
                <h3>{perguntaAtual.pergunta}</h3>
              </div>
              
              <iframe
                  key={perguntaAtual.id}
                  width="100%"
                  height="250"
                  src={getEmbedURL(perguntaAtual.video)}
                  title="Video Libras"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                 className="video-libras-quiz"
              />

              <div className="opcoes-grid">
                {perguntaAtual.alternativas.map((opcao) => {
                  let classeFeedback = "";
                  if (respondido) {
                    if (opcao === perguntaAtual.correta) classeFeedback = "correta";
                    else if (opcao === respostaUsuario) classeFeedback = "errada";
                  }

                  return (
                    <button
                      key={opcao}
                      className={`btn-opcao ${classeFeedback}`}
                      onClick={() => escolherOpcao(opcao)}
                      disabled={respondido}
                    >
                      {opcao}
                    </button>
                  );
                })}
              </div>

              {respondido && (
                <div className="feedback-area">
                  <div className={`msg-feedback ${respostaUsuario === perguntaAtual.correta ? 'sucesso' : 'erro'}`}>
                    {respostaUsuario === perguntaAtual.correta 
                      ? "✨ Muito bem! Você acertou." 
                      : `❌ Ops! A resposta correta é: ${perguntaAtual.correta}`}
                  </div>
                  <button className="btn-proxima" onClick={proximaPergunta}>
                    {atual < perguntas.length - 1 ? "Próxima Pergunta" : "Ver Resultado ✔"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
