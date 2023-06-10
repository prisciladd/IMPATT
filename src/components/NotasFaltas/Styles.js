import styled from "styled-components";

export const Titulo = styled.h1`
  font-family: "EurostileLTStd", "Trebuchet MS", sans-serif;
  color: #042b55;
  font-size: 40px;
  font-weight: 300; /* Deixa a fonte mais magra */

  @media (max-width: 600px) {
    font-size: 30px;
  }
  `;
export const Styles = styled.div`
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  table {
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    background-color: #dddddd;
    color: #333;
  }

  th,
  td {
    padding: 12px;
    text-align: center;
    background-color: #cccacb;
    border-bottom: 1px solid #fff; /* Linha branca fina separando as células */
  }

  thead th {
    background-color: #bdbdbd; /* Cor do TableHead */
  }

  img {
    height: 15px;
    width: 15px;
    margin-left: 5px;
  }

  .btn-boletim {
    background-color: #f8f8f8;
    border-color: #f8f8f8;
    color: #f8f8f8;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    padding: 12px 24px;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: 5px;
  }

  .title-default {
    padding: 10px;
  }

  .breadcrumb-container {
    display: flex;
    width: 100%;
  }

  .breadcrumb {
    display: flex;
  }

  a {
    padding: 10px;
  }

  p {
    font-weight: bold;
  }

  .breadcrumb-item {
    display: flex;
    align-items: center;
  }

  .visualization {
    color: black;
    font-size: 8px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  

  @media screen and (max-width: 600px) {
    /* Estilos para dispositivos móveis */
    width: 100%;
    height: auto;

    .col-lg-4 {
      width: 100%;
      font-size: 16px;
    }

    .breadcrumb-container {
      flex-direction: column;
    }

    .breadcrumb {
      margin-top: 10px;
      font-size: 8px; /* Tamanho menor para dispositivos móveis */
    }
  }

  
`;
