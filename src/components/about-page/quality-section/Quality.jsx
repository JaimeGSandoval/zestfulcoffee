import React from 'react';
import qualityWebp from '../../../assets/images/about/mobile/quality.webp';
import qualityJpg from '../../../assets/images/about/mobile/quality.jpg';
import qualityWebpLg from '../../../assets/images/about/desktop/quality-lg.webp';
import qualityJpgLg from '../../../assets/images/about/desktop/quality-lg.jpg';
import styles from './_quality.module.scss';

const Quality = () => {
  return (
    <section className={styles.qualitySection}>
      <div className={styles.qualityContainer}>
        <picture>
          <source
            srcSet={`${qualityWebpLg} 900w, ${qualityJpgLg} 900w`}
            type="image/webp"
            media="(min-width: 900px)"
          />
          <source srcSet={qualityWebp} />
          <img
            src={qualityJpg}
            alt="Coffee worker"
            className={styles.qualityImg}
          />
        </picture>
        <div className={styles.qualityTextBox}>
          <h1 className={styles.qualityTitle}>Uncompromising quality</h1>
          <p className={styles.qualityDescription}>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quality;
