import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class SearchContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			placeholder: null
		}

	}

	render() {
		return(
			<React.Fragment>
				<h2>SearchContainer</h2>
				<Button color={'youtube'} onClick={this.props.logout}>Logout</Button>
			</React.Fragment>
		)
	}
}