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
  @media only (min-width: 360px) (max-width: 800px) {
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
  width: 90%;
  font-size: 320%;
  height: 65vh;

  @media screen and (min-width: 360px) and (max-width: 800px) {
    font-family: "Times New Roman";
    letter-spacing: 0.4vw;
    align-items: ;
    margin-bottom: 40vh;
    width: 100%;
    height: 30vh;
    font-size: 220%;
   
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
    color: #7fffd4;
  }
`;

export const Div1 = styled.figure`
  width: 100%;
  height: 82%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 250px;
    height: 250px;
    border-radius: 40%;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const Div2 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  height: 30vh;
  top: 70vh;
  left: 25%;

  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: wrap;
    width: 70%;
    height: 10vh;
    top: 83vh;
    left: 18.8%;
  }
`;

export const Image = styled.img`
  display: flex;
  width: 100%;
  height: 7vh;

  @media only screen and (min-width: 360px) and (max-width: 800px) {
    width: 88%;
  }
`;
