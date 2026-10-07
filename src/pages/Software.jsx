import React, { useEffect, useState } from "react";  

import { getVideos } from "../services/videoService";

import Header from "../components/navbar/Header";
import Footer from "../components/navbar/Footer";
import VideoComp from "../components/videosComp";
import SearchBar from "../components/button/barrapesquisa";
import VoltarArrow from "../components/input/button-back";

import '../styles/videoCSS.css'


export default function Softwares(){
   /* Aqui ta criando a const pra barra de pesquisa. */
    const [busca, setBusca] = useState("");

  //const para receber os vídeos
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {

          async function carregar() {

              try {

                  const lista = await getVideos('Software')

                  setVideos(lista)

              } catch (error) {

                  console.error(
                      'Erro ao carregar vídeos:',
                      error
                  )

              }

          }

          carregar()

      }, [])

 // normaliza texto (remove acento e caixa) barra de pesquis
  const normalize = (str = "") =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const q = normalize(busca.trim());

  const videosFiltrados = videos.filter(video => {
    if (!q) return true; // busca vazia → mostra tudo

    return (
      normalize(video.titulo).includes(q) ||
      normalize(video.descricao).includes(q) ||
      video.topicos.some(t => normalize(t).includes(q))
    );
  });
  
  console.log(videos);  
    return (
  <>
    <Header />
      <VoltarArrow/>
     {/* 🔍 Barra de pesquisa */}
     <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
     <SearchBar onSearch={setBusca} />
      </div>
            
      {/* Cards filtrados */}
      <div className="card-wrapper">
      {videosFiltrados.map((video, index) => (
      <VideoComp key={index} {...video} />
      ))}
      </div>

    {/* SEÇÃO EXTRA */}
    <div className="extra-secao">
      <h2 className="extra-titulo">Recursos Adicionais</h2>

      <div className="extra-container">
        <div className="extra-item">
          <div className="extra-icon">📚</div>
          <h3>Glossário em Libras</h3>
          <p>Dicionário de termos técnicos com sinais em Libras</p>
        </div>

        <div className="extra-item">
          <div className="extra-icon">🎯</div>
          <h3>Exercícios Práticos</h3>
          <p>Atividades para fixar o aprendizado</p>
        </div>

        <div className="extra-item">
          <div className="extra-icon">👥</div>
          <h3>Comunidade</h3>
          <p>Fórum para tirar dúvidas e compartilhar experiências</p>
        </div>
      </div>
    </div>

    <Footer />
  </>
);
} 