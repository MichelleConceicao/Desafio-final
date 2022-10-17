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
export const Section = styled.section`
    width: 55%;
    margin: 0 auto;
    @media screen and (min-width: 500px) and (max-width: 800px){
        width: 75%;
    }
    @media screen and (min-width: 320px) and (max-width: 499px){
        width: 90%;
    }
`
export const H1 = styled.h1`
  font-family: "Times New Roman";
  letter-spacing: 0.2vw;
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
  width: 99%;
  font-size: 40px;
  height: 30vh;

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
export const Box1 = styled.div`
  height: 20vh;
  margin-left: 20%;
  margin-top: -1%;
  opacity: 60%;
  display:flex;
  
`;
export const Box2 = styled.div`
  height:20vh;
  margin-left: 43%;
  margin-top: -10%;
  opacity: 60%; 
  display:flex;
  
`;
export const Box3 = styled.div`
  height:20vh;
  margin-left: 68%;
  margin-top: -10%;
  opacity: 60%; 
  display:flex;
  
`;
export const Box4 = styled.div`
  height: 20vh;
  margin-left: 30%;
  margin-top: 5%;
  opacity: 60%;
  display:flex;
  
`;
export const Box5 = styled.div`
  height: 20vh;
  margin-left: 54%;
  margin-top: -10%;
  opacity: 60%;
  display:flex;
  
`;
export const Button = styled.button`
  width:150px;
  padding: 2rem 0.5rem;
  border-radius: 100px;
  justify-content: space-around;
  align-items: center;
  border: none;
  cursor: pointer;
 
  
  
  h3 {
    margin-right: 0.5rem;
    font-family: "Times New Roman";
    font-size: clamp(1rem, 1.vw, 1.5rem);
    color: #333;
    text-shadow: 0.1em 0.1em 3f3f3f;
    text-align: center;
  }
  img {
    width: 80px;
    aspect-ratio: 1;
    
  }
  :nth-child(1) {
    background-color: #E6E6FA;
    
  }
  :nth-child(2) {
    background-color: #E6E6FA;
    opacity: 10%;
  }
  :nth-child(3) {
    background-color: #E6E6FA;
    
  }
  :nth-child(4) {
    background-color: #E6E6FA;
    
    
  }
  :nth-child(5) {
    background-color: #E6E6FA;
    
  }
`;

export const Modal = styled.div`
  font-family: "Times New Roman";
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  row-gap: 1rem;
  color: #333;

  button {
    padding: 2.5em 1em;
    border-radius: 10px;
    font-size: clamp(1rem, 1.2vw, 1.4rem);
    font-family: "Times New Roman";
    font-weight: var(--fw-700);
    cursor: pointer;
  }
  img {
    width:50%;
    align-items: center;
  }
  h4 {
    font-size: clamp(2rem, 3vw, 3.5rem);
    font-family: "Times New Roman";
    font-weight: var(--fw-700);
    color: var(--clr-light);
  }
  p {
    max-width: 55ch;
    font-size: clamp(1rem, 1.5vw, 3.5rem);
    font-family: var(--ff-one);
    font-weight: var(--fw-400);
    color: var(--clr-light);
    text-align: center;
  }
  @media screen and (max-width: 38em) {
    padding: 1rem 0.5rem;
  }
`;
