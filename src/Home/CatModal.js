import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import LoadingComponent from './LoadingComponent'
import './Home.css'

const API = 'https://api.thecatapi.com/v1/images/search';

export default class CatModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			cats: [],
			error: null,
		}

		this.fetchCats = this.fetchCats.bind(this)
	}

	fetchCats() {
    fetch(API)
			.then(response => response.json())
      .then(data => 
        this.setState({
					cats: data,
					isLoading: false,
				})
			)
			.catch(error => this.setState({ error, isLoading: false }));
	}


	componentDidMount() {
		this.fetchCats();
	}

	renderModalVote = () =>{

	}

	render() {
		const { isLoading, cats, error } = this.state;

		return (
			<React.Fragment>
				{error ? <p>{error.message}</p> : null}
				{!isLoading ? (
					cats.map(cat => {
						const { url, id } = cat;
						return (
							<Modal
								{...this.props}
								key={id}
								size="lg"
								aria-labelledby="contained-modal-title-vcenter"
								centered
							>
								<Modal.Body>
										<Image src={url} fluid />
								</Modal.Body>
								<Modal.Footer>
								{/* Get new cat image */}
									<button
										onClick={this.fetchCats}
										className="btn mybtn">
										<i className="fa fa-refresh" aria-hidden="true">Change Cat Pic</i>

									</button>
								{/* close modal */}
									<button
										onClick={this.props.onHide}
										className="btn mybtn backgroundBtn">
										<i className="fa fa-times" aria-hidden="true"></i> Close
									</button>
								</Modal.Footer>
							</Modal>
						
						);
					})
				) : (
						<LoadingComponent />
					)}
			</React.Fragment>
		);
	}
}
