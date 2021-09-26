import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import OrderModalProvider from './OrderModalContext';
import StoreProvider from './Context';

ReactDOM.render(
  <React.StrictMode>
    <OrderModalProvider>
      <StoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </OrderModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
