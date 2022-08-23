import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import Main from './main';
import './index.css';
const rootElement = document.getElementById('appRoot') as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
