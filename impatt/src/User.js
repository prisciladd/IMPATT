import React from "react";
import styled from "styled-components";

const Styles= styled.div`
    border-radius: 5px ;
    background-color: gray;
    width: 30%;
    height: 50px;
    margin: 10px; 
    position: absolute;
    left: 65%;

    img{
        position: absolute;
        display: flex;
        flex-direction: row ;
    };

    p{
        position: absolute;
        display: flex;
        flex-direction: row ;
    }

`;

function User(){
    return(
        <Styles>

        <div>
            <img alt="" src="/user.png"></img>
            <p>Olá, Priscila</p>
            <p>Ra: 1901843</p>
            <p>Curso: Sistemas de Informação</p>
            <button>Área do Aluno</button>
            <button>Sair</button>
        </div>
        </Styles>
    );

}

export default User;