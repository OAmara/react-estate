import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import SearchList from '../SearchList'
import NewSearchForm from '../NewSearchForm'
import './index.css'

export default class SearchContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searches: [],
			// editForm,
			// searchToEdit,
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
			const deleteSearchResponse = await fetch(process.env.REACT_APP_FLASK_API_URL + '/api/v1.0/searches' + id, {
				credentials: 'include',
				method: 'DELETE',
			})
			const deleteSearchJson = await deleteSearchResponse.json();

			if(deleteSearchJson.status === 200) {
				this.setState({
					// delete specific search index from search array in state.
				})
			} else {
				throw new Error('Could not Delete Account')
			}
		}	catch(err) {
			console.error(err)
		}
	}

	render() {
		return(
			<React.Fragment>
				<header>
					<img className="MainLogo" alt="Estate Logo" src={this.props.mainLogo} />
					<Button color={'youtube'} onClick={null}>Account</Button>
					<Button color={'youtube'} onClick={null}>Listings</Button>
					<Button color={'youtube'} onClick={null}>Saved Search</Button>
					<Button color={'youtube'} onClick={null}>Search</Button>
					<Button color={'youtube'} onClick={null}>About Us</Button>
					<Button color={'youtube'} onClick={null}>Career/Learn</Button>
					<Button inverted color={'youtube'} onClick={this.props.logout}>Logout</Button>
				</header>
				<h2>SearchContainer</h2>
				<SearchList searches={this.state.searches}/>
				<NewSearchForm createSearch={this.createSearch} />
			</React.Fragment>
		)
	}
}