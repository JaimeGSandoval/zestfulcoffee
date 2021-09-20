import React from 'react';
import PerkBox from './PerkBox';
import coffeeBean from '../../../assets/icons/icon-coffee-bean.svg';
import gift from '../../../assets/icons/icon-gift.svg';
import truck from '../../../assets/icons/icon-truck.svg';
import './_choose-us.scss';

const perks = [
  {
    perkTitle: 'Best Quality',
    perkDescription:
      "Discover an endless variety of the world's artisan coffee from each of our roasters",
    icon: coffeeBean,
  },
  {
    perkTitle: 'Exclusive benefits',
    perkDescription:
      'Special offers and swag when you subscribe, including 30% off your first shipment.',
    icon: gift,
  },
  {
    perkTitle: 'Free shipping',
    perkDescription:
      '  We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
    icon: truck,
  },
];

const ChooseUs = () => {
  return (
    <>
      <section className="choose-us-section">
        <div className="choose-description-container">
          <h2 className="choose-title">Why choose us?</h2>
          <p className="choose-description">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>

        <div className="perks-bg">
          <div className="perks-container">
            {perks.map((perk) => {
              return <PerkBox perk={perk} key={perk.perkTitle} />;
            })}
          </div>
        </div>
      </section>
      <div className="spacer"></div>
    </>
  );
};

export default ChooseUs;
