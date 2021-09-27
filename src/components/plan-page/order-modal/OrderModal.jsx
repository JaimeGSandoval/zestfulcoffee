import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { StoreContext } from '../../../Context';
import { OrderModalContext } from '../../../OrderModalContext';
import calculateTotal from './priceTotal';

const OrderModal = ({ history }) => {
  const { orderData } = useContext(StoreContext);
  const { showOrderModal, setShowOrderModal } = useContext(OrderModalContext);
  const show = showOrderModal ? 'show-order-modal' : '';

  const drinkType =
    orderData.drinkType === 'Capsule'
      ? `${orderData.drinkType}s`
      : orderData.drinkType;

  const specialText =
    orderData.drinkType === 'Capsule' ? (
      <span style={{ color: '#83888f' }}>using</span>
    ) : (
      <span style={{ color: '#83888f' }}>as</span>
    );

  const historyPush = () => {
    history.push('/');
    setShowOrderModal(false);
  };

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
              {specialText} {drinkType}
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

        <button className="submit-order-btn" onClick={() => historyPush()}>
          Checkout -
          <span className="total">
            {calculateTotal(orderData.coffeeAmount, orderData.deliveryType)}
          </span>{' '}
          / mo
        </button>
      </div>
    </div>,
    document.getElementById('order-modal')
  );
};

export default withRouter(OrderModal);
