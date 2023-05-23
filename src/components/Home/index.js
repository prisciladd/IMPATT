import React from "react";
import styled from "styled-components";
import CardMural from "./CardMural";

const Titulo = styled.h1`
  font-family: "EurostileBold", "Trebuchet MS", sans-serif;
  text-decoration: none solid rgb(0, 41, 83);
  color: #002953;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 800; /* Deixa a fonte mais magra */

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  //height: 100%; // estende a cor cinza de fundo

  @media (max-width: 600px) {
    //bypass
  }
`;

const Home = () => {
  return (
    <>
      <Titulo>MURAL DE RECADOS</Titulo>
      <Content>
        <CardMural />
      </Content>
    </>
  );
};

export default Home;
