import React, { useContext } from 'react';
import { StoreContext } from '../../../context/Context';
import './_aside-titles.scss';

const AsideTitles = ({
  preference,
  beanType,
  amount,
  grindType,
  deliveryType,
}) => {
  const { orderData } = useContext(StoreContext);

  const titleClass = (value) => {
    let textColor = null;
    if (value) {
      textColor = 'selectedText';
    } else {
      textColor = 'unselected';
    }
    return textColor;
  };

  const numberClass = (value) => {
    let numColor = null;
    if (value) {
      numColor = 'selectedNumber';
    } else {
      numColor = 'unselected';
    }
    return numColor;
  };

  return (
    <>
      <aside className="aside">
        <div className="section-title-box">
          <span
            className={`section-number ${numberClass(orderData.drinkType)}`}
          >
            01
          </span>
          <span className={`section-title ${titleClass(preference)}`}>
            preferences
          </span>
        </div>
        <div className="section-title-box">
          <span
            className={`section-number ${numberClass(orderData.coffeeType)}`}
          >
            02
          </span>
          <span className={`section-title ${titleClass(beanType)}`}>
            bean type
          </span>
        </div>{' '}
        <div className="section-title-box">
          <span
            className={`section-number ${numberClass(orderData.coffeeAmount)}`}
          >
            03
          </span>
          <span className={`section-title ${titleClass(amount)}`}>
            quantity
          </span>
        </div>{' '}
        <div className="section-title-box">
          <span
            className={`section-number ${
              orderData.drinkType === 'Capsule' && orderData.grindType
                ? 'unselected'
                : numberClass(orderData.grindType)
            }`}
          >
            04
          </span>
          <span
            className={`section-title ${
              grindType ? 'selectedText' : 'unselected'
            }`}
          >
            grind options
          </span>
        </div>{' '}
        <div className="section-title-box">
          <span
            className={`section-number ${numberClass(orderData.deliveryType)}`}
          >
            05
          </span>
          <span className={`section-title ${titleClass(deliveryType)}`}>
            deliveries
          </span>
        </div>
      </aside>
    </>
  );
};

export default AsideTitles;
