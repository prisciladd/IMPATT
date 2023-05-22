import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;

  @media (max-width: 600px) {
    padding: 0px;
    width: 70%;
    justify-content: start;
    align-items: start;
    //overflow-y: scroll; /* ou overflow-y: scroll; */
  }
`;

const ItemMenu = styled.div`
  background: #dddddd;
  border: 1px solid black;
  padding: 0px 1px 1px 8px;
  width: 70%;
  //height: 100%;
  margin-bottom: 6px;

  @media (max-width: 600px) {
    font-size: 22px;
    width: 150%;
    //height: 1%;
  }
`;

const Titulo = styled.h3`
  font-family: "EurostileLTStd", "Trebuchet MS", sans-serif;
  color: #333333;
  font-size: 16px;
  font-weight: 300; /* Deixa a fonte mais magra */
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Rotulo = styled.span`
  font-family: "EurostileLTStd", "Trebuchet MS", sans-serif;
  color: #9e9e9e;
  //font-weight: bold;
  font-weight: 300;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const Descricao = styled.p`
  font-weight: 500;
  font-family: "EurostileLTStd", "Trebuchet MS", sans-serif;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5); /* Sombra 3D */
`;

const LinhaDivisao = styled.hr`
  border: none;
  border-top: 2px solid #ffffff; /* Linha branca */
  margin: 10px 0;
`;

export { Content, ItemMenu, Titulo, Rotulo, Descricao, LinhaDivisao };
