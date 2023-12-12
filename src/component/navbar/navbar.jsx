import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NavbarDefault() {
  return (
    <div>  
      <Navbar expand="lg" className="navbar" bg="light" data-bs-theme="light" fixed="top">
        <Container>
          <Link to="/" style={{textDecoration:'none'}}>
            <Navbar.Brand href="#home" className="title">
              <span className='title1'>Sleep</span>
              <span className='title2'>Ez</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="ms-auto">
              <Link to="/home" style={{textDecoration:'none'}}>
                <Nav.Link class="navbar-option" href="#home">Home</Nav.Link>
              </Link>
              {/* <Link to="/aboutus" style={{textDecoration:'none'}}> */}
                <Nav.Link href="#tips">Tips</Nav.Link>
              {/* </link> */}
              <Link to="/musiclogin" style={{textDecoration:'none'}}>
                <Nav.Link href="#music">Music</Nav.Link>
              </Link>
              {/* <Link to="/aboutus" style={{textDecoration:'none'}}> */}
                <Nav.Link href="#videos">Videos</Nav.Link>
              {/* </link> */}
              <Link to="/aboutus" style={{textDecoration:'none'}}>
                <Nav.Link href="#aboutus">About Us</Nav.Link>
              </Link>
            </Nav>
            <Nav className="ms-auto">
              <Link to="/signup" style={{textDecoration:'none'}}>
                <Button href="signup" variant="outline-info">Sign Up</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarDefault;
