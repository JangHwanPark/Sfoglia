import React from 'react';
import './App.css';

import {Navbar} from './components/nav';
import {About, Menu, Reservation} from './components/section';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Menu />
      <Reservation/>
      <Footer />
    </div>
  );
}

export default App;