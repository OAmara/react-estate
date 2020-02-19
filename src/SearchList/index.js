import React from 'react'

export default function SearchList(props) {


	// reminder that is destructuring, you can utilize values such as index, i, with a comma ', i' following curly brace in map arguments.
	return(
		<React.Fragment>
			{props.searches.map(({id, name}) => (
				<h5 key={id}>
					id: {id}
					name: {name}
				</h5>
			))}
		</React.Fragment>
	)
}
