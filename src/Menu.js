import styled from "styled-components";

const StyledDiv= styled.div`

    text-align: center;  
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    position:absolute;
    float:left;
    background-color: gold;
  

`

function Menu() {
    return (
        <StyledDiv>

            <header className="App-header">
            <h1>Acesso Rápido</h1>
            </header>
   

        </StyledDiv>
    );
  }
  
  export default Menu;
  