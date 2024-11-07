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
              <LinkContainer to="/users">
                <NavDropdown.Item>Users</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/users/1">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown title="Polls" id="basic-nav-dropdown">
              <LinkContainer to="/polls">
                <NavDropdown.Item>All Polls</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/polls/new">
                <NavDropdown.Item>New Poll</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/auth/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/auth/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavigationBar;