import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/JogosCSS.css'
import JogosComp from '../components/JogosComp.jsx'

export default function Jogos(){
    return(
        <>
            <Header/>
            <JogosComp/>
            <Footer/>
        </>
    )
}