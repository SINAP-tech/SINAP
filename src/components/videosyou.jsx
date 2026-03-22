import React from "react"
import './videoCSS.css';
import { Link } from "react-router-dom";

export default function Videosyou({titulo, descricao, videoUrl, caminho}){
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
            <button className="btn-libras"><Link to={caminho} style={{color: "white", textDecoration: 'none'}}>Veja tudo aqui</Link></button>
        </div>

    )
}