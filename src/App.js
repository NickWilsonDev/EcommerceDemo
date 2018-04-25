import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import EtseRouter from './EtseRouter';
import HeaderComponent from './HeaderComponent';
import store from './Store.js';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <header>
                    <HeaderComponent />
                </header>
                <EtseRouter />
            </div>
        </Provider>
    );
  }
}

export default App;


   // <img src={logo} className="App-logo" alt="logo" />
  //<h1 className="App-title">Welcome to Etsetera</h1>
