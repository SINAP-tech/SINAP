import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Conceitos from "./pages/Conceitos";
import Contato from "./pages/Contato";
import Jogos from "./pages/Jogos";
import Hardware from "./pages/Hardware";
import Software from "./pages/Software";
import Internet from "./pages/Internet";
import QuizLibras from './pages/Quiz';
import Arrasta from './pages/Arrasta';
import DescubraVideo from './pages/DescubraVideo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conceitos" element={<Conceitos />} />
        <Route path="/jogos" element={<Jogos/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/hardwarevideos" element={<Hardware/>} />
        <Route path="/softwarevideos" element={<Software/>} />
        <Route path="/internetvideos" element={<Internet/>} />
        <Route path="/quiz-libras" element={<QuizLibras />} />
        <Route path="/arrasta-solta" element={<Arrasta />} />
        <Route path="/descubra-pelo-video" element={<DescubraVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;