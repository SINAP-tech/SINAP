import React from "react";
import "../pages/conceitos.css"; // importa o CSS
import logo from "../assets/logo-banner.png"

export default function Videos() {
  return (
    <>
      <div className="pag">

        <div className="cards-container">
          {/* Card - Hardware */}
          <div className="card">
            <div className="card-header">
              <h2>Hardware</h2>
              <span className="icon">🎥</span>
            </div>

            <p className="descricao">
              Conheça os componentes físicos do computador
            </p>

            <div className="video-box">
              <img
                src={logo}
                alt="Logo Libras"
                className="libra-logo"
              />
              <p>Vídeo em Libras disponível</p>
            </div>

            {/* Tópicos abordados */}
            <div className="topicos">
              <p className="topicos-titulo">Tópicos abordados:</p>
              <div className="lista-topicos">
                <span className="topico-tag">Processador</span>
                <span className="topico-tag">Memória RAM</span>
                <span className="topico-tag">HD/SSD</span>
                <span className="topico-tag">Placa-mãe</span>
              </div>
            </div>

            <button className="btn-libras">Assistir em Libras</button>
          </div>

          {/* Card - Software */}
          <div className="card">
            <div className="card-header">
              <h2>Software</h2>
              <span className="icon">🎥</span>
            </div>

            <p className="descricao">
              Entenda os programas e sistemas operacionais
            </p>

            <div className="video-box">
              <img
                src={logo}
                alt="Logo Libras"
                className="libra-logo"
              />
              <p>Vídeo em Libras disponível</p>
            </div>

            {/* Tópicos abordados */}
            <div className="topics">
              <p className="topicos-titulo">Tópicos abordados:</p>
              <div className="lista-topicos">
                <span className="topico-tag">Windows</span>
                <span className="topico-tag">Linux</span>
                <span className="topico-tag">Aplicativos</span>
                <span className="topico-tag">Drivers</span>
              </div>
            </div>

            <button className="btn-libras">Assistir em Libras</button>
            </div>

          {/* Card - Internet */}
          <div className="card">
            <div className="card-header">
              <h2>Internet</h2>
              <span className="icon">🎥</span>
            </div>

            <p className="descricao">
              Navegue com segurança na rede mundial
            </p>

            <div className="video-box">
              <img
                src={logo}
                alt="Logo Libras"
                className="libra-logo"
              />
              <p>Vídeo em Libras disponível</p>
            </div>

            {/* Tópicos abordados */}
            <div className="topicos">
              <p className="topicos-titulo">Tópicos abordados:</p>
              <div className="lista-topicos">
                <span className="topico-tag">Navegadores</span>
                <span className="topico-tag">E-mail</span>
                <span className="topico-tag">Redes Sociais</span>
                <span className="topico-tag">Segurança</span>
              </div>
            </div>

            <button className="btn-libras">Assistir em Libras</button>
            </div>

          {/* Card - Arquivos e Pastas */}
          <div className="card">
            <div className="card-header">
              <h2>Arquivos e Pastas</h2>
              <span className="icon">🎥</span>
            </div>

            <p className="descricao">
              Organize seus documentos digitais
            </p>

            <div className="video-box">
              <img
                src={logo}
                alt="Logo Libras"
                className="libra-logo"
              />
              <p>Vídeo em Libras disponível</p>
            </div>

            {/* Tópicos abordados */}
            <div className="topicos">
              <p className="topicos-titulo">Tópicos abordados:</p>
              <div className="lista-topicos">
                <span className="topico-tag">Criar pastas</span>
                <span className="topico-tag">Salvar arquivos</span>
                <span className="topico-tag">Backup</span>
                <span className="topico-tag">Organização</span>
              </div>
            </div>

            <button className="btn-libras">Assistir em Libras</button>
          </div>
        </div>
      </div>

      <div className="extra-secao">
  <h2 className="extra-titulo">Recursos Adicionais</h2>

  <div className="extra-container">
    {/* Glossário */}
    <div className="extra-item">
      <div className="extra-icon">
        📚
      </div>
      <h3>Glossário em Libras</h3>
      <p>Dicionário de termos técnicos com sinais em Libras</p>
    </div>

    {/* Exercícios */}
    <div className="extra-item">
      <div className="extra-icon">
        🎯
      </div>
      <h3>Exercícios Práticos</h3>
      <p>Atividades para fixar o aprendizado</p>
    </div>

    {/* Comunidade */}
    <div className="extra-item">
      <div className="extra-icon">
        👥
      </div>
      <h3>Comunidade</h3>
      <p>Fórum para tirar dúvidas e compartilhar experiências</p>
    </div>
  </div>
</div>

    </>
  );
}
