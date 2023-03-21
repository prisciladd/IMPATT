import styled from "styled-components";

const StyledDiv= styled.div`

    text-align: center;  
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    position:relative;
    float:left;
  

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
  