import React, { useContext } from 'react';
import { StoreContext } from '../../../Context';

const OrderSummary = () => {
  const { orderData } = useContext(StoreContext);
  return (
    <>
      <section className="order-container">
        <div className="order-summary-text-box">
          <h1 className="order-summary-title">order summary</h1>
          <p className="order-summary-text">
            “I drink my coffee as
            <span className="drinkType order-text"> {orderData.drinkType}</span>
            , with a
            <span className="coffee order-text"> {orderData.coffeeType}</span>{' '}
            type of bean.
            <span className="amount order-text">
              {' '}
              {orderData.coffeeAmount}
            </span>{' '}
            ground ala
            <span className="grind order-text"> {orderData.grindType}</span>,
            sent to me
            <span className="deliver order-text">
              {' '}
              {orderData.deliveryType}
            </span>
            .”
          </p>
        </div>
      </section>
    </>
  );
};

export default OrderSummary;
