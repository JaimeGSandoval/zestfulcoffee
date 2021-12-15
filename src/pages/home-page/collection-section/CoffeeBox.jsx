import React from 'react';
import styles from './_collection.module.scss';

const CoffeeBox = ({ coffeeType }) => {
  return (
    <div className={styles.coffeeBox}>
      <div className={styles.coffeeImgContainer}>
        <picture>
          <source srcSet={coffeeType.imgWebp} media="(min-width: 320px)" />
          <img
            src={coffeeType.imgPng}
            alt={coffeeType.imgAlt}
            className={styles.coffeeImg}
          />
        </picture>
      </div>
      <div className={styles.coffeeTypeTextBox}>
        <h2 className={styles.coffeeTitle}>{coffeeType.type}</h2>
        <p className={styles.coffeeDescription} lang="en">
          {coffeeType.description}
        </p>
      </div>
    </div>
  );
};

export default CoffeeBox;
