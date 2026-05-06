import React, { useState } from "react";  
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoComp from "../components/videosComp";
import '../styles/videoCSS.css'
import SearchBar from "../components/barrapesquisa";
import VoltarArrow from "../components/button-back";


export default function Softwares(){
   /* Aqui ta criando a const pra barra de pesquisa. */
   //Espero que funcione com vídeos listados...
    const [busca, setBusca] = useState("");
  
    const VideosData = [
    {
      titulo: 'Software',
      descricao: 'Aprenda o sinal de software.',
      topicos: ['Softwares'],
      videoUrl: 'https://youtu.be/B3hNTyK1S0w'
    },
    {
      titulo: 'Sistemas Operacionais(S.O).',
      descricao: 'Aprenda o sinal de Sistema Operacional',
      topicos: ['Linux, Window, Mac'],
      videoUrl: 'https://youtu.be/rwLl2yuvxzk'
    },
    {
      titulo: 'Aplicativos',
      descricao: 'Aprenda o sinal de App.',
      topicos: ['App'],
      videoUrl: 'https://youtu.be/XyTf4zAeWiA'
    },
    {
      titulo: 'Navegador de Internet',
      descricao: 'Aprenda o sinal de Navegador',
      topicos: ['Explorer, Chrome'],
      videoUrl: 'https://youtu.be/WDV8y7GAnAA'
    },
    {
      titulo: 'Interface Gráfica',
      descricao: 'Aprenda o sinal de interface gráfica',
      topicos: ['UI(User Interface)'],
      videoUrl: 'https://youtu.be/P3WylZgEu_s'
    },
    // Precisamos de ideias?
]

 // normaliza texto (remove acento e caixa)
  const normalize = (str = "") =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const q = normalize(busca.trim());

  const videosFiltrados = VideosData.filter(video => {
    if (!q) return true; // busca vazia → mostra tudo

    return (
      normalize(video.titulo).includes(q) ||
      normalize(video.descricao).includes(q) ||
      video.topicos.some(t => normalize(t).includes(q))
    );
  });
  

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