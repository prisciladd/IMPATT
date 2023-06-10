import React from "react";
import styled from "styled-components";
import { Box, BoxTitle, BoxText } from "../../styles/BoxStyles";

const Styles = styled.div`
  /* 320px — 480px: dispositivos móveis.
481px — 768px: iPads, tablets.
769px — 1024px: telas pequenas, laptops.
1025px — 1200px: desktops, telas grandes.
1201px e acima — telas muito grandes, TVs. */

  @media (min-width: 760px) {
    .item-header {
      border-radius: 20px;
      width: inherit;
    }

    #container > .container-item {
      width: 40%;
      margin: 5px;
    }
  }

  #box {
    border: 1px solid black;
    width: 100%;
    height: 100%;
    background-color: #d7d6d6;
    border-radius: 5px;
    opacity: 0.5;
  }

  p {
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 20px;
  }

  #container {
    border: 0.5px solid grey;
    width: initial;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin: 5px;
    background-color: #d7d6d6;
    box-shadow: 5px 5px 10px;
  }

  #header {
    border: 1px solid black;
    width: initial;
    height: 40%;
    background-color: black;
    color: white;
    text-align: center;
    vertical-align: center;
    margin: 10px;
    box-shadow: 5px 5px 10px;
  }

  .container-item {
    border: 1px solid black;
    border-radius: 5px;
    width: 90%;
    height: 100%;
    margin: 10px;
    display: inline-block;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: white;
    box-shadow: 3px 3px 10px;
  }

  .item-header {
    background-color: black;
    width: 100%;
    height: 40px;
    margin: 0;
    padding: 0;
    border: 0;
  }

  .item-header > p {
    color: white;
  }

  #header > p {
    color: white;
  }

  .item-container > p {
    font-size: 14px;
    text-align: left;
  }

  /* .item-container {
    padding-top: 10px;
    height: 400px;
  } */

  .item-container > hr {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Titulo = styled.h1`
  font-family: "EurostileLTStd", "Trebuchet MS", sans-serif;
  color: #042b55;
  font-size: 40px;
  font-weight: 300; /* Deixa a fonte mais magra */

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

function Horario() {
  return (
    <>
      <Styles>
        <Titulo>QUADRO DE HORÁRIOS</Titulo>
        <div id="box">
          <BoxText>
            <p>Curso de Sistemas de Informação</p>
            <div id="container">
              <div id="header">
                <p>3º semestre: SI 8A NOITE ( 13/02/2020 Á 26/06/2020 )</p>
              </div>

              <div class="container-item">
                <div class="item-header">
                  <p>Segunda</p>
                </div>
                <div class="item-container">
                  <p>
                    <b>Aula 1 ( 19h as 19h50 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Análise e Modelagem de Sistemas
                  </p>
                  <p>
                    <b>Prof(ª):</b> Edgar Hernandes
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 2 ( 19h50 as 20h40 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Análise e Modelagem de Sistemas
                  </p>
                  <p>
                    <b>Prof(ª):</b> Edgar Hernandes
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 3 ( 21h as 21h50 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Análise e Modelagem de Sistemas
                  </p>
                  <p>
                    <b>Prof(ª):</b> Edgar Hernandes
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 4 ( 21h50 as 22h40 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Análise e Modelagem de Sistemas
                  </p>
                  <p>
                    <b>Prof(ª):</b> Edgar Hernandes
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <br></br>
                </div>
              </div>
              <div class="container-item">
                <div class="item-header">
                  <p>Terça</p>
                </div>
                <div class="item-container">
                  <p>
                    <b>Aula 1 ( 19h as 19h50 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Desenvolvimento de Aplicações Distribuídas
                  </p>
                  <p>
                    <b>Prof(ª):</b> Victor Williams Stafusa da Silva
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 2 ( 19h50 as 20h40 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Desenvolvimento de Aplicações Distribuídas
                  </p>
                  <p>
                    <b>Prof(ª):</b> Victor Williams Stafusa da Silva

                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 3 ( 21h as 21h50 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Desenvolvimento de Aplicações Distribuídas
                  </p>
                  <p>
                    <b>Prof(ª):</b> Victor Williams Stafusa da Silva

                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 4 ( 21h50 as 22h40 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Desenvolvimento de Aplicações Distribuídas
                  </p>
                  <p>
                    <b>Prof(ª):</b> Victor Williams Stafusa da Silva

                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <br></br>
                </div>
              </div>
              <div class="container-item">
                <div class="item-header">
                  <p>Quarta</p>
                </div>
                <div class="item-container">
                  <p>
                    <b>Aula 1 ( 19h as 19h50 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Engenharia de Requisitos
                  </p>
                  <p>
                    <b>Prof(ª):</b> Osvaldo Takai
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 2 ( 19h50 as 20h40 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Engenharia de Requisitos
                  </p>
                  <p>
                    <b>Prof(ª):</b> Osvaldo Takai
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 3 ( 21h as 21h50 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Engenharia de Requisitos
                  </p>
                  <p>
                    <b>Prof(ª):</b> Osvaldo Takai
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 4 ( 21h50 as 22h40 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Engenharia de Requisitos
                  </p>
                  <p>
                    <b>Prof(ª):</b> Osvaldo Takai
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <br></br>
                </div>
              </div>
              <div class="container-item">
                <div class="item-header">
                  <p>Quinta</p>
                </div>
                <div class="item-container">
                  <p>
                    <b>Aula 1 ( 19h as 19h50 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Estrutura de Dados
                  </p>
                  <p>
                    <b>Prof(ª):</b> Rafael Will Macedo de Araujo
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 2 ( 19h50 as 20h40 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Estrutura de Dados
                  </p>
                  <p>
                    <b>Prof(ª):</b> Rafael Will Macedo de Araujo
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 3 ( 21h as 21h50 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Estrutura de Dados
                  </p>
                  <p>
                    <b>Prof(ª):</b> Rafael Will Macedo de Araujo
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 4 ( 21h50 as 22h40 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Estrutura de Dados
                  </p>
                  <p>
                    <b>Prof(ª):</b> Rafael Will Macedo de Araujo
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <br></br>
                </div>
              </div>
              <div class="container-item">
                <div class="item-header">
                  <p>Sexta</p>
                </div>
                <div class="item-container">
                  <p>
                    <b>Aula 1 ( 19h as 19h50 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Oficina de Projeto de Empresa 1
                  </p>
                  <p>
                    <b>Prof(ª):</b> Marco Antônio Tomé
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 2 ( 19h50 as 20h40 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Oficina de Projeto de Empresa 1
                  </p>
                  <p>
                    <b>Prof(ª):</b> Marco Antônio Tomé
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 3 ( 21h as 21h50 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Oficina de Projeto de Empresa 1
                  </p>
                  <p>
                    <b>Prof(ª):</b> Marco Antônio Tomé
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 4 ( 21h50 as 22h40 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Engenharia de Requisitos
                  </p>
                  <p>
                    <b>Prof(ª):</b> Marco Antônio Tomé
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <br></br>
                </div>
              </div>
              <div class="container-item">
                <div class="item-header">
                  <p>EAD</p>
                </div>
                <div class="item-container">
                  <p>
                    <b>Aula 1 ( 19h as 19h50 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Interface Homem Computador
                  </p>
                  <p>
                    <b>Prof(ª):</b> Lívia Rosa de Carvalho Sousa
                  </p>
                  
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 2 ( 19h50 as 20h40 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Interface Homem Computador
                  </p>
                  <p>
                    <b>Prof(ª):</b> Lívia Rosa de Carvalho Sousa
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 3 ( 21h as 21h50 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Interface Homem Computador
                  </p>
                  <p>
                    <b>Prof(ª):</b> Lívia Rosa de Carvalho Sousa
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <p>
                    <b>Aula 4 ( 21h50 as 22h40 )</b>
                  </p>
                  <p>
                    <b>Disciplina:</b> Interface Homem Computador
                  </p>
                  <p>
                    <b>Prof(ª):</b> Lívia Rosa de Carvalho Sousa
                  </p>
                  <p>
                    <b>Sala:</b> Remota
                  </p>
                  <hr></hr>
                  <br></br>
                </div>
              </div>
            </div>
          </BoxText>
        </div>
      </Styles>
    </>
  );
}

export default Horario;
