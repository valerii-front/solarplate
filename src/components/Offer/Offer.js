import React from 'react';

import './Offer.css';

const Offer = () => {
  return (
    <div className="offer__section">
      <div className="container">
        <h2 id="offer">Oferta</h2>
        <div className="offers">
          <div className="offer__home">
            <div className="offer__home_title">
              <h3 id="title_offer">DLA DOMU</h3>
            </div>
            <p className="text">
              Instalacja fotowoltaiczna może przyczynić się do znacznego  zmniejszenia poboru prądu z sieci, czyli mniejszych rachunków za prąd. Jest jednak jednak jeden warunek musi być ona odpowiednio dobrana do realnego zużycia prądu w domu.
            </p>
          </div>
          <div className="offer__business">
            <div className="offer__business_title">
              <h3>DLA BIZNESU</h3>
            </div>
            <p>
              Podwyżki cen prądy w szczególności uderzają w wyniki finansowe firm. Wysokiej klasy instalacja fotowolaiczna może znacznie ograniczyć rosnące koszty stałe energii i polepszyć wynik finansowy firmy lub nawet przynieść dodatkowe zyski
            </p>
          </div>
          <div className="offer__farmy">
            <div className="offer__farmy_title">
              <h3>FARMY PV</h3>
            </div>
            <p>
              W roku kolejnych latach planowane są kolejne aukcje wpierająca OZE. Farmy o mocy 1 MV będą w niej miały znaczny udział. Czy taka instalacja się opłaca - rolnikowi, przedsiębiorcy, inwestorowi? Główną rolę odgrywają koszty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;  