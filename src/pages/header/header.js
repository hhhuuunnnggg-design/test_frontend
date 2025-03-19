import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">loremasdasdasdasdsa</Navbar.Brand>
        <Nav className="ml-auo">
          <Nav.Link as={Link} to="/" className="nav-link">
            Employees
          </Nav.Link>

          <Nav.Link as={Link} to="/employees" className="nav-link">
            Post Employee
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
// 9
export default Header;
