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
          <p>Reunião com os moradores para pedido de mais reponsabilidade com as necessidades de seu bichinhos de estimação os acompanhando durante os passeios e recolhendo a sujeira por eles deixadas. </p>
          <button onClick={() => closeFunction({ a: !state.a })}>Close</button>
        </Modal>
        <b />
        <S.Button2 onClick={() => closeFunction({ b: !state.b })}>
          <h4>Segurança</h4>
          <img src={Segurança} alt="Segurança" title="Segurança" />
        </S.Button2>
        <Modal closeFunction={closeFunction} isOpen={state.b}>
          <h2>Segurança</h2>
          <img src={Segurança} alt="Segurança" title="Segurança" />
          <p>Reunião junto aos moradores para a implementação de cameras de segurança no portão de entrada da rua com monitoramento ao vivo pelo moradores.</p>
          <button onClick={() => closeFunction({ b: !state.b })}>Close</button>
        </Modal>
        <b />
        <S.Button3 onClick={() => closeFunction({ c: !state.c })}>
          <h4>Calçadas</h4>
          <img src={Calçadas} alt="Calçadas" title="Calçadas" />
        </S.Button3>
        <Modal closeFunction={closeFunction} isOpen={state.c}>
          <h2>Calçadas</h2>
          <img src={Calçadas} alt="Calçadas" title="Calçadas" />
          <p>Pedido junto a prefeitura do Município para reforma e padronização das calçadas, assim proporcionando maior acessibilidade a pessoas deficientes fisicas.</p>
          <button onClick={() => closeFunction({ c: !state.c })}>Close</button>
        </Modal>
        <b />
        <S.Button4 onClick={() => closeFunction({ d: !state.d })}><h4>Arborização</h4>
        <img src={Arborização} alt="Arborização" title="Arborização" /></S.Button4>
        <Modal closeFunction={closeFunction} isOpen={state.d}>
          <h2>Arborização</h2>
          <img src={Arborização} alt="Arborização" title="Arborização" />
          <p>Fazer uma reunião com moradores sobre preservação e plantio de novas arvores pelas calças do município.</p>
          <button onClick={() => closeFunction({ d: !state.d })}>Close</button>
        </Modal>
        <b />
        <S.Button5 onClick={() => closeFunction({ e: !state.e })}><h4>Reciclagem</h4>
        <img src={Reciclagem} alt="Reciclagem" title="Reciclagem" /></S.Button5>
        <Modal closeFunction={closeFunction} isOpen={state.e}>
          <h2> Reciclagem </h2>
          <img src={Reciclagem} alt="Reciclagem" title="Reciclagem" />
          <p>Fazer pedido junto a prefeitura de tonéis de lixo reciclável para serem colocadas nas esquinas das ruas, e reunião com os moradores para que o descarte do lixo seja feito de maneira conciente.  </p>
          <button onClick={() => closeFunction({ e: !state.e })}>Close</button>
        </Modal>
        <hr />
    </S.Box>
  );
}
