import React from 'react';
import CoffeeBox from './CoffeeBox';
import styles from './_collection.module.scss';
import coffeeTypes from './data';

const Collection = () => {
  return (
    <>
      <section className={styles.collectionSection}>
        <h1 className={styles.collectionHeaderText}>our collection</h1>
        <div className={styles.coffeeTypesContainer}>
          {coffeeTypes.map((coffee) => {
            return <CoffeeBox coffeeType={coffee} key={coffee.type} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Collection;
