import React from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../assets/logo-header.png";
import "../../styles/Home.css";

export default function Footer() {
  return (
    <footer className="footer-site">
      <div className="footer-container">
        
        {/* Bloco Esquerdo: Logo SINAP + Título + Descrição */}
        <div className="footer-brand">
          <img 
            src={logoHeader} 
            alt="Logo SINAP" 
            className="footer-logo-symbol" 
          />
          
          <div className="footer-brand-info">
            <h2>SINAP</h2>
            <p className="footer-subtitle">EDUCAÇÃO DIGITAL INCLUSIVA</p>
            <p className="footer-desc">
              Promovendo a inclusão digital através do ensino de informática em Língua Brasileira de Sinais (Libras). Um projeto feito por estudantes.
            </p>
          </div>
        </div>

        {/* Bloco Direito: Explore */}
        <div className="footer-nav">
          <h3>Explore</h3>
          <ul>
            <li>
              <Link to="/conceitos">Conceitos em Libras</Link>
            </li>
            <li>
              <Link to="/jogos">Jogos educativos</Link>
            </li>
            <li>
              <Link to="/contato">Fale com a equipe</Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Linha de Copyright */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2025 SINAP. Educação que inclui e transforma.
        </p>
      </div>
    </footer>
  );
}