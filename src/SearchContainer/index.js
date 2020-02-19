import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import SearchList from '../SearchList'
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

	render() {
		return(
			<React.Fragment>
				<header>
					<img className="MainLogo" alt="Estate Logo" src={this.props.mainLogo} />
					<Button color={'youtube'} onClick={null}>Account</Button>
					<Button color={'youtube'} onClick={null}>Search</Button>
					<Button color={'youtube'} onClick={null}>About Us</Button>
					<Button color={'youtube'} onClick={null}>Learn</Button>
					<Button color={'youtube'} onClick={this.props.logout}>Logout</Button>
				</header>
				<h2>SearchContainer</h2>
				<SearchList searches={this.state.searches}/>
			</React.Fragment>
		)
	}
}