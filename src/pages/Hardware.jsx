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
      titulo: 'Placa-mãe',
      descricao: 'Saiba como falar "placa-mãe" e o que ela é.',
      topicos: ['Placa-mãe', 'Tipos e tamanhos'],
      videoUrl: ''
    },
    {
      titulo: 'Armazenamento, SSD, HD',
      descricao: 'Entenda como falar o nome das memórias e como elas funcionam.',
      topicos: ['Temporária', 'Permanente'],
      videoUrl: ''
    },
    {
      titulo: 'Processador CPU',
      descricao: 'Aprenda como funciona o processador.',
      topicos: ['Cores', 'Frequencia'],
      videoUrl: ''
    },
    {
      titulo: 'Memória RAM',
      descricao: 'Aprenda o que é uma memória volátio.',
      topicos: ['Tamanho', 'Dual-Channel'],
      videoUrl: ''
    },
    {
      titulo: 'Periféricos',
      descricao: 'Aprenda o que são periféricos e exemplos.',
      topicos: ['Mouse', 'teclado'],
      videoUrl: ''
    },
    {
      titulo: 'Placa de vídeo',
      descricao: 'O que são e para que servem',
      topicos: ['Espaço Própio', 'GPU'],
      videoUrl: ''
    },
    {
      titulo: 'Fonte de Alimentação',
      descricao: 'O que é e sua importância.',
      topicos: ['Voltagem', 'Recomendações'],
      videoUrl: ''
    },
    {
      titulo: 'Gabinete',
      descricao: 'Saiba o que é e para que serve.',
      topicos: [''],
      videoUrl: ''
    },
    {
      titulo: 'Dispositivos de Entrada e saída',
      descricao: 'Saiba o que significa e exemplos.',
      topicos: ['Microfone, teclado'],
      videoUrl: ''
    },
    {
      titulo: 'Vídeo interessante',
      descricao: 'Dá para usar, um pouco, de base para os vídeos que vamos produzir.',
      topicos: ['Microfone, teclado'],
      videoUrl: 'https://www.youtube.com/watch?v=31kQ9YxWZH0'
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