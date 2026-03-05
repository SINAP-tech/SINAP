import React from "react";
import './cabe.css'
import BackArrow from '../assets/back-arrow.png'

export default function VoltarArrow(){
    return(
        <>
            <div className="content">
                <button className="btn-back"><Link to={'/'}><img src={BackArrow} className="img"/></Link></button>
            </div>
        </>
    )
}