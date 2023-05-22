import React from "react";
import { Styles } from './Styles';
import { Link } from 'react-router-dom';
import { Box, BoxTitle, BoxText} from "../../styles/BoxStyles";



function Content(){
    return(       
        <Box>
            <Styles>
                <div class="span10" id="container-notes">
                    <div class="title-default">
                        <BoxTitle>
                            <h3>NOTAS E FALTAS</h3>
                        </BoxTitle>
                        <div class="accessibility" count="0">
                        </div>

                        <BoxText>
                        <div class="col-lg-4">
                            <nav class="breadcrumb-container" aria-label="breadcrumb">
                          

                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item breadcrumb-item-home">
                                            <a href="/">Home</a>
                                        </li>
                                        <li class="separator"></li>
                                        <li class="breadcrumb-item active" aria-current="page">  Notas e Faltas</li>
                                    </ol>
                                  
                       
                            </nav>
                        </div>
                        </BoxText>
                    </div>
                    <div class="well-fit-default span12">
                        <BoxText>
                        <div class="container span12" id="contents-notes">
                            <div class="row-fluid">
                            <div className="table-responsive">
                               
                                    <table className="table table-striped table-bordered table-condensed table-hover">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>Período</th>
                                            <th>Curso</th>
                                            <th>Turma</th>
                                            <th>Série</th>
                                            <th>Situação da Matrícula</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="table-light">
                                            <td >
                                            <Link to="/Boletim">
                                                <button className="btn btn-boletim">
                                                    <span className="visualization">Visualizar </span>
                                                    <img src="/search.png" alt="Ícone de pesquisa" />
                                                </button>
                                            </Link>
                                            </td>
                                            <td>2020/2</td>
                                            <td>Curso de Sistemas de Informação</td>
                                            <td>SI 3B NOITE</td>
                                            <td>3º Semestre</td>
                                            <td>Concluída</td>
                                        </tr>
                                        <tr className="table-light">
                                            <td>
                                            <Link to="/Boletim">
                                                <button className="btn btn-boletim">
                                                    <span className="visualization">Visualizar </span>
                                                    <img src="/search.png" alt="Ícone de pesquisa" />
                                                </button>
                                            </Link>
                                            </td>
                                            <td>2020/1</td>
                                            <td>Curso de Sistemas de Informação</td>
                                            <td>SI 2B NOITE</td>
                                            <td>2º Semestre</td>
                                            <td>Concluída</td>
                                        </tr>
                                        <tr className="table-light">
                                            <td>
                                            <Link to="/Boletim">
                                                <button className="btn btn-boletim">
                                                    <span className="visualization">Visualizar </span>
                                                    <img src="/search.png" alt="Ícone de pesquisa" />
                                                </button>
                                            </Link>
                                            </td>
                                            <td>2019/2</td>
                                            <td>Curso de Sistemas de Informação</td>
                                            <td>SI 1B NOITE</td>
                                            <td>1º Semestre</td>
                                            <td>Concluída</td>
                                        </tr>
                                        </tbody>
                                    </table>
                         
                            </div>
                            </div>
                        </div>
                        </BoxText>
                    </div>
                </div>                
            </Styles>
        </Box> 
    );

}

export default Content;