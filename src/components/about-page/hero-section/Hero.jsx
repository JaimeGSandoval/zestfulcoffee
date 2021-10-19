import React from 'react';
import whitecupWebpSm from '../../../assets/images/about/mobile/hero-whitecup.webp';
import whitecupJpgSm from '../../../assets/images/about/mobile/hero-whitecup.jpg';
import whitecupWebpMd from '../../../assets/images/about/tablet/hero-whitecup.webp';
import whitecupJpgMd from '../../../assets/images/about/tablet/hero-whitecup.jpg';
import whitecupWebpLg from '../../../assets/images/about/desktop/hero-whitecup-lg.webp';
import whitecupJpgLg from '../../../assets/images/about/desktop/hero-whitecup-lg.jpg';
import styles from './_hero-about.module.scss';

const Hero = () => {
  return (
    <section className={styles.heroAboutSection}>
      <picture>
        <source
          srcSet={`${whitecupWebpLg} 1024w, ${whitecupJpgLg} 1024w`}
          type="image/webp"
          media="(min-width: 1024px)"
        />
        <source
          srcSet={`${whitecupWebpMd} 768w, ${whitecupJpgMd}, 768w`}
          type="image/webp"
          media="(min-width: 768px)"
        />
        <source srcSet={whitecupWebpSm} type="image/webp" />
        <img
          src={whitecupJpgSm}
          alt="White cupcake"
          className={styles.heroAbout}
        />
      </picture>

      <div className={styles.aboutHeroTextBox}>
        <span className={styles.aboutUsTitle}>about us</span>
        <p className={styles.aboutUsDescription}>
          Coffeeroasters began it's journey of exotic discovery in 1998,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </section>
  );
};

export default Hero;
