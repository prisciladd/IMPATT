import React from "react";
import styled from "styled-components";

const Styles= styled.div`

body{
    background-color: #eeeded;
}

.home{
    display:flex;
}

.mural{
    width: 40vw;
    
}

.banner{
    width: 40vw;
    
}

img{
    width:550px;
    margin-left:10px;
}

ul{
    list-style-type: none;
    padding:0px;
}

li{
    margin-bottom:3px;
    padding:5px;
    background-color: #ffad39;
}

li:nth-child(n+4){
    
    background-color: #e1e1e1;
}

p{
    font-weight: bold ;
}

h4 {
    font-weight: bold;
    font-size: 26px;
    font-family: 'Calibri';
    color: #002953;
}
`;

const Home = () =>{
    return(
        <Styles>
        <div className="home">
            <div className="mural">
            <h4>MURAL DE RECADOS</h4>
            <ul>
                <li>
                    <p>
                    CI: 09/2023 - REF.: Atividades Presenciais 03/04 - Campus Paraíso
                    </p>
Prezados(as)...</li>
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
            </ul>
            </div>
            <div className="banner">
                <img src="banner.png" alt="logo faça parte do programa de embaixadores Impacta" />
            </div>
            
        </div>
        </Styles>
 
    );

}

export default Home;