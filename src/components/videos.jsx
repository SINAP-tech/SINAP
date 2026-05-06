import '../styles/JogosCSS.css';
import { Link } from 'react-router-dom';
import Videosyou from "./videosyou";

export default function Videos() {

  const VideosData = [
    {
      titulo: 'Hardware',
      descricao: 'Aprenda o sinal de hardware e clique em "Veja tudo aqui" para ver mais sobre os sinais dos componentes físicos aqui.',
      videoUrl: 'https://youtu.be/zZC8_aUMiEM',
      caminho: '/hardwarevideos'
    },
    {
      titulo: 'Software',
      descricao: 'Aprenda qual o sinal de Software e clique em "Veja tudo aqui" para ver mais sobre os sinais sobre o conteúdo de softwares aqui.',
      videoUrl: 'https://youtu.be/B3hNTyK1S0w',
      caminho:'/softwarevideos'
    },
    //Po, esse vídeo é muito bom, ele ta apresentando diversos conteúdos que vamos por aqui,
    // que coisa boa, oh homi de Deus. Espero que não seja necessário imitar a boca dele...
    {
      titulo: 'Internet',
      descricao: 'Aprenda o Sinal de Software e clique em "Veja tudo aqui" para ver mais sobre os sinais sobre o conteúdo de internet.',
      videoUrl: 'https://youtu.be/Rn5ey7TjpeM',
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
            <h3>Jogos Práticos</h3>
            <p>Fixe o que aprendeu jogando!</p>
          </div>

          <div className="extra-item">
            <div className="extra-icon">👥</div>
            <h3>Fale Conosco</h3>
            <p>Entre em <Link to='/contato' className=''>Contato</Link> para tirar dúvidas ou fazer um feedback.</p>
            {/* <div className="extra-icon">👥</div>
            <h3>Comunidade</h3>
            <p>Fórum para tirar dúvidas e compartilhar experiências</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
