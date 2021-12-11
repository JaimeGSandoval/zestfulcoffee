import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProvider } from './context/ModalContext';
import { HashRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/utilities/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <HashRouter>
        <ScrollToTop />
        <App />
      </HashRouter>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
