import Law from '../assets/LourencoIMG.jpeg'
import Thata from '../assets/ThataIMG.jpeg';
import Daiane from '../assets/DaianeIMG.png'
import Tototz from '../assets/ArthurIMG.jpeg';

import "../pages/Home.css";

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="feature-card">
        <h4>📘 Conceitos Fundamentais</h4>
        <p>
          Aprenda desde o básico até conceitos avançados de informática de forma
          clara e didática.
        </p>
        <small>Hardware • Software • Redes</small>
      </div>
      <div className="feature-card">
        <h4>🎞️ Vídeos em Libras</h4>
        <p>
          Conteúdo criado por estudantes, garantindo uma comunicação autêntica e
          acessível.
        </p>
        <small>Interpretação • Legendas • Qualidade</small>
      </div>
      <div className="feature-card">
        <h4>🎮 Jogos Educativos</h4>
        <p>
          Aprenda brincando com jogos interativos que reforçam o aprendizado de
          forma divertida.
        </p>
        <small>Quiz • Memória • Simuladores</small>
      </div>
      <div className="Sobre-nos">
        <h1>Nossa Equipe</h1> 
        <p>Esse projeto é desenvolvido por estudantes do Instituto Federal de Ciencias, Educação e Tecnologias do Maranhão(IFMA) - Campus Timon</p>
  
      <div className='SecLayer'>
        
        <div className="card-sobrenos">
          <img src={Daiane} className='images-ph' />
          <p className='nome'>Daiane da Silva Algarves Castelo Branco</p>
          <p className='desc'>Orientadora</p>
          <p className='arroba'>Rede Social: @daianealgarves</p>
        </div>
        <div className="card-sobrenos">
          <img src={Thata} className='images-ph' />
          <p className='nome'>Thamyres Vargas Sales</p>
          <p className='desc'>Estudante</p>
          <p className='arroba'>Rede Social: @thamyres._.vargas._.sales</p>
        </div>
        <div className="card-sobrenos">
          <img src={Law} className='images-ph' />
          <p className='nome'>Lourenço Silva Aguiar</p>
          <p className='desc'>Estudante</p>
          <p className='arroba'>Rede Social: @lourencoo.lolo </p>
        </div>
        <div className="card-sobrenos">
          <img src={Tototz} className='images-ph' />
          <p className='nome'>Arthur lopes Conceição</p>
          <p className='desc'>Estudante</p>
          <p className='arroba'>Rede Social: @arthur_lp.tz</p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default FeaturesSection;