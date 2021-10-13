import React from 'react';
import { NavLink } from 'react-router-dom';
import hamburgerMenu from '../../assets/icons/icon-hamburger.svg';
import logo from '../../assets/icons/logo.svg';
import styles from './_header.module.scss';
// import './header';

const MobileHeader = ({ openModal }) => {
  return (
    <>
      <header className={styles.mobileHeader}>
        <img src={logo} className={styles.mobileLogo} alt="logo" />
        <img
          src={hamburgerMenu}
          className={styles.hamburgerMenu}
          alt="mobile menu icon"
          onClick={openModal}
        />

        <nav className={styles.navMenuContainer}>
          <div className={styles.navBox}>
            <NavLink
              exact
              to="/"
              activeClassName={styles.activeLink}
              className={styles.navLink}
            >
              home
            </NavLink>
            <NavLink
              exact
              to="/about"
              className={styles.navLink}
              activeClassName={styles.activeLink}
            >
              about us
            </NavLink>
            <NavLink
              exact
              to="/plan"
              className={styles.navLink}
              activeClassName={styles.activeLink}
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
