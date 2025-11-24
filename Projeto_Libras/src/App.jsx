import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Conceitos from "./pages/Conceitos";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conceitos" element={<Conceitos />} />
        <Route path="/jogos" element={<div>Jogos</div>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;