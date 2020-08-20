import React, { Component } from 'react';

const greyBox = require('datapod/images/greybox.png');

interface IFlashcard {
	category: string,
	front: string,
	back: string
}

class Flashcard extends Component<IFlashcard> {
	render() {
		return (
			<figure className="flashcard">
				<div className="category">{this.props.category}</div>
				<div className="front">{this.props.front}</div>
				<div className="back">{this.props.back}</div>
				<img src={greyBox} alt="greybox" />
			</figure>
		)
	}
}

export default Flashcard;
