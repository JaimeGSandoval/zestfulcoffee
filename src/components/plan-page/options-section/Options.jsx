import React, { useRef, useContext, useEffect } from 'react';
import OrderSummary from '../order-summary/OrderSummary';
import { OrderModalContext } from '../../../context/OrderModalContext';
import { StoreContext } from '../../../context/Context';
import AsideTitles from '../aside-titles/AsideTitles';
import calculateButtonState from './calculate-btn-state';
import OptionsType from './OptionsType';

import {
  drinkTypes,
  coffeeTypes,
  coffeeAmounts,
  grindTypes,
  deliveryTypes,
} from './data';
import styles from './_options.module.scss';

const types = [
  drinkTypes,
  coffeeTypes,
  coffeeAmounts,
  grindTypes,
  deliveryTypes,
];

const Options = () => {
  const { setShowOrderModal } = useContext(OrderModalContext);
  const { orderData } = useContext(StoreContext);

  let buttonState = calculateButtonState(orderData);

  return (
    <>
      <section className={styles.optionsSection}>
        <AsideTitles />
        <div className={styles.contentContainer}>
          {types.map((type) => {
            return <OptionsType options={type} key={type.id} />;
          })}
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

// useEffect(() => {
//   if (
//     (orderData.drinkType === 'Capsule' && showGrindTypes) ||
//     orderData.drinkType === 'Capsule'
//   ) {
//     setShowGrindTypes(false);
//     grindRef.current.style.pointerEvents = 'none';
//     grindRef.current.nextElementSibling.classList.add('hide');
//     grindRef.current.classList.add('changeSvg');
//     grindRef.current.previousElementSibling.classList.add('disabledFont');
//     return;
//   } else {
//     grindRef.current.style.pointerEvents = 'auto';
//     grindRef.current.nextElementSibling.classList.remove('hide');
//     grindRef.current.classList.remove('changeSvg');
//     grindRef.current.previousElementSibling.classList.remove('disabledFont');
//   }

//   handleToggle(grindRef, showGrindTypes);
// }, [showGrindTypes, orderData.drinkType]);
