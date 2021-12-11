import React, { useState, createContext } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState(false);

  return (
    <ModalContext.Provider value={{ modalState, setModalState }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
