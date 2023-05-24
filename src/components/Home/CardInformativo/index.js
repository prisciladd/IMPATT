import React from "react";
import {
  Titulo,
  ItemCard,
  Rotulo,
  ScrollableContainer,
  Navegacao,
} from "./Styles.js";

function CardInformativo(props) {
  const informativos = [
    {
      titulo: "RESPONDA NOSSA PESQUISA",
      descricao: "https://forms.gle/yLzEvn4S89PgRdWP6",
    },
    // {
    //   titulo: "AJUDE A MELHORORAR NOSSA FACULDADE",
    //   descricao: "Prezado(a) Aluno(a),",
    // },
    // {
    //   titulo: "PARCERIA MICROSOFT IMAGINE",
    //   descricao: "Prezados (as) Alunos (as),",
    // },
  ];

  return (
    <>
      {informativos &&
        informativos.map((informativo) => {
          return (
            <>
              <ItemCard>
                <Navegacao
                  href="https://forms.gle/yLzEvn4S89PgRdWP6"
                  target="_blank"
                >
                  <Titulo>{informativo.titulo}</Titulo>
                  <Rotulo>{informativo.descricao}</Rotulo>
                </Navegacao>
              </ItemCard>
            </>
          );
        })}
    </>
  );
}

export default CardInformativo;
