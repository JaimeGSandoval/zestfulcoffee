import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { StoreContext } from '../context/Context';
import { OrderModalContext } from '../context/OrderModalContext';
import calculateTotal from './priceTotal';
import styles from './_order-modal.module.scss';

const OrderModal = ({ history }) => {
  const textRef = useRef();
  const { orderData, setOrderData } = useContext(StoreContext);
  const { showOrderModal, setShowOrderModal } = useContext(OrderModalContext);
  const show = showOrderModal ? styles.showOrderModal : '';

  useEffect(() => {
    if (orderData.drinkType === 'Capsule') {
      textRef.current.style.display = 'none';
    } else {
      textRef.current.style.display = 'initial';
    }
  }, [orderData.drinkType]);

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

  const handleClick = () => {
    history.push('/');
    setShowOrderModal(false);
    setOrderData({
      drinkType: '',
      coffeeType: '',
      coffeeAmount: '',
      grindType: '',
      deliveryType: '',
    });
  };

  return ReactDOM.createPortal(
    <div
      className={`${styles.orderSummaryModalContainer} ${show}`}
      aria-modal="true"
    >
      <div className={styles.orderSummaryModalBox}>
        <div className={styles.orderModalTitleContainer}>
          <div className={styles.orderModalTitleBox}>
            <h1 className={styles.orderModalTitle}>order summary</h1>
          </div>
        </div>

        <div className={styles.orderModalTextBox}>
          <p className={styles.orderModalText}>
            “I drink my coffee{' '}
            <span className={styles.orderText}>
              {' '}
              {specialText} {drinkType}
            </span>
            , with a{' '}
            <span className={styles.orderText}> {orderData.coffeeType}</span>{' '}
            type of bean.{' '}
            <span className={styles.orderText}> {orderData.coffeeAmount}</span>{' '}
            <span ref={textRef}>
              ground ala{' '}
              <span className={styles.orderText}> {orderData.grindType}</span>,{' '}
            </span>
            sent to me{' '}
            <span className={styles.orderText}> {orderData.deliveryType}</span>
            .”
          </p>
        </div>

        <div className={styles.confirmTextBox}>
          <p className={styles.confirmText}>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
        </div>

        <button
          className={styles.submitOrderBtnMobile}
          onClick={() => handleClick()}
        >
          Checkout -
          <span className={styles.total}>
            {calculateTotal(orderData.coffeeAmount, orderData.deliveryType)}
          </span>{' '}
          / mo
        </button>

        <div className={styles.checkoutTotalContainerLg}>
          <span className={styles.total}>
            {calculateTotal(orderData.coffeeAmount, orderData.deliveryType)} /
            mo
          </span>{' '}
          <button
            className={styles.submitOrderBtnLg}
            onClick={() => handleClick()}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('order-modal')
  );
};

export default withRouter(OrderModal);
