import React from "react";
import * as S from "./ProjetosStyle.js";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <S.Box>
      <nav>
        <S.Ul>
          <Link style={{ textDecoration: "none", color: "White" }} to="/">
            <li>Home</li>
          </Link>
          <Link style={{ textDecoration: "none", color: "White" }} to="/Onu">
            <li>Onu</li>
          </Link>
        </S.Ul>
      </nav>
      <h1>Projetos</h1>
    </S.Box>
  );
}