import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/icons/footer-logo.svg';
import facebook from '../../assets/icons/icon-facebook.svg';
import twitter from '../../assets/icons/icon-twitter.svg';
import instagram from '../../assets/icons/icon-instagram.svg';
import './_footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-links-box">
          <img src={footerLogo} className="footer-logo" alt="logo" />

          <ul className="footer-nav">
            <li>
              <Link to="/" className="footer-nav-link" data-footer-link>
                home
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-nav-link" data-footer-link>
                about us
              </Link>
            </li>
            <li>
              <Link to="/plan" className="footer-nav-link" data-footer-link>
                create a plan
              </Link>
            </li>
          </ul>
        </div>

        <div className="social-icons-box">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img
              src={facebook}
              className="mobile-footer-logo"
              alt="facebook logo"
            />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img
              src={twitter}
              className="mobile-footer-logo"
              alt="twitter logo"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img
              src={instagram}
              className="mobile-footer-logo"
              alt="instagram logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
