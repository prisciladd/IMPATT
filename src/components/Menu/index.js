import ItemMenu from "./ItemMenu";
import { useState } from "react";
import styled from "styled-components";
import { BoxTitle, BoxText, List, BoxSmall } from "../../pages/Home/HomeStyles";

const StyledDiv = styled.div`
  /* @media (max-width:600px){

    #menu-vertical_all menu-expand{
        width:40%;
        display:flex;
        flex-wrap: wrap;
    }        

}
    position:absolute;
    width:20%;
    color: #002953;
    background-color: #EFEEEE;

    h4 {
        font-weight: bold;
        font-size: 26px;
        font-family: 'Calibri';
        color: #002953;
        padding-left:15px;
    }

    */
`;

function Menu() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [setShowNotasFaltas] = useState(false); // Novo estado para controlar a exibição da tela de Notas e Faltas

  function handleMouseOver() {
    setShowSubMenu(true);
  }

  function handleMouseOut() {
    setShowSubMenu(false);
  }

  function handleNotasFaltasClick() {
    setShowNotasFaltas(true); // Define o estado para mostrar a tela de Notas e Faltas
  }

  // Renderiza a tela de Notas e Faltas se o estado showNotasEFaltas for verdadeiro
  // if (showNotasFaltas) {
  //     return <NotasFaltas />;
  // }
  // Renderiza o componente Menu
  return (
    <StyledDiv>
      <BoxSmall>
        <div
          className="menu-vertical_all menu-expand"
          id="menu-vertical_secretaria_online"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <header className="App-header">
            <BoxTitle>
              <h3>ACESSO RÁPIDO</h3>
            </BoxTitle>
          </header>
          <BoxText>
            <ItemMenu name="Carteirinha de Estudante"></ItemMenu>
            <ItemMenu name="Secretaria Online"></ItemMenu>
            <ItemMenu name="Financeiro Online"></ItemMenu>
            <ItemMenu name="Biblioteca"></ItemMenu>
            <ItemMenu name="PAI"></ItemMenu>
            <ItemMenu name="CPA"></ItemMenu>
            <ItemMenu name="Atividade Complementares"></ItemMenu>
            <ItemMenu name="Ouvidoria"></ItemMenu>
            <ItemMenu
              name="Requerimentos
                            (Secretaria/Financeiro)"
            ></ItemMenu>
            <ItemMenu name="Contato dos Professores"></ItemMenu>
            <ItemMenu name="Acesse Também"></ItemMenu>
            <header className="App-header">
              <BoxTitle>
                <h3>SMARTCLASS</h3>
              </BoxTitle>
            </header>
            <ItemMenu name="Aulas de Graduação e Pós-Graduação"></ItemMenu>
            <header className="App-header">
              <BoxTitle>
                <h3>AVA</h3>
              </BoxTitle>
            </header>
            <ItemMenu name="Orchestra4edu"></ItemMenu>
            <header className="App-header">
              <BoxTitle>
                <h3>CURSOS LIVRES</h3>
              </BoxTitle>
            </header>
            <ItemMenu name="Acessar"></ItemMenu>
            <ItemMenu name="Cupom"></ItemMenu>
            <header className="App-header">
              <BoxTitle>
                <h3>PROVA FÁCIL</h3>
              </BoxTitle>
            </header>
            <ItemMenu name="Acessar"></ItemMenu>
            <div className="arrow-right"></div>
            <List>
              {/* <ul
                            className="submenu-expand"
                            id="submenu_secretaria_online"
                            style={{ display: showSubMenu ? 'block' : 'none' }}> */}
              <li className="menu-vertical_all">
                <a
                  href="../NotasFaltas/index.js"
                  onClick={handleNotasFaltasClick}
                >
                  <i className="icon-plus"></i>Notas e Faltas
                </a>
              </li>
              <li className="menu-vertical_all">
                <a href="/aluno/horario-aula.php">
                  <i className="icon-plus"></i>Horários
                </a>
              </li>
              <li className="menu-vertical_all">
                <a href="/aluno/meus-documentos.php">
                  <i className="icon-plus"></i>Documentos
                </a>
              </li>
              {/*  </ul> */}
            </List>
          </BoxText>
        </div>
      </BoxSmall>
    </StyledDiv>
  );
}

export default Menu;
