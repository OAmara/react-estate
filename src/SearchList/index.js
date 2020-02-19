import React from 'react'
import './index.css'
import { Button } from 'semantic-ui-react'

export default function SearchList(props) {


	// reminder that is destructuring, you can utilize values such as index, i, with a comma ', i' following curly brace in map arguments.
	return(
		<React.Fragment>
			{props.searches.map(({id, name, zipcode, sqrft, upperprice, lowerprice, client, created_on}) => (
				<div className="Search-List" key={id}>
					{
						// development: This or similar button will display amount of listings generated from search. Each listing will have a boolean fro viewed or not?
					}
					<Button size={'massive'} floated={'right'} inverted color={'blue'} onClick={null}>⌝</Button>
					<h2>{name}</h2>
					<h3>Zipcode: {zipcode}</h3>
					<h4>Price Range: {lowerprice} - {upperprice}</h4>
					<h4>Miles From Home: {client.hometown}</h4>
					<h6>Last Edited: {created_on}</h6>
					<Button size={'mini'} inverted color={'red'} onClick={null}>Delete</Button>
				</div>
			))}
		</React.Fragment>
	)
}

