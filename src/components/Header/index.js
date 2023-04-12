import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  background-color: #515151;
  height: 80px;
  position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <StyledDiv>
      <div>
        <a href="/">
          <img alt="Logo Faculde Impacta" src="/logoHeader2.png"></img>
        </a>
      </div>
    </StyledDiv>
  );
}

export default Header;
