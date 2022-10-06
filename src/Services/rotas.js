import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/index.jsx";
import Projetos from "../Components/Projetos/projetos.jsx";
import Onu from "../Components/Onu/onu.jsx";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Onu" element={<Onu />} />
      </Routes>
    </Router>
  );
}
