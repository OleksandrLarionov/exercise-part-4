import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const FormSubEmail = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<Row className='mb-3'>
				<Col md={3}>
					<Form.Label htmlFor='inputGroupPrepend'>Sign up for our newsletter</Form.Label>
				</Col>
				<Form.Group as={Col} md='7' controlId='validationCustomUsername' className='d-flex'>
					<InputGroup hasValidation>
						<InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
						<Form.Control
							type='email'
							placeholder='enter email'
							aria-describedby='inputGroupPrepend'
							required
						/>
						<Form.Control.Feedback type='invalid'>
							Please choose a email.
						</Form.Control.Feedback>
					</InputGroup>
				</Form.Group>
				<Col md={2}>
					<Button type='submit'>Send</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default FormSubEmail;
