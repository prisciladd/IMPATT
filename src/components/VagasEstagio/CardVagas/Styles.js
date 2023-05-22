import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #dddddd;
  border: solid #aeaeae;
  border-radius: 10px;
  padding: 10px;
`;

const Titulo = styled.h3`
  font-family: "EurostileLTStd", "Trebuchet MS", sans-serif;
  color: #333333;
  font-size: 25px;
  font-weight: 300; /* Deixa a fonte mais magra */
  @media (max-width: 600px) {
    font-size: 22px;
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

export { Content, Titulo, Rotulo, Descricao, LinhaDivisao };
