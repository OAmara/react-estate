import React from 'react'
import { Form, Button, Header, Modal} from 'semantic-ui-react'

export default function EditSearchModal(props) {

		return(
			<Modal open={props.openEditModal} closeIcon={true} onClose={props.closeEditModal} >
				<Header>Save a New Search Paramater to Store Generated Listings</Header>
				<Modal.Content>
					<Form className="EditFormModal" onSubmit={props.handleSubmitEditForm}>
						<Form.Group widths='equal'>
							<Form.Input
								// Form.Input size: 'mini' - 'massive'
								size={'large'}
								label='Name:'
								required
								type="text"
								name="name"
								placeholder='My Dream Home'
								value={props.searchToEdit.name}
								onChange={props.handleEditChange}
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
								value={props.searchToEdit.zipcode}
								onChange={props.handleEditChange}
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
								value={props.searchToEdit.sqrft}
								onChange={props.handleEditChange}
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
								value={props.searchToEdit.upperprice}
								onChange={props.handleEditChange}
							/>
							<Form.Input
								size={'small'}
								label='Price Range Low:'
								type="number"
								name="lowerprice"
								placeholder='0'
								value={props.searchToEdit.lowerprice}
								onChange={props.handleEditChange}
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
