import React, { useContext, useEffect, useRef } from 'react';
import { StoreContext } from '../../../context/Context';
import styles from './_order-summary.module.scss';

const OrderSummary = () => {
  const textRef = useRef();
  const { orderData } = useContext(StoreContext);

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
      <span style={{ color: '#f3fcf7' }}>using</span>
    ) : (
      <span style={{ color: '#f3fcf7' }}>as</span>
    );

  const coloredLine = <span className={styles.coloredLine}></span>;

  const setOptionText = (data) => (data ? data : coloredLine);

  return (
    <>
      <section className={styles.orderContainer}>
        <div className={styles.orderSummaryTextBox}>
          <h1 className={styles.orderSummaryTitle}>order summary</h1>
          <p className={styles.orderSummaryText}>
            “I drink my coffee{' '}
            <span className={styles.orderText}>
              {' '}
              {specialText} {setOptionText(drinkType)}
            </span>
            , with a
            <span className={styles.orderText}>
              {' '}
              {setOptionText(orderData.coffeeType)}
            </span>{' '}
            type of bean.
            <span className={styles.orderText}>
              {' '}
              {setOptionText(orderData.coffeeAmount)}
            </span>{' '}
            <span ref={textRef}>
              ground ala
              <span className={styles.orderText}>
                {' '}
                {setOptionText(orderData.grindType)}
              </span>
              ,{' '}
            </span>
            sent to me
            <span className={styles.orderText}>
              {' '}
              {setOptionText(orderData.deliveryType)}
            </span>
            .”
          </p>
        </div>
      </section>
    </>
  );
};

export default OrderSummary;
