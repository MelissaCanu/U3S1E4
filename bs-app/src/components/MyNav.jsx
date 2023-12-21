import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => (
	<Navbar bg="success" data-bs-theme="dark">
		<Container>
			<Navbar.Brand href="#">EpiBooks</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link href="#">Home</Nav.Link>
				<Nav.Link href="#">About</Nav.Link>
				<Nav.Link href="#">Browse</Nav.Link>
			</Nav>
		</Container>
	</Navbar>
);

export default MyNav;
