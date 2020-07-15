import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar color="primary" dark>
        <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
