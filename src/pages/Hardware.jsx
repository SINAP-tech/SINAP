import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoComp from "../components/videosComp";
import '../components/videoCSS.css'
import SearchBar from "../components/barrapesquisa";
import VoltarArrow from "../components/button-back";


export default function Hardware(){
  /* Aqui ta criando a const pra barra de pesquisa. */
  const [busca, setBusca] = useState("");
  
  const VideosData = [
    {
      titulo: 'Hardware',
      descricao: 'Aprenda o sinal de Hardware.',
      topicos: ['Hardware', 'Parte Física'],
      videoUrl: 'https://www.youtube.com/watch?v=31kQ9YxWZH0'
    },
    {
      titulo: 'Placa-mãe',
      descricao: 'Saiba como fazer o sinal de "placa-mãe".',
      topicos: ['Placa-mãe', 'Tipos e tamanhos'],
      videoUrl: ''
    },
    {
      titulo: 'Armazenamento, SSD, HD',
      descricao: 'Entenda como fazer o sinal de HD e SSD.',
      topicos: ['Temporária', 'Permanente'],
      videoUrl: ''
    },
    {
      titulo: 'Processador CPU',
      descricao: 'Aprenda o sinal de processador.',
      topicos: ['Cores', 'Frequencia'],
      videoUrl: ''
    },
    {
      titulo: 'Memória RAM',
      descricao: 'Aprenda o sinal da memória RAM.',
      topicos: ['Tamanho', 'Dual-Channel'],
      videoUrl: ''
    },
    {
      titulo: 'Periféricos',
      descricao: 'Aprenda a falar periféricos e exemplos.',
      topicos: ['Mouse', 'teclado'],
      videoUrl: ''
    },
    {
      titulo: 'Placa de vídeo',
      descricao: 'Aprenda o sinal de "Placa de Vídeo"',
      topicos: ['GPU'],
      videoUrl: ''
    },
    {
      titulo: 'Fonte de Alimentação',
      descricao: 'Aprenda o sinal de "Fonte".',
      topicos: ['Fonte'],
      videoUrl: ''
    },
    {
      titulo: 'Gabinete',
      descricao: 'Saiba o sinal de Gabinete.',
      topicos: [''],
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