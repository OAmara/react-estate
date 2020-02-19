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
        }
      })

      const registerJson = await registerResponse.json()

      if(registerResponse.status === 201) {
        this.setState({
          loggedIn: true,
          // for UI purposes, such as a greeting
          loggedInUser: registerJson.data
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
        }
      })

      const loginJson = await loginResponse.json()

      if(loginResponse.status === 200) {
        this.setState({
          loggedIn: true,
          loggedInUser: loginJson.data
        })
      }
    } catch(err) {
      if(err) {
        console.error(err);
      }
    }

  }

  render() {
    console.log(this.state.loggedInUser);
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
