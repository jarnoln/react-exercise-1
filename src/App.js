import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserOutput> </UserOutput>
        <UserOutput> </UserOutput>
      </div>
    );
  }
}

export default App;
