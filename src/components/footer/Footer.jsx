import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/icons/footer-logo.svg';
import facebook from '../../assets/icons/icon-facebook.svg';
import twitter from '../../assets/icons/icon-twitter.svg';
import instagram from '../../assets/icons/icon-instagram.svg';
import styles from './_footer.module.scss';
// import './_footer.scss';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoLinksBox}>
          <img src={footerLogo} className={styles.footerLogo} alt="logo" />

          <ul className={styles.footerNav}>
            <li>
              <Link to="/" className={styles.footerNavLink} data-footer-link>
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={styles.footerNavLink}
                data-footer-link
              >
                about us
              </Link>
            </li>
            <li>
              <Link
                to="/plan"
                className={styles.footerNavLink}
                data-footer-link
              >
                create a plan
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.socialIconsBox}>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img
              src={facebook}
              className={styles.mobileFooterLogo}
              alt="facebook logo"
            />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img
              src={twitter}
              className={styles.mobileFooterLogo}
              alt="twitter logo"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img
              src={instagram}
              className={styles.mobileFooterLogo}
              alt="instagram logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
