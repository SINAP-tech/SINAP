import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoComp from "../components/videosComp";
import '../components/videoCSS.css'

export default function Internet(){
    const VideosData = [
    {
      titulo: 'O que é Software?',
      descricao: 'Entenda o conceito de internet',
      topicos: ['WWW', 'HTTPS'],
      videoUrl: ''
    },
    {
      titulo: 'Sistemas Operacionais(S.O).',
      descricao: 'Entenda o que é um e recomendações.',
      topicos: ['Linux x Windows', 'Mac x Windows'],
      videoUrl: ''
    },
    {
      titulo: '',
      descricao: '',
      topicos: [''],
      videoUrl: ''
    },
    {
      titulo: '',
      descricao: '',
      topicos: [''],
      videoUrl: ''
    },
    {
      titulo: '',
      descricao: '',
      topicos: [''],
      videoUrl: ''
    },
    {
      titulo: '',
      descricao: '',
      topicos: [''],
      videoUrl: ''
    },
    {
      titulo: '',
      descricao: '',
      topicos: [''],
      videoUrl: ''
    },
    {
      titulo: '',
      descricao: '',
      topicos: [''],
      videoUrl: ''
    },
    {
      titulo: '',
      descricao: '',
      topicos: [''],
      videoUrl: ''
    },
]

    return(
        <>
        <Header/>
        <div className="introducaoo">
        <h1>Veja tudo sobre a Internet aqui!</h1>
        </div>
        <div className="card-wrapper">
                {VideosData.map((video, index) => (
                  <VideoComp
                    key={index}
                    titulo={video.titulo}
                    descricao={video.descricao}
                    topicos={video.topicos}
                    videoUrl={video.videoUrl}
                  />
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