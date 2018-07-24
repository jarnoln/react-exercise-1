import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput.js';
import UserInput from './UserInput/UserInput.js';

class App extends Component {
  state = {
    users: [
      { username: 'Bruce' },
      { username: 'Clark' }
    ]
  }

  usernameChangedHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value },
        { username: 'Clark' }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.users[0].username}> </UserOutput>
        <UserOutput username={this.state.users[1].username}> </UserOutput>
        <UserInput changed={this.usernameChangedHandler} username={this.state.users[0].username} />
      </div>
    );
  }
}

export default App;
