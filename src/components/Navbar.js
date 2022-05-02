import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import "./assets/navbar.css"

const NavbarContent = () => {
  return (
<section>
    <Navbar className="navStyle" expand="lg">
    <Container>
        <Navbar.Brand href="#home">Craig Leslie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </section>
  )
}

export default NavbarContent