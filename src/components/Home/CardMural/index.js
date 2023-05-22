import React from "react";
import {
  Content,
  Titulo,
  ItemMenu,
  Rotulo,
  Descricao,
  LinhaDivisao,
} from "./Styles.js";

function CardMural(props) {
  const avisos = [
    {
      titulo:
        "CI: 09/2023 - REF.: Atividades Presenciais 03/04 - Campus Paraíso",
      noticia: "Prezados(as)...",
    },
    {
      titulo: "CI 03/2023 - Início das Aulas 2023 - Faculdade Impacta",
      noticia: "Prezado(a) Aluno(a),",
    },
    {
      titulo: "Regulamento Prova PAI 2023/1",
      noticia: "Prezados (as) Alunos (as),",
    },
    {
      titulo: "Notificação Emissão Boletos",
      noticia: "Prezado(a) Aluno(a),",
    },
    {
      titulo: "Achados e Perdidos",
      noticia:
        "Todos os objetos e documentos encontrados nas dependências da Faculdade IMPACTA deverão ser...",
    },
  ];

  return (
    <>
      <Content>
        {avisos &&
          avisos.map((aviso) => {
            return (
              <>
                <ItemMenu>
                  <Titulo>{aviso.titulo}</Titulo>
                  <Rotulo>{aviso.noticia}</Rotulo>
                </ItemMenu>
              </>
            );
          })}
      </Content>
    </>
  );
}

export default CardMural;
