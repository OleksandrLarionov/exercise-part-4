import Alert from 'react-bootstrap/Alert';

const Welcome = () => {
	// alert('Welcome');
	return (
		<div>
			<Alert
				variant='success'
				className='text-center fw-bold fs-2 text-white border border-dark'>
				Welcome To My Book Page!
			</Alert>
		</div>
	);
};

export default Welcome;
