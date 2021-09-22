import React from 'react';
import arrowIcon from '../../../assets/icons/icon-arrow.svg';
import './_options.scss';

const Options = () => {
  return (
    <>
      <section className="options-section">
        <div className="option-container">
          <h1 className="option-title-question">
            How do you drink your coffee?
          </h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <div className="options-container">
            <div className="option-box" data-option data-option-first>
              <h2
                className="option-title"
                data-option-title
                data-option-title-first
              >
                Capsules
              </h2>
              <p
                className="option-description"
                data-option-description
                data-option-description-first
              >
                Compatible with Nespresso systems and and similar brewers
              </p>
            </div>

            <div className="option-box" data-option>
              <h2 className="option-title" data-option-title>
                Filter
              </h2>
              <p className="option-description" data-option-description>
                For pour over or drip methods like Aeropress, Chemex, and V60
              </p>
            </div>
            <div className="option-box" data-option data-option-last>
              <h2
                className="option-title"
                data-option-title
                data-option-title-last
              >
                Espresso
              </h2>
              <p
                className="option-description"
                data-option-description
                data-option-description-last
              >
                Dense and finely ground beans for an intense, flavorful
                experience
              </p>
            </div>
          </div>
        </div>

        <div className="option-container">
          <h1 className="option-title-question">What type of coffee?</h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <div className="options-container">
            <div className="option-box" data-option data-option-first>
              <h2
                className="option-title"
                data-option-title
                data-option-title-first
              >
                Single Origin
              </h2>
              <p
                className="option-description"
                data-option-description
                data-option-description-first
              >
                Distinct, high quality coffee from a specific family-owned farm
              </p>
            </div>
            <div className="option-box" data-option>
              <h2 className="option-title" data-option-title>
                Decaf
              </h2>
              <p className="option-description" data-option-description>
                Just like regular coffee, except the caffeine has been removed
              </p>
            </div>
            <div className="option-box" data-option data-option-last>
              <h2
                className="option-title"
                data-option-title
                data-option-title-last
              >
                Blended
              </h2>
              <p
                className="option-description"
                data-option-description
                data-option-description-last
              >
                Combination of two or three dark roasted beans of organic
                coffees
              </p>
            </div>
          </div>
        </div>

        <div className="option-container">
          <h1 className="option-title-question">How much would you like?</h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <div className="options-container">
            <div className="option-box" data-option data-option-first>
              <h2
                className="option-title"
                data-option-title
                data-option-title-first
              >
                250g
              </h2>
              <p
                className="option-description"
                data-option-description
                data-option-description-first
              >
                Perfect for the solo drinker. Yields about 12 delicious cups.
              </p>
            </div>
            <div className="option-box" data-option>
              <h2 className="option-title" data-option-title>
                500g
              </h2>
              <p className="option-description" data-option-description>
                Perfect option for a couple. Yields about 40 delectable cups.
              </p>
            </div>
            <div className="option-box" data-option data-option-last>
              <h2
                className="option-title"
                data-option-title
                data-option-title-last
              >
                1000g
              </h2>
              <p
                className="option-description"
                data-option-description
                data-option-description-last
              >
                Perfect for offices and events. Yields about 90 delightful cups.
              </p>
            </div>
          </div>
        </div>

        <div className="option-container">
          <h1 className="option-title-question">Want us to grind them?</h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <div className="options-container">
            <div className="option-box" data-option data-option-first>
              <h2
                className="option-title"
                data-option-title
                data-option-title-first
              >
                Whole Bean
              </h2>
              <p
                className="option-description"
                data-option-description
                data-option-description-first
              >
                Best choice if you cherish the full sensory experience
              </p>
            </div>
            <div className="option-box" data-option>
              <h2 className="option-title" data-option-title>
                Filter
              </h2>
              <p className="option-description" data-option-description>
                For pour over or drip methods like Aeropress, Chemex, and V60
              </p>
            </div>
            <div className="option-box" data-option data-option-last>
              <h2
                className="option-title"
                data-option-title
                data-option-title-last
              >
                Cafetiére
              </h2>
              <p
                className="option-description"
                data-option-description
                data-option-description-last
              >
                Course ground beans specially suited for french press coffee
              </p>
            </div>
          </div>
        </div>

        <div className="option-container">
          <h1 className="option-title-question">
            How often should we deliver?
          </h1>
          <img src={arrowIcon} alt="Arrow icon" className="arrow" data-arrow />
          <div className="options-container">
            <div className="option-box" data-option data-option-first>
              <h2
                className="option-title"
                data-option-title
                data-option-title-first
              >
                Every week
              </h2>
              <p
                className="option-description"
                data-option-description
                data-option-description-first
              >
                $14.00 per shipment. Includes free first-className shipping.
              </p>
            </div>
            <div className="option-box" data-option>
              <h2 className="option-title" data-option-title>
                Every 2 weeks
              </h2>
              <p className="option-description" data-option-description>
                $17.25 per shipment. Includes free priority shipping.
              </p>
            </div>
            <div className="option-box" data-option data-option-last>
              <h2
                className="option-title"
                data-option-title
                data-option-title-last
              >
                Every month
              </h2>
              <p
                className="option-description"
                data-option-description
                data-option-description-last
              >
                $22.50 per shipment. Includes free priority shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="create-plan-order-container">
        <button className="create-plan-order" data-plan>
          create my plan
        </button>
      </div>
    </>
  );
};

export default Options;
