import React from "react";
import * as S from "./HomeStyle.js";
import Foto from "../Assets/Michelle.png";
import git from "../Assets/git.png";
import face from "../Assets/face.png";
import Linkedin from "../Assets/in.png";

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
              to="/Projetos"
            >
              <li>Projetos</li>
            </Link>
            <Link style={{ textDecoration: "none", color: "White" }} to="/Onu">
              <li>Onu</li>
            </Link>
          </S.Ul>
        </nav>
        <S.Div1>
          <img src={Foto} alt="Michelle" />
        </S.Div1>
        <S.Div2>
          <a href="https://github.com/MichelleConceicao">
            <S.Image src={git} />
          </a>
          <a href="https://www.linkedin.com/in/michelle-pereira-092283239/">
            <S.Image src={Linkedin} />
          </a>
          <a href="https://www.facebook.com/michelle.daconceicaopereira">
            <S.Image src={face} />
          </a>
        </S.Div2>
      </S.Box>
    </>
  );
}
