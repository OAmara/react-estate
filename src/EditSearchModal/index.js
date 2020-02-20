import React,{ Component } from 'react'
import { Form, Button, Header, Modal} from 'semantic-ui-react'

export default class EditSearchModal extends Component {
	constructor(props) {
		super(props)
	}

	handleSubmit = (e) => {
		e.preventDefault()	
		this.liftEditSearch()
	}

	liftEditSearch = () => {
		console.log('Lifting State here in liftEditSearch');
		console.log('this.state.editSearch being lifted: ', this.state.editSearch);
		this.props.updateSearch(this.state.editSearch)
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
								value={this.props.searchToEdit.name}
								onChange={this.props.handleEditChange}
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
								value={this.props.searchToEdit.zipcode}
								onChange={this.props.handleEditChange}
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
								value={this.props.searchToEdit.sqrft}
								onChange={this.props.handleEditChange}
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
								value={this.props.searchToEdit.upperprice}
								onChange={this.props.handleEditChange}
							/>
							<Form.Input
								size={'small'}
								label='Price Range Low:'
								type="number"
								name="lowerprice"
								placeholder='0'
								value={this.props.searchToEdit.lowerprice}
								onChange={this.props.handleEditChange}
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
