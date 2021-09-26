import React from 'react';
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
  return (
    <>
      <section className="options-section">
        <div className="option-container">
          <h1 className="option-title-question">
            How do you drink your coffee?
          </h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <OptionContainer options={drinkTypes} />
        </div>

        <div className="option-container">
          <h1 className="option-title-question">What type of coffee?</h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <OptionContainer options={coffeeTypes} />
        </div>

        <div className="option-container">
          <h1 className="option-title-question">How much would you like?</h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <OptionContainer options={coffeeAmounts} />
        </div>

        <div className="option-container">
          <h1 className="option-title-question">Want us to grind them?</h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <OptionContainer options={grindTypes} />
        </div>

        <div className="option-container">
          <h1 className="option-title-question">
            How often should we deliver?
          </h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <OptionContainer options={deliveryTypes} />
        </div>
      </section>
      <OrderSummary />
      <div className="create-plan-order-container">
        <button className="create-plan-order" data-plan>
          create my plan
        </button>
      </div>
    </>
  );
};

export default Options;
// orderData = { orderData };
