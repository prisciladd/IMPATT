import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`

    @media (max-width:600px){

        background-color: #002953;

    }

    display:flex;
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height: 80px;
    background-color: black ;

    header{
        width:100vw;
        display: flex ;
        align-items: center;
        justify-content: center;
    }


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