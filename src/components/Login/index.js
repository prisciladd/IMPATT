import React from "react";
import styled from "styled-components";
import { Box, BoxText } from "../../styles/BoxStyles";
import Button from '@mui/material/Button';

const Styles=styled.div`

#main{
    overflow-x: hidden;
    overflow-y: hidden;
    width:100%;
    height:100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.5)), url("abstract-system-technology.jpg");
    background-repeat: no-repeat ;
   


}

#content{
    width:100vw;
    height:100vh;
    display:flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-weight: bold ;
}

#field-text{
    display: flex;
    align-items: center;
    justify-content: center;
    padding:5px;

}

#field-image{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 90px;
}

input{
    height:50px;
    width: 300px ;
    margin-left:5px;
    opacity: 0.5;
    border: 13px solid white;
}

img{
    margin-top: 100px ;
    width: 200px;
}

P{
    margin:15px;
}

#button{
    display: flex ;
    align-items: center;
    justify-content: center;

}

`;

function Login(){
    return(
        <Styles>
            <BoxText>

            <div id="main">
                <div id="content">
<Box>
                    <div id="content-item">
                        <div id="field-image">
                            <img src="logoHeader2.png" alt="[Faculdade IMPACTA] "/>
                        </div>
                        <div id="field-text">
                            <p>LOGIN: </p> 
                            <input></input>
                        </div>
                        <div id="field-text">
                            <p>SENHA: </p>
                            <input></input>
                        </div>
                       
                            <p>Esqueceu a senha?</p>
                        <div id="button">
                            <a href="/Home">
                                <Button variant="contained">FAZER LOGIN</Button>
                            </a>
                        </div>
                    </div>
</Box>
                </div>
            </div>
            </BoxText>
        </Styles>
    )
}

export default Login;