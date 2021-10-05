import React from 'react';
import whitecupWebpSm from '../../../assets/images/about/mobile/hero-whitecup.webp';
import whitecupJpgSm from '../../../assets/images/about/mobile/hero-whitecup.jpg';
import whitecupWebpMd from '../../../assets/images/about/tablet/hero-whitecup.webp';
import whitecupJpgMd from '../../../assets/images/about/tablet/hero-whitecup.jpg';
import './_hero-about.scss';

const Hero = () => {
  return (
    <section className="hero-about-section">
      <picture>
        <source
          srcSet={`${whitecupWebpMd} 768w, ${whitecupJpgMd}, 768w`}
          type="image/webp"
          media="(min-width: 768px)"
        />
        <source srcSet={whitecupWebpSm} type="image/webp" />
        <img src={whitecupJpgSm} alt="White cupcake" className="hero-about" />
      </picture>

      <div className="about-hero-text-box">
        <span className="about-us-title">about us</span>
        <p className="about-us-description">
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
