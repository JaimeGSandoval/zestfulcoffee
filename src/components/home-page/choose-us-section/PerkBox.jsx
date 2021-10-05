import React from 'react';

const PerkBox = ({ perk }) => {
  return (
    <div className="perk-box">
      <div className="perk-inner-box">
        <img src={perk.icon} alt="Coffee bean icon" className="perk-icon" />
        <div className="perk-text-box">
          <h3 className="perk-title">{perk.perkTitle}</h3>
          <p className="perk-description" lang="en">
            {perk.perkDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerkBox;
