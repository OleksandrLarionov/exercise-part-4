import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import BookList from './components/BookList';

// Genere dei libri
import fantasy from '../src/data/fantasy.json';
import history from '../src/data/history.json';
import horror from '../src/data/horror.json';
import romance from '../src/data/romance.json';
import scifi from '../src/data/scifi.json';
import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import CommentArea from './components/CommentArea';

class App extends Component {
	state = {
		selectedAsign: '',
	};
	setStateOfApp = (newSelected) => {
		this.setState({ selectedAsign: newSelected });
	};
	render() {
		return (
			<Container fluid>
				<MyNav />
				<Welcome />
				<Row>
					{/* <CommentArea /> */}

					<BookList
						genre={[fantasy, history, horror, romance, scifi]}
						setStateOfApp={this.setStateOfApp}
					/>
					{/* <BookList genre={fantasy} /> */}

					<CommentArea
						// selected={this.state.selectedId} setStateOfApp={this.setStateOfApp}
						newIdBook={this.state.selectedAsign}
					/>
				</Row>
				<MyFooter />
			</Container>
		);
	}
}

export default App;
