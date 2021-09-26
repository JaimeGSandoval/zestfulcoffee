import React, { useContext } from 'react';
import { StoreContext } from '../../../Context';

const OrderSummary = () => {
  const { orderData } = useContext(StoreContext);
  const drinkType =
    orderData.drinkType === 'Capsule'
      ? `${orderData.drinkType}s`
      : orderData.drinkType;

  const specialText =
    orderData.drinkType === 'Capsule' ? (
      <span style={{ color: '#f3fcf7' }}>using</span>
    ) : (
      <span style={{ color: '#f3fcf7' }}>as</span>
    );

  return (
    <>
      <section className="order-container">
        <div className="order-summary-text-box">
          <h1 className="order-summary-title">order summary</h1>
          <p className="order-summary-text">
            “I drink my coffee{' '}
            <span className="drinkType order-text">
              {' '}
              {specialText} {drinkType}
            </span>
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
