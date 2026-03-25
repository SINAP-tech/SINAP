import QuizComp from "./QuizComp";
import Arrasta from "./Arrasta";
import ChoiceGame from "./Descubra";
import './modal.css'

export default function Modal({JogoSelecionado, Fechar}){
    const jogos = {
        quiz: <QuizComp/>,
        arrasta: <Arrasta/>,
        descubra: <ChoiceGame/>
    }
    return(
        <>
        <div className="modal-overlay">
            <div className="modal-box">
                <button className="close-btn" onClick={Fechar}>
                    X
                </button>
                {jogos[JogoSelecionado]}
            </div>
        </div>
        </>
    )
}