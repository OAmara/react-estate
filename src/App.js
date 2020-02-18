import React, { Component } from 'react';
import './App.css';
import LoginRegisterForm from './LoginRegisterForm'
import SearchContainer from './SearchContainer'

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
        {
          this.state.LoggedIn
          ?
          <SearchContainer />
          :
          <LoginRegisterForm />
         }
      </div>
      );
  }
}
