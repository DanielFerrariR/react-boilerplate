import React from 'react';
import ReactDOM from 'react-dom/client';
import './theme/reset.scss';
import './theme/globals.scss';
import './fonts/fonts.css';
import { Routes } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
);
