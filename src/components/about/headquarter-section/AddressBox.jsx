import React from 'react';

const AddressBox = ({ address }) => {
  return (
    <div className="address-container">
      <img src={address.icon} alt="UK icon" className="country-icons" />
      <h2 className="country-title">{address.country}</h2>
      <div className="address-text-box">
        <span className="address-text">{address.street}</span>
        <span className="address-text">{address.city}</span>
        <span className="address-text">{address.code}</span>
        <span className="address-text">{address.phone}</span>
      </div>
    </div>
  );
};

export default AddressBox;
