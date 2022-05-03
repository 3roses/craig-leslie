import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import Projects from './Projects';
import {Link} from 'react-router-dom';
import "./assets/navbar.css";

const NavbarContent = () => {
  return (
<section>
    <Navbar className="navStyle" expand="lg">
    <Container>
        <Navbar.Brand className="color-me" as={Link} to="/">Craig Leslie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link className="color-me" as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link className="color-me" as={Link} to="/about">About</Nav.Link>
            <Nav.Link className="color-me" as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </section>
  )
}

export default NavbarContent