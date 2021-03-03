import React from 'react';
import { Link } from 'react-scroll';

import './Header.css';

const Header = () => {

  return (
    <header id="header">
      <div className="container">
        <div className="header__section">
          <a href="/" className="header__logo">
            <div className="logo__plate">
              <div className="logo__plate_row">
                <div className="item_first_row" />
                <div className="item_first_row" />
                <div className="item_first_row" />
              </div>
              <div className="logo__plate_row">
                <div className="item_second_row" />
                <div className="item_second_row" />
                <div className="item_second_row" />
              </div>
              <div className="logo__plate_row">
                <div className="item_third_row" />
                <div className="item_third_row" />
                <div className="item_third_row" />
              </div>
            </div>
            <div className="logo_name">
              Paw-Luk Energy
            </div>
          </a>
          <nav className="header__nav_menu">
            <Link
              activeClass="active"
              to="offer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              OFERTA
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              O NAS
            </Link>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              REALIZACJE
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              KONTAKT
            </Link>
          </nav>
          <a href="tel:+48505404374" className="header__phone">
            +48 505-404-374
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;