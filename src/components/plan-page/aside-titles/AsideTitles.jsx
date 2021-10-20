import React, { useContext } from 'react';
import { StoreContext } from '../context/Context';
import styles from './_aside-titles.module.scss';

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
      textColor = styles.selectedText;
    } else {
      textColor = styles.unselected;
    }
    return textColor;
  };

  const numberClass = (value) => {
    let numColor = null;
    if (value) {
      numColor = styles.selectedNumber;
    } else {
      numColor = styles.unselected;
    }
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
          <span className={`${styles.sectionTitle} ${titleClass(preference)}`}>
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
          <span className={`${styles.sectionTitle} ${titleClass(beanType)}`}>
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
          <span className={`${styles.sectionTitle} ${titleClass(amount)}`}>
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
              grindType ? styles.selectedText : styles.unselected
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
            className={`${styles.sectionTitle} ${titleClass(deliveryType)}`}
          >
            deliveries
          </span>
        </div>
      </aside>
    </>
  );
};

export default AsideTitles;
