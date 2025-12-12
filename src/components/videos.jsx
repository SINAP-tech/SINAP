import React, { useState } from "react";
import './JogosCSS.css';
import Videosyou from "./videosyou";
import SearchBar from "./barrapesquisa";

export default function Videos() {
  /* Aqui ta criando a const pra barra de pesquisa. */
  const [busca, setBusca] = useState("");
  /*Listando pra não precisar substituir tudo, chamar o componente várias vezes. */
  const VideosData = [
    {
      titulo: 'Hardware',
      descricao: 'Conheça os componentes físicos do computador',
      videoUrl: 'https://www.youtube.com/watch?v=cI-Nbhaq4Ls',
      caminho: '/hardwarevideos'
    },
    {
      titulo: 'Software',
      descricao: 'Entenda os programas e os sistemas operacionais (S.O)',
      videoUrl: 'https://www.youtube.com/watch?v=wSRtuC_BN10',
      caminho:'/softwarevideos'
    },
    {
      titulo: 'Internet',
      descricao: 'Aprenda sobre a internet e o que significa WWW',
      videoUrl: 'https://www.youtube.com/watch?v=vLvDDMYUZbE',
      caminho: '/internetvideos'
    }
  ];

  // normaliza texto: remove acentos e deixa tudo lowercase
  const normalize = (str = "") =>
    str
      .normalize("NFD")            // separa letras + diacríticos
      .replace(/[\u0300-\u036f]/g, "") // remove diacríticos
      .toLowerCase();

  const q = normalize(busca.trim());

  const videosFiltrados = VideosData.filter(video => {
    if (!q) return true; // se busca vazia, mostra todos

    // normaliza título e descrição
    const titulo = normalize(video.titulo);
    const descricao = normalize(video.descricao || "");

    // verifica se algum tópico combina
    const topicosMatch = (video.topicos || []).some(t =>
      normalize(t).includes(q)
    );

    return (
      titulo.includes(q) ||
      descricao.includes(q) ||
      topicosMatch
    );
  });

  return (
    <>
      {/* Barra de pesquisa */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <SearchBar onSearch={(texto) => setBusca(texto)} />
      </div>

      {/* Lista de vídeos filtrados */}
      <div className="card-wrapper">
        {videosFiltrados.map((video, index) => (
          <Videosyou
            key={index}
            titulo={video.titulo}
            descricao={video.descricao}
            videoUrl={video.videoUrl}
            caminho={video.caminho}
          />
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
    </>
  );
}