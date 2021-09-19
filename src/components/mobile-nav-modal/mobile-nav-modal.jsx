import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import close from '../../assets/icons/icon-close.svg';
import './mobile-nav-modal';

const MobileNavModal = ({ showModal, setShowModal }) => {
  const show = showModal ? 'mobile-nav-page' : 'hide';

  return (
    <>
      <div className={show}>
        <div className="mobile-page-header">
          <img src={logo} alt="logo" className="mobile-nav-logo" />
          <img
            src={close}
            alt="mobile icon close"
            className="mobile-close"
            onClick={() => setShowModal(false)}
          />
        </div>

        <nav className="mobile-nav" aria-label="mobile navigation">
          <ul className="mobile-nav-list">
            <li>
              <Link
                to="/"
                className="mobile-nav-links"
                onClick={() => setShowModal(false)}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="mobile-nav-links"
                onClick={() => setShowModal(false)}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="/plan"
                className="mobile-nav-links"
                onClick={() => setShowModal(false)}
              >
                create a plan
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNavModal;
