import React from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
	return (
		<Card>
			<Card.Img variant="top" src={book.img} alt={book.title} />
			<Card.Body>
				<Card.Title>{book.title}</Card.Title>
			</Card.Body>
		</Card>
	);
};

export default SingleBook;
