import React from 'react';
import { Link } from 'react-router-dom';
import heroWebpSm from '../../../assets/images/home/mobile/hero-coffeepress.webp';
import heroJpgSm from '../../../assets/images/home/mobile/hero-coffeepress.jpg';
import heroWebpMd from '../../../assets/images/home/tablet/hero-coffeepress.webp';
import heroJpgMd from '../../../assets/images/home/tablet/hero-coffeepress.jpg';
import heroWebpLg from '../../../assets/images/home/desktop/hero-coffeepress-lg.webp';
import heroJpgLg from '../../../assets/images/home/desktop/hero-coffeepress-lg.jpg';
import styles from './_hero-styles.module.scss';
// import './_hero-styles.module.scss';

const Hero = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <picture>
          <source
            srcSet={`${heroWebpLg}, 1024w, ${heroJpgLg} 1024w`}
            media="(min-width: 1024px)"
            type="image/webp"
          />
          <source
            srcSet={`${heroWebpMd}, 768w, ${heroJpgMd} 768w`}
            media="(min-width: 768px)"
            type="image/webp"
          />
          <source srcSet={heroWebpSm} type="image/webp" />
          <img src={heroJpgSm} alt="coffee beans" className="hero" />
        </picture>

        <div className={styles.heroHomeTextBox}>
          <span className={styles.centeredTextTop}>great coffee</span>
          <span className={styles.centeredTextBottom}>made simple.</span>
          <span className={styles.heroDescription} lang="en">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </span>
          <Link to="/plan" className={styles.createPlanBtnHeroHome}>
            create a plan
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
