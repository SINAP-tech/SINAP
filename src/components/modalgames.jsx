import QuizComp from "./QuizComp.jsx";
import Arrasta from "./Arrasta.jsx";
import DescubraVideo from "./DescubraVideo.jsx";
import './modal.css'

export default function Modal({jogoSelecionado, fechar}){
    const jogos = {
        quiz: <QuizComp/>,
        arrasta: <Arrasta/>,
        descubra: <DescubraVideo/>
    }
    return(
        <>
        <div className="modal-overlay">
            <div className="modal-box">
                <button className="close-btn" onClick={fechar}>
                    Sair
                </button>
                {jogos[jogoSelecionado]}
            </div>
        </div>
        </>
    )
}