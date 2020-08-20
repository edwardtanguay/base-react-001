import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import FlashcardList from './FlashcardList';

const flashcards = require('../data/flashcards.json');

const pageTitle = 'Flashcards';

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
				<Helmet>
					<title>{ pageTitle }</title>
				</Helmet>
				<h2>Flashcards</h2>
				<FlashcardList flashcards={filteredFlashcards} />
			</div>
		);
	}
}

export default Flashcards;