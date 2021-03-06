import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import SearchList from '../SearchList'
import NewSearchForm from '../NewSearchForm'
import EditSearchModal from '../EditSearchModal'
import './index.css'

export default class SearchContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searches: [],
			// determines if NewSearchForm Modal Component opens or closes.
			openNewModal: false,
			openEditModal: false,
			searchToEdit: {
			},
			// editForm,
		}
	}

	// runs after render successfully mounts
	componentDidMount() {
		this.getSearches()
	}

	getSearches = async () => {
		try {
			const searchesResponse = await fetch(process.env.REACT_APP_FLASK_API_URL + '/api/v1.0/searches/', {
				credentials: 'include' // reminder: cookie sent to api per fetch
			})
			const searchesJson = await searchesResponse.json()

			this.setState({
				searches: searchesJson.data
			})
		}	catch(err) {
			console.error(err)
		}
	}

	createSearch = async (searchToAdd) => {
		try {
			const createSearchResponse = await fetch(process.env.REACT_APP_FLASK_API_URL + '/api/v1.0/searches/', {
				credentials: 'include',
				method: 'POST',
				// converts object to JSON
				body: JSON.stringify(searchToAdd), 
				headers: {
					'Content-Type': 'application/json'
				},
			})
			const createSearchJson = await createSearchResponse.json()

			// close Form Modal when submitted and promise resolved.
			// This prevents information in state from deleting before info can be used to create search
			this.closeNewModal()

			if(createSearchResponse.status === 201) {
				this.setState({
					// spread operator to minimize fetch calls and insert data into existing search array
					searches: [...this.state.searches, createSearchJson.data]
				})
			}
		} catch(err) {
			console.error(err)
		}
	}

	deleteSearch = async (id) => {
		try {
			const deleteSearchResponse = await fetch(process.env.REACT_APP_FLASK_API_URL + '/api/v1.0/searches/' + id, {
				credentials: 'include',
				method: 'DELETE',
			})
			const deleteSearchJson = await deleteSearchResponse.json();

			if(deleteSearchJson.status === 200) {
				this.setState({
					// if only JS had a pop function like python!
					searches: this.state.searches.filter(search => search.id !== id)
				})
			} else {
				throw new Error('Could not Delete Account')
			}
		}	catch(err) {
			console.error(err)
		}
	}

	// changes state to open NewSearchForm Modal Component.
	openNewSearchFormModal = () => {
		this.setState({
			openNewModal: true
		})	
	}

	// changes state to close NewSearchForm Modal.
	closeNewModal = () => {
		this.setState({
			openNewModal: false
		})	
	}

	// changes state to open EditFormModal Component
	openEditSearchModal = () => {
		this.setState({
			openEditModal: true
		})	
	}

	// changes state to close EditSearchModal
	closeEditModal = () => {
		this.setState({
			openEditModal: false,
			searchToEdit: {
			}
		})
	}

	// finds search to edit and fills searchToEdit state with information that is sent to EditFormModal.
	editSearch = (searchToEditId) => {
		const searchToEdit = this.state.searches.find((search) => search.id === searchToEditId)
		// const removeClient = searchToEdit.pop('client')
		this.setState({
			openEditModal: true,
			// spread operator not used, was sending client info over, producing an error upon submission.
			// In order to use spread operator here, need to remove client variable in searchToEdit before submit to updateSearcg fetch
			searchToEdit: {
				// ...searchToEdit
				id: searchToEdit.id,
				lowerprice: searchToEdit.lowerprice,
				name: searchToEdit.name,
				sqrft: searchToEdit.sqrft,
				upperprice: searchToEdit.upperprice,
				zipcode: searchToEdit.zipcode,
			}
		})
	}

		// Allows change and recording of input fields.
	handleEditChange = (e) => {
		this.setState({
			searchToEdit: {
				// this prevents us from having to manually enter each input field in state.
				...this.state.searchToEdit,
				[e.target.name]: e.target.value
			}
		})	
	}

	// seperation of concerns, upon EditFormModal submit, calls updateSearch
	handleSubmitEditForm = (e) => {
		e.preventDefault()	
		this.updateSearch()
	}

	updateSearch = async () => {
		console.log('this.state.searchToEdit: ', this.state.searchToEdit);
		console.log('this.state.searchToEdit.id: ', this.state.searchToEdit.id)
		try {
			const updateSearchResponse = await fetch(
				process.env.REACT_APP_FLASK_API_URL + '/api/v1.0/searches/' + this.state.searchToEdit.id, 
				{
					credentials: 'include',
					method: 'PUT',
					body: JSON.stringify(this.state.searchToEdit),
					headers: {
						'Content-Type': 'application/json'
					}
			})
			console.log('updateSearchResponse: ', updateSearchResponse)
			const updateSearchJson = await updateSearchResponse.json()
			console.log('updateSearchJson: ', updateSearchJson)

			if(updateSearchResponse.status === 200) {
				// this adds updated Search into array and removes old Search.
				// Reason: prevents running another fetch call, saves time and data
				const updatedSearchesArray = this.state.searches.map((search) => {
					if(search.id === updateSearchJson.data.id) {
						return updateSearchJson.data
					} else {
						return search
					}
				})

				this.setState({
					searches: updatedSearchesArray
				})
			}
		} catch(err) {
			console.error(err)
		}
		// close EditFormModal when submitted after promise is resolved and searches array is updated.
		// This prevents information in state from deleting before info can be used to edit search
		this.closeEditModal()
	}

	render() {
		return(
			<React.Fragment>
				<header>
					<img className="MainLogo" alt="Estate Logo" src={this.props.mainLogo} />
					<Button color={'youtube'} onClick={null}>Account</Button>
					<Button color={'youtube'} onClick={null}>Listings</Button>
					<Button color={'youtube'} onClick={null}>Saved Searches</Button>
					<Button color={'youtube'} onClick={this.openNewSearchFormModal}>New Search</Button>
					<Button color={'youtube'} onClick={null}>About Us</Button>
					<Button color={'youtube'} onClick={null}>Career/Learn</Button>
					<Button inverted color={'youtube'} onClick={this.props.logout}>Logout</Button>
				</header>
				<SearchList 
					searches={this.state.searches}
					deleteSearch={this.deleteSearch}
					openNewSearchFormModal={this.openNewSearchFormModal}
					editSearch={this.editSearch}
				/>
				<NewSearchForm 
					createSearch={this.createSearch} 
					openNewModal={this.state.openNewModal}
					closeNewModal={this.closeNewModal}
				/>
				<EditSearchModal
					editSearch={this.editSearch}
					openEditModal={this.state.openEditModal}
					closeEditModal={this.closeEditModal}
					updateSearch={this.updateSearch}
					searchToEdit={this.state.searchToEdit}
					handleEditChange={this.handleEditChange}
					handleSubmitEditForm={this.handleSubmitEditForm}
				/>
			</React.Fragment>
		)
	}
}