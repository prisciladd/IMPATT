import styled from "styled-components";

const ScrollableContainer = styled.div`
  overflow-y: auto;
  width: 40%;
  height: 300px; /* 100 - Defina a altura desejada para o contêiner de rolagem */

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background: #173f55;
  padding: 0px 1px 1px 8px;
  width: 20%;
  height: 20%;
  margin-top: 10%;

  @media (max-width: 600px) {
    font-size: 22px;
    width: 100%;
    height: 25%;
    margin-top: 10%;
  }
`;

const Titulo = styled.h3`
  margin: 0;
  font-family: "EurostileBold", "Trebuchet MS", sans-serif;
  color: #ebeaea;
  font-size: 100%;
  font-weight: 300; /* Deixa a fonte mais magra */
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Rotulo = styled.span`
  margin: 0;
  font-family: "EurostileLTStd", "Trebuchet MS", sans-serif;
  font-size: 85%;
  color: #ebeaea;
  font-weight: 300;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export { ItemCard, Titulo, Rotulo, ScrollableContainer };
