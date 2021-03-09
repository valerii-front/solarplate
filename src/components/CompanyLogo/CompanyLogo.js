import React from 'react';

import lg_logo from './img/lg_logo.png';
import keno_logo from './img/keno_logo.png';
import jinko_logo from './img/jinko_logo.png';
import qcells_logo from './img/qcells_logo.png';
import ml_logo from './img/ml_logo.jpg';

import './CompanyLogo.css';

const CompanyLogo = () => {
  return (
    <div className="company__section">
      <div className="container">
        <h2 className="company__section_title">
          WSPÓŁPRACUJEMY
        </h2>
        <div className="company__section_image">
          <img src={lg_logo} alt={"lg logo"} width={190} height={70} />
          <img src={keno_logo} alt={"keno logo"} width={160} height={45} />
          <img src={jinko_logo} alt={"jinko logo"} width={190} height={60} />
          <img src={qcells_logo} alt={"qcells logo"} width={180} height={60} />
          <img src={ml_logo} alt={"ml logo"} width={140} height={140} />
        </div>
      </div>
    </div>
  );
};
export default CompanyLogo;