import { Container, Row, Col } from 'react-bootstrap';
import ListGroupAlert from './ListGroup';
import FormSubEmail from './FormSubEmail';

const myFooter = () => {
	return (
		<Container fluid>
			<hr />
			<Row>
				<Col>
					<ListGroupAlert />
				</Col>
			</Row>
			<Row>
				<Col className='text-center'>
					<FormSubEmail />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repudiandae
						aliquam doloribus tempora id dicta? Suscipit porro dignissimos corporis itaque
						facilis saepe iste iusto, non aliquam modi dolor laborum dolorem.
					</p>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
						© 2023 Copyright:
						<a className='text-white' href='#'>
							MyPage
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default myFooter;
