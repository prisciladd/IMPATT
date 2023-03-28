import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Header"
import User from './User';
import Content from './Content';
import Menu from './Menu';

import SwitchButton from './SwitchButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <SwitchButton /> 
        <Header />
        <User/>
        <Menu />
        <Content />
  </React.StrictMode>
);
