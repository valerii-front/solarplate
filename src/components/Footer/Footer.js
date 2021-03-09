import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <div id="contact" className="footer__section">
      <div className="container">
        <div className="footer__section_sell">
          <h3>Dział Sprzedaży</h3>
          <div className="sell_group">
            <p className="sell_first_group">
              sprzedaż@pawlukenergy.pl<br />
              pawel@pawlukenergy.pl<br />
              lukasz@pawlukenergy.pl
            </p>
            <p className="sell_second_group">
              ewelina@pawlukenergy.pl<br />
              agnieszka@pawlukenergy.pl<br />
              zlecenia@pawlukenergy.pl
            </p>
          </div>
        </div>
        <div className="footer__section_adress">
          <h3>
            Paw-Luk Energy Sp. Z o.o.
          </h3>
          <p className="adress_text">
            ul. Agrestowa<br />
            53-035 Wrocław<br />
            NIP: 8992888351
          </p>
        </div>
        <p className="container_text">© 2023 Paw-Luk Energy</p>

      </div>
    </div>
  );
};
export default Footer;