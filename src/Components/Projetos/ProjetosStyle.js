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
  top: 10vh;
  position: absolute;
  display: flex;
  width: 50%;
  height: 30vh;
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
  color: #fff;
  display: flex;
  align-items: center;
  -webkit-animation: TitleOne 2s ease-in-out infinite alternate;
  -moz-animation: TitleOne 2s ease-in-out infinite alternate;
  animation: TitleOne 2s ease-in-out infinite alternate;
  @keyframes TitleOne {
    from {
      text-shadow: 0 0 30px #4b0082, 0 0 20px #4b0082, 0 0 30px #e0ffff,
        0 0 40px #4b0082, 0 0 60px #e0ffff, 0 0 60px #4b0082, 0 0 70px#4B0082;
    }
    to {
      text-shadow: 0 0 20px #afeeee 0 0 30px #afeeee, 0 0 40px #afeeee,
        0 0 50px #afeeee, 0 0 60px#AFEEEE, 0 0 70px#E0FFFF, 0 0 80px #afeeee;
    }
  }
  justify-content: center;
  width: 50%;
  font-size: 80px;
  height: 40vh;

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
    top: 43vh;
    left: 55%;
  }
`;
export const Img = styled.img`
  width: 20%;
  transition: all 0.9s;
  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    width: 40%;
    transition: all 0.9s;
    &:hover {
      transform: scale(1.1);
    }
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
  color: #333;
  text-shadow: 0.1em 0.1em #e6e6fa;
`;