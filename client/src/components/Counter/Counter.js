import React from 'react';

import './Counter.css';

const Counter = () => {
  return (
    <div className="counter__section">
      <div className="container">
        <div className="counter__section_watt">
          <p className="counter_watt_number number">2063</p>
          <p className="counter_watt_description description">
            Zamontowanych
          </p>
          <p className="description">kilowatów</p>
        </div>
        <hr className="counter__line" />
        <div className="counter__section_install">
          <p className="counter_install_number number">206</p>
          <p className="counter_install_description description">
            Wykonanych
          </p>
          <p className="description">Instalacji</p>
        </div>
        <hr className="counter__line" />
        <div className="counter__section_client">
          <p className="counter_client_number number">870</p>
          <p className="counter_client_description description">
            Zadowolonych
          </p>
          <p className="description">Klientów</p>
        </div>
      </div>
    </div>
  );
};
export default Counter; 