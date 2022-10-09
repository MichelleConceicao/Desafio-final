import React from "react";
import * as S from "./ProjetosStyle.js";
import { Link } from "react-router-dom";
import TedioFlix from "../Assets/Tedioflix.png";
import DogApi from "../Assets/Dogapi.png";
import HP from "../Assets/Harry.png";
import Final from "../Assets/PFinal.png";

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
      <S.Div>
        <S.H1>Projetos</S.H1>
      </S.Div>
      <S.Box1>
        <S.Img src={TedioFlix} alt="" />
        <S.Img src={DogApi} alt="" />
        <S.Img src={HP} alt="" />
        <S.Img src={Final} alt="" />
      </S.Box1>
      <S.Section>
        <S.A href="https://github.com/MichelleConceicao/tedio-flix" target="">
          <S.H3>TedioFliX</S.H3>
        </S.A>
        <S.A href="https://github.com/MichelleConceicao/DogApi" target="">
          <S.H3>Dog API</S.H3>
        </S.A>
        <S.A
          href="https://github.com/MichelleConceicao/Desafio-HarryPotter"
          target=""
        >
          <S.H3>Harry Potter</S.H3>
        </S.A>
        <S.A
          href="https://github.com/MichelleConceicao/Desafio-final"
          target=""
        >
          <S.H3>Projeto Final</S.H3>
        </S.A>
      </S.Section>
    </S.Box>
  );
}