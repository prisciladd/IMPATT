import React from "react";
import { Titulo, ItemCard, Rotulo, ScrollableContainer } from "./Styles.js";

function CardInformativo(props) {
  const informativos = [
    {
      titulo: "RESPONDA NOSSA PESQUISA",
      descricao: "Prezados(as)...",
    },
    {
      titulo: "AJUDE A MELHORORAR NOSSA FACULDADE",
      descricao: "Prezado(a) Aluno(a),",
    },
    {
      titulo: "PARCERIA MICROSOFT IMAGINE",
      descricao: "Prezados (as) Alunos (as),",
    },
  ];

  return (
    <>
      {informativos &&
        informativos.map((informativo) => {
          return (
            <>
              <ItemCard>
                <Titulo>{informativo.titulo}</Titulo>
                <Rotulo>{informativo.descricao}</Rotulo>
              </ItemCard>
            </>
          );
        })}
    </>
  );
}

export default CardInformativo;
