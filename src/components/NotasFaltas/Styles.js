import styled from "styled-components";


export const Styles= styled.div`    
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: center;
    background-color: #FFFFFF;

    .span10 {
        margin: 50px;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 0;
    }

    .breadcrumb-item {
        font-size: 1rem;
    }

    .table-responsive {
        max-width: 100%;
        overflow-x: auto;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        max-width: 100%;
        margin-bottom: 1rem;
        background-color: #DDDDDD;
        color: #333;
        border: 1px solid #ddd;
        font-size: 14px;
      }
      
      th, td {
        padding: 12px;
        text-align: left;
        border: 1px solid #ddd;
      }
      
      th {
        font-weight: bold;
        background-color: #DDDDDD;
      }
      
      tbody tr:nth-child(even) {
        background-color: #DDDDDD;
      }
      
      tbody tr:hover {
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
      font-size: 1rem;
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
      font-size: 0.5rem;
      text-color: black;
      
    }

    .btn-boletim:hover {
        background-color: #0067b9;
        border-color: #0062ad;
    }

    .title-default {
        background-color: #DDDDDD;
        padding: 20px;
    }
    .breadcrumb-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
        width: 100%;
      }
      .breadcrumb {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      
      .breadcrumb-item {
        display: flex;
        align-items: center;
        margin-right: 10px;
        border-right: 1px solid #ccc;
        padding-right: 10px;
      }
      
      .breadcrumb-item:first-child {
        order: 1;
        margin-right: auto;
      }
      
      .divider {
        margin: 0 8px;
      }
      
      .breadcrumb-item:last-child {
        order: 3;
        margin-left: auto;
        border-right: none;
        padding-right: 0;
      }
      .separator {
        width: 50px;
        height: 1px;
        margin: 0 15px;
        background-color: #ddd;
      }
      .visualization{
        color: black;
        font-size: 8px;
      }
      
`;