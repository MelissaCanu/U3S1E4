import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import horror from "../data/horror.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AllTheBooks = () => (
	<Container>
		<Row>
			{horror.map((item) => (
				<Col className="mb-3" xs={6} xl={2} key={item.asin}>
					<Card className="h-100">
						<Card.Img variant="top" src={item.img} alt={item.title} />
						<Card.Body className="d-flex flex-column">
							<Card.Title>{item.title}</Card.Title>
							<Card.Text className="flex-grow-1">{item.price + "$"}</Card.Text>
							<Button variant="primary">Buy</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	</Container>
);

export default AllTheBooks;
