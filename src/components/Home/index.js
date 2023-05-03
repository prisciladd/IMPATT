import React from "react";
import styled from "styled-components";
import { Box, BoxTitle, BoxText, List } from "../../pages/Home/HomeStyles";

const Styles= styled.div`
     @media (min-width: 768px) {
        
        #home{
            display: flex;
            flex-direction: row;
        }
}

    img{
        width:500px;
        margin-left:10px;
    }

    li{
        margin-bottom:3px;
        padding:5px;
        background-color: #ffad39;
    }

    li:nth-child(n+4){
        background-color: #e1e1e1;
    }


`;

const Home = () =>{
    return(
        <Box>
            <Styles>
                <div id="home">
                    <div className="mural">
                        <BoxTitle>
                            <h3>MURAL DE RECADOS</h3>
                        </BoxTitle>
                        <BoxText>
                            <List>
                                    <li>
                                        <p>
                                        CI: 09/2023 - REF.: Atividades Presenciais 03/04 - Campus Paraíso
                                        </p>
                                        Prezados(as)...
                                    </li>
                                    <li>
                                        <p>
                                        CI 03/2023 - Início das Aulas 2023 - Faculdade Impacta
                                        </p>
                                        Prezado(a) Aluno(a),
                                    </li>
                                    <li>
                                        <p>
                                            Regulamento Prova PAI 2023/1
                                        </p>
                                            Prezados (as) Alunos (as),
                                    </li>
                                    <li>
                                        <p>
                                            Notificação Emissão Boletos
                                        </p>
                                            Prezado(a) Aluno(a),
                                    </li>
                                    <li>
                                        <p>
                                            Achados e Perdidos
                                        </p>
                                            Todos os objetos e documentos encontrados nas dependências da Faculdade
                                    </li>
                            </List>
                        </BoxText>
                    </div>
                    <div className="banner">
                        <img src="banner.png" alt="logo faça parte do programa de embaixadores Impacta" />
                    </div>
                </div>
        </Styles>
            </Box>
    );

}

export default Home;