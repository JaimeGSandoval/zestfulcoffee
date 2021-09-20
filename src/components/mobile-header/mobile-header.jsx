import React from 'react';
import hamburgerMenu from '../../assets/icons/icon-hamburger.svg';
import logo from '../../assets/icons/logo.svg';
import './mobile-header';

const MobileHeader = ({ setShowModal }) => {
  return (
    <>
      <header className="mobile-header">
        <img src={logo} className="mobile-logo" alt="logo" />
        <img
          src={hamburgerMenu}
          className="hamburger-menu"
          alt="mobile menu icon"
          onClick={() => setShowModal(true)}
        />
      </header>
    </>
  );
};

export default MobileHeader;
