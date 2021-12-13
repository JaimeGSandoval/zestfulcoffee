import React, { useContext } from 'react';
import { StoreContext } from '../../../context/Context';
import styles from './_aside-titles.module.scss';

const AsideTitles = () => {
  const { orderData } = useContext(StoreContext);

  const titleClass = (value) => {
    let textColor = value ? styles.selectedText : styles.unselected;
    return textColor;
  };

  const numberClass = (value) => {
    let numColor = value ? styles.selectedNumber : styles.unselected;
    return numColor;
  };

  return (
    <>
      <aside className={styles.aside}>
        <div className={styles.sectionTitleBox}>
          <span
            className={`${styles.sectionNumber} ${numberClass(
              orderData.drinkType
            )}`}
          >
            01
          </span>
          <span
            className={`${styles.sectionTitle} ${titleClass(
              orderData.drinkType
            )}`}
          >
            preferences
          </span>
        </div>
        <div className={styles.sectionTitleBox}>
          <span
            className={`${styles.sectionNumber} ${numberClass(
              orderData.coffeeType
            )}`}
          >
            02
          </span>
          <span
            className={`${styles.sectionTitle} ${titleClass(
              orderData.coffeeType
            )}`}
          >
            bean type
          </span>
        </div>{' '}
        <div className={styles.sectionTitleBox}>
          <span
            className={`${styles.sectionNumber} ${numberClass(
              orderData.coffeeAmount
            )}`}
          >
            03
          </span>
          <span
            className={`${styles.sectionTitle} ${titleClass(
              orderData.coffeeAmount
            )}`}
          >
            quantity
          </span>
        </div>{' '}
        <div className={styles.sectionTitleBox}>
          <span
            className={`${styles.sectionNumber} ${
              orderData.drinkType === 'Capsule' && orderData.grindType
                ? styles.unselected
                : numberClass(orderData.grindType)
            }`}
          >
            04
          </span>
          <span
            className={`${styles.sectionTitle} ${
              orderData.drinkType === 'Capsule' && orderData.grindType
                ? styles.unselected
                : titleClass(orderData.grindType)
            }`}
          >
            grind options
          </span>
        </div>{' '}
        <div className={styles.sectionTitleBox}>
          <span
            className={`${styles.sectionNumber} ${numberClass(
              orderData.deliveryType
            )}`}
          >
            05
          </span>
          <span
            className={`${styles.sectionTitle} ${titleClass(
              orderData.deliveryType
            )}`}
          >
            deliveries
          </span>
        </div>
      </aside>
    </>
  );
};

export default AsideTitles;
