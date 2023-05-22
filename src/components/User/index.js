import React from "react";
import styled from "styled-components";
import { BoxText } from "../../pages/Home/HomeStyles";
import px2vw from "../../utils/px2vw";

//import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepGray } from "@mui/material/colors";
import { width } from "@mui/system";

const Content2 = styled.div`
  //margin-top: 80px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    //margin-top: 80px;
  }
`;

const LogoUsuario = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const CardUsuario = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .fotoUsuario {
    display: flex;
    justify-content: end;
    align-items: end;
    @media (max-width: 600px) {
      justify-content: start;
      align-items: start;
    }
  }
  .dadosUsuario {
    display: flex;
    flex-direction: column;

    p {
      font-size: 12;
    }
  }
  .nomeCurso {
    display: flex;
    justify-content: start;
    align-items: start;
    font-size: 10;
  }
  .botoes {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// const Styles = styled.div`
//   display: flex;
//   justify-content: end;
//   width: 100%;
//   height: 100%;
//   margin-top: 60px;
//   /* @media (max-width: 600px) {
//     .user {
//       display: flex;
//       justify-content: center;
//       width: 100%;
//     }
//     .box {
//       display: flex;
//       justify-content: space-evenly;
//       align-items: center;
//       width: 100%;
//     }
//   } */

//   @media (max-width: 750) {
//     display: flex;
//     justify-content: end;
//     align-items: end;
//     //width: ${px2vw(320, 320)};
//     width: 350px;
//     padding: 100px;
//   }

//   .box {
//     border-radius: 5px;
//     background-color: #e1e1e1;
//     display: flex;
//     width: 100%;
//     margin: 5px;
//   }

//   img {
//     margin: 5px;
//     height: 40px;
//   }

//   button {
//     background-color: #454545;
//     border-color: #454545;
//     color: white;
//     border-radius: 5px;
//     height: 30px;
//     margin-top: 10px;
//     margin-right: 5px;
//   }

//   button:first-child {
//     background-color: #c73e38;
//     border-color: #c73e38;
//     margin-right: 5px;
//   }

//   strong {
//     padding: 5px;
//   }

//   .dadosUsuario {
//   }
//   .dadosCurso {
//   }
//   .botoes {
//   }
// `;

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  //width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 698px;
  background: #dfdfdf;
  margin-top: 75px;
  padding: 9px;
  border: solid #aeaeae;
  border-radius: 10px;

  @media (max-width: 600px) {
    //width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */

    //margin-top: 80px;
  }
`;

const FotoUsuario = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 2px;
  background-image: url("/user.png");
  background-size: cover;
  background-position: center;
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

const Rotulo = styled.span`
  font-family: "EurostileLTStd", "Trebuchet MS", sans-serif;
  color: #9e9e9e;
  font-weight: bold;
  font-weight: 300;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const DadosUsuario = styled.div`
  display: flex;
  //flex: 1;
  flex-direction: column;
`;

const DadosCurso = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Botoes = styled.div`
  display: row;
  //flex: 1;
  flex-direction: column;

  /* @media (max-width: 600px) {
    justify-content: end;
    align-items: end;
  } */
`;

const BotaoCardUsuario = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  padding: 10px 20px;
  margin: 5px;
  border: 3px;
  border-radius: 10px;
  cursor: pointer;
  font-family: "EurostileLTStd", "Trebuchet MS", sans-serif;
  font-weight: 300;

  transition: transform 0.3s, box-shadow 0.3s;
  transform-style: preserve-3d;
  perspective: 1000px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
function User() {
  // return (
  //   <>
  //     <Card
  //       sx={{
  //         width: 650,
  //         height: 68,
  //         minWidth: 10,
  //         marginTop: 10,
  //       }}
  //     >
  //       <CardContent>
  //         <Content>
  //           <CardUsuario>
  //             <div className="fotoUsuario">
  //               <LogoUsuario src="/user.png" />
  //             </div>
  //             <div className="dadosUsuario">
  //               <Typography
  //                 fontSize={12}
  //                 fontFamily={("EurostileLTStd", "Trebuchet MS")}
  //               >
  //                 Olá, Priscila
  //               </Typography>
  //               <Typography
  //                 fontSize={12}
  //                 fontFamily={("EurostileLTStd", "Trebuchet MS")}
  //               >
  //                 Ra: 1901843
  //               </Typography>
  //             </div>
  //             <div className="nomeCurso">
  //               <Typography
  //                 fontSize={12}
  //                 fontFamily={("EurostileLTStd", "Trebuchet MS")}
  //               >
  //                 Curso:
  //                 <strong>Sistemas de Informação</strong>
  //               </Typography>
  //             </div>
  //             <div className="botoes">
  //               <Button variant="contained" color="inherit" size="small">
  //                 Área do Aluno
  //               </Button>
  //               <Button variant="contained" color="error" size="small">
  //                 Sair
  //               </Button>
  //             </div>
  //           </CardUsuario>
  //         </Content>
  //       </CardContent>
  //     </Card>
  //   </>
  // );
  const botaoSairColor = "#da4f49";
  const botaoAreaAlunoColor = "#000000";
  return (
    <>
      <Content>
        <Box>
          <FotoUsuario />
          <DadosUsuario>
            <Rotulo>Olá, Gabriel</Rotulo>
            <Rotulo>RA: 1902059</Rotulo>
          </DadosUsuario>
          <DadosCurso>
            <Rotulo>Curso: Sistemas de Informação</Rotulo>
          </DadosCurso>
          <Botoes>
            <BotaoCardUsuario backgroundColor={botaoAreaAlunoColor}>
              Área do Aluno
            </BotaoCardUsuario>
            <BotaoCardUsuario backgroundColor={botaoSairColor}>
              Sair
            </BotaoCardUsuario>
          </Botoes>
        </Box>
      </Content>
    </>
  );
}

export default User;
