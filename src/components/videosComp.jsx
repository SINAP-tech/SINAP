import React from "react"
// import './videoCSS.css';

export default function VideoComp({titulo, descricao, topicos, videoUrl}){
    let embedURL = videoUrl;

        if (videoUrl.includes("watch?v=")) {
            embedURL = videoUrl.replace("watch?v=", "embed/");
        } else if (videoUrl.includes("youtu.be/")) {
            embedURL = videoUrl.replace("youtu.be/", "www.youtube.com/embed/");
        }

    return(
        <div className='card'>
            <div className="card-header">
                <h2> 
                    {titulo}
                </h2>
                <span className="icon">🎥</span>
            </div>
            <p className="descricao">{descricao}</p>


            {/*  Aqui onde fica o espaço pro vídeo, tlg?*/}
            <div className="video-frame">
                <iframe 
                width='100%'
                height='250'
                src={embedURL}
                titulo={titulo}
                allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
            <div className="topicos">
                <p className="topicos-titulo">Tópicos abordados: </p>
                {topicos.map((item, index) => (
                    <span key={index} className="topico-tag">{item}</span>
                ))}
            </div>

            <button className="btn-libras">Assistir</button>
        </div>

    )
}