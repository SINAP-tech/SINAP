import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Modal from "./modalgames";
import "./JogosCSS.css";


export default function JogosVideos() {
  const [ AbrirModal, setAbrirModal] = useState(false)
  const jogos = [
    {
      nome: "Quiz de Conceitos",
      descricao: "Teste os seus conhecimentos escolhendo a alternativa correta para cada sinal apresentado no vídeo.",
      lista: ["Vídeos em Libras", "Feedback imediato", "Pratique nomes técnicos"],
      id: "quiz",
    },
    {
      nome: "Arrasta e Solta",
      descricao: "Associe o vídeo do sinal ao nome do componente de informática correto para completar o desafio.",
      lista: ["Interação visual", "Prática de memorização", "Sem limite de tempo"],
      id: "arrasta",
    },
    {
      nome: "Descubra pelo Vídeo",
      descricao: "Assista aos sinais feitos pelos alunos do SINAP e descubra qual conceito está sendo sinalizado.",
      lista: ["Vídeos dos alunos", "Aprendizado colaborativo", "Pratique a interpretação"],
      id: "descubra",
    },
  ];

  return (
    <>
      <Header />
      <div className="jogos-wrapper">
        {/* Título principal */}
        <section className="titulo-principal">
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
            <p>Jogos Ativos</p>
          </div>
          <div className="indicador-box">
            <h2>100%</h2>
            <p>Em Libras</p>
          </div>
          <div className="indicador-box">
            <h2>🖐️</h2>
            <p>Acessível</p>
          </div>
          <div className="indicador-box">
            <h2>∞</h2>
            <p>Tentativas Ilimitadas</p>
          </div>
        </section>

        {/* Cards dos jogos */}
        <section className="cards-jogos">
          {jogos.map((jogo, index) => (
            <div className="card-jogo" key={index}>

              <h3>{jogo.nome}</h3>
              <p className="resumo-jogo">{jogo.descricao}</p>
              
              <ul className="lista-features">
                {jogo.lista.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <button className="btn-jogar-card" onClick={(setAbrirModal(jogo.id))}>Jogar Agora</button>
            </div>
          ))}
        </section>  

        {AbrirModal && (
          <Modal
            JogoSelecionado={AbrirModal}
            fechar={() => setAbrirModal(false)}
          />
        )}

        {/* Como funcionam os jogos */}
        <section className="como-funciona-card">
  <h2>Como Funcionam os Jogos</h2>
  <div className="funcionamento-lista-vertical">
    {[
      { num: 1, texto: "Instruções em Libras: todos os jogos incluem vídeos explicativos em Libras para garantir que você entenda completamente as regras." },
      { num: 2, texto: "Feedback Visual: receba feedback imediato com sinais visuais e mensagens de apoio ao acertar ou errar." },
      { num: 3, texto: "Vídeos dos Alunos: aprenda com vídeos em Libras produzidos pelos próprios alunos do SINAP, estimulando a colaboração." },
      { num: 4, texto: "Tentativas Ilimitadas: jogue quantas vezes quiser e aprenda no seu próprio ritmo, sem pressão ou limite de tempo." },
    ].map((item) => (
      <div className="funciona-item" key={item.num}>
        <span className="num-circulo">{item.num}</span>
        <p className="texto-item"><strong>{item.texto}</strong></p>
      </div>
    ))}
  </div>
</section>
      </div>
    </>
  );
}