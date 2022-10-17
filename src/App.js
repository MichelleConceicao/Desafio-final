import React from "react";
import Rotas from "./Services/rotas";
import { GlobalStyle } from "./Global/Styled.js";
import Modal from "react-modal";

Modal.setAppElement('#root')

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Rotas />
    </div>
  );
}
