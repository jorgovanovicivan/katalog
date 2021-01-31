import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Pocetna from './components/pages/Pocetna';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Destinacije from './components/pages/Destinacije';
import Kontakt from './components/pages/Kontakt';
import Galerija from './components/pages/Galerija';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Pocetna} />
          <Route path='/destinacije' component={Destinacije} />
          <Route path='/galerija' component={Galerija} />
          <Route path='/kontakt' component={Kontakt} />
        </Switch>
      </Router>
    </>
  );
}

export default App;