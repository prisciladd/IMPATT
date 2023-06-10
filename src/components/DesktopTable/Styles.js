import styled from "styled-components";

export const Table1 = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const ResponsiveTableWrapper1 = styled.div`
  overflow-x: auto;
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
  font-size: smaller;
  font-family: "EurostileBold", Helvetica, sans-serif;

  span.bold {
    font-weight: bold;
  }

  
`;

export const Styles= styled.div`
.btn.btn-small.btn-nota-ponderada-absoluta {
    background-color: #F2F2F2;
    padding: 10px;
    height: 40px;
    max-width: 200px;
    border: none;
    border-color: #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn.btn-small.btn-nota-ponderada-absoluta img {
    height: 20px;
    margin-right: 10px;
    color: #040404;
  }

  .linha-cinza {
  background-color: #2F2F2F;
}

.linha-azul {
  background-color: #49AFCD;
}

  
  .btn.btn-small.btn-nota-ponderada-absoluta span {
    vertical-align: middle;
    color: #040404;
  }

  .btn_imprimir button.btn {
    background-color: #F2F2F2;
    padding: 10px;
    height: 40px;
    max-width: 200px;
    border: none;
    border-color: #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .btn_imprimir button.btn img {
    height: 20px;
    margin-left: 10px;
    color: #040404;
  }
  
  .btn_imprimir button.btn span {
    vertical-align: middle;
    color: #040404;
  }
  .table-subtitle span {
    font-weight: bold;
  }

  .table-subtitle {
    background-color: #bdbdbd;
    font-size: smaller;
    font-family: "EurostileBold", Helvetica, sans-serif;
  }  
  .table-subtitle img {
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }

  .table-title1 {
    background-color: #2F2F2F;
  }

  .table-title1 span {
    color: #ffffff;
    font-size: smaller;
    font-family: "EurostileBold", Helvetica, sans-serif;
  }

  .table-sem-pai {
    background-color: #2F2F2F;
  }

  .table-sem-pai span {
    color: #ffffff;
    font-size: smaller;
    font-family: "EurostileBold", Helvetica, sans-serif;
  }

  .table-pai {
    background-color: #49AFCD;
  }

  .table-pai span {
    color: #ffffff;
    font-size: smaller;
    font-family: "EurostileBold", Helvetica, sans-serif;
  }

  .materia-pai {
    background-color: #49AFCD;
  }

  .materia-sem-pai {
    background-color: #cccacb;
  }

  .materia-pai,
  .materia-sem-pai{
    font-weight: bold;
    font-size: smaller;
    text-align: center;
    font-family: "EurostileBold", Helvetica, sans-serif;
  }

  .table-obs {
    text-align: left;
    font-size: smaller;
    font-family: "EurostileBold", Helvetica, sans-serif;
    background-color: #bdbdbd; /* Define o background como #BDBDBD */
  }

  .table-obs b {
    font-weight: bold;
  }

  .table-print {
    text-align: right;
    background-color: #bdbdbd; /* Define o background como #BDBDBD */
  }

  .table-title1 button {
    width: 85%; /* Ajuste a largura do botão proporcionalmente */
    height: 75%; /* Ajuste a altura do botão proporcionalmente */
    margin: 0 auto; /* Centralize o botão horizontalmente */
    /* Outras propriedades de estilo que você desejar */
  }

  @media (max-width: 600px) {
  /* Estilos para dispositivos com largura máxima de 768px */
  .table {
    /* Ajuste o estilo da tabela em geral */
    width: 10%;
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
}


  

`;