import { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap';

class CommentList extends Component {
	render() {
		return (
			<ListGroup>
				{this.props.comment.map((comment) => {
					return (
						<div key={comment._id}>
							<ListGroup.Item>{comment.comment}</ListGroup.Item>

							<Button
								variant='danger'
								onClick={(e) => {
									e.preventDefault();
									fetch(
										'https://striveschool-api.herokuapp.com/api/comments/' + comment._id,
										{
											method: 'DELETE',
											headers: {
												Authorization:
													'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjBmYWY2ZTNkZDAwMTQ5NWU0NGEiLCJpYXQiOjE2OTgzMjQ3MzAsImV4cCI6MTY5OTUzNDMzMH0.Wlw5f_Urd-k5h2lUH8SIchHaEY2HVol_3nh8P6Yz8bA',
											},
										}
									)
										.then((res) => {
											if (res.ok) {
												console.log('eliminazione completata');
											} else {
												throw new Error("Qualcosa è andato storto nell'eliminazione");
											}
										})
										.catch((err) => {
											console.log('ERRORE', err);
										});
								}}>
								Del
							</Button>
						</div>
					);
				})}
			</ListGroup>
		);
	}
}

export default CommentList;
