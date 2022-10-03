import React from "react";
import * as S from "./HomeStyle.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <S.Box>
        <S.Div>
          <S.H1>Michelle Pereira</S.H1>
        </S.Div>
        <nav>
          <S.Ul>
            <Link
              style={{ textDecoration: "none", color: "White" }}
              to="/Trabalhos"
            >
              <li>Projetos</li>
            </Link>
            <Link style={{ textDecoration: "none", color: "White" }} to="/Onu">
              <li>Onu</li>
            </Link>
          </S.Ul>
        </nav>
      </S.Box>
    </>
  );
}