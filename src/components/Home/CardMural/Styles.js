import styled from "styled-components";

const ScrollableContainer = styled.div`
  overflow-y: auto;
  width: 40%;
  height: 100px; /* 100 - Defina a altura desejada para o contêiner de rolagem */

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ItemMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background: #dddddd;
  border: 1px solid black;
  padding: 0px 1px 1px 8px;
  width: 100%;
  height: 68%;
  margin-bottom: 6px;

  @media (max-width: 600px) {
    font-size: 22px;
    width: 100%;
    height: 55px;
  }
`;

const Titulo = styled.h3`
  margin: 0;
  font-family: "EurostileBold", "Trebuchet MS", sans-serif;
  color: #333333;
  font-size: 100%;
  font-weight: 300; /* Deixa a fonte mais magra */
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Rotulo = styled.span`
  margin: 0;
  font-family: "EurostileLTStd", "Trebuchet MS", sans-serif;
  font-size: 100%;
  color: #333333;
  font-weight: 300;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export { ItemMenu, Titulo, Rotulo, ScrollableContainer };
