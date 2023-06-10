import React, { useState } from "react";
//import Modal  from 'react-modal';

import { Styles, TableData1, TableHeader1, ResponsiveTable1, ResponsiveTableWrapper1, Titulo } from "./Styles";
import { BoxTitle, BoxText, List } from "../../styles/BoxStyles";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Card, 
  CardBody,
  Center,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';


function Content() {

  const [mostrarNotaPonderada, setMostrarNotaPonderada] = useState(false);
  const [mostrarNotaPonderadaDois, setMostrarNotaPonderadaDois] = useState(false);
  const [mostrarNotaPonderadaTres, setMostrarNotaPonderadaTres] = useState(false);
  const [mostrarNotaPonderadaQuatro, setMostrarNotaPonderadaQuatro] = useState(false);
  const [mostrarNotaPonderadaCinco, setMostrarNotaPonderadaCinco] = useState(false);
  const [mostrarNotaPonderadaSeis, setMostrarNotaPonderadaSeis] = useState(false);
  const [textoBotao, setTextoBotao] = useState("Ver Nota Ponderada");
  const [textoBotaoDois, setTextoBotaoDois] = useState("Ver Nota Ponderada");
  const [textoBotaoTres, setTextoBotaoTres] = useState("Ver Nota Ponderada");
  const [textoBotaoQuatro, setTextoBotaoQuatro] = useState("Ver Nota Ponderada");
  const [textoBotaoCinco, setTextoBotaoCinco] = useState("Ver Nota Ponderada");
  const [textoBotaoSeis, setTextoBotaoSeis] = useState("Ver Nota Ponderada");
  const [displayAc, setDisplayAc] = useState('none');
  const [displayAc2, setDisplayAc2] = useState('none');
  const [displayAc3, setDisplayAc3] = useState('none');
  const [displayAc4, setDisplayAc4] = useState('none');
  const [displayAc5, setDisplayAc5] = useState('none');
  const [displayAc6, setDisplayAc6] = useState('none');

  const toggleDisplayAc = () => {
    displayAc === 'none' ? setDisplayAc (""): setDisplayAc ("none");
  }
  const toggleDisplayAc2 = () => {
    displayAc2 === 'none' ? setDisplayAc2 (""): setDisplayAc2 ("none");
  }
  const toggleDisplayAc3 = () => {
    displayAc3 === 'none' ? setDisplayAc3 (""): setDisplayAc3 ("none");
  }
  const toggleDisplayAc4 = () => {
    displayAc4 === 'none' ? setDisplayAc4 (""): setDisplayAc4 ("none");
  }
  const toggleDisplayAc5 = () => {
    displayAc5 === 'none' ? setDisplayAc5 (""): setDisplayAc5 ("none");
  }
  const toggleDisplayAc6 = () => {
    displayAc6 === 'none' ? setDisplayAc6 (""): setDisplayAc6 ("none");
  }


  const handleMostrarNotaPonderada = () => {
    setMostrarNotaPonderada(!mostrarNotaPonderada);
    setTextoBotao(
      mostrarNotaPonderada ? "Ver Nota Ponderada" : "Ver Nota Absoluta"
    );
  };

  const calcularNotaPonderada = (notaAbsoluta, coeficientePonderacao) => {
    return (notaAbsoluta * coeficientePonderacao).toFixed(2);
  };

  const handleMostrarNotaPonderadaDois = () => {
    setMostrarNotaPonderadaDois(!mostrarNotaPonderadaDois);
    setTextoBotaoDois(
      mostrarNotaPonderadaDois ? "Ver Nota Ponderada" : "Ver Nota Absoluta"
    );
  };

  const calcularNotaPonderadaDois = (notaAbsolutaDois, coeficientePonderacaoDois) => {
    return (notaAbsolutaDois * coeficientePonderacaoDois).toFixed(2);
  };
  const handleMostrarNotaPonderadaTres = () => {
    setMostrarNotaPonderadaTres(!mostrarNotaPonderadaTres);
    setTextoBotaoTres(
      mostrarNotaPonderadaTres ? "Ver Nota Ponderada" : "Ver Nota Absoluta"
    );
  };

  const calcularNotaPonderadaTres = (notaAbsolutaTres, coeficientePonderacaoTres) => {
    return (notaAbsolutaTres * coeficientePonderacaoTres).toFixed(2);
  };

  const handleMostrarNotaPonderadaQuatro = () => {
    setMostrarNotaPonderadaQuatro(!mostrarNotaPonderadaQuatro);
    setTextoBotaoQuatro(
      mostrarNotaPonderadaQuatro ? "Ver Nota Ponderada" : "Ver Nota Absoluta"
    );
  };

  const calcularNotaPonderadaQuatro = (notaAbsolutaQuatro, coeficientePonderacaoQuatro) => {
    return (notaAbsolutaQuatro * coeficientePonderacaoQuatro).toFixed(2);
  };
  const handleMostrarNotaPonderadaCinco = () => {
    setMostrarNotaPonderadaCinco(!mostrarNotaPonderadaCinco);
    setTextoBotaoCinco(
      mostrarNotaPonderadaCinco ? "Ver Nota Ponderada" : "Ver Nota Absoluta"
    );
  };

  const calcularNotaPonderadaCinco = (notaAbsolutaCinco, coeficientePonderacaoCinco) => {
    return (notaAbsolutaCinco * coeficientePonderacaoCinco).toFixed(2);
  };

  const handleMostrarNotaPonderadaSeis = () => {
    setMostrarNotaPonderadaSeis(!mostrarNotaPonderadaSeis);
    setTextoBotaoSeis(
      mostrarNotaPonderadaSeis ? "Ver Nota Ponderada" : "Ver Nota Absoluta"
    );
  };

  const calcularNotaPonderadaSeis = (notaAbsolutaSeis, coeficientePonderacaoSeis) => {
    return (notaAbsolutaSeis * coeficientePonderacaoSeis).toFixed(2);
  };

  return (
    <Styles>
      <div>
        <div>
          {/* Conteúdo da tela "boletim" */}
          <Titulo>
            BOLETIM
          </Titulo>
          <div class="hierarchy">
            <List>
              <BoxText>
                <div class="col-lg-4">
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
                </div>
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
                            <TableData1 rowspan="2" class="table-left borderless"><img src="logoHeader.png" alt="" id="print-img-logo"></img></TableData1>
                            <TableData1 colspan="10" class="table-left borderless"><span class="bold">Nome: </span>Priscila da Dalt</TableData1>
                            <TableData1 colspan="1" class="table-left borderless"><span class="bold">RA: </span>1234567</TableData1>
                            <TableData1 colspan="2" class="table-left borderless"><span class="bold">Ano: </span>2023/1</TableData1>
                          </tr>
                          <tr>
                            <TableData1 colspan="9" class="table-left borderless"><span class="bold">Curso: </span>Curso de Sistemas de Informação</TableData1>
                            <TableData1 colspan="3" class="table-left borderless"><span class="bold">Semestre: </span>3º Semestre</TableData1>
                            <TableData1 colspan="2" class="table-left borderless"><span class="bold">Turma: </span>SI 3A NOITE</TableData1>
                          </tr>
                        </tbody>
                      </ResponsiveTable1>
                    </ResponsiveTableWrapper1>
                    
                  </List>
                </div>
              </div>
            </BoxText>

              {/* <!---------------------------- BOLETIM ------------------------------------> */}
              <div class="contents-bulletin">
                <div class="row-fluid">
                    <Center>
                      <Card maxW='sm'>     
                        <CardBody width='100%' className="materia-um">
                          <TableContainer bg='white' >
                            <Table size="sm" style={{zoom:'75%'}} width='100%'>
                              <Thead>
                                <Tr className="table-materia">
                                  <Th colSpan={16}>SI 3A NOITE - Análise e Modelagem de Sistemas</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-vernota">
                                  <Th colSpan={2}>TIPO</Th>
                                  <Th colSpan={1}>C.H.</Th>
                                  <Th colSpan={2} >SITUACAO</Th>
                                  <Th colSpan={2}>
                                    <button
                                      className="btn btn-small btn-nota-ponderada-absoluta"
                                      style={{minWidth:"100%"}}
                                      onClick={handleMostrarNotaPonderada}>
                          
                                      <span>{textoBotao}</span>
                                    </button></Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-expandeac">
                                  <Th colSpan={2}>REGULAR</Th>
                                  <Th colSpan={1}>80</Th>
                                  <Th colSpan={2}>INDEFINIDO</Th>
                                  <Th colSpan={2}>
                                  <button
                                    className="btn btn-small btn-nota-ponderada-absoluta" 
                                    style={{minWidth:"100%"}}
                                    onClick = {toggleDisplayAc}
                                    >
                                    <span>Expandir ACs</span>
                                  </button>
                                  </Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-compai">
                                  <Th colSpan={1}>30</Th>
                                  <Th colSpan={2}>40</Th>
                                  <Th colSpan={1}>30</Th>
                                  <Th colSpan={4}>COM PAI</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-sempai">
                                  <Th colSpan={1}>50</Th>
                                  <Th colSpan={2}>50</Th>
                                  <Th colSpan={1}>0</Th>
                                  <Th colSpan={12}>SEM PAI</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-notas">
                                  <Th colSpan={1}>MAC</Th>
                                  <Th colSpan={1}>PR</Th>
                                  <Th colSpan={1}>SUB</Th>
                                  <Th colSpan={1}>PAI</Th>
                                  <Th colSpan={1}>BO</Th>
                                  <Th colSpan={1}>TF</Th>
                                  <Th colSpan={1}>MF</Th>        
                                </Tr>
                              </Thead>
                              <Tbody className="table-notacompai">
                                <Td>
                                  <div
                                    className="td-nota-absoluta"
                                    data-coeficiente-ponderacao="0.3"
                                  >
                                    {/* {mostrarNotaPonderada
                                      ? calcularNotaPonderada(4.0, 0.3)
                                      : 4.0} */}
                                  </div>
                                </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                              </Tbody>
                              <Thead style={{display:displayAc}} >
                                <Tr className="table-ac">
                                  <Th colSpan={2}>AC1</Th>
                                  <Th colSpan={2}>AC2</Th>
                                  <Th colSpan={1}>AC3</Th>
                                  <Th colSpan={1}>AC4</Th>
                                  <Th colSpan={2}>AC5</Th>
                                </Tr>
                                <Tr className="table-notaac">
                                  <Th colSpan={2}></Th>
                                  <Th colSpan={2}></Th>
                                  <Th colSpan={1}></Th>
                                  <Th colSpan={1}></Th>
                                  <Th colSpan={2}></Th>
                                </Tr>
                              </Thead>
                            </Table>
                          </TableContainer>
                        </CardBody>
                        <CardBody width='100%' className="materia-dois">
                          <TableContainer bg='white' >
                            <Table size="sm" style={{zoom:'75%'}} width='100%'>
                              <Thead>
                                <Tr className="table-materia">
                                  <Th colSpan={16}>SI 3A NOITE - Desenvolvimento de Aplicações Distribuídas</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-vernota">
                                  <Th colSpan={2}>TIPO</Th>
                                  <Th colSpan={1}>C.H.</Th>
                                  <Th colSpan={2} >SITUACAO</Th>
                                  <Th colSpan={2}>
                                    <button
                                      className="btn btn-small btn-nota-ponderada-absoluta"
                                      style={{minWidth:"100%"}}
                                      onClick={handleMostrarNotaPonderadaDois}>
                          
                                      <span>{textoBotaoDois}</span>
                                    </button></Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-expandeac">
                                  <Th colSpan={2}>REGULAR</Th>
                                  <Th colSpan={1}>80</Th>
                                  <Th colSpan={2}>INDEFINIDO</Th>
                                  <Th colSpan={2}>
                                  <button
                                  className="btn btn-small btn-nota-ponderada-absoluta text-center" 
                                  style={{minWidth:"100%"}}
                                  onClick = {toggleDisplayAc2}
                                  >
                                    <span>Expandir ACs</span>
                                  </button>
                                  </Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-compai">
                                  <Th colSpan={1}>30</Th>
                                  <Th colSpan={2}>40</Th>
                                  <Th colSpan={1}>30</Th>
                                  <Th colSpan={4}>COM PAI</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-sempai">
                                  <Th colSpan={1}>50</Th>
                                  <Th colSpan={2}>50</Th>
                                  <Th colSpan={1}>0</Th>
                                  <Th colSpan={12}>SEM PAI</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-notas">
                                  <Th colSpan={1}>MAC</Th>
                                  <Th colSpan={1}>PR</Th>
                                  <Th colSpan={1}>SUB</Th>
                                  <Th colSpan={1}>PAI</Th>
                                  <Th colSpan={1}>BO</Th>
                                  <Th colSpan={1}>TF</Th>
                                  <Th colSpan={1}>MF</Th>        
                                </Tr>
                              </Thead>
                              <Tbody className="table-notacompai">
                                <Td>
                                  <div
                                    className="td-nota-absoluta"
                                    data-coeficiente-ponderacaoDois="0.3"
                                  >
                                    {mostrarNotaPonderadaDois
                                      ? calcularNotaPonderadaDois(4.0, 0.3)
                                      : 4.0}
                                  </div>
                                </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td>4</Td>
                                <Td> </Td>
                              </Tbody>
                              <Thead style={{display:displayAc2}} >
                                <Tr className="table-ac">
                                  <Th colSpan={2}>AC1</Th>
                                  <Th colSpan={2}>AC2</Th>
                                  <Th colSpan={1}>AC3</Th>
                                  <Th colSpan={1}>AC4</Th>
                                  <Th colSpan={2}>AC5</Th>
                                </Tr>
                                <Tr className="table-notaac">
                                  <Th colSpan={2}>8</Th>
                                  <Th colSpan={2}>8</Th>
                                  <Th colSpan={1}></Th>
                                  <Th colSpan={1}></Th>
                                  <Th colSpan={2}></Th>
                                </Tr>
                              </Thead>
                            </Table>
                          </TableContainer>
                        </CardBody>
                        <CardBody width='100%' className="materia-tres">
                          <TableContainer bg='white' >
                            <Table size="sm" style={{zoom:'75%'}} width='100%'>
                              <Thead>
                                <Tr className="table-materia">
                                  <Th colSpan={16}>SI 3A NOITE - Engenharia de Requisitos</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-vernota">
                                  <Th colSpan={2}>TIPO</Th>
                                  <Th colSpan={1}>C.H.</Th>
                                  <Th colSpan={2} >SITUACAO</Th>
                                  <Th colSpan={2}>
                                    <button
                                      className="btn btn-small btn-nota-ponderada-absoluta"
                                      style={{minWidth:"100%"}}
                                      onClick={handleMostrarNotaPonderadaTres}>
                          
                                      <span>{textoBotaoTres}</span>
                                    </button></Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-expandeac">
                                  <Th colSpan={2}>REGULAR</Th>
                                  <Th colSpan={1}>80</Th>
                                  <Th colSpan={2}>INDEFINIDO</Th>
                                  <Th colSpan={2}>
                                  <button
                                  className="btn btn-small btn-nota-ponderada-absoluta text-center" 
                                  style={{minWidth:"100%"}}
                                  onClick = {toggleDisplayAc3}
                                  >
                                    <span>Expandir ACs</span>
                                  </button>
                                  </Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-compai">
                                  <Th colSpan={1}>30</Th>
                                  <Th colSpan={2}>40</Th>
                                  <Th colSpan={1}>30</Th>
                                  <Th colSpan={4}>COM PAI</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-sempai">
                                  <Th colSpan={1}>50</Th>
                                  <Th colSpan={2}>50</Th>
                                  <Th colSpan={1}>0</Th>
                                  <Th colSpan={12}>SEM PAI</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-notas">
                                  <Th colSpan={1}>MAC</Th>
                                  <Th colSpan={1}>PR</Th>
                                  <Th colSpan={1}>SUB</Th>
                                  <Th colSpan={1}>PAI</Th>
                                  <Th colSpan={1}>BO</Th>
                                  <Th colSpan={1}>TF</Th>
                                  <Th colSpan={1}>MF</Th>        
                                </Tr>
                              </Thead>
                              <Tbody className="table-notacompai">
                                <Td>
                                  <div
                                    className="td-nota-absoluta"
                                    data-coeficiente-ponderacaoTres="0.3"
                                  >
                                    {/* {mostrarNotaPonderadaTres
                                      ? calcularNotaPonderadaTres(4.0, 0.3)
                                      : 4.0} */}
                                  </div>
                                </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                              </Tbody>
                              <Thead style={{display:displayAc3}} >
                                <Tr className="table-ac">
                                  <Th colSpan={2}>AC1</Th>
                                  <Th colSpan={2}>AC2</Th>
                                  <Th colSpan={1}>AC3</Th>
                                  <Th colSpan={1}>AC4</Th>
                                  <Th colSpan={2}>AC5</Th>
                                </Tr>
                                <Tr className="table-notaac">
                                  <Th colSpan={2}></Th>
                                  <Th colSpan={2}></Th>
                                  <Th colSpan={1}></Th>
                                  <Th colSpan={1}></Th>
                                  <Th colSpan={2}></Th>
                                </Tr>
                              </Thead>
                            </Table>
                          </TableContainer>
                        </CardBody>
                        <CardBody width='100%' className="materia-quatro">
                          <TableContainer bg='white' >
                            <Table size="sm" style={{zoom:'75%'}} width='100%'>
                              <Thead>
                                <Tr className="table-materia">
                                  <Th colSpan={16}>SI 3A NOITE - Estrutura de Dados</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-vernota">
                                  <Th colSpan={2}>TIPO</Th>
                                  <Th colSpan={1}>C.H.</Th>
                                  <Th colSpan={2} >SITUACAO</Th>
                                  <Th colSpan={2}>
                                    <button
                                      className="btn btn-small btn-nota-ponderada-absoluta"
                                      style={{minWidth:"100%"}}
                                      onClick={handleMostrarNotaPonderadaQuatro}>
                          
                                      <span>{textoBotaoQuatro}</span>
                                    </button></Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-expandeac">
                                  <Th colSpan={2}>REGULAR</Th>
                                  <Th colSpan={1}>80</Th>
                                  <Th colSpan={2}>INDEFINIDO</Th>
                                  <Th colSpan={2}>
                                  <button
                                  className="btn btn-small btn-nota-ponderada-absoluta text-center" 
                                  style={{minWidth:"100%"}}
                                  onClick = {toggleDisplayAc4}
                                  >
                                    <span>Expandir ACs</span>
                                  </button>
                                  </Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-compai">
                                  <Th colSpan={1}>30</Th>
                                  <Th colSpan={2}>40</Th>
                                  <Th colSpan={1}>30</Th>
                                  <Th colSpan={4}>COM PAI</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-sempai">
                                  <Th colSpan={1}>50</Th>
                                  <Th colSpan={2}>50</Th>
                                  <Th colSpan={1}>0</Th>
                                  <Th colSpan={12}>SEM PAI</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-notas">
                                  <Th colSpan={1}>MAC</Th>
                                  <Th colSpan={1}>PR</Th>
                                  <Th colSpan={1}>SUB</Th>
                                  <Th colSpan={1}>PAI</Th>
                                  <Th colSpan={1}>BO</Th>
                                  <Th colSpan={1}>TF</Th>
                                  <Th colSpan={1}>MF</Th>        
                                </Tr>
                              </Thead>
                              <Tbody className="table-notacompai">
                                <Td>
                                  <div
                                    className="td-nota-absoluta"
                                    data-coeficiente-ponderacaoQuatro="0.3"
                                  >
                                    {/* {mostrarNotaPonderadaQuatro
                                      ? calcularNotaPonderadaQuatro(4.0, 0.3)
                                      : 4.0} */}
                                  </div>
                                </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                              </Tbody>
                              <Thead style={{display:displayAc4}} >
                                <Tr className="table-ac">
                                  <Th colSpan={2}>AC1</Th>
                                  <Th colSpan={2}>AC2</Th>
                                  <Th colSpan={1}>AC3</Th>
                                  <Th colSpan={1}>AC4</Th>
                                  <Th colSpan={2}>AC5</Th>
                                </Tr>
                                <Tr className="table-notaac">
                                  <Th colSpan={2}></Th>
                                  <Th colSpan={2}></Th>
                                  <Th colSpan={1}></Th>
                                  <Th colSpan={1}></Th>
                                  <Th colSpan={2}></Th>
                                </Tr>
                              </Thead>
                            </Table>
                          </TableContainer>
                        </CardBody>
                        <CardBody width='100%' className="materia-cinco">
                          <TableContainer bg='white' >
                            <Table size="sm" style={{zoom:'75%'}} width='100%'>
                              <Thead>
                                <Tr className="table-materia">
                                  <Th colSpan={16}>SI 3A NOITE - Interface Homem Computador</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-vernota">
                                  <Th colSpan={2}>TIPO</Th>
                                  <Th colSpan={1}>C.H.</Th>
                                  <Th colSpan={2} >SITUACAO</Th>
                                  <Th colSpan={2}>
                                    <button
                                      className="btn btn-small btn-nota-ponderada-absoluta"
                                      style={{minWidth:"100%"}}
                                      onClick={handleMostrarNotaPonderadaCinco}>
                          
                                      <span>{textoBotaoCinco}</span>
                                    </button></Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-expandeac">
                                  <Th colSpan={2}>REGULAR</Th>
                                  <Th colSpan={1}>80</Th>
                                  <Th colSpan={2}>INDEFINIDO</Th>
                                  <Th colSpan={2}>
                                  <button
                                  className="btn btn-small btn-nota-ponderada-absoluta text-center" 
                                  style={{minWidth:"100%"}}
                                  onClick = {toggleDisplayAc5}
                                  >
                                    <span>Expandir ACs</span>
                                  </button>
                                  </Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-compai">
                                  <Th colSpan={1}>30</Th>
                                  <Th colSpan={2}>40</Th>
                                  <Th colSpan={1}>30</Th>
                                  <Th colSpan={4}>COM PAI</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-sempai">
                                  <Th colSpan={1}>50</Th>
                                  <Th colSpan={2}>50</Th>
                                  <Th colSpan={1}>0</Th>
                                  <Th colSpan={12}>SEM PAI</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-notas">
                                  <Th colSpan={1}>MAC</Th>
                                  <Th colSpan={1}>PR</Th>
                                  <Th colSpan={1}>SUB</Th>
                                  <Th colSpan={1}>PAI</Th>
                                  <Th colSpan={1}>BO</Th>
                                  <Th colSpan={1}>TF</Th>
                                  <Th colSpan={1}>MF</Th>        
                                </Tr>
                              </Thead>
                              <Tbody className="table-notacompai">
                                <Td>
                                  <div
                                    className="td-nota-absoluta"
                                    data-coeficiente-ponderacaoCinco="0.3"
                                  >
                                    {mostrarNotaPonderadaCinco
                                      ? calcularNotaPonderadaCinco(4.5, 0.3)
                                      : 4.5}
                                  </div>
                                </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                              </Tbody>
                              <Thead style={{display:displayAc5}} >
                                <Tr className="table-ac">
                                  <Th colSpan={2}>AC1</Th>
                                  <Th colSpan={2}>AC2</Th>
                                  <Th colSpan={1}>AC3</Th>
                                  <Th colSpan={1}>AC4</Th>
                                  <Th colSpan={2}>AC5</Th>
                                </Tr>
                                <Tr className="table-notaac">
                                  <Th colSpan={2}>8</Th>
                                  <Th colSpan={2}>10</Th>
                                  <Th colSpan={1}></Th>
                                  <Th colSpan={1}></Th>
                                  <Th colSpan={2}></Th>
                                </Tr>
                              </Thead>
                            </Table>
                          </TableContainer>
                        </CardBody>
                        <CardBody width='100%' className="materia-seis">
                          <TableContainer bg='white' >
                            <Table size="sm" style={{zoom:'75%'}} width='100%'>
                              <Thead>
                                <Tr className="table-materia">
                                  <Th colSpan={16}>SI 3A NOITE - Oficina de Projeto de Empresa 1</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-vernota">
                                  <Th colSpan={2}>TIPO</Th>
                                  <Th colSpan={1}>C.H.</Th>
                                  <Th colSpan={2} >SITUACAO</Th>
                                  <Th colSpan={2}>
                                    <button
                                      className="btn btn-small btn-nota-ponderada-absoluta"
                                      style={{minWidth:"100%"}}
                                      onClick={handleMostrarNotaPonderadaSeis}>
                          
                                      <span>{textoBotaoSeis}</span>
                                    </button></Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-expandeac">
                                  <Th colSpan={2}>REGULAR</Th>
                                  <Th colSpan={1}>80</Th>
                                  <Th colSpan={2}>INDEFINIDO</Th>
                                  <Th colSpan={2}>
                                  <button
                                  className="btn btn-small btn-nota-ponderada-absoluta text-center" 
                                  style={{minWidth:"100%"}}
                                  onClick = {toggleDisplayAc6}
                                  >
                                    <span>Expandir ACs</span>
                                  </button>
                                  </Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-compai">
                                  <Th colSpan={1}>30</Th>
                                  <Th colSpan={2}>40</Th>
                                  <Th colSpan={1}>30</Th>
                                  <Th colSpan={4}>COM PAI</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-sempai">
                                  <Th colSpan={1}>50</Th>
                                  <Th colSpan={2}>50</Th>
                                  <Th colSpan={1}>0</Th>
                                  <Th colSpan={12}>SEM PAI</Th>
                                </Tr>
                              </Thead>
                              <Thead>
                                <Tr className="table-notas">
                                  <Th colSpan={1}>MAC</Th>
                                  <Th colSpan={1}>PR</Th>
                                  <Th colSpan={1}>SUB</Th>
                                  <Th colSpan={1}>PAI</Th>
                                  <Th colSpan={1}>BO</Th>
                                  <Th colSpan={1}>TF</Th>
                                  <Th colSpan={1}>MF</Th>        
                                </Tr>
                              </Thead>
                              <Tbody className="table-notasempai">
                                <Td>
                                  <div
                                    className="td-nota-absoluta"
                                    data-coeficiente-ponderacao6="0.3"
                                  >
                                    {mostrarNotaPonderadaSeis
                                      ? calcularNotaPonderadaSeis(3.0, 0.3)
                                      : 3.0}
                                  </div>
                                </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td> </Td>
                                <Td>12</Td>
                                <Td> </Td>
                              </Tbody>
                              <Thead style={{display:displayAc6}} >
                                <Tr className="table-ac">
                                  <Th colSpan={2}>AC1</Th>
                                  <Th colSpan={2}>AC2</Th>
                                  <Th colSpan={1}>AC3</Th>
                                  <Th colSpan={1}>AC4</Th>
                                  <Th colSpan={2}>AC5</Th>
                                </Tr>
                                <Tr className="table-notaac">
                                  <Th colSpan={2}>7</Th>
                                  <Th colSpan={2}>5</Th>
                                  <Th colSpan={1}></Th>
                                  <Th colSpan={1}></Th>
                                  <Th colSpan={2}></Th>
                                </Tr>
                              </Thead>
                            </Table>
                          </TableContainer>
                        </CardBody> 
                      </Card>
                    </Center>
                </div>
              </div>
            
          </div>

          {/* Adicione os elementos e componentes necessários para a tela "boletim" */}
        </div>
      </div>
    </Styles>
  );
}

export default Content;
