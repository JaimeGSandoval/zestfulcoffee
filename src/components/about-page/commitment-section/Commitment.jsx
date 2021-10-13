import React from 'react';
import commitmentWebpSm from '../../../assets/images/about/mobile/commitment.webp';
import commitmentJpgSm from '../../../assets/images/about/mobile/commitment.jpg';
import commitmentWebpMd from '../../../assets/images/about/tablet/commitment.webp';
import commitmentJpgMd from '../../../assets/images/about/tablet/commitment.jpg';
import commitmentWebpLg from '../../../assets/images/about/desktop/commitment-lg.webp';
import commitmentJpgLg from '../../../assets/images/about/desktop/commitment-lg.jpg';
import styles from './_commitment.module.scss';
// import './_commitment.scss';

const Commitment = () => {
  return (
    <section className={styles.aboutCommitmentSection}>
      <picture>
        <source
          srcSet={`${commitmentWebpLg} 1024w, ${commitmentJpgLg}, 1024w`}
          type="image/webp"
          media="(min-width: 1024px)"
        />
        <source
          srcSet={`${commitmentWebpMd} 768w, ${commitmentJpgMd}, 768w`}
          type="image/webp"
          media="(min-width: 768px)"
        />
        <source srcSet={commitmentWebpSm} type="image/webp" />
        <img
          src={commitmentJpgSm}
          alt="Coffee worker"
          className={styles.commitmentImg}
        />
      </picture>

      <div className={styles.aboutCommitmentTextBox}>
        <h1 className={styles.commitmentTitle}>Our commitment</h1>
        <p className={styles.commitmentDescription}>
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
