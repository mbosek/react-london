import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { secureFetch } from './api/fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          Hello World
        </p>
      </div>
    );
  }
}

export default App;
