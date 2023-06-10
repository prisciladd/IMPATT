import React, { useState } from "react";
//import Modal  from 'react-modal';
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { Titulo, Styles, Table1, TableData1, TableHeader1, ResponsiveTable1, ResponsiveTableWrapper1 } from "./Styles";
import ModalBoletim from "../ModalBoletim";
import { Box, BoxTitle, BoxText, List } from "../../styles/BoxStyles";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

function Content() {
  const modalStyle = {
    content: {
      width: "fit-content", // Define a largura do modal com base no conteúdo
      height: "fit-content", // Define a altura do modal com base no conteúdo
      margin: "auto", // Centraliza o modal horizontalmente
    },
  };

  const [mostrarNotaPonderada, setMostrarNotaPonderada] = useState(false);
  const [textoBotao, setTextoBotao] = useState("Ver Nota Ponderada");

  const handleMostrarNotaPonderada = () => {
    setMostrarNotaPonderada(!mostrarNotaPonderada);
    setTextoBotao(
      mostrarNotaPonderada ? "Ver Nota Ponderada" : "Ver Nota Absoluta"
    );
  };

  const calcularNotaPonderada = (notaAbsoluta, coeficientePonderacao) => {
    return (notaAbsoluta * coeficientePonderacao).toFixed(2);
  };

  const [showModal, setShowModal] = useState(false); // Estado para controlar a visibilidade do modal

  // Função para abrir o modal
  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <Styles>
      <Box>
        <div>
          {/* Conteúdo da tela "boletim" */}
          <Titulo>
            Boletim
          </Titulo>
          <div class="hierarchy">
            <List>
              <BoxText>
                <Breadcrumb separator='>'>
                  <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem>
                    <BreadcrumbLink href='/NotasFaltas'>Notas e Faltas</BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink >Boletim</BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
                
              </BoxText>
            </List>
          </div>

          <div id="printer" data-codigo="101183">
            <BoxText>
              {/* <!------------------------- CABEÇALHO ----------------------------> */}
              <div class="contents-bulletin container span12">
                <div class="row-fluid">
                  <List>
                    <ResponsiveTableWrapper1>
                      <ResponsiveTable1>
                        <TableHeader1>
                          <tr>
                            
                          </tr>
                        </TableHeader1>
                        <tbody>
                          <tr>
                            <TableData1 rowSpan="2" class="table-left borderless"><img src="logoHeader.png" alt="" id="print-img-logo"></img></TableData1>
                            <TableData1 colSpan="10" class="table-left borderless"><span class="bold">Nome: </span>Priscila da Dalt</TableData1>
                            <TableData1 colSpan="1" class="table-left borderless"><span class="bold">RA: </span>1234567</TableData1>
                            <TableData1 colSpan="2" class="table-left borderless"><span class="bold">Ano: </span>2023/1</TableData1>
                          </tr>
                          <tr>
                            <TableData1 colSpan="9" class="table-left borderless"><span class="bold">Curso: </span>Curso de Sistemas de Informação</TableData1>
                            <TableData1 colSpan="3" class="table-left borderless"><span class="bold">Semestre: </span>3º Semestre</TableData1>
                            <TableData1 colSpan="2" class="table-left borderless"><span class="bold">Turma: </span>SI 3A NOITE</TableData1>
                          </tr>
                        </tbody>
                      </ResponsiveTable1>
                    </ResponsiveTableWrapper1>
                    
                  </List>
                </div>
              </div>

              {/* <!---------------------------- BOLETIM ------------------------------------> */}
              <div class="contents-bulletin container" id="div_bulletin">
                <div class="row-fluid">
                  <List>
                    <table
                      class="table table-bordered"
                      id="table-boletim"
                    >
                      <thead>
                        <tr >
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th colSpan="1" class="table-title1 borderless">
                            <span>MAC</span>
                          </th>
                          <th colSpan="2" class="table-title1 borderless">
                            <span>PROVA</span>
                          </th>
                          <th colSpan="1" class="table-title1 borderless">
                            <span>PAI</span>
                          </th>
                          <th colSpan="4" class="table-title1 borderless">
                            <button
                              className="btn btn-small btn-nota-ponderada-absoluta"
                              onClick={handleMostrarNotaPonderada}
                            >
                              <img src="/calculadora.png" alt="" />
                              <span>{textoBotao}</span>
                            </button>
                          </th>
                          
                        </tr>
                        <tr class="cls-tr-pai-sim">
                          <th
                            colSpan="2"
                            class="borderless formula-media-final"
                          ></th>
                          <th colSpan="2" class="table-pai borderless">
                            <span>COM PAI</span>
                          </th>
                          <th colSpan="1" class="table-pai borderless">
                            <span>30%</span>
                          </th>
                          <th colSpan="2" class="table-pai borderless">
                            <span>40%</span>
                          </th>
                          <th colSpan="1" class="table-pai borderless">
                            <span>30%</span>
                          </th>
                          <th colSpan="5" class="table-pai borderless"></th>
                        </tr>
                        <tr>
                          <th
                            colSpan="2"
                            class="borderless calculo-media-final"
                          ></th>
                          <th colSpan="2" class="table-sem-pai borderless">
                            <span>SEM PAI</span>
                          </th>
                          <th colSpan="1" class="table-sem-pai borderless">
                            <span>50%</span>
                          </th>
                          <th colSpan="2" class="table-sem-pai borderless">
                            <span>50%</span>
                          </th>
                          <th colSpan="1" class="table-sem-pai borderless">
                            <span>0%</span>
                          </th>
                          <th colSpan="5" class="table-sem-pai borderless">
                            <span>Final</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th class="table-subtitle"><span>Disciplina</span></th>
                          <th class="table-subtitle"><span>Turma</span></th>
                          <th class="table-subtitle"><span>Tipo</span></th>
                          <th class="table-subtitle">C.H</th>
                          <th class="table-subtitle">
                            <span>MAC</span>
                            {/* <Link to="/ModalBoletim" data-semestre="1"> */}
                            <a data-semestre="1" onClick={handleModalOpen}>
                              <img
                                className="comp-nota"
                                alt="Clique aqui e veja a composição das notas de AC"
                                title="Clique aqui e veja a composição das notas de AC"
                                src="/plus.png"
                              ></img>
                            </a>
                            {/* </Link> */}
                          </th>
                          <th class="table-subtitle">
                            <span>PR</span>
                          </th>
                          <th class="table-subtitle">
                            <span>SUB</span>
                          </th>
                          <th class="table-subtitle">
                            <span>PAI</span>
                            <a href="/" id="btn-pai123">
                              <img
                                class="comp-nota"
                                alt="Clique aqui e veja a composição das notas do PAI"
                                title="Clique aqui e veja a composição das notas do PAI"
                                src="/plus.png"
                              ></img>
                            </a>
                          </th>
                          <th class="table-subtitle">
                            <span>BO</span>
                          </th>
                          <th class="table-subtitle"><span>TF</span></th>
                          <th class="table-subtitle"><span>MF</span></th>
                          <th class="table-subtitle"><span>Situação</span></th>
                        </tr>
                        <tr class="materia-pai">
                          <td class="table-left">Análise e Modelagem de Sistemas</td>
                          <td class="table-left">SI 3A NOITE</td>
                          <td class="table-left">Regular</td>
                          <td class="table-left">80</td>
                          <td class="nota-mac">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.5 = "
                            ></div>
                          </td>
                          <td class="nota-prova ">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.5 = "
                            ></div>
                          </td>
                          <td class="nota-sub ">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.5 = "
                            ></div>
                          </td>
                          <td class="nota-pai cls-td-pai">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0 = "
                            ></div>
                          </td>
                          <td class="nota-bo"></td>
                          <td class="table-left">0</td>
                          <td class="nota-mf"></td>
                          <td class="table-left">Indefinido</td>
                        </tr>
                        <tr class="materia-pai">
                          <td class="table-left">Desenvolvimento de Aplicações Distribuídas</td>
                          <td class="table-left">SI 3A NOITE</td>
                          <td class="table-left">Regular</td>
                          <td class="table-left">80</td>
                          <td class="nota-mac">
                            <div
                              className="td-nota-absoluta"
                              data-coeficiente-ponderacao="0.3"
                            >
                              {mostrarNotaPonderada
                                ? calcularNotaPonderada(4.0, 0.3)
                                : 4.0}
                            </div>
                          </td> 
                          <td class="nota-prova ">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.4 = "
                            ></div>
                          </td>
                          <td class="nota-sub ">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.4 = "
                            ></div>
                          </td>
                          <td class="nota-pai cls-td-pai">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.3 = "
                            ></div>
                          </td>
                          <td class="nota-bo"></td>
                          <td class="table-left">
                            <a
                              alt="Clique aqui para ver as datas das suas faltas"
                              href="/"
                              class="link-ver-faltas"
                            >
                            <u>4</u>
                            </a>{" "}
                          </td>
                          <td class="nota-mf"></td>
                          <td class="table-left">Indefinido</td>
                        </tr>
                        <tr class="materia-pai">
                          <td class="table-left">Engenharia de Requisitos</td>
                          <td class="table-left">SI 3A NOITE</td>
                          <td class="table-left">Regular</td>
                          <td class="table-left">80</td>
                          <td class="nota-mac">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.3 = "
                            ></div>
                          </td>
                          <td class="nota-prova ">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.4 = "
                            ></div>
                          </td>
                          <td class="nota-sub ">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.4 = "
                            ></div>
                          </td>
                          <td class="nota-pai cls-td-pai">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.3 = "
                            ></div>
                          </td>
                          <td class="nota-bo"></td>
                          <td class="table-left">0</td>{" "}
                          <td class="nota-mf"></td>
                          <td class="table-left">Indefinido</td>
                        </tr>
                        <tr class="materia-pai">
                          <td class="table-left">Estrutura de Dados</td>
                          <td class="table-left">SI 3A NOITE</td>
                          <td class="table-left">Regular</td>
                          <td class="table-left">80</td>
                          <td class="nota-mac">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.3 = "
                            ></div>
                          </td>
                          <td class="nota-prova ">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.4 = "
                            ></div>
                          </td>
                          <td class="nota-sub ">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.4 = "
                            ></div>
                          </td>
                          <td class="nota-pai cls-td-pai">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.3 = "
                            ></div>
                          </td>
                          <td class="nota-bo"></td>
                          <td class="table-left">0 </td>
                          <td class="nota-mf"></td>
                          <td class="table-left">Indefinido</td>
                        </tr>
                        <tr class="materia-pai">
                          <td class="table-left">Interface Homem Computador</td>
                          <td class="table-left">SI 3A NOITE</td>
                          <td class="table-left">Regular</td>
                          <td class="table-left">80</td>
                          <td class="nota-mac">
                            <div
                              className="td-nota-absoluta"
                              data-coeficiente-ponderacao="0.3"
                            >
                              {mostrarNotaPonderada
                                ? calcularNotaPonderada(4.5, 0.3)
                                : 4.5}
                            </div>
                          </td>
                          <td class="nota-prova ">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.4 = "
                            ></div>
                          </td>
                          <td class="nota-sub ">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.4 = "
                            ></div>
                          </td>
                          <td class="nota-pai cls-td-pai">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.3 = "
                            ></div>
                          </td>
                          <td class="nota-bo"></td>
                          <td class="table-left">0 </td>
                          <td class="nota-mf"></td>
                          <td class="table-left">Indefinido</td>
                        </tr>
                        <tr class="materia-sem-pai">
                          <td class="table-left">
                          Oficina de Projeto de Empresa 1
                          </td>
                          <td class="table-left">SI 3A NOITE</td>
                          <td class="table-left">Regular</td>
                          <td class="table-left">80</td>
                          <td class="nota-mac">
                            <div
                              className="td-nota-absoluta"
                              data-coeficiente-ponderacao="0.3"
                            >
                              {mostrarNotaPonderada
                                ? calcularNotaPonderada(3.0, 0.5)
                                : 3.0}
                            </div>
                          </td>
                          <td class="nota-prova ">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.5 = "
                            ></div>
                          </td>
                          <td class="nota-sub ">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0.5 = "
                            ></div>
                          </td>
                          <td class="nota-pai cls-td-pai">
                            <div class="td-nota-absoluta"></div>
                            <div
                              class="td-nota-ponderada"
                              title=" x 0 = "
                            ></div>
                          </td>
                          <td class="nota-bo"></td>
                          <td class="table-left">
                            <a
                              alt="Clique aqui para ver as datas das suas faltas"
                              href="/"
                              class="link-ver-faltas"
                            >
                            <u>12</u>
                            </a>{" "}
                          </td>
                          <td class="nota-mf"></td>
                          <td class="table-left">Indefinido</td>
                        </tr>

                        <tr>
                          <th colSpan="9" class="table-obs">
                            <b>Observações: </b>
                            <span>
                              Média mínima para aprovação 6,0(seis) com 75% de
                              frequência.
                            </span>
                          </th>
                          <th colSpan="3" class="table-print">
                            <div class="btn_imprimir pull-right">
                              <button class="btn" id="btn_print">
                                <span id="imprimir">Imprimir</span>
                                <img src="/imprimir.png" alt=""></img>
                              </button>
                            </div>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </List>
                  <ReactModal
                    isOpen={showModal}
                    onRequestClose={() => setShowModal(false)}
                    contentLabel="Modal"
                    style={modalStyle}
                  >
                    {/* Conteúdo do modal aqui */}
                    <ModalBoletim />
                    <button onClick={() => setShowModal(false)}>Fechar</button>
                  </ReactModal>
                </div>
              </div>
            </BoxText>
          </div>

          {/* Adicione os elementos e componentes necessários para a tela "boletim" */}
        </div>
      </Box>
    </Styles>
  );
}

export default Content;
