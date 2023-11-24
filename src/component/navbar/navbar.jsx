import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavbarDefault() {
  return (
    <div>  
      <Navbar expand="lg" className="navbar" bg="light" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="title">
              <span className='title1'>Sleep</span>
              <span className='title2'>Ez</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="ms-auto">
              <Nav.Link class="navbar-option" href="./HomePage">Home</Nav.Link>
              <Nav.Link href="#tips">Tips</Nav.Link>
              <Nav.Link href="#music">Music</Nav.Link>
              <Nav.Link href="#videos">Videos</Nav.Link>
              <Nav.Link href="#aboutus">About Us</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Button href="signup" variant="outline-info">Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarDefault;
