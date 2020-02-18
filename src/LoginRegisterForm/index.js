import React, { Component } from 'react'
import { Form, Label, Input, Button } from 'semantic-ui-react'
import './index.css'


export default class LoginRegisterForm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			loggedInUser: {
			},
			registeredUser: {
			},
		}
	}

	handleLoginChange = (e) => {
		this.setState({
			loggedInUser: {
				...this.state.loggedInUser,
				[e.target.name]: e.target.value
			}
		})	
	}

	handleRegisterChange = (e) => {
    	this.setState({
    		registeredUser: {
    			...this.state.registeredUser,
    			[e.target.name]: e.target.value
    		}
    	})
  	}

  	// seperation of concerns between from submit and fetch call
  	handleRegisterSubmit = (e) => {
  		e.preventDefault()
  		this.register()	
  	}

  	handleLoginSubmit = (e) => {
  		e.preventDefault()
  		this.login()	
  	}

  	register = () => {
  		console.log('hit register in LoginRegisterForm, this will connect to register fetch in App.js');
  	}

  	login = () => {
  		console.log('hit login in LoginRegisterForm, this will connect to login fetch in App.js');	
  	}

	render() {
		return(
			<React.Fragment>
				<div>
					<Form className="Register" onSubmit={this.handleLoginSubmit}>
						<Form.Group widths='equal'>
							<Form.Field>
								<Label>Email:</Label>
								<Input
									required
									type="email"
									name="email"
									placeholder='Enter Email'
									value={this.state.email}
									onChange={this.handleLoginChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label>Password:</Label>
								<Input
									required
									type="password"
									name="password"
									placeholder='Enter Password'
									value={this.state.password}
									onChange={this.handleLoginChange}
								/>
							</Form.Field>
						</Form.Group>
						<Button type="Submit">Login</Button>
					</Form>
					<Form className="Register" onSubmit={this.handleRegisterSubmit}>
						<Form.Group widths='equal'>
							<Form.Field>
								<Label>Email:</Label>
								<Input
									required
									type="email"
									name="email"
									placeholder='Enter Email'
									value={this.state.email}
									onChange={this.handleRegisterChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label>Username:</Label>
								<Input
									required
									type="text"
									name="username"
									placeholder='Enter Username'
									value={this.state.username}
									onChange={this.handleRegisterChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label>Password:</Label>
								<Input
									required
									type="password"
									name="password"
									placeholder='Enter Password'
									value={this.state.password}
									onChange={this.handleRegisterChange}
								/>
							</Form.Field>
						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Field>
								<Label>First Name:</Label>
								<Input
									required
									type="text"
									name="firstname"
									placeholder='Enter First Name'
									value={this.state.firstname}
									onChange={this.handleRegisterChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label>Last Name:</Label>
								<Input
									required
									type="text"
									name="lastname"
									placeholder='Enter Last Name'
									value={this.state.lastname}
									onChange={this.handleRegisterChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label>Hometown:</Label>
								<Input
									type="text"
									name="hometown"
									placeholder='Enter Hometown'
									value={this.state.hometown}
									onChange={this.handleRegisterChange}
								/>
							</Form.Field>
						</Form.Group>
						<Form.Group widths='equal'>

							<Form.Field>
								<Label>Account Recovery Question:</Label>
								<Input
									required
									type="text"
									name="secretquestion"
									placeholder='Create Recovery Question'
									value={this.state.secretquestion}
									onChange={this.handleRegisterChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label>Account Recovery Answer:</Label>
								<Input
									required
									type="text"
									name="secretanswer"
									placeholder='Create Recovery Answer'
									value={this.state.secretanswer}
									onChange={this.handleRegisterChange}
								/>
							</Form.Field>
						</Form.Group>
						<Form.Checkbox
							label='I agree to, in there lack of, the terms and conditions'
							required
						/>
					<Button type="Submit">Register</Button>
					</Form>
				</div>
			</React.Fragment>
		)
	}
}
