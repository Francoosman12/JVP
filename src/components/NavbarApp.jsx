import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/Navbar.css"

function NavbarApp() {
  return (
    <Navbar expand="lg" className="text-light navbar">
      <Container>
        <Navbar.Brand className='d-flex align-items-center gap-2' href="#">
          <img src="https://i.ibb.co/GdhXk5R/logo-jvp.png" alt="" className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Empresa" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                Nosotros
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Estructura
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Historia
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Servicio">Servicios</Nav.Link>
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
