import React from 'react';
import whitecupWebp from '../../../assets/images/about/mobile/hero-whitecup.webp';
import whitecupJpg from '../../../assets/images/about/mobile/hero-whitecup.jpg';
import './_hero-about.scss';

const Hero = () => {
  return (
    <section className="hero-about-section">
      <picture>
        <source srcSet={whitecupWebp} />
        <img src={whitecupJpg} alt="White cupcake" className="hero-about" />
      </picture>
      <span className="about-us-title">about us</span>
      <p className="about-us-description">
        Coffeeroasters began it's journey of exotic discovery in 1998,
        highlighting stories of coffee from around the world. We have since been
        dedicated to bring the perfect cup - from bean to brew - in every
        shipment.
      </p>
    </section>
  );
};

export default Hero;
