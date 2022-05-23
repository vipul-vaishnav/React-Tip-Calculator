import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalContextProvider } from './context/Global/GlobalContext';
import { AlertContextProvider } from './context/Alert/AlertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>
);
