import QuizComp from "./QuizComp.jsx";
import Arrasta from "./Arrasta.jsx";
import ChoiceGame from "./Descubra.jsx";
import './modal.css'

export default function Modal({jogoSelecionado, fechar}){
    const jogos = {
        quiz: <QuizComp/>,
        arrasta: <Arrasta/>,
        descubra: <ChoiceGame/>
    }
    return(
        <>
        <div className="modal-overlay">
            <div className="modal-box">
                <button className="close-btn" onClick={fechar}>
                    X
                </button>
                {jogos[jogoSelecionado]}
            </div>
        </div>
        </>
    )
}