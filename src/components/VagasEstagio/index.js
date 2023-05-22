import React from "react";
import styled from "styled-components";

import CardVagas from "./CardVagas";

const Titulo = styled.h1`
  font-family: "EurostileLTStd", "Trebuchet MS", sans-serif;
  color: #042b55;
  font-size: 40px;
  font-weight: 300; /* Deixa a fonte mais magra */

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #ecebeb;
  //background: #ecebeb;
`;

function VagasEstagio() {
  return (
    <>
      <Content>
        <Titulo>VAGAS PARA ESTÁGIO</Titulo>
        <CardVagas />
      </Content>
    </>
  );
}

export default VagasEstagio;
