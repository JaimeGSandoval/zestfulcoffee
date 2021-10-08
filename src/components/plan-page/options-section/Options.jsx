import React, { useState, useRef, useContext, useEffect } from 'react';
import OrderSummary from '../order-summary/OrderSummary';
import { OrderModalContext } from '../../../context/OrderModalContext';
import { StoreContext } from '../../../context/Context';
import OptionContainer from './OptionContainer';
import AsideTitles from '../aside-titles/AsideTitles';
import arrowIcon from '../../../assets/icons/icon-arrow.svg';
import calculateButtonState from './calculate-btn-state';
import handleToggle from './control-accordion';
import {
  drinkTypes,
  coffeeTypes,
  coffeeAmounts,
  grindTypes,
  deliveryTypes,
} from './coffeeOptions';
import './_options.scss';

const Options = () => {
  const drinkRef = useRef();
  const coffeeRef = useRef();
  const amountRef = useRef();
  const grindRef = useRef();
  const deliveryRef = useRef();
  const { setShowOrderModal } = useContext(OrderModalContext);
  const { orderData } = useContext(StoreContext);
  const [showDrinkTypes, setShowDrinkTypes] = useState(false);
  const [showCoffeeTypes, setShowCoffeeTypes] = useState(false);
  const [showCoffeeAmounts, setShowCoffeeAmounts] = useState(false);
  const [showGrindTypes, setShowGrindTypes] = useState(false);
  const [showDeliveryTypes, setShowDeliveryTypes] = useState(false);

  useEffect(() => {
    handleToggle(drinkRef, showDrinkTypes);
  }, [showDrinkTypes]);

  useEffect(() => {
    handleToggle(coffeeRef, showCoffeeTypes);
  }, [showCoffeeTypes]);

  useEffect(() => {
    handleToggle(amountRef, showCoffeeAmounts);
  }, [showCoffeeAmounts]);

  useEffect(() => {
    handleToggle(deliveryRef, showDeliveryTypes);
  }, [showDeliveryTypes]);

  useEffect(() => {
    if (
      (orderData.drinkType === 'Capsule' && showGrindTypes) ||
      orderData.drinkType === 'Capsule'
    ) {
      grindRef.current.nextElementSibling.classList.add('hide');
      grindRef.current.classList.remove('toggle-arrow');
      grindRef.current.classList.add('change-svg');
      grindRef.current.previousElementSibling.classList.add('disabled-font');
      return;
    } else {
      grindRef.current.nextElementSibling.classList.remove('hide');
      grindRef.current.classList.remove('change-svg');
      grindRef.current.previousElementSibling.classList.remove('disabled-font');
    }

    handleToggle(grindRef, showGrindTypes);
  }, [showGrindTypes, orderData.drinkType]);

  let buttonState = calculateButtonState(orderData);

  return (
    <>
      <section className="options-section">
        <AsideTitles
          preference={showDrinkTypes}
          beanType={showCoffeeTypes}
          amount={showCoffeeAmounts}
          grindType={showGrindTypes}
          deliveryType={showDeliveryTypes}
        />

        <div className="content-container">
          <div className="option-container">
            <h1 className="option-title-question">
              How do you drink your coffee?
            </h1>
            <img
              src={arrowIcon}
              alt="Arrow icon"
              className="arrow"
              data-arrow
              onClick={() => setShowDrinkTypes(!showDrinkTypes)}
              ref={drinkRef}
            />
            <OptionContainer options={drinkTypes} />
          </div>

          <div className="option-container">
            <h1 className="option-title-question">What type of coffee?</h1>
            <img
              src={arrowIcon}
              alt="Arrow icon"
              className="arrow"
              data-arrow
              onClick={() => setShowCoffeeTypes(!showCoffeeTypes)}
              ref={coffeeRef}
            />
            <OptionContainer options={coffeeTypes} />
          </div>

          <div className="option-container">
            <h1 className="option-title-question">How much would you like?</h1>
            <img
              src={arrowIcon}
              alt="Arrow icon"
              className="arrow"
              data-arrow
              onClick={() => setShowCoffeeAmounts(!showCoffeeAmounts)}
              ref={amountRef}
            />
            <OptionContainer options={coffeeAmounts} />
          </div>

          <div className="option-container">
            <h1 className="option-title-question">Want us to grind them?</h1>
            <img
              src={arrowIcon}
              alt="Arrow icon"
              className="arrow"
              data-arrow
              onClick={() => setShowGrindTypes(!showGrindTypes)}
              ref={grindRef}
            />
            <OptionContainer options={grindTypes} />
          </div>

          <div className="option-container">
            <h1 className="option-title-question">
              How often should we deliver?
            </h1>
            <img
              src={arrowIcon}
              alt="Arrow icon"
              className="arrow"
              data-arrow
              onClick={() => setShowDeliveryTypes(!showDeliveryTypes)}
              ref={deliveryRef}
            />
            <OptionContainer options={deliveryTypes} />
          </div>
        </div>
      </section>
      <OrderSummary />
      <div className="create-plan-order-container">
        <button
          className={!buttonState ? 'create-plan-order' : 'disabled-btn'}
          data-plan
          onClick={() => setShowOrderModal(true)}
          disabled={buttonState}
        >
          create my plan
        </button>
      </div>
    </>
  );
};

export default Options;
