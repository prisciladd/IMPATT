import React from "react";
import styled from "styled-components";
import { Box, BoxTitle, BoxText, List } from "../../styles/BoxStyles";
import CardMural from "./CardMural";

// const Styles = styled.div`
//   @media (min-width: 768px) {
//     #home {
//       display: flex;
//       flex-direction: row;
//     }
//   }

//   img {
//     width: 500px;
//     margin-left: 10px;
//   }

//   li {
//     margin-bottom: 3px;
//     padding: 5px;
//     background-color: #ffad39;
//   }

//   li:nth-child(n + 4) {
//     background-color: #e1e1e1;
//   }
// `;

const Titulo = styled.h1`
  font-family: "EurostileBold", "Trebuchet MS", sans-serif;
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
  /* justify-content: start;
  align-items: start; */
  //padding: 30px;

  @media (max-width: 600px) {
    //width: 100%;
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
