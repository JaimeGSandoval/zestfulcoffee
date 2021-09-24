import React from 'react';

export const gatherOrderData = (orderData) => {
  console.log('order data is ', orderData);
  return orderData;
};

const OrderSummary = () => {
  return (
    <>
      <section class="order-container">
        <div class="order-summary-text-box">
          <h1 class="order-summary-title">order summary</h1>
          <p class="order-summary-text">
            “I drink my coffee <span class="drinkType order-text"> Filter</span>
            , with a <span class="coffee order-text"> Decaf</span> type of bean.
            <span class="amount order-text"> 250g</span> ground ala
            <span class="grind order-text"> Cafetiére</span>, sent to me
            <span class="deliver order-text"> Every Week</span>.”
          </p>
        </div>
      </section>
    </>
  );
};

export default OrderSummary;
