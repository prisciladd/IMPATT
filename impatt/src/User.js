import React from "react";
import styled from "styled-components";

const Styles= styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: right;
    position:relative;
    float:right;

    .box{
    border-radius: 5px ;
    background-color: gray;
    display: flex;
    width:100vh;
    margin:5px;
    justify-content: space-between;
    }

    img{
        margin: 5px;
        height: 40px;
    }
    
    button {
        background-color: black ;
        border-color: black ;
        color: white;
        border-radius:5px;
        height: 30px;   
        margin-top:10px;
        margin-right:5px;
    }
    
    button:first-child{
        background-color: red ;
        border-color:red;
        margin-right:5px;
    }

    .ps{
        font-size: 0;
        
    }

    p{
        font-size:12px;
    }

    .buttons{
        position:relative;
    }

`;

function User(){
    return(
        <Styles>
                <div className="box">
                <img alt="" src="/user.png"></img>
                <p>Olá, Priscila</p>
                <p>Ra: 1901843</p>
                <p>Curso: Sistemas de Informação</p>
                <div className="buttons">
                    <button>SAIR</button>
                    <button>Área do Aluno</button>
                </div>
                </div>
               
        </Styles>
    );

}

export default User;