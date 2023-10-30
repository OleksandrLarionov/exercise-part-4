import Card from 'react-bootstrap/Card';

import { Col } from 'react-bootstrap';
import { Component } from 'react';
// import CommentArea from './CommentArea';

class SingleBook extends Component {
	state = {
		selected: false,
	};

	render() {
		return (
			<Col md={3} key={this.props.book.asin} className='my-2'>
				<Card
					onClick={() => {
						this.setState({ selected: !this.state.selected });
						this.props.changeAsin(this.props.book.asin);
					}}
					className={
						this.props.book.asin === this.props.selectedAsin
							? 'border border-warning border-4'
							: 'border-none h-100'
					}>
					<Card.Img variant='top' src={this.props.book.img} height={400} />
					<Card.Body className='justify-content-between d-flex flex-column'>
						<Card.Title>{this.props.book.title}</Card.Title>
						<Card.Text>{this.props.book.category}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			// {/* {this.state.selected && <CommentArea bookId={this.props.book.asin} />} */}
			// {/* {this.state.selected && this.props.setStateOfApp(this.props.book.asin)} */}
		);
	}
}

export default SingleBook;
