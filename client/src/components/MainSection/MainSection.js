import React from 'react';
import { Link } from 'react-scroll';


import './MainSection.css';

const MainSection = () => {
  return (
    <div className="main__section">
      <div className="container">
        <div className="offer_section">
          <h1>Podążaj ku przyszłości</h1>
          <h2>Online - sklep płyt fotowoltanicznych da ci możliwość
            <br />uratować nature!</h2>
          <Link
            activeClass="active"
            to="form"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn"
          >
            Zamów
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MainSection;