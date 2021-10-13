import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import closeIcon from '../../assets/icons/icon-close.svg';
import styles from './_mobile-nav-modal.module.scss';

const MobileNavModal = forwardRef((props, ref) => {
  const [showModal, setShowModal] = useState(false);

  const openModalClick = () => {
    setShowModal(true);
  };

  const closeModalClick = () => {
    setShowModal(false);
  };

  // attaching functions to the ref that can be used in the component where the ref lives
  useImperativeHandle(ref, () => {
    return {
      open: () => openModalClick(),
      close: () => closeModalClick(),
    };
  });

  if (showModal) {
    return ReactDOM.createPortal(
      <div className={styles.mobileNavPage} onClick={closeModalClick}>
        <div className={styles.mobilePageHeader}>
          <img
            src={logo}
            alt="logo"
            className={styles.mobileNavLogo}
            onError={(e) => (e.target.onerror = null)}
          />
          <img
            src={closeIcon}
            alt="mobile icon close"
            className={styles.mobileClose}
            onClick={closeModalClick}
            onError={(e) => (e.target.onerror = null)}
          />
        </div>

        <nav className={styles.mobileNav} aria-label="mobile navigation">
          <ul className={styles.mobileNavList}>
            <li>
              <Link
                to="/"
                className={styles.mobileNavLinks}
                onClick={closeModalClick}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={styles.mobileNavLinks}
                onClick={closeModalClick}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="/plan"
                className={styles.mobileNavLinks}
                onClick={closeModalClick}
              >
                create a plan
              </Link>
            </li>
          </ul>
        </nav>
      </div>,
      document.getElementById('modal-root')
    );
  }

  return null;
});

export default MobileNavModal;
