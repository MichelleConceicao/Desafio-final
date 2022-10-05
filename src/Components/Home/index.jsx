import React from "react";
import * as S from "./HomeStyle.js";
import Foto from "../Img/Michelle.png";
import git from "../Img/git.png";
import face from "../Img/face.png";
import Linkedin from "../Img/in.png";

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
