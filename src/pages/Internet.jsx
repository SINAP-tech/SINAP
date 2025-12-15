import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoComp from "../components/videosComp";
import '../components/videoCSS.css'
import SearchBar from "../components/barrapesquisa";


export default function Internet(){
   /* Aqui ta criando a const pra barra de pesquisa. */
    const [busca, setBusca] = useState("");

    const VideosData = [
    {
      titulo: 'O que é a Internet',
      descricao: 'Entenda o que é a internet.',
      topicos: ['WWW', 'HTTP'],
      videoUrl: ''
    },
    {
      titulo: 'Navegadores',
      descricao: 'Como navegar por essa grande rede?',
      topicos: ['Brave', 'Chrome'],
      videoUrl: ''
    },
    {
      titulo: 'E-mails e comunicação',
      descricao: 'As formas de se comunicar pela internet',
      topicos: ['Chats', 'App'],
      videoUrl: ''
    },
    {
      titulo: 'Cookies e Privacidade.',
      descricao: 'Seu rastreamento na internet, publicidade e anúncio.',
      topicos: ['Dados', 'Privacidade'],
      videoUrl: ''
    },
    {
      titulo: 'Fake News',
      descricao: 'As mentiras da internet.',
      topicos: ['Mentiras', 'Click Bait'],
      videoUrl: ''
    },
    {
      titulo: 'Pishing',
      descricao: 'Desconfie dos links que recebe.',
      topicos: ['Link falso', 'Letras'],
      videoUrl: ''
    },
    {
      titulo: 'Sites e URls',
      descricao: 'O que é um site?',
      topicos: ['Sites', 'App x Site'],
      videoUrl: ''
    },
    {
      titulo: 'Segurança',
      descricao: 'Segurança em primeiro lugar!',
      topicos: ['VPN', 'Proxy'],
      videoUrl: ''
    },
    {
      titulo: 'Dark e Deep Web',
      descricao: 'Os lugares mais obscuros da internet...',
      topicos: ['Dark Web', 'Deep Web '],
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