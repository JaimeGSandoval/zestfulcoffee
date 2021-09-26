import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from '../../../Context';
import { OrderModalContext } from '../../../OrderModalContext';

const OrderModal = () => {
  const { orderData } = useContext(StoreContext);
  const { showOrderModal } = useContext(OrderModalContext);
  const show = showOrderModal ? 'show-order-modal' : '';
  let priceTotal = '';

  if (
    orderData.deliveryType === 'Every week' &&
    orderData.coffeeAmount === '250g'
  ) {
    priceTotal = '7.20';
  }

  if (
    orderData.deliveryType === 'Every 2 weeks' &&
    orderData.coffeeAmount === '250g'
  ) {
    priceTotal = '9.60';
  }

  if (
    orderData.deliveryType === 'Every month' &&
    orderData.coffeeAmount === '250g'
  ) {
    priceTotal = '12.00';
  }

  if (
    orderData.deliveryType === 'Every week' &&
    orderData.coffeeAmount === '500g'
  ) {
    priceTotal = '13.00';
  }

  if (
    orderData.deliveryType === 'Every 2 weeks' &&
    orderData.coffeeAmount === '500g'
  ) {
    priceTotal = '17.50';
  }

  if (
    orderData.deliveryType === 'Every month' &&
    orderData.coffeeAmount === '500g'
  ) {
    priceTotal = '22.00';
  }

  if (
    orderData.deliveryType === 'Every week' &&
    orderData.coffeeAmount === '1000g'
  ) {
    priceTotal = '22.00';
  }

  if (
    orderData.deliveryType === 'Every 2 weeks' &&
    orderData.coffeeAmount === '1000g'
  ) {
    priceTotal = '32.00';
  }

  if (
    orderData.deliveryType === 'Every month' &&
    orderData.coffeeAmount === '1000g'
  ) {
    priceTotal = '42.00';
  }

  return ReactDOM.createPortal(
    <div className={`order-summary-modal-container ${show}`} aria-modal="true">
      <div className="order-summary-modal-box">
        <div className="order-modal-title-container">
          <div className="order-modal-title-box">
            <h1 className="order-modal-title">order summary</h1>
          </div>
        </div>

        <div className="order-modal-text-box">
          <p className="order-modal-text">
            “I drink my coffee{' '}
            <span className="drinkType order-text">
              {' '}
              as {orderData.drinkType}
            </span>
            , with a{' '}
            <span className="coffee order-text"> {orderData.coffeeType}</span>{' '}
            type of bean.{' '}
            <span className="amount order-text"> {orderData.coffeeAmount}</span>{' '}
            ground ala{' '}
            <span className="grind order-text"> {orderData.grindType}</span>,
            sent to me{' '}
            <span className="deliver order-text">
              {' '}
              {orderData.deliveryType}
            </span>
            .”
          </p>
        </div>

        <div className="confirm-text-box">
          <p className="confirm-text">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
        </div>

        <button className="submit-order-btn">
          Checkout - $<span className="total">{priceTotal}</span> / mo
        </button>
      </div>
    </div>,
    document.getElementById('order-modal')
  );
};

export default OrderModal;
