import React from 'react';
import styles from './_choose-us.module.scss';

const PerkBox = ({ perk }) => {
  return (
    <div className={styles.perkBox}>
      <div className={styles.perkInnerBox}>
        <img
          src={perk.icon}
          alt="Coffee bean icon"
          className={styles.perkIcon}
        />
        <div className={styles.perkTextBox}>
          <h3 className={styles.perkTitle}>{perk.perkTitle}</h3>
          <p className={styles.perkDescription} lang="en">
            {perk.perkDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerkBox;
