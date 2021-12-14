import React from 'react';
import styles from './_aside-titles.module.scss';

const titleClass = (value) => {
  let textColor = value ? styles.selectedText : styles.unselected;
  return textColor;
};

const numberClass = (value) => {
  let numColor = value ? styles.selectedNumber : styles.unselected;
  return numColor;
};

const customGrindNumClass = (option, data) => {
  return data.drinkType === 'Capsule' && data.grindType
    ? styles.unselected
    : numberClass(option.type);
};

const customGrindTitleClass = (option, data) => {
  return data.drinkType === 'Capsule' && data.grindType
    ? styles.unselected
    : titleClass(option.type);
};

const ContentBox = ({ option, orderData }) => {
  return (
    <div className={styles.sectionTitleBox}>
      <span
        className={
          option.title === 'grind options'
            ? `${styles.sectionNumber} ${customGrindNumClass(
                option,
                orderData
              )}`
            : `${styles.sectionNumber} ${numberClass(option.type)}`
        }
      >
        {option.num}
      </span>
      <span
        className={
          option.title === 'grind options'
            ? `${styles.sectionTitle} ${customGrindTitleClass(
                option,
                orderData
              )}`
            : `${styles.sectionTitle} ${titleClass(option.type)}`
        }
      >
        {option.title}
      </span>
    </div>
  );
};

export default ContentBox;
