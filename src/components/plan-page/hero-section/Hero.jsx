import React from 'react';
import blackcupWebp from '../../../assets/images/plan/mobile/hero-blackcup.webp';
import blackcupJpg from '../../../assets/images/plan/mobile/hero-blackcup.jpg';
import './_hero-plan.scss';

const Hero = () => {
  return (
    <section className="plan-about-section">
      <picture>
        <source srcSet={blackcupWebp} />
        <img src={blackcupJpg} alt="White cupcake" className="hero-about" />
      </picture>
      <span className="plan-title">Create a plan</span>
      <p className="plan-description">
        Build a subscription plan that best fits your needs. We offer an
        assortment of the best artisan coffees from around the globe delivered
        fresh to your door.
      </p>
    </section>
  );
};

export default Hero;
