import React, { useState, useEffect } from "react";
import Header from "./Header";
//import {getEmbedURL} from '../utils/yt';

import Mouse from '../Gifs/Gif Mouse.gif'
import Teclado from '../Gifs/Gif Teclado.gif'
import Monitor from '../Gifs/Gif Monitor.gif'
import Gabinete from '../Gifs/Gif Gabinete.gif'
import Fone from '../Gifs/Gif Fone de Ouvido.gif'
import Processador from '../Gifs/Gif Processador.gif'
import Gpu from '../Gifs/Gif Placa de Video.gif'
import Cooler from '../Gifs/Gif Cooler.gif'
import Roteador from '../Gifs/Gif Roteador.gif'
import Pendrive from '../Gifs/Gif Pendrive.gif'
import Hd from '../Gifs/Gif HD.gif'
import Wifi from '../Gifs/Gif wifi.gif'

import "../styles/ArrastaCSS.css";

const niveisData = [
  {
    id: 1,
    titulo: "Nível 1: Periféricos Básicos",
    itens: [
      { id: 1, nome: "Mouse", video: Mouse }, //Vazio para colocar o link yt depois!!
      { id: 2, nome: "Teclado", video: Teclado },
      { id: 3, nome: "Monitor", video: Monitor },
      { id: 4, nome: "Fone", video: Fone },
    ]
  },
  {
    id: 2,
    titulo: "Nível 2: Componentes",
    itens: [
      { id: 5, nome: "Processador", video: Processador }, //Vazio para colocar o link yt depois!!
      { id: 6, nome: "Gabinete", video: Gabinete },
      { id: 7, nome: "Placa de Vídeo", video: Gpu},
      { id: 8, nome: "Cooler", video: Cooler },
    ]
  },
  { 
    id: 3,
    titulo: "Nível 3: Armazenamento e Rede",
    itens: [
      { id: 9, nome: "Roteador", video: Roteador }, //Vazio para colocar o link yt depois!!
      { id: 10, nome: "Pendrive", video: Pendrive },
      { id: 11, nome: "HD", video: Hd },
      { id: 12, nome: "Wi-Fi", video: Wifi },
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
      <div className="arrasta-page-wrapper">
        <div className="arrasta-container-main">

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
                        <img
                            src={item.video}
                            title={item.nome}
                            className="mini-video"
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
                           <img
                              src={itemColocado.video}
                              title={itemColocado.nome}
                              className="mini-video"
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
    </>
  );
}