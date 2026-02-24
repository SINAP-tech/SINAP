import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {getEmbedURL} from '../utils/yt';
import "./ArrastaCSS.css";

const niveisData = [
  {
    id: 1,
    titulo: "Nível 1: Periféricos Básicos",
    itens: [
      { id: 1, nome: "Mouse", video: "" }, //Vazio para colocar o link yt depois!!
      { id: 2, nome: "Teclado", video: "" },
      { id: 3, nome: "Monitor", video: "" },
      { id: 4, nome: "Impressora", video: "" },
    ]
  },
  {
    id: 2,
    titulo: "Nível 2: Componentes e Acessórios",
    itens: [
      { id: 5, nome: "Webcam", video: "" }, //Vazio para colocar o link yt depois!!
      { id: 6, nome: "Gabinete", video: "" },
      { id: 7, nome: "Fone", video: "" },
      { id: 8, nome: "Estabilizador", video: "" },
    ]
  },
  {
    id: 3,
    titulo: "Nível 3: Armazenamento e Rede",
    itens: [
      { id: 9, nome: "Roteador", video: "" }, //Vazio para colocar o link yt depois!!
      { id: 10, nome: "Pendrive", video: "" },
      { id: 11, nome: "HD Externo", video: "" },
      { id: 12, nome: "Scanner", video: "" },
    ]
  }
];

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

export default function Arrasta() {
  const [nivelAtual, setNivelAtual] = useState(0);
  const [sinaisEmbaralhados, setSinaisEmbaralhados] = useState([]);
  const [nomesEmbaralhados, setNomesEmbaralhados] = useState([]);
  const [dragMap, setDragMap] = useState({});
  const [verificado, setVerificado] = useState(false);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  useEffect(() => {
    const itensNivel = niveisData[nivelAtual].itens;
    setSinaisEmbaralhados(shuffleArray(itensNivel));
    setNomesEmbaralhados(shuffleArray(itensNivel));
    setDragMap({});
    setVerificado(false);
  }, [nivelAtual]);

  const sinaisAtuais = niveisData[nivelAtual].itens;
  const todosArrastados = Object.keys(dragMap).length === sinaisAtuais.length;

  function permitirSoltar(e) { e.preventDefault(); }
  function arrastar(e, itemID) { e.dataTransfer.setData("itemID", itemID); }

  function soltar(e, dropNome) {
    if (verificado) return;
    const itemID = e.dataTransfer.getData("itemID");
    const itemEncontrado = sinaisAtuais.find((i) => i.id === parseInt(itemID));
    setDragMap((prev) => ({ ...prev, [dropNome]: itemEncontrado }));
  }

  function verificar() { setVerificado(true); }

  function proximoNivel() {
    if (nivelAtual < niveisData.length - 1) {
      setNivelAtual(nivelAtual + 1);
    } else {
      setJogoFinalizado(true);
    }
  }

  function reiniciarJogo() {
    setNivelAtual(0);
    setJogoFinalizado(false);
  }

  return (
    <>
      <Header />
      <div className="arrasta-page-wrapper">
        <div className="arrasta-container-main">
          
          <div className="game-header">
            <Link to="/jogos" className="btn-voltar-compacto">← Sair</Link>
          </div>

          {jogoFinalizado ? (
            <div className="final-box">
              <h2>🎉 Parabéns!</h2>
              <p>Você completou todos os níveis deste desafio!</p>
              <button onClick={reiniciarJogo} className="btn-proxima-universal">
                Jogar Novamente
              </button>
            </div>
          ) : (
            <>
              <div className="quiz-info">
                <span>{niveisData[nivelAtual].titulo}</span>
                <h3>Arraste os vídeos para os nomes correspondentes</h3>
              </div>

              <div className="arrasta-grid-game">
                <div className="sign-area">
                  {sinaisEmbaralhados.map((item) => {
                    const jaAlocado = Object.values(dragMap).some(d => d.id === item.id);
                    return (
                      <div
                        key={item.id}
                        className={`sign-tile ${jaAlocado ? "dragged-out" : ""}`}
                        draggable={!verificado && !jaAlocado}
                        onDragStart={(e) => arrastar(e, item.id)}
                      >
                        <span className="badge">Vídeo</span>
                        <iframe
                            src={getEmbedURL(item.video)}
                            title={item.nome}
                            className="mini-video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="drop-area">
                  {nomesEmbaralhados.map((item) => {
                    const itemColocado = dragMap[item.nome];
                    const isMatched = verificado && itemColocado?.nome === item.nome;
                    const isWrong = verificado && itemColocado && itemColocado?.nome !== item.nome;

                    return (
                      <div
                        key={item.nome}
                        className={`drop-zone ${isMatched ? "matched" : ""} ${isWrong ? "wrong" : ""}`}
                        onDragOver={permitirSoltar}
                        onDrop={(e) => soltar(e, item.nome)}
                      >
                        <div className="drop-content">
                          <span className="drop-text-nome">{item.nome}</span>
                          {itemColocado && (
                           <iframe
                              src={getEmbedURL(itemColocado.video)}
                              title={itemColocado.nome}
                              className="mini-video"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="feedback-area">
                {!verificado ? (
                  <button 
                    onClick={verificar} 
                    className="btn-proxima-universal"
                    disabled={!todosArrastados}
                  >
                    Verificar Respostas
                  </button>
                ) : (
                  <button onClick={proximoNivel} className="btn-proxima-universal">
                    {nivelAtual < niveisData.length - 1 ? "Próximo Nível" : "Finalizar Jogo ✔"}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}