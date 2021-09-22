import React from 'react';
import OptionBox from './OptionBox';
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
          <div className="options-container">
            {drinkTypes.map((drinkType) => {
              return (
                <OptionBox option={drinkType} key={drinkType.optionTitle} />
              );
            })}
          </div>
        </div>

        <div className="option-container">
          <h1 className="option-title-question">What type of coffee?</h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <div className="options-container">
            {coffeeTypes.map((coffeeType) => {
              return (
                <OptionBox option={coffeeType} key={coffeeType.optionTitle} />
              );
            })}
          </div>
        </div>

        <div className="option-container">
          <h1 className="option-title-question">How much would you like?</h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <div className="options-container">
            {coffeeAmounts.map((coffeeAmount) => {
              return (
                <OptionBox
                  option={coffeeAmount}
                  key={coffeeAmount.optionTitle}
                />
              );
            })}
          </div>
        </div>

        <div className="option-container">
          <h1 className="option-title-question">Want us to grind them?</h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <div className="options-container">
            {grindTypes.map((grindType) => {
              return (
                <OptionBox option={grindType} key={grindType.optionTitle} />
              );
            })}
          </div>
        </div>

        <div className="option-container">
          <h1 className="option-title-question">
            How often should we deliver?
          </h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <div className="options-container">
            {deliveryTypes.map((deliveryType) => {
              return (
                <OptionBox
                  option={deliveryType}
                  key={deliveryType.optionTitle}
                />
              );
            })}
          </div>
        </div>
      </section>

      <div className="create-plan-order-container">
        <button className="create-plan-order" data-plan>
          create my plan
        </button>
      </div>
    </>
  );
};

export default Options;
