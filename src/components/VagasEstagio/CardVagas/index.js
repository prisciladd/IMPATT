import React from "react";
import { Content, Titulo, Rotulo, Descricao, LinhaDivisao } from "./Styles.js";

function CardVagas(props) {
  const estagios = [
    {
      titulo: "Oportunidade de Estágio - Estágio/Prospecção",
      local:
        "Bolsa Auxílio de R$1.127,25 (médio e técnico) e R$ 1575,00 (superior); > Vale Refeição R$ 25,00 /dia; > Auxílio home office de R$ 88,00/mês; > Auxílio transporte; > Bonificações e possibilidade de efetivação.",
      beneficios:
        "> Bolsa Auxílio de R$ 850,00 por mês; > Auxílio Transporte; > Possibilidade de Prorrogação e Efetivação.",
      contato: "Anote o código 235120 e ligue para (11) 3514-9300",
      preRequisitos:
        "> Estar cursando Técnico em Automação Industrial, Técnico em Eletricista de Manutenção, Técnico em Mecatrônica, Eletrotécnica, Eletrônica, Eletroeletrônica, Ensino Médio Integrado a Mecatrônica, Eletrotécnica, Eletrônica, Eletroeletrônica, Automação Industrial; > Conclusão: No 2° semestre de 2023 até o 2° semestre de 2024.",
    },
    {
      titulo:
        "Oportunidade de Estágio - Fabricação de equipamentos eletrônicos",
      local: "São Paulo - SP",
      beneficios:
        "> Bolsa Auxílio de R$1.100,00 por mês; > Auxílio Transporte; > Possibilidade de Prorrogação e Efetivação.",
      contato: "Anote o código 260853 e ligue para (11) 3514-9300",
      preRequisitos:
        "> Estar cursando Técnico em Eletroeletrônica, Eletrônica, Técnico em Eletrônica de Automação e Controle, Técnico em Manutenção Mecânica, Eletroeletrônica, Técnico em Eletricista de Manutenção Eletroeletrônica.",
    },
  ];

  return (
    <>
      <Content>
        {estagios &&
          estagios.map((estagio) => {
            return (
              <>
                <Titulo>{estagio.titulo}</Titulo>
                <Rotulo>LOCAL</Rotulo>
                <Descricao>{estagio.local}</Descricao>
                <Rotulo>BENEFÍCIOS</Rotulo>
                <Descricao>{estagio.beneficios}</Descricao>
                <Rotulo>CONTATO</Rotulo>
                <Descricao>{estagio.contato}</Descricao>
                <Rotulo>PRÉ-REQUISITOS</Rotulo>
                <Descricao>{estagio.preRequisitos}</Descricao>
                <LinhaDivisao />
              </>
            );
          })}
      </Content>
    </>
  );
}

export default CardVagas;
