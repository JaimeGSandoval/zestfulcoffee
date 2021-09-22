import React from 'react';
import { Link } from 'react-router-dom';
import './_hero-styles.scss';
import heroWebp from '../../../assets/images/home/mobile/hero-coffeepress.webp';
import heroPng from '../../../assets/images/home/mobile/hero-coffeepress.jpg';

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
        <span className="hero-description">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </span>
        <button className="create-plan-btn" data-plan>
          <Link to="/plan">create a plan</Link>
        </button>
      </section>
    </>
  );
};

export default Hero;
