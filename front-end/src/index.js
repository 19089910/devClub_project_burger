import React from 'react';
import ReactDOM from 'react-dom/client';
import StylesGlobal from './styles/styles'
import Routes from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StylesGlobal/>
    <Routes/>
  </React.StrictMode>
);
