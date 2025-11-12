import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.css";
import logoHeader from "../assets/logo-header.png";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logoHeader} alt="Logo SINAP" className="header-logo" />
        <div>
          <h1 className="header-title">SINAP</h1>
          <p className="header-subtitle">Educação Inclusiva</p>
        </div>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link> |
        <Link to="/conceitos">Conceitos em Informática em Libras</Link> |
        <Link to="/jogos">Jogos</Link> |
        <Link to="/contato">Contato</Link> 
      </nav>
    </header>
  );
}

export default Header;