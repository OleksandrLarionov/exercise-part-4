import { Component } from 'react';
import { Col } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';
const key =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjBmYWY2ZTNkZDAwMTQ5NWU0NGEiLCJpYXQiOjE2OTgzMjQ3MzAsImV4cCI6MTY5OTUzNDMzMH0.Wlw5f_Urd-k5h2lUH8SIchHaEY2HVol_3nh8P6Yz8bA';
class CommentArea extends Component {
	state = {
		comment: [],
	};
	// componentDidMount() {
	// 	this.getComents();
	// }

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.bookId !== this.props.bookId) {
			this.getComents();
		}
	}

	getComents = async () => {
		try {
			const response = await fetch(
				'https://striveschool-api.herokuapp.com/api/comments/' + this.props.bookId,
				{
					headers: {
						Authorization: key,
					},
				}
			);
			if (response.ok) {
				const data = await response.json();
				this.setState({ comment: data });
				console.log('Questi sono i miei dati', data);
			} else {
				throw new Error('Errore nel download dei dati');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};

	render() {
		return (
			<Col md={3}>
				<h2 className='text-center mb-5'>Comments</h2>
				<CommentList comment={this.state.comment} />

				<AddComment bookId={this.props.bookId} />
			</Col>
		);
	}
}

export default CommentArea;
