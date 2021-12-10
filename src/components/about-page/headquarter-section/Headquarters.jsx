import React from 'react';
import AddressBox from './AddressBox';
import addresses from './data';
import styles from './_headquarters.module.scss';

const Headquarters = () => {
  return (
    <section className={styles.headquartersSection}>
      <h1 className={styles.headquartersTitle}>Our headquarters</h1>
      <div className={styles.addressBoxContainer}>
        {addresses.map((address) => {
          return <AddressBox address={address} key={address.city} />;
        })}
      </div>
    </section>
  );
};

export default Headquarters;
