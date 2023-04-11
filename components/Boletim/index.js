import React from "react";
import { Link } from 'react-router-dom';


function Content(){
  return (
    <div>
      {/* Conteúdo da tela "boletim" */}
      
        <h1>NOTAS E FALTAS</h1>

        <div class="hierarchy">
            <ul class="breadcrumb">
                
                <li>
                  <Link to = "/">
                    <a href="/">Home</a> <span class="divider">&gt;</span>
                  </Link>
                </li>
            
                <li>
                  <Link to = "/NotasFaltas">
                    <a href="/NotasFaltas" >Notas e Faltas</a> <span class="divider">&gt;</span>
                  </Link>
                </li>
            
                <li class="active">Boletim</li>
            
            </ul>
        </div>

        
        
      {/* Adicione os elementos e componentes necessários para a tela "boletim" */}
    </div>
  );
};

export default Content;