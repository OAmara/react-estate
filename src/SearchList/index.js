import React from 'react'
import './index.css'

export default function SearchList(props) {


	// reminder that is destructuring, you can utilize values such as index, i, with a comma ', i' following curly brace in map arguments.
	return(
		<React.Fragment>
			{props.searches.map(({id, name, zipcode, sqrft, upperprice, lowerprice, client, created_on}) => (
				<div className="Search-List" key={id}>
					<h2>{name}</h2>
					<h3>Zipcode: {zipcode}</h3>
					<h4>Price Range: {lowerprice} - {upperprice}</h4>
					<h4>Miles From Home: {client.hometown}</h4>
					<h6>Last Edited: {created_on}</h6>
				</div>
			))}
		</React.Fragment>
	)
}

