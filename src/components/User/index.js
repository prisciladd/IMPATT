import React from "react";
import { Link } from "react-router-dom";

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
            <Rotulo>Olá, Aluno(a)</Rotulo>
            <Rotulo>RA: 1234567</Rotulo>
          </DadosUsuario>
          <DadosCurso>
            <Rotulo>Curso: Sistemas de Informação</Rotulo>
          </DadosCurso>
          <Botoes>
            <BotaoCardUsuario
              as={Link}
              to="/"
              backgroundColorPrimaria={botaoAreaAlunoColorPrimaria}
              backgroundColorSecundaria={botaoAreaAlunoColorSegundaria}
            >
              Área do Aluno
            </BotaoCardUsuario>
            <BotaoCardUsuario
              as={Link}
              to="/"
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
