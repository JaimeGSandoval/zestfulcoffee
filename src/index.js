import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import OrderModalContext from './OrderModalContext';
import StoreProvider from './Context';

ReactDOM.render(
  <React.StrictMode>
    <OrderModalContext>
      <StoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </OrderModalContext>
  </React.StrictMode>,
  document.getElementById('root')
);
