import React from "react";
import styled from "styled-components";
import { BoxText } from "../../pages/Home/HomeStyles";
import px2vw from "../../utils/px2vw";

const Styles= styled.div`

/* @media (max-width:600px){
        
        .user{
            display: flex;
            justify-content: center;
            width: 100%;
        }
        .box{
            display: flex;
            justify-content: space-evenly;
            align-items: center ;
            width: 100%;
        }

    }

    */
    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        width: ${px2vw(320, 320)};


    }

    display: flex;
    justify-content: right;
    width: 100%;
    height: 100%;
    margin-top:80px;
    
    .box{
        border-radius: 5px ;
        background-color: #e1e1e1;
        display: flex;
        width:100%;
        margin:5px;
    }

    img{
        margin: 5px;
        height: 40px;
    }
    
    button {
        background-color: #454545 ;
        border-color: #454545 ;
        color: white;
        border-radius:5px;
        height: 30px;   
        margin-top:10px;
        margin-right:5px;
    }
    
    button:first-child{
        background-color: #C73E38 ;
        border-color:#C73E38;
        margin-right:5px;
    }

    strong{
        padding:5px;
    }
 `;

function User(){
    return(
                <Styles>
                    <BoxText>
                        <div className="user">
                            <div className="box">
                                <img alt="" src="/user.png" />
                                <div class="span2">
                                    <p>Olá,  
                                        <strong>Priscila</strong>
                                    </p>
                                    <p>Ra: 
                                        <strong>1901843</strong>
                                    </p>
                                </div>
                                <div class="span2">
                                    <p>Curso: 
                                        <strong>
                                        Sistemas de Informação
                                        </strong>
                                    </p>
                                </div>
                                <div class="span4">
                                    <button>SAIR</button>
                                    <button>Área do Aluno</button>
                                </div>
                            </div>
                        </div>
                    </BoxText>
                </Styles>
    );

}

export default User;