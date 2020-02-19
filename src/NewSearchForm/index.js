import React,{ Component } from 'react'
import { Form, Button, Modal} from 'semantic-ui-react'

export default class NewSearchForm extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return(
			<Form className="NewFormModal" onSubmit={null}>
				<Form.Group widths='equal'>
					<Form.Input
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
			<Button color={'google plus'} type="Submit">Save Search</Button>
			</Form>
		)
	}
}
