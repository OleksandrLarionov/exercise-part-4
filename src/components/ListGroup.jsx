import ListGroup from 'react-bootstrap/ListGroup';

const ListGroupAlert = () => {
	return (
		<ListGroup horizontal className='justify-content-center mb-3'>
			<ListGroup.Item>
				<a href='#'> Facebook</a>
			</ListGroup.Item>
			<ListGroup.Item>
				<a href='#'>Twitter</a>
			</ListGroup.Item>
			<ListGroup.Item>
				<a href='#'>Instagram</a>
			</ListGroup.Item>
			<ListGroup.Item>
				<a href='#'>Google</a>
			</ListGroup.Item>
		</ListGroup>
	);
};

export default ListGroupAlert;
