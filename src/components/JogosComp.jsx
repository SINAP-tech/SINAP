import React from "react";
import "./JogosCSS.css";

export default function JogosVideos() {
  return (
    <div className="jogos-wrapper">

      {/* Título principal */}
      <section className="titulo-principal">
        <br />
        <h1>Aprendendo de Forma Divertida</h1>
        <p className="descricao-principal">
          Aprenda informática de forma divertida! Nossos jogos foram
          desenvolvidos para reforçar o aprendizado dos conceitos técnicos
          de maneira lúdica e interativa, todos com suporte completo em Libras.
        </p>

        <p className="subinfo">
          🎮 Jogos educativos com vídeos em Libras produzidos pelos alunos
        </p>
      </section>

      {/* Indicadores */}
      <section className="indicadores">
        <div className="indicador-box">
          <h2>3</h2>
          <p>Jogos Disponíveis</p>
        </div>

        <div className="indicador-box">
          <h2>100%</h2>
          <p>Em Libras</p>
        </div>

        <div className="indicador-box">
          <h2>🖐️</h2>
          <p>Totalmente Acessível</p>
        </div>

        <div className="indicador-box">
          <h2>∞</h2>
          <p>Tentativas Ilimitadas</p>
        </div>
      </section>

      {/* Cards dos jogos */}
      <section className="cards-jogos">

        {/* Card 1 */}
        <div className="card-jogo">
          <h3>Quiz de Conceitos</h3>
          <p className="nivel beginner">Iniciante • ⏱️ 10 min</p>

          <ul className="lista">
            <li>Vídeos em Libras</li>
            <li>Feedback imediato</li>
            <li>Áudio descrição</li>
          </ul>

          <button className="btn-jogar">Jogar Agora</button>
        </div>

        {/* Card 2 */}
        <div className="card-jogo">
          <h3>Arrasta e Solta</h3>
          <p className="nivel beginner">Iniciante • ⏱️ 8 min</p>

          <ul className="lista">
            <li>Interação visual</li>
            <li>Feedback ao final</li>
            <li>Fácil e divertido</li>
          </ul>

          <button className="btn-jogar">Jogar Agora</button>
        </div>

        {/* Card 3 */}
        <div className="card-jogo">
          <h3>Descubra pelo Vídeo</h3>
          <p className="nivel intermediate">Intermediário • ⏱️ 12 min</p>

          <ul className="lista">
            <li>Vídeos dos alunos</li>
            <li>Dicas visuais</li>
            <li>Aprendizado colaborativo</li>
          </ul>

          <button className="btn-jogar">Jogar Agora</button>
        </div>

      </section>

      {/* Como funcionam os jogos */}
      <section className="como-funciona">
        <h2>Como Funcionam os Jogos</h2>

        <div className="funcionamento-container">

          {/* Item 1 */}
          <div className="funciona-item">
            <span className="num">1</span>
            <p className="texto-item">
              <strong>Instruções em Libras:</strong> todos os jogos incluem vídeos explicativos
              em Libras para garantir que você entenda completamente as regras e objetivos.
            </p>
          </div>

          {/* Item 2 */}
          <div className="funciona-item">
            <span className="num">2</span>
            <p className="texto-item">
              <strong>Feedback Visual e Sonoro:</strong> receba feedback imediato com sinais
              visuais, mensagens de apoio e efeitos sonoros.
            </p>
          </div>

          {/* Item 3 */}
          <div className="funciona-item">
            <span className="num">3</span>
            <p className="texto-item">
              <strong>Vídeos dos Alunos:</strong> vídeos em Libras produzidos pelos próprios
              alunos do SINAP, estimulando colaboração.
            </p>
          </div>

          {/* Item 4 */}
          <div className="funciona-item">
            <span className="num">4</span>
            <p className="texto-item">
              <strong>Tentativas Ilimitadas:</strong> jogue quantas vezes quiser e aprenda
              no seu próprio ritmo.
            </p>
          </div>

          {/* Item 5 */}
          <div className="funciona-item">
            <span className="num">5</span>
            <p className="texto-item">
              <strong>Audiodescrição:</strong> acessibilidade garantida para usuários com
              deficiência visual.
            </p>
          </div>

          {/* Item 6 */}
          <div className="funciona-item">
            <span className="num">6</span>
            <p className="texto-item">
              <strong>Pontuação e Progresso:</strong> acompanhe seu desempenho ao longo
              dos jogos.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}