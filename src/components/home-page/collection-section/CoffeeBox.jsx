import React from 'react';

const CoffeeBox = ({ coffeeType }) => {
  return (
    <div className="coffee-box">
      <div className="coffee-img-container">
        <picture>
          <source srcSet={coffeeType.imgWebp} />
          <img
            src={coffeeType.imgPng}
            alt={coffeeType.imgAlt}
            className="coffee-img"
          />
        </picture>
      </div>
      <div className="coffee-type-text-box">
        <h2 className="coffee-title">{coffeeType.type}</h2>
        <p className="coffee-description" lang="en">
          {coffeeType.description}
        </p>
      </div>
    </div>
  );
};

export default CoffeeBox;
