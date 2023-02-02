import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { NavLink } from 'react-router-dom';
import hamburgerMenu from '../../assets/icons/icon-hamburger.svg';
import logo from '../../assets/icons/logo.png';

const MobileHeader = ({ openModal }) => {
  const context = useContext(ModalContext);
  const { modalState, setModalState } = context;

  const modalControl = () => {
    setModalState(!modalState);
  };

  return (
    <>
      <header className='mobile-header'>
        <div className='logoContainer'>
          <img src={logo} className='mobileLogo' alt='logo' />
          <span className='logoText' style={{ color: 'white' }}>
            Zestful Coffee
          </span>
        </div>
        <img
          src={hamburgerMenu}
          className='hamburger-menu'
          alt='mobile menu icon'
          onClick={modalControl}
        />

        <nav className='nav-menu-container'>
          <div className='nav-box'>
            <NavLink exact to='/' activeClassName='active-link' className='nav-link'>
              home
            </NavLink>
            <NavLink exact to='/about' className='nav-link' activeClassName='active-link'>
              about us
            </NavLink>
            <NavLink exact to='/plan' className='nav-link' activeClassName='active-link'>
              create your plan
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default MobileHeader;
