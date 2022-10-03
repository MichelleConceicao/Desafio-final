import styled from "styled-components";

export const Div = styled.div`
  left: 33%;
  top: 30vh;
  position: absolute;
  display: flex;
  width: 50%;
  height: 50vh;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: absolute;
    display: flex;
    width: 80%;
    height: 20vh;
    left: 10vw;
    top: 36vh;
    align-items: center;
    justify-content: center;
  }
`;
export const H1 = styled.h1`
  font-family: "Times New Roman";
  letter-spacing: 0.3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  font-size: 80px;
  height: 39vh;

  @media only screen and (min-width: 360px) and (max-width: 800px) {
    font-family: "Times New Roman";
    letter-spacing: 0.3vw;
    align-items: center;
    margin-bottom: 35vh;
    width: 100%;
    font-size: 32px;
    height: 30vh;
  }
`;

export const Box = styled.div`
  background-image: url(https://webenezer.com.br/wp-content/uploads/2017/08/fundo-portfolio-mobile-webenezer-1.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  h1:hover {
    align-items: center;
  }
`;
export const Ul = styled.ul`
  width: 100vw;
  height: 100px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  opacity: 30%;
  li:hover {
    cursor: pointer;
    color: whitesmoke;
  }
`;