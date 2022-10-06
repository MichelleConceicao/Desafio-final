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
    </S.Box>
  );
}