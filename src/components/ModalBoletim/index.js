

// Tabela.js
import React, { useState } from 'react';
import { Styles } from './Styles';


const ModalBoletim = () => {

    const [hoveredRow, setHoveredRow] = useState(null); // Estado para rastrear a linha destacada

    const handleRowHover = (index) => {
        setHoveredRow(index); // Atualiza o estado com o índice da linha quando o mouse estiver sobre ela
    };

    const handleRowLeave = () => {
        setHoveredRow(null); // Reseta o estado quando o mouse sair da linha
    };

    
  return (
    <Styles>
        <div>
            <div class="header">        
                <h3>COMPOSIÇÃO DAS NOTAS DAS ATIVIDADES CONTÍNUAS</h3>
            </div>
            <div class="table-responsiv">
                <table class="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Disciplina</th>
                        <th>Turma</th>
                        <th>Tipo</th>
                        <th>AC1</th><th>AC2</th><th>AC3</th><th>AC4</th><th>AC5</th>                  <th>MAC</th>
                        <th>TF</th>
                        <th>Situação</th>
                    </tr>
                    </thead>
                    <tbody>

                        <tr onMouseEnter={() => handleRowHover(0)}
                        onMouseLeave={handleRowLeave}
                        className={hoveredRow === 0 ? 'highlighted-row' : ''}>
                            <td>Análise e Modelagem de Sistemas</td>
                            <td>SI 3A NOITE</td>
                            <td>Regular</td><td></td><td></td><td></td><td></td><td></td><td></td>
                            <td>0</td>
                            <td>Indefinido</td>
                        </tr>
                        <tr onMouseEnter={() => handleRowHover(1)}
                        onMouseLeave={handleRowLeave}
                        className={hoveredRow === 1 ? 'highlighted-row' : ''}>
                            <td>Desenvolvimento de Aplicações Distribuídas</td>
                            <td>SI 3A NOITE</td>
                            <td>Regular</td><td>8,00</td><td>8,00</td><td></td><td></td><td></td><td>4,00</td>
                            <td>4</td>
                            <td>Indefinido</td>
                        </tr>
                        <tr onMouseEnter={() => handleRowHover(2)}
                        onMouseLeave={handleRowLeave}
                        className={hoveredRow === 2 ? 'highlighted-row' : ''}>
                            <td>Engenharia de Requisitos</td>
                            <td>SI 3A NOITE</td>
                            <td>Regular</td><td></td><td></td><td></td><td></td><td></td><td></td>
                            <td>0</td>
                            <td>Indefinido</td>
                        </tr>
                        <tr onMouseEnter={() => handleRowHover(3)}
                        onMouseLeave={handleRowLeave}
                        className={hoveredRow === 3 ? 'highlighted-row' : ''}>
                            <td>Estrutura de Dados</td>
                            <td>SI 3A NOITE</td>
                            <td>Regular</td><td></td><td></td><td></td><td></td><td></td><td></td>
                            <td>0</td>
                            <td>Indefinido</td>
                        </tr>
                        <tr onMouseEnter={() => handleRowHover(4)}
                        onMouseLeave={handleRowLeave}
                        className={hoveredRow === 4 ? 'highlighted-row' : ''}>
                            <td>Interface Homem Computador</td>
                            <td>SI 3A NOITE</td>
                            <td>Regular</td><td>8,00</td><td>10,00</td><td></td><td></td><td></td><td>4,50</td>
                            <td>0</td>
                            <td>Indefinido</td>
                        </tr>
                        <tr onMouseEnter={() => handleRowHover(5)}
                        onMouseLeave={handleRowLeave}
                        className={hoveredRow === 5 ? 'highlighted-row' : ''}>
                            <td>Oficina de Projeto de Empresa 1</td>
                            <td>SI 3A NOITE</td>
                            <td>Regular</td><td>7,00</td><td>5,00</td><td></td><td></td><td></td><td>3,00</td>
                            <td>12</td>
                            <td>Indefinido</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="footer">
            </div>
        </div>
    </Styles>
    
    
  );
};

export default ModalBoletim;
