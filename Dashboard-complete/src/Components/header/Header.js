import React from 'react';
import './header.css';
import { MDBSwitch } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import img from '../../asserts/fingerprint.png';
import img2 from '../../asserts/wom.png';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg  text-danger bg-dark">
        <div class="container-fluid">
          <div className="main-Div" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="/">
              <img className="finger" src={img} alt="fingerPic" />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="linebar"></div>
              </li>
              <li className="nav-item">
                <a className="nav-link-text" href="/">
                  Good Evening Aleesha!
                </a>
              </li>
            </ul>
          </div>

          <div class="d-flex align-items-center">
            <div class="right-part">
              <img className="user-pic" src={img2} alt="user-pic" />
              <span className="Alesha-text">Aleesha Campbell</span>
              <div className="agent-text">Agent Online</div>
              <span className="  switch-btn">
                <MDBSwitch id="flexSwitchCheckDefault" />
              </span>
              <span className="angle-down">
                {' '}
                <MDBIcon fas icon="angle-down" />{' '}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
