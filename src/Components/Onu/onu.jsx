import React, { useState } from "react";
import * as S from "./OnuStyle.js";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import Limpeza from "../Assets/limpeza.jpg";
import Segurança from "../Assets/segurançaRua.jpg";
import Calçadas from "../Assets/calçadas.jpg";
import Arborização from "../Assets/arborização.png";
import Reciclagem from "../Assets/reciclagemrua.jpg";

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal(){
    setIsOpen(true)
  }

  function handleCloseModal(){
    setIsOpen(false)
  }

  return (
    <S.Box>
      <nav>
        <S.Ul>
          <Link style={{ textDecoration: "none", color: "White" }} to="/">
            <li>Home</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "White" }}
            to="/Projetos"
          >
            <li>Projetos</li>
          </Link>
        </S.Ul>
      </nav>
      <hr />
      <S.Section>
        <S.H1>Melhorias para no bairro de Nilópolis</S.H1>
      </S.Section>
      <S.Box1>
        <S.Button onClick={handleOpenModal}>
         <h3>Limpeza</h3>
         <img src={Limpeza} alt="Limpeza" title="Limpeza" />
        </S.Button>
      </S.Box1>
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}>
        <h4>Limpeza</h4>
        <img src={Limpeza} alt="Limpeza" title="Limpeza" />
        <button onClick={handleCloseModal}>X</button>
        <div>Limpeza da cidade!</div>
          </Modal>
          <S.Box2>
          <S.Button onClick={handleOpenModal}>
        <h3>Segurança</h3>
        <img src={Segurança} alt="Segurança" title="Segurança" />
          </S.Button>
          </S.Box2>
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}>
        <h4>Segurança</h4>
        <img src={Segurança} alt="Segurança" title="Segurança" />
        <button onClick={handleCloseModal}>X</button>
        <div>Segurança da cidade!</div>
          </Modal>
          <S.Box3>
          <S.Button onClick={handleOpenModal}>
        <h3>Calçadas</h3>
        <img src={Calçadas} alt="Calçadas" title="Calçadas" />
          </S.Button>
          </S.Box3>
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}>
        <h4>Calçadas</h4>
        <img src={Calçadas} alt="Calçadas" title="Calçadas" />
        <button onClick={handleCloseModal}>X</button>
        <div>Vias acessiveis!</div>
          </Modal>
          <S.Box4>
          <S.Button onClick={handleOpenModal}>
        <h3>Arborização</h3>
        <img src={Arborização} alt="Arborização" title="Arborização" />
          </S.Button>
          </S.Box4>
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}>
        <h4>Arborização</h4>
        <img src={Arborização} alt="Arborização" title="Arborização" />
        <button onClick={handleCloseModal}>X</button>
        <div>Bairro verde!</div>
          </Modal>
          <S.Box5>
          <S.Button onClick={handleOpenModal}>
        <h3>Reciclagem</h3>
        <img src={Reciclagem} alt="Reciclagem" title="Reciclagem" />
          </S.Button>
          </S.Box5>
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}>
        <h4>Reciclagem</h4>
        <img src={Reciclagem} alt="AReciclagem" title="Reciclagem" />
        <button onClick={handleCloseModal}>X</button>
        <div>Reciclagem!</div>
          </Modal>
      </S.Box>  
  );
}
