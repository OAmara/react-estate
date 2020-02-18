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
    const apiUrl = process.env.FLASK_API_URL + '/api/v1.0/users/register/'

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
      console.log('registerResponse: ', registerResponse);
      const registerJson = await registerResponse.json()
      console.log('registerJson: ', registerJson);
      console.log('registerJson.data: ', registerJson.data);
      if(registerResponse.status === 201) {
        this.setState({
          loggedIn: true,
          // for UI purposes, such as a greeting
          loggedInUser: {
            ...this.state.registerJson.data
          }
        })
      }
    } catch(err) {
      if(err) {
        console.error(err)
      }
    }
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
