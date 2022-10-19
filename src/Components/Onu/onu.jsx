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
  const [state, setState] = useState({ a: false, b: false });
  const closeFunction = (change) => setState({ state, ...change });

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
      <b />
        <S.Button1 onClick={() => closeFunction({ a: !state.a })}>
          <h4>Limpeza</h4>
          <img src={Limpeza} alt="Limpeza" title="Limpeza" />
        </S.Button1>{" "}
        <Modal
          dialogue
          closeFunction={() => closeFunction({ a: !state.a })}
          isOpen={state.a}
        >
          <h4>Limpeza</h4>
          <img src={Limpeza} alt="Limpeza" title="Limpeza" />
          <p>Limpeza</p>
          <button onClick={() => closeFunction({ a: !state.a })}>Close</button>
        </Modal>
        <b />
        <S.Button2 onClick={() => closeFunction({ b: !state.b })}>
          <h4>Segurança</h4>
          <img src={Segurança} alt="Segurança" title="Segurança" />
        </S.Button2>
        <Modal closeFunction={closeFunction} isOpen={state.b}>
          <img src={Segurança} alt="Segurança" title="Segurança" />
          <h2>Segurança</h2>
          <p></p>
          <button onClick={() => closeFunction({ b: !state.b })}>Close</button>
        </Modal>
        <b />
        <S.Button3 onClick={() => closeFunction({ c: !state.c })}>
          <h4>Calçadas</h4>
          <img src={Calçadas} alt="Calçadas" title="Calçadas" />
        </S.Button3>
        <Modal closeFunction={closeFunction} isOpen={state.c}>
          <img src={Calçadas} alt="Calçadas" title="Calçadas" />
          <h2>Calçadas</h2>
          <p></p>
          <button onClick={() => closeFunction({ c: !state.c })}>Close</button>
        </Modal>
        <b />
        <S.Button4 onClick={() => closeFunction({ d: !state.d })}><h4>Arborização</h4>
        <img src={Arborização} alt="Arborização" title="Arborização" /></S.Button4>
        <Modal closeFunction={closeFunction} isOpen={state.d}>
        <img src={Arborização} alt="Arborização" title="Arborização" />
          <h2>Arborização</h2>
          <p></p>
          <button onClick={() => closeFunction({ d: !state.d })}>Close</button>
        </Modal>
        <b />
        <S.Button5 onClick={() => closeFunction({ e: !state.e })}><h4>Reciclagem</h4>
        <img src={Reciclagem} alt="Reciclagem" title="Reciclagem" /></S.Button5>
        <Modal closeFunction={closeFunction} isOpen={state.e}>
        <img src={Reciclagem} alt="Reciclagem" title="Reciclagem" />
          <h2>Reciclagem</h2>
          <p>- </p>
          <button onClick={() => closeFunction({ e: !state.e })}>Close</button>
        </Modal>
    </S.Box>
  );
}
