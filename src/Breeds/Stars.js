import React, { Component } from 'react'
import ReactStars from 'react-stars'

export default class Stars extends Component {

render() {
	return (
			<ReactStars
			className="stars"
			as="span"
			value={this.props.rating}
			size={24}
			edit={false}
			color2={"#2ebdbd"} />
	)
}
}
