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
import styles from './_options.module.scss';

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
      setShowGrindTypes(false);
      grindRef.current.style.pointerEvents = 'none';
      grindRef.current.nextElementSibling.classList.add('hide');
      grindRef.current.classList.remove('toggleArrow');
      grindRef.current.classList.add('changeSvg');
      grindRef.current.previousElementSibling.classList.add('disabledFont');
      return;
    } else {
      grindRef.current.style.pointerEvents = 'auto';
      grindRef.current.nextElementSibling.classList.remove('hide');
      grindRef.current.classList.remove('changeSvg');
      grindRef.current.previousElementSibling.classList.remove('disabledFont');
    }

    handleToggle(grindRef, showGrindTypes);
  }, [showGrindTypes, orderData.drinkType]);

  let buttonState = calculateButtonState(orderData);

  return (
    <>
      <section className={styles.optionsSection}>
        <AsideTitles
          preference={showDrinkTypes}
          beanType={showCoffeeTypes}
          amount={showCoffeeAmounts}
          grindType={showGrindTypes}
          deliveryType={showDeliveryTypes}
        />

        <div className={styles.contentContainer}>
          <div className={styles.optionContainer}>
            <h1 className={styles.optionTitleQuestion}>
              How do you drink your coffee?
            </h1>
            <img
              src={arrowIcon}
              alt="Arrow icon"
              className={styles.arrow}
              data-arrow
              onClick={() => setShowDrinkTypes(!showDrinkTypes)}
              ref={drinkRef}
            />
            <OptionContainer options={drinkTypes} />
          </div>

          <div className={styles.optionContainer}>
            <h1 className={styles.optionTitleQuestion}>What type of coffee?</h1>
            <img
              src={arrowIcon}
              alt="Arrow icon"
              className={styles.arrow}
              data-arrow
              onClick={() => setShowCoffeeTypes(!showCoffeeTypes)}
              ref={coffeeRef}
            />
            <OptionContainer options={coffeeTypes} />
          </div>

          <div className={styles.optionContainer}>
            <h1 className={styles.optionTitleQuestion}>
              How much would you like?
            </h1>
            <img
              src={arrowIcon}
              alt="Arrow icon"
              className={styles.arrow}
              data-arrow
              onClick={() => setShowCoffeeAmounts(!showCoffeeAmounts)}
              ref={amountRef}
            />
            <OptionContainer options={coffeeAmounts} />
          </div>

          <div className={styles.optionContainer}>
            <h1 className={styles.optionTitleQuestion}>
              Want us to grind them?
            </h1>
            <img
              src={arrowIcon}
              alt="Arrow icon"
              className={styles.arrow}
              data-arrow
              onClick={() => setShowGrindTypes(!showGrindTypes)}
              ref={grindRef}
            />
            <OptionContainer options={grindTypes} />
          </div>

          <div className={styles.optionContainer}>
            <h1 className={styles.optionTitleQuestion}>
              How often should we deliver?
            </h1>
            <img
              src={arrowIcon}
              alt="Arrow icon"
              className={styles.arrow}
              data-arrow
              onClick={() => setShowDeliveryTypes(!showDeliveryTypes)}
              ref={deliveryRef}
            />
            <OptionContainer options={deliveryTypes} />
          </div>
        </div>
      </section>
      <OrderSummary />
      <div className={styles.createPlanOrderContainer}>
        <button
          className={!buttonState ? styles.createPlanOrder : styles.disabledBtn}
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
