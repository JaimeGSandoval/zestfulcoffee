import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import OrderModalProvider from './context/OrderModalContext';
import StoreProvider from './context/Context';
import ScrollToTop from './components/utilities/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <OrderModalProvider>
      <StoreProvider>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </StoreProvider>
    </OrderModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
