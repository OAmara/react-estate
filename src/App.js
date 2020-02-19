import React, { Component } from 'react';
import LoginRegisterForm from './LoginRegisterForm'
import SearchContainer from './SearchContainer'
import './App.css'
// import 'Estate-temp-logo.png' from './public'
// Main Logo source file
const mainLogo = require('./lib/tempMainLogo.png');

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // mainLogo .png image, App/logo css in AppCss.
      mainLogo: mainLogo,
      loggedIn: false, // development: true for testing, change back to false
      loggedInUser: {
      },
      loginRegisterMessage: {
        message: 'Please Login or Register new account below',
        color: 'grey',
      },
    }
  }

  register = async (registerFormInfo) => {
    const apiUrl = process.env.REACT_APP_FLASK_API_URL + '/api/v1.0/users/register'

    try {
      const registerResponse = await fetch(apiUrl, {
        // sends cookie to api
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(registerFormInfo),
        headers: {
          'Content-Type': 'application/json'
        },
      })

      const registerJson = await registerResponse.json()

      if(registerResponse.status === 201) {
        this.setState({
          loggedIn: true,
          // for UI purposes, such as a greeting
          loggedInUser: registerJson.data,
        })
      }
    } catch(err) {
      if(err) {
        console.error(err)
      }
    }
  }

  login = async (loginFormInfo) => {
    const apiUrl = process.env.REACT_APP_FLASK_API_URL + '/api/v1.0/users/login'

    try {
      const loginResponse = await fetch(apiUrl, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(loginFormInfo),
        headers: {
          'Content-Type': 'application/json'
        },
      })

      const loginJson = await loginResponse.json()

      if(loginResponse.status === 200) {
        this.setState({
          loggedIn: true,
          loggedInUser: loginJson.data,
        })
      }
    } catch(err) {
      if(err) {
        console.error(err);
      }
    }
  }

  logout = async () => {
      const apiUrl = process.env.REACT_APP_FLASK_API_URL + '/api/v1.0/users/logout'

      try {
        const logoutResponse = await fetch(apiUrl, {
          credentials: 'include'
        })
        /*const logoutJson =*/ await logoutResponse.json()

        if(logoutResponse.status === 200) {
          this.setState({
            loggedIn: false,
            loggedInUser: null,
            loginRegisterMessage: {
              message: 'Successfully logged out of account',
              color: 'orange',
            },
          })
        }
      } catch(err) {
          if(err) {
            console.error(err)
          }
      }
  }

  render() {
    console.log(this.state.loggedInUser);
    return (
      <div className="App">
        {
          this.state.loggedIn
          ?
          <SearchContainer 
            mainLogo={this.state.mainLogo}
            logout={this.logout}
          />
          :
          <LoginRegisterForm 
            mainLogo={this.state.mainLogo}
            login={this.login}
            register={this.register}
            loginRegisterMessage={this.state.loginRegisterMessage}
          />
         }
      </div>
      );
  }
}
