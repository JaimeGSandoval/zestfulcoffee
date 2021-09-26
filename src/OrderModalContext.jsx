/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unreachable */
import React, { useState, createContext } from 'react';

export const OrderModalContext = createContext(null);

export default ({ children }) => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  console.log(' show order modal', showOrderModal);
  const orderModal = {
    showOrderModal: showOrderModal,
    setShowOrderModal: setShowOrderModal,
  };

  return (
    <OrderModalContext.Provider value={orderModal}>
      {children}
    </OrderModalContext.Provider>
  );
};
