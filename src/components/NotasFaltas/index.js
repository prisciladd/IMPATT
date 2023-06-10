import React from "react";
import { Styles, Titulo } from './Styles';
import { Link } from 'react-router-dom';
import {Box, BoxTitle, BoxText} from "../../styles/BoxStyles";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer
  } from '@chakra-ui/react'


function Content(){
    return(   
        <Styles>
            <div class="span10" id="container-notes">
                <div class="title-default">
                    <Titulo>
                        NOTAS E FALTAS
                    </Titulo>
                    <div class="accessibility" count="0">
                    </div>

                    <BoxText>
                        <div class="col-lg-4">
                            <Breadcrumb separator='>'>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink>Notas e Faltas</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                            
                        </div>
                    </BoxText>
                </div>
                <div class="well-fit-default span12">
                        
                    <TableContainer>                            
                        <Table  variant="striped" colorScheme="teal" size="sm">
                            <Thead>
                                <Tr>
                                <Th></Th>
                                <Th>Período</Th>
                                <Th>Curso</Th>
                                <Th>Turma</Th>
                                <Th>Série</Th>
                                <Th>Situação da Matrícula</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                <Td>
                                    <Link to="/Boletim">
                                    <button colorScheme="blue" size="lg" className="btn btn-boletim">
                                        <span className="visualization">Visualizar </span>
                                        <img src="/search.png" alt="Ícone de pesquisa" />
                                    </button>
                                    </Link>
                                </Td>
                                <Td>2020/2</Td>
                                <Td>Curso de Sistemas de Informação</Td>
                                <Td>SI 3B NOITE</Td>
                                <Td>3º Semestre</Td>
                                <Td>Ativa</Td>
                                </Tr>
                                <Tr>
                                <Td>
                                    <Link to="/Boletim">
                                    <button colorScheme="blue" size="lg" className="btn btn-boletim">
                                        <span className="visualization">Visualizar </span>
                                        <img src="/search.png" alt="Ícone de pesquisa" />
                                    </button>
                                    </Link>
                                </Td>
                                <Td>2020/1</Td>
                                <Td>Curso de Sistemas de Informação</Td>
                                <Td>SI 2B NOITE</Td>
                                <Td>2º Semestre</Td>
                                <Td>Concluída</Td>
                                </Tr>
                                <Tr>
                                <Td>
                                    <Link to="/Boletim">
                                    <button colorScheme="blue" size="lg" className="btn btn-boletim">
                                        <span className="visualization">Visualizar </span>
                                        <img src="/search.png" alt="Ícone de pesquisa" />
                                    </button>
                                    </Link>
                                </Td>
                                <Td>2019/2</Td>
                                <Td>Curso de Sistemas de Informação</Td>
                                <Td>SI 1B NOITE</Td>
                                <Td>1º Semestre</Td>
                                <Td>Concluída</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    
                    </TableContainer>                          
                
                </div>
            </div>                
        </Styles>
    );

}

export default Content;