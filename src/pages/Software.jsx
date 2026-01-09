import React, { useState } from "react";  
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoComp from "../components/videosComp";
import '../components/videoCSS.css'
import SearchBar from "../components/barrapesquisa";


export default function Softwares(){
   /* Aqui ta criando a const pra barra de pesquisa. */
   //Espero que funcione com vídeos listados...
    const [busca, setBusca] = useState("");
  
    const VideosData = [
    {
      titulo: 'O que é Software?',
      descricao: 'Aplicativos são softwares, entenda.',
      topicos: ['Chrome', 'Excel'],
      videoUrl: ''
    },
    {
      titulo: 'Sistemas Operacionais(S.O).',
      descricao: 'Entenda o que é um e recomendações.',
      topicos: ['Linux x Windows', 'Mac x Windows'],
      videoUrl: ''
    },
    {
      titulo: 'Drivers',
      descricao: 'Tradutor dos softwares.',
      topicos: ['O que faz', 'Importância'],
      videoUrl: ''
    },
    {
      titulo: 'Atualizações e patches.',
      descricao: 'Correções e atualizações.',
      topicos: ['Bugs', 'Melhorias'],
      videoUrl: ''
    },
    {
      titulo: 'Programas de segurança.',
      descricao: 'Aprenda sobre os programas de segurança.',
      topicos: ['Anti-vírus', 'Malware'],
      videoUrl: ''
    },
    {
      titulo: 'Licenças',
      descricao: 'Aprenda sobre licenças e para que servem.',
      topicos: ['Software Livre', 'Código fechado'],
      videoUrl: ''
    },
    {
      titulo: 'Interface do usuário(U.I).',
      descricao: 'Aprenda sobre interfaces.',
      topicos: ['Menus', 'Ícones'],
      videoUrl: ''
    },
    {
      titulo: 'Compatibilidade dos App.',
      descricao: 'Requisitos mínimos para utilizar um app.',
      topicos: ['Requisitos do sistema', 'Requisitos de hardware'],
      videoUrl: ''
    },
    {
      titulo: 'Programas em Segundo Plano.',
      descricao: 'Sobre o consumo de memória RAM.',
      topicos: ['CPU', 'RAM'],
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
  

    return (
  <>
    <Header />

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