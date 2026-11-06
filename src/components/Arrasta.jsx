import React, { useState, useEffect } from "react";

import Mouse from "../Gifs/Gif Mouse OTIMIZADO.mp4";
import Teclado from "../Gifs/Gif Teclado OTIMIZADO.mp4";
import Roteador from "../Gifs/Gif Roteador OTIMIZADO.mp4";
import Gabinete from "../Gifs/Gif Gabinete OTIMIZADO.mp4";
import Fone from "../Gifs/Gif Fone de Ouvido OTIMIZADO.mp4";
import Gpu from "../Gifs/Gif Placa de Video OTIMIZADO.mp4";
import Cooler from "../Gifs/Gif Cooler  OTIMIZADO[BAC50C9] (1).mp4";
import Hd from "../Gifs/Gif HD OTIMIZADO [636F87B].mp4";
import Pendrive from "../Gifs/Gif Pendrive OTIMIZADO[4FD51A6].mp4";
import Wifi from "../Gifs/Gif Wi-fi OTIMIZADO[AA96319].mp4";
import Processador from "../Gifs/Gif Processador OTIMIZADO [AEAFB07].mp4";
import Monitor from "../Gifs/Monitor OTIMIZADO.mp4";

import "../styles/ArrastaCSS.css";

const niveisData = [
  {
    id: 1,
    itens: [
      { id: 1, nome: "Mouse", video: Mouse },
      { id: 2, nome: "Teclado", video: Teclado },
      { id: 3, nome: "Monitor", video: Monitor },
      { id: 4, nome: "Fone", video: Fone },
    ],
  },
  {
    id: 2,
    itens: [
      { id: 5, nome: "Processador", video: Processador },
      { id: 6, nome: "Gabinete", video: Gabinete },
      { id: 7, nome: "Placa de Vídeo", video: Gpu },
      { id: 8, nome: "Cooler", video: Cooler },
    ],
  },
  {
    id: 3,
    itens: [
      { id: 9, nome: "Roteador", video: Roteador },
      { id: 10, nome: "Pendrive", video: Pendrive },
      { id: 11, nome: "HD", video: Hd },
      { id: 12, nome: "Wi-Fi", video: Wifi },
    ],
  },
];

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

export default function Arrasta() {
  const [nivelAtual, setNivelAtual] = useState(0);
  const [sinaisEmbaralhados, setSinaisEmbaralhados] = useState([]);
  const [nomesEmbaralhados, setNomesEmbaralhados] = useState([]);
  const [dragMap, setDragMap] = useState({});
  const [verificado, setVerificado] = useState(false);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [videoZoom, setVideoZoom] = useState(null);

  useEffect(() => {
    const itensNivel = niveisData[nivelAtual].itens;
    setSinaisEmbaralhados(shuffleArray(itensNivel));
    setNomesEmbaralhados(shuffleArray(itensNivel));
    setDragMap({});
    setVerificado(false);
  }, [nivelAtual]);

  const sinaisAtuais = niveisData[nivelAtual].itens;
  const todosArrastados = Object.keys(dragMap).length === sinaisAtuais.length;

  function permitirSoltar(e) {
    e.preventDefault();
  }

  function arrastar(e, itemID) {
    e.dataTransfer.setData("itemID", itemID);
  }

  function soltar(e, dropNome) {
    if (verificado) return;
    const itemID = e.dataTransfer.getData("itemID");
    const itemEncontrado = sinaisAtuais.find((i) => i.id === parseInt(itemID));
    if (itemEncontrado) {
      setDragMap((prev) => ({ ...prev, [dropNome]: itemEncontrado }));
    }
  }

  function verificar() {
    setVerificado(true);
  }

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
    <div className="arrasta-page-wrapper">
      <div className="arrasta-container-main">
        {jogoFinalizado ? (
          <div className="final-box">
            <span className="final-badge">Desafio Concluído</span>
            <h2>Excelente trabalho!</h2>
            <p>Você associou todos os conceitos técnicos em Libras com sucesso.</p>
            <button onClick={reiniciarJogo} className="btn-proxima-universal">
              Reiniciar Jogo
            </button>
          </div>
        ) : (
          <>
            {/* Topo Limpo */}
            <div className="arrasta-header">
              <div className="arrasta-header-top">
                <span className="arrasta-tag">Desafio de Associação</span>
                <span className="arrasta-step">
                  Nível {nivelAtual + 1} de {niveisData.length}
                </span>
              </div>
              <h3>Arraste o vídeo do sinal para o nome correto</h3>
            </div>

            {/* Grid Principal */}
            <div className="arrasta-grid-game">
              {/* Coluna de Vídeos */}
              <div className="sign-area">
                {sinaisEmbaralhados.map((item) => {
                  const jaAlocado = Object.values(dragMap).some(
                    (d) => d.id === item.id
                  );
                  return (
                    <div
                      key={item.id}
                      className={`sign-tile ${jaAlocado ? "dragged-out" : ""}`}
                      draggable={!verificado && !jaAlocado}
                      onDragStart={(e) => arrastar(e, item.id)}
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="video-tile"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>

                      {/* Botão SVG de Zoom */}
                      <button
                        type="button"
                        className="btn-zoom-video"
                        onClick={(e) => {
                          e.stopPropagation();
                          setVideoZoom(item.video);
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

              {/* Coluna de Destinos */}
              <div className="drop-area">
                {nomesEmbaralhados.map((item) => {
                  const itemColocado = dragMap[item.nome];
                  const isMatched =
                    verificado && itemColocado?.nome === item.nome;
                  const isWrong =
                    verificado && itemColocado && itemColocado?.nome !== item.nome;

                  return (
                    <div
                      key={item.nome}
                      className={`drop-zone ${isMatched ? "matched" : ""} ${
                        isWrong ? "wrong" : ""
                      }`}
                      onDragOver={permitirSoltar}
                      onDrop={(e) => soltar(e, item.nome)}
                    >
                      {itemColocado ? (
                        <div className="drop-content-filled">
                          <div className="mini-video-wrapper">
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="mini-video"
                            >
                              <source src={itemColocado.video} type="video/mp4" />
                            </video>
                            <button
                              type="button"
                              className="btn-zoom-video-mini"
                              onClick={() => setVideoZoom(itemColocado.video)}
                              title="Ampliar vídeo"
                              aria-label="Ampliar vídeo"
                            >
                              <svg
                                width="12"
                                height="12"
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
                          <span className="drop-text-nome">{item.nome}</span>
                        </div>
                      ) : (
                        <span className="drop-text-nome">{item.nome}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Rodapé de Ação */}
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
                <button
                  onClick={proximoNivel}
                  className="btn-proxima-universal"
                >
                  {nivelAtual < niveisData.length - 1
                    ? "Próximo Nível →"
                    : "Finalizar Desafio"}
                </button>
              )}
            </div>
          </>
        )}
      </div>

      {/* Modal de Zoom do Vídeo */}
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