import React from 'react';

import './About.css';

const About = () => {
  return (
    <div className="about__section">
      <div className="container">
        <h2 id="about" className="about__section_title">
          O NAS
        </h2>
        <p className="about__section_description">
          Rynek OZE cały czas się rozwija i zmienia.
          <br />
          Technologia ewoluuje, rosną również standardy
          <br />
          jakości obsługi. Szacuje się że najbliższe lata będą
          <br />
          przełomowe o rozwój fotowoltaiki w Polsce. Głownie
          <br />
          do tego ma przyczynić się program dofinansowań
          <br />
          dla mikroinstalacji fotowoltaicznych Mój Prąd oraz
          <br />
          rosnąca świadomość polaków odnośnie ochrony
          <br />
          środowiska i zysków jakie płyną z posiadania własnej
          <br />
          instalacji zasilanych panelami solarnymi. Może i TY
          <br />
          chcesz skorzystać z tej zielonej transformacji i
          <br />
          tworzyć z nami przyszłość
        </p>
      </div>
      {/* <div className="about__bg_section" /> */}
    </div>
  );
};
export default About;