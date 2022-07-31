import React from 'react';
import ReactDOM from 'react-dom/client';
import { RootPage } from './core';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RootPage />
  </React.StrictMode>
);
