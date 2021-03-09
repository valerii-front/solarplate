import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);




  return (
    <header id="header" >
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
          <nav id="1" className={showMenu ? "header__nav_menu" : "header__nav_menu active"}>
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
          <i
            onClick={() => setShowMenu(!showMenu)}
            className='icon fas fa-bars fa-2x'
            id="burger"
          ></i>
          <a href="tel:+48505404374" className="header__phone">
            +48 505-404-374
          </a>
        </div>
      </div>


    </header>
  );
};


export default Header;