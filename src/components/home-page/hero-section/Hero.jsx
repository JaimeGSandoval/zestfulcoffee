import React from 'react';
import CreatePlanBtn from '../../utilities/CreatePlanBtn';
import heroWebpSm from '../../../assets/images/home/mobile/hero-coffeepress.webp';
import heroJpgSm from '../../../assets/images/home/mobile/hero-coffeepress.jpg';
import heroWebpMd from '../../../assets/images/home/tablet/hero-coffeepress.webp';
import heroJpgMd from '../../../assets/images/home/tablet/hero-coffeepress.jpg';
import heroWebpLg from '../../../assets/images/home/desktop/hero-coffeepress-lg.webp';
import heroJpgLg from '../../../assets/images/home/desktop/hero-coffeepress-lg.jpg';

import './_hero-styles.scss';

const Hero = () => {
  return (
    <>
      <section className="hero-section">
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

        <div className="hero-home-text-box">
          <span className="centered-text-top">great coffee</span>
          <span className="centered-text-bottom">made simple.</span>
          <span className="hero-description" lang="en">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </span>
          <CreatePlanBtn
            text={'create a plan'}
            className="create-plan-btn-hero-home"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
