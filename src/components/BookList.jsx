import { Component } from 'react';
import SingleBook from './SingleBook';
import { Row, Form, Col } from 'react-bootstrap';
import CommentArea from './CommentArea';

class BookList extends Component {
	state = {
		bookTitle: '',
		selectGenre: '',
		selectedAsin: this.props.genre[0], // impostato come un valore non nullo, altrimenti legge sempre il primo elemento null
		// selectedAsin: null,
	};

	changeAsin = (newAsin) => {
		this.setState({
			selectedAsin: newAsin,
		});
	};
	render() {
		return (
			<Col>
				<Row className='justify-content-center'>
					<Col md={6} className='my-4'>
						<Form.Group>
							<Form.Control
								type='text'
								placeholder='Cerca un libro...'
								value={this.state.bookTitle}
								onChange={(e) => {
									this.setState({
										bookTitle: e.target.value,
									});
								}}
							/>
						</Form.Group>
					</Col>
					<Col md={4} className='align-items-center d-flex'>
						<Form.Select>
							<option>Select Genre</option>
							<option>Fantasy</option>
							<option>Horror</option>
							<option>History</option>
							<option>Romance</option>
							<option>Scifi</option>
						</Form.Select>
					</Col>
				</Row>
				<Row>
					<Col md={9}>
						<Row>
							{
								this.props.genre[0]
									.filter((book) =>
										book.title.toLowerCase().includes(this.state.bookTitle.toLowerCase())
									)
									.map((oneBook) => {
										return (
											<SingleBook
												book={oneBook}
												key={oneBook.asin}
												changeAsin={this.changeAsin}
												selectedAsin={this.state.selectedAsin}
											/>
										);
									})
								// .slice(0, 4)
							}
						</Row>
					</Col>

					{this.state.selectedAsin && <CommentArea bookId={this.state.selectedAsin} />}
				</Row>
			</Col>
		);
	}
}

export default BookList;
