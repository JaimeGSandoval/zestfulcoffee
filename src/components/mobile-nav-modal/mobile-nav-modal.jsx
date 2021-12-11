import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import closeIcon from '../../assets/icons/icon-close.svg';
import styles from './_mobile-nav-modal.module.scss';

const MobileNavModal = () => {
  const { modalState, setModalState } = useContext(ModalContext);

  const modalControl = () => {
    setModalState(!modalState);
  };

  if (modalState) {
    return ReactDOM.createPortal(
      <div className={styles.mobileNavPage} onClick={modalControl}>
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
            onClick={modalControl}
            onError={(e) => (e.target.onerror = null)}
          />
        </div>

        <nav className={styles.mobileNav} aria-label="mobile navigation">
          <ul className={styles.mobileNavList}>
            <li>
              <Link
                to="/"
                className={styles.mobileNavLinks}
                onClick={modalControl}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={styles.mobileNavLinks}
                onClick={modalControl}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="/plan"
                className={styles.mobileNavLinks}
                onClick={modalControl}
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
};

export default MobileNavModal;
