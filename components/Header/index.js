import React from "react";
import styled from "styled-components"

const StyledDiv = styled.div`
    display: flex ;
    background-color: #505050 ;
    height: 80px;
    position: relative;
    text-align: center ;
    justify-content: center;
    align-items: center;
`;

function Header (){
    
    return(
        <StyledDiv>

        <div>

            <img alt="" src="/logoHeader2.png"></img>
            
            
        </div>

        </StyledDiv>
    )
}

export default Header;