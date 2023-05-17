import React from "react";
import styled from "styled-components";
import { BoxText } from "../../pages/Home/HomeStyles";
import px2vw from "../../utils/px2vw";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepGray } from "@mui/material/colors";

const Content = styled.div`
  //margin-top: 80px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    //margin-top: 80px;
  }
`;

const LogoUsuario = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;
const DadosUsuario = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    /* width: 30px;
    height: 30px; */
  }
`;

const CardUsuario = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .fotoUsuario {
    display: flex;
    justify-content: end;
  }

  .dadosUsuario {
    display: flex;
    flex-direction: column;
  }
  .botoes {
  }
`;

//img / dados usuario / dados sistema

const Styles = styled.div`
  /* @media (max-width:600px){
        
        .user{
            display: flex;
            justify-content: center;
            width: 100%;
        }
        .box{
            display: flex;
            justify-content: space-evenly;
            align-items: center ;
            width: 100%;
        }

    }

    */
  @media (max-width: 750) {
    display: flex;
    justify-content: end;
    align-items: end;
    //width: ${px2vw(320, 320)};
    width: 350px;
    padding: 100px;
  }

  display: flex;
  justify-content: right;
  width: 100%;
  height: 100%;
  margin-top: 80px;

  .box {
    border-radius: 5px;
    background-color: #e1e1e1;
    display: flex;
    width: 100%;
    margin: 5px;
  }

  img {
    margin: 5px;
    height: 40px;
  }

  button {
    background-color: #454545;
    border-color: #454545;
    color: white;
    border-radius: 5px;
    height: 30px;
    margin-top: 10px;
    margin-right: 5px;
  }

  button:first-child {
    background-color: #c73e38;
    border-color: #c73e38;
    margin-right: 5px;
  }

  strong {
    padding: 5px;
  }
`;

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function User() {
  return (
    <>
      {/* <Styles>
        <BoxText>
          <div className="user">
            <div className="box">
              <img alt="" src="/user.png" />
              <div class="span2">
                <p>
                  Olá,
                  <strong>Priscila</strong>
                </p>
                <p>
                  Ra:
                  <strong>1901843</strong>
                </p>
              </div>
              <div class="span2">
                <p>
                  Curso:
                  <strong>Sistemas de Informação</strong>
                </p>
              </div>
              <div class="span4">
                <button>SAIR</button>
                <button>Área do Aluno</button>
              </div>
            </div>
          </div>
        </BoxText>
      </Styles> */}
      <Card
        sx={{
          maxWidth: "300px",
          minWidth: 10,
          marginTop: 10,
        }}
      >
        <CardContent>
          <Content>
            <LogoUsuario src="/user.png" />
            <DadosUsuario>
              <Typography
                fontFamily={("EurostileLTStd", "Trebuchet MS")}
                variant="p"
              >
                Olá, Priscila
              </Typography>
              <Typography
                fontFamily={("EurostileLTStd", "Trebuchet MS")}
                variant="p"
              >
                Ra: 1901843
              </Typography>
            </DadosUsuario>

            <Typography
              fontFamily={("EurostileLTStd", "Trebuchet MS")}
              variant="p"
            >
              Curso:
              <strong>Sistemas de Informação</strong>
            </Typography>
          </Content>
        </CardContent>

        <CardActions>
          <Button variant="contained" color="inherit" size="small">
            Área do Aluno
          </Button>
          <Button variant="contained" color="error" size="small">
            Sair
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default User;
