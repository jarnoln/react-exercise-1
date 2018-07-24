import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput.js';
import UserInput from './UserInput/UserInput.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserOutput> </UserOutput>
        <UserOutput> </UserOutput>
        <UserInput> </UserInput>
      </div>
    );
  }
}

export default App;
