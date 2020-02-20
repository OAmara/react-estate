import React,{ Component } from 'react'
import { Form, Button, Header, Modal} from 'semantic-ui-react'

export default class EditSearchModal extends Component {
	constructor(props) {
		super(props)

		this.state = {
			editSearch: {
			}
		}
	}

	// Allows change and recording of input fields.
	handleChange = (e) => {
		this.setState({
			editSearch: {
				// this prevents us from having to manually enter each input field in state.
				...this.state.editSearch,
				[e.target.name]: e.target.value
			}
		})	
	}

	handleSubmit = (e) => {
		e.preventDefault()	
		this.liftEditSearch()
	}

	liftEditSearch = () => {
		// this.props.editSearch(this.state.newSearch)
		// this.setState({
		// 	newSearch: {
		// 	}
		// })
		console.log('Lifting State here in liftEditSearch');
	}

	render() {
		return(
			<Modal open={this.props.openEditModal} closeIcon={true} onClose={this.props.closeEditModal} >
				<Header>Save a New Search Paramater to Store Generated Listings</Header>
				<Modal.Content>
					<Form className="NewFormModal" onSubmit={this.handleSubmit}>
						<Form.Group widths='equal'>
							<Form.Input
								// Form.Input size: 'mini' - 'massive'
								size={'large'}
								label='Name:'
								required
								type="text"
								name="name"
								placeholder='My Dream Home'
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Input
								size={'small'}
								label='Zipcode:'
								required
								type="number"
								name="zipcode"
								placeholder='Enter Zipcode'
								value={this.state.zipcode}
								onChange={this.handleChange}
								// error
							/>
						</Form.Group>
							{
								// development: utilize logic to automatically insert commas
							}
						<Form.Group>
							<Form.Input
								size={'small'}
								label='Square Feet:'
								type="number"
								name="sqrft"
								placeholder='Square Footage'
								value={this.state.sqrft}
								onChange={this.handleChange}
							/>
						</Form.Group>
						{
							// development: Make this clearly a range that is easier to utilize.
						}
						<Form.Group widths='equal'>
							<Form.Input
								size={'small'}
								label='Price Range High:'
								required
								type="number"
								name="upperprice"
								placeholder='0'
								value={this.state.upperprice}
								onChange={this.handleChange}
							/>
							<Form.Input
								size={'small'}
								label='Price Range Low:'
								type="number"
								name="lowerprice"
								placeholder='0'
								value={this.state.lowerprice}
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Modal.Actions>
							<Button inverted color={'google plus'} size={'big'} type="Submit">Edit Saved Search</Button>
						</Modal.Actions>
					</Form>
				</Modal.Content>
			</Modal>
		)
	}
}
