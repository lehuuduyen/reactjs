import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Wavehouse</Navbar.Brand>
          <Nav className="me-auto navbar_warapper">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
