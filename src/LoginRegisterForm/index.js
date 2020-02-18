import React, { Component } from 'react'
import { Form, Label, Input, Button } from 'semantic-ui-react'


export default class LoginRegisterForm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			loggedInUser: {
				// email: '',
				// username: '',
				 // password: '',
			},
		}
	}

	handleChange = (e) => {
    	this.setState({
    		loggedInUser: {
    			...this.state.loggedInUser,
    			[e.target.name]: e.target.value
    		}
    	})
  	}

  	// seperation of concerns between from submit and fetch call
  	handleSubmit = (e) => {
  		e.preventDefault()
  		this.loginRegister()	
  	}

  	loginRegister = () => {
  		console.log('hit loginRegister in loginRegisterForm');
  	}

	render() {
		return(
			<React.Fragment>
				<div className="Login-Register">
					<Form onSubmit={this.handleSubmit}>
						<Label>Email:</Label>
						<Input
							type="email"
							name="email"
							value={this.state.email}
							placeholder='Enter Email'
							onChange={this.handleChange}
						/>
						<Label>Username:</Label>
						<Input
							type="text"
							name="username"
							value={this.state.username}
							placeholder='Enter Username'
							onChange={this.handleChange}
						/>
						<Label>Password:</Label>
						<Input
							type="password"
							name="password"
							value={this.state.password}
							placeholder='Enter Password'
							onChange={this.handleChange}
						/>
					<Button type="Submit">Submit</Button>
					</Form>
				</div>
			</React.Fragment>
		)
	}
}
