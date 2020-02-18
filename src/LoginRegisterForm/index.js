import React, { Component } from 'react'
import { Form, Label, Input, Button } from 'semantic-ui-react'


export default class LoginRegisterForm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			login: null
		}
	}

	render() {
		return(
			<React.Fragment>
				<div className="Login-Register">
					<Form>
						<Label>Email:</Label>
						<Input
							type="email"
							name="email"
							value='handleChange goes here'
							placeholder='Enter Email'
						/>
						<Label>Username:</Label>
						<Input
							type="text"
							name="username"
							value='handleChange goes here'
							placeholder='Enter Username'
						/>
						<Label>Password:</Label>
						<Input
							type="password"
							name="password"
							value='handleChange goes here'
							placeholder='Enter Password'
						/>
					<Button onClick={console.log('insert state logic')}>Submit</Button>
					</Form>
				</div>
			</React.Fragment>
		)
	}
}
