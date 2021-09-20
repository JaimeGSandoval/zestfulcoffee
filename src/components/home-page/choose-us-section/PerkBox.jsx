import React from 'react';

const PerkBox = ({ perk }) => {
  return (
    <div className="perk-box">
      <img src={perk.icon} alt="Coffee bean icon" className="perk-icon" />
      <h3 className="perk-title">{perk.perkTitle}</h3>
      <p className="perk-description">{perk.perkDescription}</p>
    </div>
  );
};

export default PerkBox;
