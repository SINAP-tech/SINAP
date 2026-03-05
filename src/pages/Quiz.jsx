import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuizComp from '../components/QuizComp';
import VoltarArrow from '../components/button-back';

export default function Quiz(){
    return (
        <>
            <Header />
            <VoltarArrow/>
            <QuizComp />
            <Footer />
        </>
    );
}

