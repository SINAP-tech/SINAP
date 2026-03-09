import React from "react";
import '../pages/Conceitos.css';
import VoltarArrow from "./button-back";


export default function Cabecalho() {
    return(
        <>
        <VoltarArrow/>
        <section className="cabeca">

            <h1>Conceitos em Informática em Libras</h1>
            <p>
                Aprenda os fundamentos da informática com vídeos explicativos em Língua Brasileira de Sinais (Libras), <br />
                 criados especialmente para garantir a acessibilidade e inclusão digital.
            </p>
        </section>
        </>
    )
}