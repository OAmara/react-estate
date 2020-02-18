import React, { Component } from 'react';
import './App.css';
import LoginRegisterForm from './LoginRegisterForm'
import SearchContainer from './SearchContainer'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      loggedInUser: {
        email: '',
        username: '',
        firstname: '',
        lastname: '',
      },
    }
  }

  register = async () => {
      console.log('register function in App.js');
      // fetch
  }

  login = async () => {
      console.log('login function in App.js');
  }

  render() {
    return (
      <div className="App">
        {
          this.state.LoggedIn
          ?
          <SearchContainer />
          :
          <LoginRegisterForm 
            login={this.login}
            register={this.register}
          />
         }
      </div>
      );
  }
}
