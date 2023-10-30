import { Row, Col, Form } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Component } from 'react';
// Genere dei libri

class AllTheBooks extends Component {
	state = {
		genre: {
			bookName: '',
		},
	};
	handleImputChange = (property, value) => {
		this.setState({
			genre: {
				...this.state.genre,
				[property]: value,
			},
		});
	};
	render() {
		return (
			<Container>
				<Form>
					<Form.Group className='mb-3'>
						<Form.Label>Cerca qui il tuo libro Preferito</Form.Label>
						<Form.Control
							type='text'
							placeholder='Il nome del ibro'
							value={this.state.genre.bookName}
							onChange={(e) => this.handleImputChange('bookName', e.target.value)}
						/>
					</Form.Group>
				</Form>
				<Row>
					{/* qui vado a inserire il genere */}
					{this.props.setGenre.map((book) => {
						return (
							<Col md={3} key={book.asin}>
								<Card className='h-100'>
									<Card.Img variant='top' src={book.img} height={400} />
									<Card.Body className='justify-content-between d-flex flex-column'>
										<Card.Title>{book.title}</Card.Title>
										<Card.Text>{book.category}</Card.Text>
										<Button variant='primary'>Buy</Button>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		);
	}
}

export default AllTheBooks;
