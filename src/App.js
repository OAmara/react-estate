import React, { Component } from 'react';
import './App.css';
import LoginRegisterForm from './LoginRegisterForm'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
    }
  }

  render() {
    return (
      <div className="App">
        <LoginRegisterForm />
      </div>
      );
  }
}
