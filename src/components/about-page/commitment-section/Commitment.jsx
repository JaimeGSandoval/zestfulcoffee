import React from 'react';
import commitmentWebpSm from '../../../assets/images/about/mobile/commitment.webp';
import commitmentJpgSm from '../../../assets/images/about/mobile/commitment.jpg';
import commitmentWebpMd from '../../../assets/images/about/tablet/commitment.webp';
import commitmentJpgMd from '../../../assets/images/about/tablet/commitment.jpg';
import './_commitment.scss';

const Commitment = () => {
  return (
    <section className="about-commitment-section">
      <picture>
        <source
          srcSet={`${commitmentWebpMd} 768w, ${commitmentJpgMd}, 768w`}
          type="image/webp"
          media="(min-width: 768px)"
        />
        <source srcSet={commitmentWebpSm} type="image/webp" />
        <img
          src={commitmentJpgSm}
          alt="Coffee worker"
          className="commitment-img"
        />
      </picture>

      <div className="about-commitment-text-box">
        <h1 className="commitment-title">Our commitment</h1>
        <p className="commitment-description">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </section>
  );
};

export default Commitment;
