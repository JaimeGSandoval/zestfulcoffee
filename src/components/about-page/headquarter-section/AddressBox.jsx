import React from 'react';
import styles from './_headquarters.module.scss';

const AddressBox = ({ address }) => {
  return (
    <div className={styles.addressContainer}>
      <img src={address.icon} alt="UK icon" className={styles.countryIcons} />
      <h2 className={styles.countryTitle}>{address.country}</h2>
      <div className={styles.addressTextBox}>
        <span className={styles.addressText}>{address.street}</span>
        <span className={styles.addressText}>{address.city}</span>
        <span className={styles.addressText}>{address.code}</span>
        <span className={styles.addressText}>{address.phone}</span>
      </div>
    </div>
  );
};

export default AddressBox;
