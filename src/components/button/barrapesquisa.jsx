import React, { useState } from "react";
import '../../styles/cabe.css';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value); // Busca instantânea ao digitar
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit} role="search">
      <div className="search-wrapper">
        <span className="search-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
        
        <input
          type="text"
          placeholder="Pesquisar por conceito, sinal ou palavra-chave..."
          value={query}
          onChange={handleChange}
          className="search-input"
        />

        {query && (
          <button 
            type="button" 
            className="search-clear-btn"
            onClick={() => { setQuery(""); onSearch(""); }}
            title="Limpar pesquisa"
          >
            ✕
          </button>
        )}
      </div>
    </form>
  );
}