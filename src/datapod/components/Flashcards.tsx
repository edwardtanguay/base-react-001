import React, { Component } from 'react';

import FlashcardList from './FlashcardList';

const flashcards = require('../data/flashcards.json');


interface MainState {
	flashcards: any[]
}

class Flashcards extends Component<{}, MainState> {
	constructor(props: any) {
		super(props);
		this.state = {
			flashcards: []
		};
	}

	componentDidMount() {
		this.setState({
			flashcards
		});
	}

	render() {
		const filteredFlashcards = this.state.flashcards.filter(m => !m.back.includes('```'));
		return (
			<div>
				<h2>Flashcards</h2>
				<FlashcardList flashcards={filteredFlashcards} />
			</div>
		);
	}
}

export default Flashcards;