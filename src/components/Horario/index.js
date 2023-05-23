import React from "react";
import styled from "styled-components";
import { Box, BoxTitle, BoxText, Container } from "../../styles/BoxStyles";


const Styles= styled.div`

/* 320px — 480px: dispositivos móveis.
481px — 768px: iPads, tablets.
769px — 1024px: telas pequenas, laptops.
1025px — 1200px: desktops, telas grandes.
1201px e acima — telas muito grandes, TVs. */

    @media (min-width: 760px){
        
        .item-header{
            border-radius: 20px;
        }

    }

    #box{
        border: 1px solid black;
        background-color: #d7d6d6;
        border-radius: 5px;
        opacity: 0.5;
    }

    p{
        text-align: center;
        color:black;
        font-weight: bold;
    }

    #container{
        border: 0.5px solid grey;
        background-color: #d7d6d6;
        box-shadow: 5px 5px 10px ;
    }

    #header{
        border: 1px solid black;
        background-color: black ;
        color:white;
        text-align: center ;
        vertical-align: center ;
        margin:10px;
        padding:10px;
        box-shadow: 5px 5px 10px ;
    }

    .container-item{
        border: 1px solid black;
        border-radius: 5px;
        padding:10px;
        background-color: white ;
        box-shadow: 3px 3px 10px ;  
    }

    .item-header{
        background-color:black;
        height:40px;
             
    }

    .item-header > p{
        color:white;        
    }

    #header > p{
        color:white;
    }

    .item-container > p{
        text-align:left;        
    }

    .item-container > hr{
        margin-top: 10px ;
        margin-bottom: 10px ;
    }
`;

function Horario(){
    return(
        <Container>

        <Styles>
                <BoxTitle>
                    <h3>QUADRO DE HORÁRIO</h3>
                </BoxTitle>
            <div id="box">
                    <BoxText>
                        <p>Curso de Sistemas de Informação</p>
                        <div id="container">
                            <div id="header">
                                <p>
                                8º semestre: SI 8A NOITE ( 13/02/2023 Á 26/06/2023 )
                                </p>
                            </div>
                            <Box>
                            <div class="container-item">
                                <div class="item-header">
                                    <p>Segunda</p>
                                </div>
                                <div class="item-container">
                                    <p><b>Aula 1 ( 19h as 19h50 )</b></p>
                                    <p><b>Disciplina:</b> Sistemas Integrados de Gestão</p>
                                    <p><b>Prof(ª):</b> Marcel Ginotti Pereira</p>
                                    <p><b>Sala:</b> Remota</p>
                                    <hr></hr>
                                    <p><b>Aula 2 ( 19h50 as 20h40 )</b></p>
                                    <p><b>Disciplina:</b> Sistemas Integrados de Gestão</p>
                                    <p><b>Prof(ª):</b> Marcel Ginotti Pereira</p>
                                    <p><b>Sala:</b> Remota</p>
                                    <hr></hr>
                                    <p><b>Aula 3 ( 21h as 21h50 )</b></p>
                                    <p><b>Disciplina:</b> Sistemas Integrados de Gestão</p>
                                    <p><b>Prof(ª):</b> Marcel Ginotti Pereira</p>
                                    <p><b>Sala:</b> Remota</p>
                                    <hr></hr>
                                    <p><b>Aula 4 ( 21h50 as 22h40 )</b></p>
                                    <p><b>Disciplina:</b> Sistemas Integrados de Gestão</p>
                                    <p><b>Prof(ª):</b> Marcel Ginotti Pereira</p>
                                    <p><b>Sala:</b> Remota</p>
                                    <hr></hr>
                                    <br></br>
                                </div>
                            </div>
                            </Box>
                            <Box>
                            <div class="container-item">
                                <div class="item-header">
                                    <p>Terça</p>
                                </div>
                                <div class="item-container">
                                    <p><b>Aula 1 ( 19h as 19h50 )</b></p>
                                    <p><b>Disciplina:</b> Trabalho de Conclusão de Curso TCC II</p>
                                    <p><b>Prof(ª):</b> Gilberto Alves Pereira</p>
                                    <p><b>Sala:</b> Remota</p>
                                    <hr></hr>
                                    <p><b>Aula 2 ( 19h50 as 20h40 )</b></p>
                                    <p><b>Disciplina:</b> Trabalho de Conclusão de Curso TCC II</p>
                                    <p><b>Prof(ª):</b> Gilberto Alves Pereira</p>
                                    <p><b>Sala:</b> Remota</p>
                                    <hr></hr>
                                    <p><b>Aula 3 ( 21h as 21h50 )</b></p>
                                    <p><b>Disciplina:</b> Trabalho de Conclusão de Curso TCC II</p>
                                    <p><b>Prof(ª):</b> Gilberto Alves Pereira</p>
                                    <p><b>Sala:</b> Remota</p>
                                    <hr></hr>
                                    <p><b>Aula 4 ( 21h50 as 22h40 )</b></p>
                                    <p><b>Disciplina:</b> Trabalho de Conclusão de Curso TCC II</p>
                                    <p><b>Prof(ª):</b> Gilberto Alves Pereira</p>
                                    <p><b>Sala:</b> Remota</p>
                                    <hr></hr>
                                    <br></br>
                                </div>
                            </div>
                            </Box>
                            <Box>
                            <div class="container-item">
                                <div class="item-header">

                                    <p>Quarta</p>
                                </div>
                                <div class="item-container">
                                    <p><b>Aula 1 ( 19h as 19h50 )</b></p>
                                    <p><b>Disciplina:</b> Computação Cognitiva</p>
                                    <p><b>Prof(ª):</b> Roberto Ângelo Fernandes</p>
                                    <p><b>Sala:</b> Lab 02 Paraíso</p>
                                    <hr></hr>
                                    <p><b>Aula 2 ( 19h50 as 20h40 )</b></p>
                                    <p><b>Disciplina:</b> Computação Cognitiva</p>
                                    <p><b>Prof(ª):</b> Roberto Ângelo Fernandes</p>
                                    <p><b>Sala:</b> Lab 02 Paraíso</p>
                                    <hr></hr>
                                    <p><b>Aula 3 ( 21h as 21h50 )</b></p>
                                    <p><b>Disciplina:</b> Computação Cognitiva</p>
                                    <p><b>Prof(ª):</b> Roberto Ângelo Fernandes</p>
                                    <p><b>Sala:</b> Lab 02 Paraíso</p>
                                    <hr></hr>
                                    <p><b>Aula 4 ( 21h50 as 22h40 )</b></p>
                                    <p><b>Disciplina:</b> Computação Cognitiva</p>
                                    <p><b>Prof(ª):</b> Roberto Ângelo Fernandes</p>
                                    <p><b>Sala:</b> Lab 02 Paraíso</p>
                                    <hr></hr>
                                    <br></br>
                                </div>
                            </div>
                            </Box>
                            <Box>
                            <div class="container-item">
                                <div class="item-header">

                                    <p>EAD</p>
                                </div>
                                <div class="item-container">
                                    <p><b>Disciplina:</b> Governança de TI</p>
                                    <p><b>Prof(ª):</b> Mariana Alexandre Hendges dos Santos</p>
                                    <p><b>Aula 1 ( 19h as 19h50 )</b></p>
                                    <p><b>Sala:</b> Lab 02 Paraíso</p>
                                    <hr></hr>
                                    <p><b>Aula 2 ( 19h50 as 20h40 )</b></p>
                                    <p><b>Disciplina:</b> Computação Cognitiva</p>
                                    <p><b>Prof(ª):</b> Roberto Ângelo Fernandes</p>
                                    <p><b>Sala:</b> Lab 02 Paraíso</p>
                                    <hr></hr>
                                    <p><b>Aula 3 ( 21h as 21h50 )</b></p>
                                    <p><b>Disciplina:</b> Computação Cognitiva</p>
                                    <p><b>Prof(ª):</b> Roberto Ângelo Fernandes</p>
                                    <p><b>Sala:</b> Lab 02 Paraíso</p>
                                    <hr></hr>
                                    <p><b>Aula 4 ( 21h50 as 22h40 )</b></p>
                                    <p><b>Disciplina:</b> Computação Cognitiva</p>
                                    <p><b>Prof(ª):</b> Roberto Ângelo Fernandes</p>
                                    <p><b>Sala:</b> Lab 02 Paraíso</p>
                                    <hr></hr>
                                    <br></br>
                                </div>
                            </div>         
                            </Box>
                        </div>
                    </BoxText>
                </div>
            </Styles> 
        </Container>
    )
}

export default Horario;