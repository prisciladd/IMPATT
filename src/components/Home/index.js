import React from "react";
import styled from "styled-components";
import CardInformativo from "./CardInformativo";
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
    display: flex;
    flex-direction: column;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  //height: 100%; // estende a cor cinza de fundo

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const Informativo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  //height: 100%; // estende a cor cinza de fundo

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const BannerPropaganda = styled.img`
  width: 40%;
  height: 40%;
  margin-left: 3%;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    margin-left: 0%;
    margin-top: 5%;
  }
`;

const Home = () => {
  return (
    <>
      <Titulo>MURAL DE RECADOS</Titulo>
      <Content>
        <Main>
          <CardMural />
          <BannerPropaganda
            src="./banner.png"
            alt="Banner propaganda aos alunos "
          />
        </Main>
        <Informativo>
          <CardInformativo />
        </Informativo>
      </Content>
    </>
  );
};

export default Home;
