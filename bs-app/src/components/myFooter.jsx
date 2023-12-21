import { Container, Navbar } from "react-bootstrap";

const MyFooter = () => (
	<Navbar className="bg-body-tertiary">
		<Container>
			<Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end">
				<Navbar.Text>
					Signed in as: <a href="#login">Gatto Rude</a>
				</Navbar.Text>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default MyFooter;
