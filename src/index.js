import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Header"
import User from './User';
import Content from './Content';
import Menu from './Menu'
import { WonderPush } from 'react-wonderpush';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap your app with our WonderPush component */}
    <WonderPush options = {{webKey: "a6a00ccf60ffee04cb201cead4304fc4db8fa8e0a2823a77466e8c8ebeed4e25"}}>
      
        <Header />
        <User/>
        <Menu />
        <Content />
      
    </WonderPush>
  </React.StrictMode>
);
