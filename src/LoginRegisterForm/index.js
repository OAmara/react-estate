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

	handleRegisterChange = (e) => {
    	this.setState({
    		registeredUser: {
    			...this.state.registeredUser,
    			[e.target.name]: e.target.value
    		}
    	})
  	}

	handleLoginChange = (e) => {
		this.setState({
			loggedInUser: {
				...this.state.loggedInUser,
				[e.target.name]: e.target.value
			}
		})	
	}

  	// seperation of concerns between form submit and fetch call
  	handleRegisterSubmit = (e) => {
  		e.preventDefault()
  		this.register()	
  	}

  	handleLoginSubmit = (e) => {
  		e.preventDefault()
  		this.login()	
  	}

  	register = () => {
  		this.props.register(this.state.registeredUser)
  	}

  	login = () => {	
  		this.props.login(this.state.loggedInUser)
  	}

	render() {
		return(
			<React.Fragment>
				<div>
					<Form className="Login" onSubmit={this.handleLoginSubmit}>
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
						<Button color={'google plus'} type="Submit">Login</Button>
					<Label circular={true} pointing={'below'} size={'large'} color={this.props.loginRegisterMessage.color}>{this.props.loginRegisterMessage.message}</Label>
					</Form>
					{
						// classNames will inheret from parent, given it utilizes same name. Logo inherits css as long as it's class is named 'MainLogo'.
					}
					<img className="MainLogo LoginLogo" alt="Estate Logo" src={this.props.mainLogo} />
					<Form className="Register" onSubmit={this.handleRegisterSubmit}>
						<Form.Group widths='equal'>
							<Form.Input
								size={'small'}
								label='Email:'
								required
								type="email"
								name="email"
								placeholder='Enter Email'
								value={this.state.email}
								onChange={this.handleRegisterChange}
								// error
							/>
							<Form.Input
								size={'small'}
								label='Username:'
								required
								type="text"
								name="username"
								placeholder='Enter Username'
								value={this.state.username}
								onChange={this.handleRegisterChange}
							/>
							<Form.Input
								size={'small'}
								label='Password:'
								required
								type="password"
								name="password"
								placeholder='Enter Password'
								value={this.state.password}
								onChange={this.handleRegisterChange}
							/>
						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Input
								size={'small'}
								label='First Name:'
								required
								type="text"
								name="firstname"
								placeholder='Enter First Name'
								value={this.state.firstname}
								onChange={this.handleRegisterChange}
							/>
							<Form.Input
								size={'small'}
								label='Last Name:'
								required
								type="text"
								name="lastname"
								placeholder='Enter Last Name'
								value={this.state.lastname}
								onChange={this.handleRegisterChange}
							/>
							<Form.Input
								size={'small'}
								label='Hometown:'
								type="text"
								name="hometown"
								placeholder='Enter Hometown'
								value={this.state.hometown}
								onChange={this.handleRegisterChange}
							/>
						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Input
								size={'mini'}
								label='Account Recovery Question:'
								required
								type="text"
								name="secretquestion"
								placeholder='Create Recovery Question'
								value={this.state.secretquestion}
								onChange={this.handleRegisterChange}
							/>
							<Form.Input
								size={'mini'}
								label='Account Recovery Answer:'
								required
								type="text"
								name="secretanswer"
								placeholder='Create Recovery Answer'
								value={this.state.secretanswer}
								onChange={this.handleRegisterChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Checkbox
								label='I agree to, and in there lack of, the terms and conditions that apply'
								required
							/>
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/OAmara/react-estate/blob/master/TERMS_CONDITIONS.md">terms & conditions</a>
						</Form.Group>
					<Button color={'google plus'} type="Submit">Register</Button>
					</Form>
				</div>
			</React.Fragment>
		)
	}
}
