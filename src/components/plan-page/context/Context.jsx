/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unreachable */
import React, { useState, createContext } from 'react';
export const StoreContext = createContext(null);

export default ({ children }) => {
  const [orderData, setOrderData] = useState({
    drinkType: '',
    coffeeType: '',
    coffeeAmount: '',
    grindType: '',
    deliveryType: '',
  });

  const store = {
    orderData: orderData,
    setOrderData: setOrderData,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
