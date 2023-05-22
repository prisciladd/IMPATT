import styled from "styled-components";

export const Styles= styled.div`    
    width:100vw;
    height:100vh;
    display:flex;

    table {
        border-collapse: collapse;
        width: 100%;
        max-width: 100%;
        background-color: #DDDDDD;
        color: #333;
      }
      
    th, td {
        padding: 12px;
        text-align: center;
        background-color: #DDDDDD;
      }

    img {
        height: 15px;
        width: 15px;
        margin-left: 5px;
    }

    .btn-boletim {
      background-color: #F8F8F8;
      border-color: #F8F8F8;
      color: #F8F8F8;
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
      padding:10px;
    }

    p{
      font-weight: bold ;
    }
      
    .breadcrumb-item {
        display: flex;
        align-items: center;
      }

    .visualization{
        color: black;
        font-size: 8px;
      }
    
      ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

`;