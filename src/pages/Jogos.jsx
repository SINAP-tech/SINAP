import React from 'react';

import Header from '../components/navbar/Header.jsx';
import Footer from '../components/navbar/Footer.jsx';
import JogosComp from '../components/button/JogosComp.jsx';
import VoltarArrow from '../components/input/button-back.jsx';

import '../styles/JogosCSS.css';

export default function Jogos(){
    return(
        <>
            <Header/>
            <VoltarArrow/>
            <JogosComp/>
            <Footer/>
        </>
    )
}