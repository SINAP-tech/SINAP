import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoComp from "../components/videosComp";
import '../components/videoCSS.css'
import SearchBar from "../components/barrapesquisa";
import VoltarArrow from "../components/button-back";


export default function Internet(){
   /* Aqui ta criando a const pra barra de pesquisa. */
    const [busca, setBusca] = useState("");

    const VideosData = [
    {
      titulo: 'Internet',
      descricao: 'Aprenda o sinal de internet.',
      topicos: ['WWW, HTTP'],
      videoUrl: ''
    },
    {
      titulo: 'E-mails',
      descricao: 'Aprenda o sinal de E-mail',
      topicos: ['Meio de comunicação'],
      videoUrl: ''
    },
    {
      titulo: 'Fake News',
      descricao: 'Aprenda o sinal de Fake News.',
      topicos: ['Mentiras'],
      videoUrl: ''
    },
    {
      titulo: 'Site',
      descricao: 'Aprenda o sinal de site',
      topicos: ['Sites'],
      videoUrl: ''
    },
    {
      titulo: 'Anti-vírus',
      descricao: 'Aprenda o sinal de Anti-vírus',
      topicos: ['Segurança'],
      videoUrl: ''
    },
    {
      titulo: 'Vírus',
      descricao: 'Aprenda o sinal de Vírus',
      topicos: ['Segurança'],
      videoUrl: ''
    },
    {
      titulo: 'Informática',
      descricao: 'Aprenda o sinal de Informática',
      topicos: ['inf'],
      videoUrl: ''
    },
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

    return(
        <>
        <Header/>
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
                  {/* Glossário */}
                  <div className="extra-item">
                    <div className="extra-icon">📚</div>
                    <h3>Glossário em Libras</h3>
                    <p>Dicionário de termos técnicos com sinais em Libras</p>
                  </div>
        
                  {/* Exercícios */}
                  <div className="extra-item">
                    <div className="extra-icon">🎯</div>
                    <h3>Exercícios Práticos</h3>
                    <p>Atividades para fixar o aprendizado</p>
                  </div>
        
                  {/* Comunidade */}
                  <div className="extra-item">
                    <div className="extra-icon">👥</div>
                    <h3>Comunidade</h3>
                    <p>Fórum para tirar dúvidas e compartilhar experiências</p>
                  </div>
                </div>
              </div>
        <Footer/>
        </>

        /* ok, pensa, ce precisa de uma tela que mostre os videos naquela estrutura, ou seja, ce precisa salvar aquela estrutura em o projeto e depois 
        modificar para receber os caminhos para vir os caminhos, salva aqui a estrutura dos videos modifico a estrutura e retiro o objeto*/
    )
} 