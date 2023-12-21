import React from "react";
import { Col, ListGroup, Alert } from "react-bootstrap";

const CommentArea = ({ selectedBook }) => {
	return (
		<Col xs={10}>
			<ListGroup className="mt-4">
				{selectedBook ? (
					<>
						<h3>Reviews for {selectedBook.name}</h3>
						{selectedBook.comments.map((review, index) => (
							<ListGroup.Item key={`comment-${index}`} className="d-flex">
								<span className="me-2">
									<strong>{new Date(review.date).toLocaleDateString()}</strong>
								</span>
								<span className="me-auto">{review.author}:</span>
								<span>{review.comment}</span>
							</ListGroup.Item>
						))}
					</>
				) : (
					<Alert variant="info">Select a book to check the reviews!</Alert>
				)}
			</ListGroup>
		</Col>
	);
};

export default CommentArea;
