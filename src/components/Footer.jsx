import React from "react";
import "../pages/Home.css";
import logoHeader from "../assets/logo-header.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={logoHeader} alt="Logo SINAP" className="footer-logo" />
        <div>
          <h2>SINAP</h2>
          <p>Educação Digital Inclusiva</p>
          <p className="footer-desc">
            Promovendo a inclusão digital através do ensino de informática em
            Língua Brasileira de Sinais (Libras). Um projeto feito por
            estudantes.
          </p>
          <div className="footer-badges">
            <span>♿ Acessível</span>
            <span>🤟 Libras</span>
            <span>💯 Gratuito</span>
          </div>
        </div>
        <div className="footer-bottom">
        <p>© 2025 SINAP.</p>
      </div>
      </div>
      
    </footer>
  );
}

export default Footer;