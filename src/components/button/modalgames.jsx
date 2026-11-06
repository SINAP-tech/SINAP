import React, { useEffect } from 'react';
import QuizComp from '../QuizComp.jsx';
import Arrasta from "../Arrasta.jsx";
import DescubraVideo from "../DescubraVideo.jsx";

import '../../styles/modal.css';

export default function Modal({ jogoSelecionado, fechar }) {
    const jogos = {
        quiz: <QuizComp />,
        arrasta: <Arrasta />,
        descubra: <DescubraVideo />
    };

    useEffect(() => {
        // Bloqueia a rolagem do fundo da página enquanto o modal estiver aberto
        document.body.style.overflow = 'hidden';
        
        // Permite fechar ao pressionar a tecla ESC
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') fechar();
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [fechar]);

    return (
        <div 
            className="modal-overlay" 
            onClick={(e) => e.target === e.currentTarget && fechar()}
            role="dialog"
            aria-modal="true"
        >
            <div className="modal-box">
                {/* Botão de Fechar com ícone X */}
                <button 
                    type="button" 
                    className="modal-close-btn" 
                    onClick={fechar}
                    aria-label="Fechar modal do jogo"
                    title="Fechar (Esc)"
                >
                    ✕
                </button>
                
                <div className="modal-game-content">
                    {jogos[jogoSelecionado]}
                </div>
            </div>
        </div>
    );
}