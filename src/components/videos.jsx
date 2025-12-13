import './JogosCSS.css';
import Videosyou from "./videosyou";

export default function Videos() {

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

  return (
    <>
      <div className="card-wrapper">
        {VideosData.map((video, index) => (
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
