import React from 'react';
import Header from '../components/navbar/Header';
import Footer from '../components/navbar/Footer';
import QuizComp from '../components/QuizComp';
import VoltarArrow from '../components/input/button-back';

export default function Quiz(){
    return (
        <>
            <Header />
            <QuizComp />
            <Footer />
        </>
    );
}

