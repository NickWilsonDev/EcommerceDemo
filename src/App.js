import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EtseRouter from './EtseRouter';
import HeaderComponent from './HeaderComponent';
import SideBarComponent from './SideBarComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <HeaderComponent />
        </header>
        <EtseRouter />
      </div>
    );
  }
}

export default App;


   // <img src={logo} className="App-logo" alt="logo" />
  //<h1 className="App-title">Welcome to Etsetera</h1>
