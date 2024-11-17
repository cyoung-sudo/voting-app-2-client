import "./NavigationBar.scss";
// Routing
import { LinkContainer } from 'react-router-bootstrap';
// Hooks
import { useAuth } from "../../hooks/AuthProvider";
// Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
  // Hooks
  const auth = useAuth();

  return(
    <Navbar id="navigationBar" expand="lg" sticky="top">
      <LinkContainer to="/">
        <Navbar.Brand id="navigationBar-brand">Voting App</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle id="navigationBar-toggle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer 
            to="/users"
            onClick={e => e.preventDefault()} 
            isActive={(match, location) => location.pathname.startsWith("/users")}>
            <NavDropdown title="Users" id="basic-nav-dropdown">
              <LinkContainer to="/users">
                <NavDropdown.Item>All Users</NavDropdown.Item>
              </LinkContainer>
              
              <NavDropdown.Divider />
              
              {auth.authUser &&
                <LinkContainer to={`/users/${auth.authUser._id}`}>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
              }
            </NavDropdown>
          </LinkContainer>

          <LinkContainer 
            to="/polls"
            onClick={e => e.preventDefault()} 
            isActive={(match, location) => location.pathname.startsWith("/polls")}>
            <NavDropdown title="Polls" id="basic-nav-dropdown">
              <LinkContainer to="/polls">
                <NavDropdown.Item>All Polls</NavDropdown.Item>
              </LinkContainer>
              
              <NavDropdown.Divider />

              {auth.authUser &&
                <LinkContainer to="/polls/new">
                  <NavDropdown.Item>New Poll</NavDropdown.Item>
                </LinkContainer>
              }
            </NavDropdown>
          </LinkContainer>

          {!auth.authUser &&
            <LinkContainer to="/auth/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
          }

          {!auth.authUser &&
            <LinkContainer to="/auth/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          }

          {auth.authUser &&
            <button onClick={auth.logout}>Logout</button>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavigationBar;