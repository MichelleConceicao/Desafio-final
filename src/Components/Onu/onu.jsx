import React from "react";
import * as S from "./OnuStyle.js";
import { Link } from "react-router-dom";

export default function App() {
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
      <h1>Melhorias para o bairro!</h1>
      <S.Text1>
        <h3>Limpeza das Ruas.</h3>
        <p></p>
      </S.Text1>
      <S.Text2>
        <h3>Reciclagem do Lixo.</h3>
        <p></p>
      </S.Text2>
      <S.Text3>
        <h3>Iluminação.</h3>
        <p></p>
      </S.Text3>
    </S.Box>
  );
}
