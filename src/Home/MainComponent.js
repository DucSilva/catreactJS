import React, { Component } from 'react';
import CatModal from './CatModal'

const headings = [
	'Have a nice day!',
	'Good luck to you!',
	'You are every thing',
	'Do you want to cooperate with me?!',
	'Let do it',
	'You will never walk alone!'
]

const randomHeading = headings[Math.floor(Math.random() * headings.length)];

class MainComponent extends Component {
	state = {
		showModal: false
	};

	render() {
		let modalClose = () => this.setState({ showModal: false });

		return (
			<div>
				<div className="grid-container">
					<div className="grid-item">
						<h1>{randomHeading}</h1>
						<p className="mb-0" style={{color: '#121312'}}>
							A simple Website for displaying information about cat breeds, <br />
							built using ReactJs, Boostrap and React-Router-Dom
						</p>
						<p>
							
							<button
								className="btn mybtn"
								onClick={() => this.setState({ showModal: true })}
							>Click to show Cat Pic
							</button>
							<a
								href="/breeds"
								className="btn mybtn backgroundBtn"
							>Breed List
							</a>
						</p>
						<CatModal
								show={this.state.showModal}
								onHide={modalClose}
							/>
					</div>
				</div>
			</div>
		);
	}
}
export default MainComponent;