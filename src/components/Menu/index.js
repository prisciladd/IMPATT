import ItemMenu from "./ItemMenu";
import { useState } from 'react';
import styled from "styled-components";

const StyledDiv= styled.div`

@media (max-width:600px){

    #menu-vertical_all menu-expand{
        width:100%;
    }        

}
    width:30%;
    color: #002953;
    background-color: #EFEEEE;

    h4 {
        font-weight: bold;
        font-size: 26px;
        font-family: 'Calibri';
        color: #002953;
        padding-left:15px;
    }

    ul{
        list-style-type: none;
        padding:0px;
    }

`

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
               
        <div className="menu-vertical_all menu-expand"
            id="menu-vertical_secretaria_online"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <header className="App-header">
                <h4>ACESSO RÁPIDO</h4>
            </header>
            <ItemMenu name="Carteirinha de Estudante" ></ItemMenu>
            <ItemMenu name="Secretaria Online" ></ItemMenu>
            <ItemMenu name="Financeiro Online" ></ItemMenu>
            <ItemMenu name="Biblioteca" ></ItemMenu>
            <ItemMenu name="PAI" ></ItemMenu>
            <ItemMenu name="CPA" ></ItemMenu>
            <ItemMenu name="Atividade Complementares" ></ItemMenu>
            <ItemMenu name="Ouvidoria" ></ItemMenu>
            <ItemMenu name="Requerimentos
            (Secretaria/Financeiro)" ></ItemMenu>
            <ItemMenu name="Contato dos Professores" ></ItemMenu>
            <ItemMenu name="Acesse Também" ></ItemMenu>
            <header className="App-header">
                <h4>SMARTCLASS</h4>
            </header>
            <ItemMenu name="Aulas de Graduação e Pós-Graduação" ></ItemMenu>
            <header className="App-header">
                <h4>AVA</h4>
            </header>
            <ItemMenu name="Orchestra4edu" ></ItemMenu>
            <header className="App-header">
                <h4>CURSOS LIVRES</h4>
            </header>
            <ItemMenu name="Acessar" ></ItemMenu>
            <ItemMenu name="Cupom" ></ItemMenu>
            <header className="App-header">
                <h4>PROVA FÁCIL</h4>
            </header>
            <ItemMenu name="Acessar" ></ItemMenu>
            <div className="arrow-right"></div>
            <ul
                className="submenu-expand"
                id="submenu_secretaria_online"
                style={{ display: showSubMenu ? 'block' : 'none' }}>
                <li className="menu-vertical_all">
                    <a href="../NotasFaltas/index.js" onClick={handleNotasFaltasClick}>
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
            </ul>
        </div>
      </StyledDiv>
  );
}

export default Menu;
