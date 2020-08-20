import React, { Component } from 'react';
import {
	Route,
	NavLink,
	BrowserRouter
} from 'react-router-dom';
import $ from 'jquery';

import Home from './Home';
import Info from './Info';
import News from './News';
import Flashcards from './Flashcards';

class Main extends Component {
	
	componentDidMount() {
		// jQuery fix for Boostrap/Typescript/React/mobile navbar issue not closing correctly
		const screenWidth = $(document).width() as number;		
		if (screenWidth < 600) {
			$('.navbar .subMenuItem a').on('click', function () {
				$('.navbar-toggler').click();
			});
		}
	}
	
	render() {
		return (
			<BrowserRouter>
				<div>
					<nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
						<a className="navbar-brand" href="#"><NavLink className="nav-link" exact to="/"><span className="appTitle">Site</span></NavLink></a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item subMenuItem">
									<NavLink className="nav-link" to="/info">Info</NavLink>
								</li>
								<li className="nav-item subMenuItem">
									<NavLink className="nav-link" to="/news">News</NavLink>
								</li>
								<li className="nav-item subMenuItem">
									<NavLink className="nav-link" to="/flashcards">Flashcards</NavLink>
								</li>
							</ul>
						</div>
					</nav>

					<div className="pageContent">
						<Route exact path="/" component={Home} />
						<Route exact path="/info" component={Info} />
						<Route path="/news" component={News} />
						<Route path="/flashcards" component={Flashcards} />
					</div>

					<div>&nbsp;</div>
					<div>&nbsp;</div>
					<div className="footer version">
						<div className="innerFooter">Made with Datapod for React 00.00.06</div>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default Main;
