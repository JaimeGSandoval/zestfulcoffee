import React, { useState, useRef, useContext, useEffect } from 'react';
import OrderSummary from '../order-summary/OrderSummary';
import { OrderModalContext } from '../../../context/OrderModalContext';
import { StoreContext } from '../../../context/Context';
import OptionContainer from './OptionContainer';
import arrowIcon from '../../../assets/icons/icon-arrow.svg';
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
    const panel = drinkRef.current.nextElementSibling;
    if (showDrinkTypes) {
      panel.classList.add('show-option');
      drinkRef.current.classList.add('toggle-arrow');
    }

    if (!showDrinkTypes) {
      panel.classList.remove('show-option');
      drinkRef.current.classList.remove('toggle-arrow');
    }
  }, [showDrinkTypes]);

  useEffect(() => {
    const panel = coffeeRef.current.nextElementSibling;
    if (showCoffeeTypes) {
      panel.classList.add('show-option');
      coffeeRef.current.classList.add('toggle-arrow');
    }

    if (!showCoffeeTypes) {
      panel.classList.remove('show-option');
      coffeeRef.current.classList.remove('toggle-arrow');
    }
  }, [showCoffeeTypes]);

  useEffect(() => {
    const panel = amountRef.current.nextElementSibling;
    if (showCoffeeAmounts) {
      panel.classList.add('show-option');
      amountRef.current.classList.add('toggle-arrow');
    }

    if (!showCoffeeAmounts) {
      panel.classList.remove('show-option');
      amountRef.current.classList.remove('toggle-arrow');
    }
  }, [showCoffeeAmounts]);

  useEffect(() => {
    const panel = grindRef.current.nextElementSibling;

    if (orderData.drinkType === 'Capsule') {
      return grindRef.current.removeEventListener('click', setShowGrindTypes);
    }

    if (showGrindTypes) {
      panel.classList.add('show-option');
      grindRef.current.classList.add('toggle-arrow');
    }

    if (!showGrindTypes) {
      panel.classList.remove('show-option');
      grindRef.current.classList.remove('toggle-arrow');
    }
  }, [showGrindTypes, orderData.drinkType]);

  useEffect(() => {
    const panel = deliveryRef.current.nextElementSibling;
    if (showDeliveryTypes) {
      panel.classList.add('show-option');
      deliveryRef.current.classList.add('toggle-arrow');
    }

    if (!showDeliveryTypes) {
      panel.classList.remove('show-option');
      deliveryRef.current.classList.remove('toggle-arrow');
    }
  }, [showDeliveryTypes]);

  return (
    <>
      <section className="options-section">
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
      </section>
      <OrderSummary />
      <div className="create-plan-order-container">
        <button
          className="create-plan-order"
          data-plan
          onClick={() => setShowOrderModal(true)}
        >
          create my plan
        </button>
      </div>
    </>
  );
};

export default Options;
