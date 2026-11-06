import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoHeader from "../../assets/logo-header.png";
import "../../styles/Home.css";

function HeaderIcon({ name }) {
  const icons = {
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    game: (
      <>
        <path d="M6 11h4" />
        <path d="M8 9v4" />
        <path d="M15 12h.01" />
        <path d="M18 10h.01" />
        <path d="M17.7 5H6.3A4.3 4.3 0 0 0 2 9.3v5.4A4.3 4.3 0 0 0 6.3 19l2.2-2h7l2.2 2a4.3 4.3 0 0 0 4.3-4.3V9.3A4.3 4.3 0 0 0 17.7 5Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  };

  return (
    <svg
      className="header-icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

export default function Header() {
  const location = useLocation();

  return (
    <header className="main-header">
      {/* Agora é uma DIV não clicável */}
      <div className="header-left">
        <img src={logoHeader} alt="Logo SINAP" className="header-logo" />
        <div className="header-brand-text">
          <h1 className="header-title">SINAP</h1>
          <p className="header-subtitle">Educação Digital</p>
        </div>
      </div>

      <nav className="nav-links" aria-label="Navegação principal">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <HeaderIcon name="home" />
          <span>Início</span>
        </Link>

        <Link to="/conceitos" className={location.pathname === "/conceitos" ? "active" : ""}>
          <HeaderIcon name="book" />
          <span>Aprender</span>
        </Link>

        <Link to="/jogos" className={location.pathname === "/jogos" ? "active" : ""}>
          <HeaderIcon name="game" />
          <span>Jogos</span>
        </Link>

        <Link to="/contato" className={location.pathname === "/contato" ? "active" : ""}>
          <HeaderIcon name="mail" />
          <span>Contato</span>
        </Link>
      </nav>
    </header>
  );
}