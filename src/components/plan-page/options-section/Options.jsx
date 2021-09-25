import React, { useState } from 'react';
import OrderSummary from '../order-summary/OrderSummary';
import OptionContainer from './OptionContainer';
import {
  drinkTypes,
  coffeeTypes,
  coffeeAmounts,
  grindTypes,
  deliveryTypes,
} from './coffeeOptions';
import arrowIcon from '../../../assets/icons/icon-arrow.svg';
import './_options.scss';

const Options = () => {
  const [orderData, setOrderData] = useState({
    drinkType: '',
    coffeeType: '',
    coffeeAmount: '',
    grindType: '',
    deliveryType: '',
  });

  return (
    <>
      <section className="options-section">
        <div className="option-container">
          <h1 className="option-title-question">
            How do you drink your coffee?
          </h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <OptionContainer options={drinkTypes} setOrderData={setOrderData} />
        </div>

        <div className="option-container">
          <h1 className="option-title-question">What type of coffee?</h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <OptionContainer options={coffeeTypes} setOrderData={setOrderData} />
        </div>

        <div className="option-container">
          <h1 className="option-title-question">How much would you like?</h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <OptionContainer
            options={coffeeAmounts}
            setOrderData={setOrderData}
          />
        </div>

        <div className="option-container">
          <h1 className="option-title-question">Want us to grind them?</h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <OptionContainer
            options={grindTypes}
            setOrderData={setOrderData}
            orderData={orderData}
          />
        </div>

        <div className="option-container">
          <h1 className="option-title-question">
            How often should we deliver?
          </h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <OptionContainer
            options={deliveryTypes}
            setOrderData={setOrderData}
          />
        </div>
      </section>
      <OrderSummary orderData={orderData} />
      <div className="create-plan-order-container">
        <button className="create-plan-order" data-plan>
          create my plan
        </button>
      </div>
    </>
  );
};

export default Options;
