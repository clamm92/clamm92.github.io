import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar expand="lg" bg="light" className="shadow-sm">
      <Container>
        <div className="row justify-content-center w-100">
          <div className="col-12 col-md-10 col-lg-8 d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap">
            
            <Navbar.Brand as={Link} to="/" className="fs-3 mb-0">
              Connor Lam
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="w-100 w-lg-auto text-end">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;