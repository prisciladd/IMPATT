import React from "react";
import styled from "styled-components";
import { Container, Box, BoxTitle, BoxText } from "../../pages/Home/HomeStyles";

const StyledDiv = styled.div`

    @media (max-width:600px){

        background-color: #002953;

    }

    display:flex;
    position:relative;
    position:fixed;
    z-index: 1;
    top:0;
    left:0;
    width:100%;
    height: 80px;
    align-items: center;
    justify-content: center;
    background-color: black ;
`;

function Header (){
    
    return(
            <StyledDiv>
                <header>
                        <a href="/">
                            <img alt="Logo Faculdade Impacta" src="/logoHeader2.png"></img>
                        </a>
                </header>
            </StyledDiv>
    )
}

export default Header;