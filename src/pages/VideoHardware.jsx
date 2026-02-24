import React from "react";
import "./VideoPage.css"; // vamos criar esse css
import { useNavigate } from "react-router-dom";

export default function VideoHardware() {
  const navigate = useNavigate();

  return (
    <div className="video-page">

      <button className="voltar" onClick={() => navigate("/conceitos")}>
        ⬅ Voltar
      </button>

      <div className="video-card">
        <h1 className="titulo">Vídeo: Hardware em Libras</h1>

        <p className="descricao">
          Assista ao vídeo explicando os componentes físicos do computador, 
          com tradução em Libras para facilitar o aprendizado.
        </p>

        <div className="video-container">
          <video controls>
            <source src="/videos/hardware.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
      </div>
    </div>
  );
}
