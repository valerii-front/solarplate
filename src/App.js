import React from 'react';

import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Offer from './components/Offer/Offer';
import About from './components/About/About';
import Counter from './components/Counter/Counter';
import Realizations from './components/Realizations/Realizations';
import CompanyLogo from './components/CompanyLogo/CompanyLogo';
import Form from './components/Form/Form';
import MapContainer from './components/Map/MapContainer';
import Footer from './components/Footer/Footer';


import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Offer />
      <About />
      <Counter />
      <Realizations />
      <CompanyLogo />
      <Form />
      <MapContainer />
      <Footer />
    </div>
  );
};

export default App;
