import "./NavigationBar.scss";
// Routing
import { LinkContainer } from 'react-router-bootstrap';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
  return(
    <Navbar id="navigationBar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Polling App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Users" id="basic-nav-dropdown">
              <NavDropdown.Item>
              <LinkContainer to="/users">
                <Nav.Link>Users</Nav.Link>
              </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <LinkContainer to="/users/1">
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Polls" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <LinkContainer to="/polls">
                  <Nav.Link>All Polls</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <LinkContainer to="/polls/new">
                  <Nav.Link>New Poll</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">
              <LinkContainer to="/auth/signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
            </Nav.Link>
            <Nav.Link href="#home">
              <LinkContainer to="/auth/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav.Link>
            <Nav.Link href="#home">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavigationBar;