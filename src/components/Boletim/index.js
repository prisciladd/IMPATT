import React, { useState } from "react";
//import Modal  from 'react-modal';
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { Styles } from "./Styles";
import ModalBoletim from "../ModalBoletim";
import { Box, BoxTitle, BoxText, List } from "../../styles/BoxStyles";

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
          <BoxTitle>
            <h3>NOTAS E FALTAS</h3>
          </BoxTitle>
          <div class="hierarchy">
            <List>
              <BoxText>
                <ul class="breadcrumb">
                  <li>
                    <Link to="/">
                      <a href="/">Home</a> <span class="divider">&gt;</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/NotasFaltas">
                      <a href="/NotasFaltas">Notas e Faltas</a>{" "}
                      <span class="divider">&gt;</span>
                    </Link>
                  </li>

                  <li class="active">Boletim</li>
                </ul>
              </BoxText>
            </List>
          </div>

          <div id="printer" data-codigo="101183">
            <BoxText>
              {/* <!------------------------- CABEÇALHO ----------------------------> */}
              <div class="contents-bulletin container span12">
                <div class="row-fluid">
                  <List>
                    <table class="table table-bordered" id="table-dados-aluno">
                      <thead>
                        <tr>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowspan="2">
                            <img
                              src="logoHeader.png"
                              alt=""
                              id="print-img-logo"
                            ></img>
                          </td>
                          <td colspan="10" class="table-left">
                            <span class="bold">Nome: </span>Priscila da Dalt
                          </td>
                          <td colspan="1" class="table-left">
                            <span class="bold">RA: </span>1901843
                          </td>
                          <td colspan="2">
                            <span class="bold">Ano: </span>2023/1
                          </td>
                        </tr>
                        <tr>
                          <td colspan="9" class="table-left">
                            <span class="bold">Curso: </span>Curso de Sistemas
                            de Informação
                          </td>
                          <td colspan="3" id="label-semester">
                            <span class="bold">Semestre: </span>3º Semestre
                          </td>
                          <td colspan="2">
                            <span class="bold">Turma: </span>SI 3A NOITE
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                      data-cfgacad=""
                    >
                      <thead>
                        <tr>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th class="borderless"></th>
                          <th colspan="1" class="table-title borderless">
                            <span>MAC</span>
                          </th>
                          <th colspan="2" class="table-title borderless">
                            <span>PROVA</span>
                          </th>
                          <th colspan="1" class="table-title borderless">
                            <span>PAI</span>
                          </th>
                          <th colSpan="4" className="table-title borderless">
                            <button
                              className="btn btn-small btn-nota-ponderada-absoluta"
                              onClick={handleMostrarNotaPonderada}
                            >
                              <img src="/calculadora.png" alt="" />
                              <span>{textoBotao}</span>
                            </button>
                          </th>
                          '
                        </tr>
                        <tr class="cls-tr-pai-sim">
                          <th
                            colspan="2"
                            class="borderless formula-media-final"
                          ></th>
                          <th colspan="2" class="table-title borderless">
                            <span>COM PAI</span>
                          </th>
                          <th colspan="1" class="table-title borderless">
                            <span>30%</span>
                          </th>
                          <th colspan="2" class="table-title borderless">
                            <span>40%</span>
                          </th>
                          <th colspan="1" class="table-title borderless">
                            <span>30%</span>
                          </th>
                          <th colspan="5" class="table-title borderless"></th>
                        </tr>
                        <tr>
                          <th
                            colspan="2"
                            class="borderless calculo-media-final"
                          ></th>
                          <th colspan="2" class="table-title borderless">
                            <span>SEM PAI</span>
                          </th>
                          <th colspan="1" class="table-title borderless">
                            <span>50%</span>
                          </th>
                          <th colspan="2" class="table-title borderless">
                            <span>50%</span>
                          </th>
                          <th colspan="1" class="table-title borderless">
                            <span>0%</span>
                          </th>
                          <th colspan="1" class="table-title borderless"></th>
                          <th colspan="4" class="table-title borderless">
                            Final
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th class="table-subtitle">Disciplina</th>
                          <th class="table-subtitle">Turma</th>
                          <th class="table-subtitle">Tipo</th>
                          <th class="table-subtitle">C.H</th>
                          <th class="table-subtitle">
                            <span>MAC</span>
                            {/* <Link to="/ModalBoletim" data-semestre="1"> */}
                            <a
                              href="./Boletim"
                              data-semestre="1"
                              onClick={handleModalOpen}
                            >
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
                          <th class="table-subtitle">TF</th>
                          <th class="table-subtitle">MF</th>
                          <th class="table-subtitle">Situação</th>
                        </tr>
                        <tr>
                          <td class="table-left">Atividades Complementares</td>
                          <td>SI 3A NOITE</td>
                          <td>Regular</td>
                          <td>200</td>
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
                          <td>0</td>
                          <td class="nota-mf"></td>
                          <td>Indefinido</td>
                        </tr>
                        <tr>
                          <td class="table-left">Computação Cognitiva</td>
                          <td>SI 3A NOITE</td>
                          <td>Regular</td>
                          <td>80</td>
                          <div
                            className="td-nota-absoluta"
                            data-coeficiente-ponderacao="0.3"
                          >
                            {mostrarNotaPonderada
                              ? calcularNotaPonderada(4.0, 0.3)
                              : 4.0}
                          </div>
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
                          <td>
                            <a
                              alt="Clique aqui para ver as datas das suas faltas"
                              href="/"
                              class="link-ver-faltas"
                            >
                              <u>4</u>
                            </a>{" "}
                          </td>
                          <td class="nota-mf"></td>
                          <td>Indefinido</td>
                        </tr>
                        <tr>
                          <td class="table-left">Estágio Supervisionado</td>
                          <td>SI 3A NOITE</td>
                          <td>Regular</td>
                          <td>320</td>
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
                          <td>0 </td>
                          <td class="nota-mf"></td>
                          <td>Indefinido</td>
                        </tr>
                        <tr>
                          <td class="table-left">Governança de TI</td>
                          <td>SI 3A NOITE</td>
                          <td>Regular</td>
                          <td>80</td>
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
                          <td>0 </td>
                          <td class="nota-mf"></td>
                          <td>Indefinido</td>
                        </tr>
                        <tr>
                          <td class="table-left">
                            Sistemas Integrados de Gestão
                          </td>
                          <td>SI 3A NOITE</td>
                          <td>Regular</td>
                          <td>80</td>
                          <div
                            className="td-nota-absoluta"
                            data-coeficiente-ponderacao="0.3"
                          >
                            {mostrarNotaPonderada
                              ? calcularNotaPonderada(4.5, 0.3)
                              : 4.5}
                          </div>
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
                          <td>0 </td>
                          <td class="nota-mf"></td>
                          <td>Indefinido</td>
                        </tr>
                        <tr>
                          <td class="table-left">
                            Trabalho de Conclusão de Curso - TCC II
                          </td>
                          <td>SI 3A NOITE</td>
                          <td>Regular</td>
                          <td>80</td>
                          <div
                            className="td-nota-absoluta"
                            data-coeficiente-ponderacao="0.3"
                          >
                            {mostrarNotaPonderada
                              ? calcularNotaPonderada(3.0, 0.5)
                              : 3.0}
                          </div>
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
                          <td>
                            <a
                              alt="Clique aqui para ver as datas das suas faltas"
                              href="/"
                              class="link-ver-faltas"
                            >
                              <u>8</u>
                            </a>{" "}
                          </td>
                          <td class="nota-mf"></td>
                          <td>Indefinido</td>
                        </tr>

                        <tr>
                          <th colspan="7" class="table-left obs">
                            <b>Observações: </b>
                            <span>
                              Média mínima para aprovação 6,0(seis) com 75% de
                              frequência.
                            </span>
                          </th>
                          <th colspan="5" class="table-left">
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
