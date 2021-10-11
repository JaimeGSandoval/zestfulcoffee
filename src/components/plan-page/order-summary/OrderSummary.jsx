import React, { useContext, useEffect, useRef } from 'react';
import { StoreContext } from '../../../context/Context';

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

  const coloredLine = <span className="colored-line"></span>;

  const setOptionText = (data) => (data ? data : coloredLine);

  return (
    <>
      <section className="order-container">
        <div className="order-summary-text-box">
          <h1 className="order-summary-title">order summary</h1>
          <p className="order-summary-text">
            “I drink my coffee{' '}
            <span className="drinkType order-text">
              {' '}
              {specialText} {setOptionText(drinkType)}
            </span>
            , with a
            <span className="coffee order-text">
              {' '}
              {setOptionText(orderData.coffeeType)}
            </span>{' '}
            type of bean.
            <span className="amount order-text">
              {' '}
              {setOptionText(orderData.coffeeAmount)}
            </span>{' '}
            <span ref={textRef}>
              ground ala
              <span className="grind order-text">
                {' '}
                {setOptionText(orderData.grindType)}
              </span>
              ,{' '}
            </span>
            sent to me
            <span className="deliver order-text">
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
