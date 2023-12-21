import React, { Component } from "react";
import { Col, ListGroup, Alert } from "react-bootstrap";

class CommentArea extends Component {
	state = {
		comments: [],
	};

	fetchComments = async () => {
		try {
			const response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/",
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1ZjY4YzNkYWRhMDAwMThhNjlmOTgiLCJpYXQiOjE3MDMxNzM1MzgsImV4cCI6MTcwNDM4MzEzOH0.PcOvbyl_OAq9mY-U1L-cxlVgnbjD9Q3AD2-PoFrizRU",
					},
				}
			);

			if (response.ok) {
				const commentsData = await response.json();
				this.setState({ comments: commentsData });
			} else {
				console.error("Errore nella richiesta:", response.status);
			}
		} catch (error) {
			console.error("Errore durante il fetch:", error);
		}
	};

	componentDidMount() {
		this.fetchComments();
	}

	render() {
		const { selectedBook } = this.props;
		const { comments } = this.state;

		return (
			<Col xs={10}>
				<ListGroup className="mt-4">
					{selectedBook ? (
						<>
							<h3>Reviews for {selectedBook.title}</h3>
							{comments.map((comment, index) => (
								<ListGroup.Item key={`comment-${index}`} className="d-flex">
									<span className="me-2">
										<strong>
											{new Date(comment.date).toLocaleDateString()}
										</strong>
									</span>
									<span className="me-auto">{comment.author}:</span>
									<span>{comment.comment}</span>
								</ListGroup.Item>
							))}
						</>
					) : (
						<Alert variant="info">Select a book to check the reviews!</Alert>
					)}
				</ListGroup>
			</Col>
		);
	}
}

export default CommentArea;
