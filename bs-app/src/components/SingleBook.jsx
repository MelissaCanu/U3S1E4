import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = ({ book, onClick }) => {
	return (
		<>
			<Card>
				<Card.Img variant="top" src={book.img} alt={book.title} />
				<Card.Body>
					<Card.Title>{book.title}</Card.Title>
				</Card.Body>
			</Card>
			<CommentArea selectedBook={book} /> {/* CommentArea qui */}
		</>
	);
};

export default SingleBook;
