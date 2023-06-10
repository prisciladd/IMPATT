import styled from "styled-components";

export const Table1 = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Titulo = styled.h1`
  font-family: "EurostileLTStd", "Trebuchet MS", sans-serif;
  color: #042b55;
  font-size: 40px;
  font-weight: 300; /* Deixa a fonte mais magra */

  @media (max-width: 600px) {
    font-size: 30px;
  }
  `;


export const ResponsiveTable1 = styled(Table1)`
  @media (max-width: 767px) {
    th, td {
      width: 90%;
      display: block;
      font-size: 12px;
      padding: 5px;
    }

    th {
      text-align: left;
    }

    .table-left {
    /* Defina estilos apropriados para a coluna "Disciplina" */
    font-size: 12px;
  }

  .table-left span {
    /* Ajuste o tamanho da fonte dos spans dentro das colunas */
    font-size: 12px;
  }
  .table-left a {
    /* Ajuste o tamanho da fonte e o espaçamento dos links dentro das colunas */
    font-size: 12px;
    margin-left: 5px;
  }
  .table-left {
    /* Ajuste o espaçamento entre as células da tabela */
    padding: 5px;
  }

  }
`;

export const TableHeader1 = styled.th`
  border-bottom: 1px solid #ddd;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  ${(props) => props.colSpan && `grid-column-end: span ${props.colSpan};`}
  &.table-title.borderless {
    border: none;
    background-color: transparent;
  }
`;

export const TableData1 = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
  
`;

export const ResponsiveTableWrapper1 = styled.div`
  overflow-x: auto;
`;


export const Styles= styled.div`
  
  @media (max-width: 767px) {
  /* Estilos para dispositivos com largura máxima de 768px */
    .table {
      /* Ajuste o estilo da tabela em geral */
    width: 10%;
    }
    .col-lg-4 {
      width: 100%;
      font-size: 14px;
    }

    .breadcrumb-container {
      flex-direction: column;
    }

    .breadcrumb {
      margin-top: 10px;
      font-size: 8px; /* Tamanho menor para dispositivos móveis */
    }
  
  }

  .breadcrumb{
    font-size: 12px;
  }
  .table-title {
    /* Defina estilos apropriados para os títulos das colunas */
    font-size: 12px;
  }

  .table-subtitle {
    /* Defina estilos apropriados para os subtítulos das colunas */
    font-size: 12px;
  }

  .table-left {
    /* Defina estilos apropriados para a coluna "Disciplina" */
    font-size: 12px;
  }

  .table-subtitle span,
  .table-left span {
    /* Ajuste o tamanho da fonte dos spans dentro das colunas */
    font-size: 12px;
  }

  .table-subtitle a,
  .table-left a {
    /* Ajuste o tamanho da fonte e o espaçamento dos links dentro das colunas */
    font-size: 12px;
    margin-left: 5px;
  }

  .nota-mac,
  .nota-prova,
  .nota-sub,
  .nota-pai,
  .nota-bo,
  .nota-mf {
    /* Defina estilos apropriados para as células de notas */
    font-size: 12px;
    padding: 5px;
  }

  .table-subtitle,
  .table-left,
  .nota-mac,
  .nota-prova,
  .nota-sub,
  .nota-pai,
  .nota-bo,
  .nota-mf {
    /* Ajuste o espaçamento entre as células da tabela */
    padding: 5px;
  }

  .materia-um{
  margin-bottom: 10px;
  background-color: #ECEBEB;

  }

  .materia-dois{
    margin-top: 10px;
  margin-bottom: 10px;
  background-color: #ECEBEB
  }
  .materia-tres{
    margin-top: 10px;
  margin-bottom: 10px;
  background-color: #ECEBEB
  }
  .materia-quatro{
    margin-top: 10px;
  margin-bottom: 10px;
  background-color: #ECEBEB
  }
  .materia-cinco{
    margin-top: 10px;
  margin-bottom: 10px;
  background-color: #ECEBEB
  }
  .materia-seis{
    margin-top: 10px;
  margin-bottom: 10px;
  background-color: #ECEBEB
  }

  .table-materia {
  background-color: black;
  color: #ffffff;
  font-size: smaller;
  font-family: "EurostileBold", Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
}
.table-vernota {
  background-color: #cccacb;
  color: black;
  font-size: smaller;
  font-family: "EurostileBold", Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
}
.table-expandeac {
  background-color: #cccacb;
  color: black;
  font-size: smaller;
  font-family: "EurostileBold", Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
}
.table-compai {
  background-color: #49AFCD;
  color: white;
  font-size: smaller;
  font-family: "EurostileBold", Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
}
.table-sempai {
  background-color: black;
  color: white;
  font-size: smaller;
  font-family: "EurostileBold", Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
}
.table-notas {
  background-color: #cccacb;
  color: black;
  font-size: smaller;
  font-family: "EurostileBold", Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
}
.table-notacompai {
  background-color: #49AFCD;
  color: black;
  font-size: smaller;
  font-family: "EurostileBold", Helvetica, sans-serif;
  text-align: center;
}
.table-notasempai {
  background-color: #cccacb;
  color: black;
  font-size: smaller;
  font-family: "EurostileBold", Helvetica, sans-serif;
  text-align: center;
}
.table-ac {
  background-color: #cccacb;
  color: black;
  font-size: smaller;
  font-family: "EurostileBold", Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
}
.table-notaac {
  background-color: #cccacb;
  color: black;
  font-size: smaller;
  font-family: "EurostileBold", Helvetica, sans-serif;
  text-align: center;
}

 

`;