import React from "react";
import {
  Content,
  Box,
  FotoUsuario,
  Rotulo,
  DadosUsuario,
  DadosCurso,
  BotaoCardUsuario,
  Botoes,
} from "./Styles.js";

// const Content = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: end;
//   //width: 100%;
//   @media (max-width: 600px) {
//     width: 100%;
//   }
// `;

// const Box = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: row;
//   width: 698px;
//   background: #dfdfdf;
//   margin-top: 75px;
//   padding: 9px;
//   border: solid #aeaeae;
//   border-radius: 10px;

//   @media (max-width: 600px) {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//   }
// `;

// const FotoUsuario = styled.img`
//   width: 45px;
//   height: 45px;
//   margin-right: 2px;
//   background-image: url("/user.png");
//   background-size: cover;
//   background-position: center;
//   @media (max-width: 600px) {
//     width: 40px;
//     height: 40px;
//   }
// `;

// const Rotulo = styled.span`
//   font-family: "EurostileLTStd", "Trebuchet MS", sans-serif;
//   color: #313131;
//   font-weight: bold;
//   font-weight: 300;
//   @media (max-width: 600px) {
//     font-size: 15px;
//   }
// `;

// const DadosUsuario = styled.div`
//   display: flex;
//   //flex: 1;
//   flex-direction: column;
// `;

// const DadosCurso = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 600px) {
//     justify-content: start;
//     align-items: start;
//   }
// `;

// const Botoes = styled.div`
//   display: flex;
//   margin-top: 10px;
//   flex-direction: row;

//   @media (max-width: 600px) {
//     justify-content: end;
//     align-items: end;
//   }
// `;

// const BotaoCardUsuario = styled.button`
//   background-color: ${(props) => props.backgroundColor};
//   color: #fff;
//   padding: 10px 20px;
//   margin: 5px;
//   border: 3px;
//   border-radius: 7px;
//   cursor: pointer;
//   font-family: "EurostileBold", "Trebuchet MS", sans-serif;
//   font-weight: 800;
//   transition: transform 0.3s, box-shadow 0.3s;
//   transform-style: preserve-3d;
//   perspective: 1000px;
//   background: linear-gradient(
//     0deg,
//     ${(props) => props.backgroundColorPrimaria} 0%,
//     ${(props) => props.backgroundColorSecundaria} 100%
//   );
// `;
function User() {
  const botaoSairColorPrimaria = "#bd362f";
  const botaoSairColorSegundaria = "#ee5f5b";
  const botaoAreaAlunoColorPrimaria = "#222222";
  const botaoAreaAlunoColorSegundaria = "#555555";
  return (
    <>
      <Content>
        <Box>
          <FotoUsuario />
          <DadosUsuario>
            <Rotulo>Olá, Priscila</Rotulo>
            <Rotulo>RA: 1902059</Rotulo>
          </DadosUsuario>
          <DadosCurso>
            <Rotulo>Curso: Sistemas de Informação</Rotulo>
          </DadosCurso>
          <Botoes>
            <BotaoCardUsuario
              backgroundColorPrimaria={botaoAreaAlunoColorPrimaria}
              backgroundColorSecundaria={botaoAreaAlunoColorSegundaria}
            >
              Área do Aluno
            </BotaoCardUsuario>
            <BotaoCardUsuario
              backgroundColorPrimaria={botaoSairColorPrimaria}
              backgroundColorSecundaria={botaoSairColorSegundaria}
            >
              SAIR
            </BotaoCardUsuario>
          </Botoes>
        </Box>
      </Content>
    </>
  );
}

export default User;
