import { Component } from "react";
import { Row, Col, Form, Alert } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
	state = {
		searchQuery: "",
		selectedBook: null,
	};

	handleBookClick = (book) => {
		this.setState({ selectedBook: book });
	};

	render() {
		const { searchQuery } = this.state;
		const { books } = this.props;

		return (
			<>
				<Row className="mx-2">
					<Col className="mb-3" xs={12}>
						<Form.Group>
							<Form.Control
								type="search"
								placeholder="Search book here"
								value={searchQuery}
								onChange={(e) => this.setState({ searchQuery: e.target.value })}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					{books
						.filter((book) => book.title.toLowerCase().includes(searchQuery))
						.map((book) => (
							<Col className="mb-3" xs={6} xl={2} key={book.asin}>
								<SingleBook
									book={book}
									onClick={() => this.handleBookClick(book)}
								/>
							</Col>
						))}
				</Row>
			</>
		);
	}
}

export default BookList;
