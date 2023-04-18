
import ItemMenu from "./ItemMenu";
import './Menu.css'
import { useState } from 'react';
import styled from "styled-components";

const StyledDiv= styled.div`

    text-align: center;  
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #002953;
    position:absolute;
    margin-top: 80px;
    float:left;
    background-color: #EFEEEE;
    margin-left: auto;
  

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
        
        <header className="App-header">
            <h1>Acesso Rápido</h1>
        </header>
        <li
            className="menu-vertical_all menu-expand"
            id="menu-vertical_secretaria_online"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <ItemMenu name="Secretaria Online" ></ItemMenu>
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
        </li>
    </StyledDiv>
    );
  }
  
  export default Menu;
  