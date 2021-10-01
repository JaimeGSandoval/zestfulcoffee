import React from 'react';
import CreatePlanBtn from '../../utilities/CreatePlanBtn';
import heroWebp from '../../../assets/images/home/mobile/hero-coffeepress.webp';
import heroPng from '../../../assets/images/home/mobile/hero-coffeepress.jpg';
import './_hero-styles.scss';

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <picture>
          <source srcSet={heroWebp} />
          <img src={heroPng} alt="coffee beans" className="hero" />
        </picture>
        <span className="centered-text-top">great coffee</span>
        <span className="centered-text-bottom">made simple.</span>
        <span className="hero-description" lang="en">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </span>
        <CreatePlanBtn text={'create a plan'} className="create-plan-btn" />
      </section>
    </>
  );
};

export default Hero;
