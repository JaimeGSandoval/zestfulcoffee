import React from 'react';
import PerkBox from './PerkBox';
import perks from './data';
import styles from './_choose-us.module.scss';

const ChooseUs = () => {
  return (
    <>
      <section className={styles.chooseUsSection}>
        <div className={styles.chooseDescriptionContainer}>
          <h2 className={styles.chooseTitle}>Why choose us?</h2>
          <p className={styles.chooseDescription} lang="en">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>

        <div className={styles.perksBg}>
          <div className={styles.perksContainer}>
            {perks.map((perk) => {
              return <PerkBox perk={perk} key={perk.perkTitle} />;
            })}
          </div>
        </div>
      </section>
      <div className={styles.spacer}></div>
    </>
  );
};

export default ChooseUs;
