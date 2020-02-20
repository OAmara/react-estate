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
			console.log('this is searchesJson for search index: ', searchesJson.data);
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
			this.setState({ openNewModal: false })

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
			openEditModal: false
		})
	}

	// finds search to edit and fills searchToEdit state with information.
	editSearch = (searchToEditId) => {
		console.log('editSearch id of search: ', searchToEditId);	
		// belongs in EditSearchModal??? SHould only state being lifted is the eidted Search?
	}

	render() {
		console.log(this.state.openEditModal);
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
					openEditSearchModal={this.openEditSearchModal}
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
				/>
			</React.Fragment>
		)
	}
}