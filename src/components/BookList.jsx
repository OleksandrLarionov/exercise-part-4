import { Component } from 'react';
import SingleBook from './SingleBook';
import { Row, Form, Col, Card } from 'react-bootstrap';
import CommentArea from './CommentArea';

class BookList extends Component {
	state = {
		bookTitle: '',
		selectGenre: '',
		selected: false,
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
					{this.props.genre[0]
						.filter((book) =>
							book.title.toLowerCase().includes(this.state.bookTitle.toLowerCase())
						)
						.map((book) => {
							return (
								<div key={book.asin}>
									<Col md={3} className='my-2'>
										<Card
											className={
												this.state.selected
													? 'border border-warning border-4'
													: 'border-none h-100'
											}
											onClick={() => {
												this.setState({ selected: !this.state.selected });
											}}>
											<Card.Img variant='top' src={book.img} height={400} />
											<Card.Body className='justify-content-between d-flex flex-column'>
												<Card.Title>{book.title}</Card.Title>
												<Card.Text>{book.category}</Card.Text>
											</Card.Body>
										</Card>
									</Col>
									{this.state.selected && <CommentArea bookId={book.asin} />}
									{/* {this.state.selected && this.props.setStateOfApp(book.asin)} */}
								</div>
							);
						})
						.slice(0, 4)}
					;
				</Row>
			</Col>
		);
	}
}

export default BookList;
