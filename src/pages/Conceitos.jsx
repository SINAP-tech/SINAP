import React from "react";

import Header from "../components/navbar/Header";
import Footer from "../components/navbar/Footer";
import Cabecalho from '../components/navbar/Cabecalho';
import Videos from '../components/videos'

import '../styles/Conceitos.css';

export default function Conceitos() {
    return(
        <>
        <div className="home">
        <Header />
        <Cabecalho />
        <Videos />
        <Footer />
        </div>
        </>
    )
}