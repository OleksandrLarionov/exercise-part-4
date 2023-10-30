import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddComment extends Component {
	state = {
		commentAdd: {
			comment: '',
			rate: '1',
			elementId: this.props.bookId,
		},
	};

	formSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
				method: 'POST',
				body: JSON.stringify(this.state.commentAdd),
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjBmYWY2ZTNkZDAwMTQ5NWU0NGEiLCJpYXQiOjE2OTgzMjQ3MzAsImV4cCI6MTY5OTUzNDMzMH0.Wlw5f_Urd-k5h2lUH8SIchHaEY2HVol_3nh8P6Yz8bA',
					'Content-Type': 'application/json',
				},
			});
			if (response.ok) {
				// il commento è stato inviato!
				alert('commento salvato!');
			} else {
				throw new Error('errore nel salvataggio del commento');
			}
		} catch (error) {
			console.log('error', error);
		}
	};
	render() {
		return (
			<Form onSubmit={this.formSubmit}>
				<Form.Group>
					<Form.Control
						type='text'
						placeholder='Aggiungi un commento'
						value={this.state.commentAdd.comment}
						onChange={(e) => {
							this.setState({
								commentAdd: {
									...this.state.commentAdd,
									comment: e.target.value,
								},
							});
						}}
					/>
					<Form.Select
						aria-label='Rate'
						value={this.state.commentAdd.rate}
						onChange={(e) => {
							this.setState({
								commentAdd: {
									...this.state.commentAdd,
									rate: e.target.value,
								},
							});
						}}>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Form.Select>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Send
				</Button>
			</Form>
		);
	}
}

export default AddComment;
