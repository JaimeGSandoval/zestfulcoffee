import React from 'react';
import { NavLink } from 'react-router-dom';
import hamburgerMenu from '../../assets/icons/icon-hamburger.svg';
import logo from '../../assets/icons/logo.svg';
import './header';

const MobileHeader = ({ openModal }) => {
  return (
    <>
      <header className="mobile-header">
        <img src={logo} className="mobile-logo" alt="logo" />
        <img
          src={hamburgerMenu}
          className="hamburger-menu"
          alt="mobile menu icon"
          onClick={openModal}
        />

        <nav className="nav-menu-container">
          <div className="nav-box">
            <NavLink
              exact
              to="/"
              activeClassName="active-link"
              className="nav-link"
            >
              home
            </NavLink>
            <NavLink
              exact
              to="/about"
              className="nav-link"
              activeClassName="active-link"
            >
              about us
            </NavLink>
            <NavLink
              exact
              to="/plan"
              className="nav-link"
              activeClassName="active-link"
            >
              create your plan
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default MobileHeader;
