import React from "react";
import { useNavigate } from "react-router-dom";

import BackArrow from '../../assets/back-arrow.png'

import '../../styles/cabe.css'

export default function VoltarArrow(){
    const navigate = useNavigate()

    function voltar(){
        navigate(-1)
    }
    return(
        <>
            <div className="content">
                <button className="btn-back" onClick={voltar}><img src={BackArrow} className="img"/></button>
            </div>
        </>
    )
}