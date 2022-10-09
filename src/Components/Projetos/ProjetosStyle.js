import styled from "styled-components";

export const Box = styled.div`
  background-image: url(https://webenezer.com.br/wp-content/uploads/2017/08/fundo-portfolio-mobile-webenezer-1.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  object-fit: cover;
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
    color: #7fffd4;
  }
`;

export const Div = styled.div`
  left: 24%;
  top: 20vh;
  position: absolute;
  display: flex;
  width: 50%;
  height: 20vh;
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

export const A = styled.a`
  color: #000000;
`;
export const Box1 = styled.div`
  position: relative;

  flex-flow: row wrap;
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  position: absolute;
  top: 55vh;
  left: -1%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: relative;
    flex-flow: column nowrap;
    width: 30%;
    height: 30vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    top: 41vh;
    left: 56%;
  }
`;
export const Img = styled.img`
  width: 20%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    width: 40%;
  }
`;
export const Section = styled.section`
  position: relative;
  flex-flow: row wrap;
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  position: absolute;
  top: 48vh;
  left: -5%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: relative;
    flex-flow: column nowrap;
    width: 60%;
    height: 25vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    top: 41.9vh;
    left: 23%;
  }
`;
export const H3 = styled.h3`
  position: absolute;
  display: flex;
  font-family: "Staatliches", cursive;
  font-size: 21px;
`;
