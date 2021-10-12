import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import OrderModalProvider from './context/OrderModalContext';
import StoreProvider from './context/Context';
import ScrollToTop from './components/utilities/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <OrderModalProvider>
      <StoreProvider>
        <HashRouter>
          <ScrollToTop />
          <App />
        </HashRouter>
      </StoreProvider>
    </OrderModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
