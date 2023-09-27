import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className="mainNav w100 fll uln off-menu">
        <section className="container">
          <ul className="menu">
            <li className="">
              <Link to="/convert">Convert</Link>
            </li>
          </ul>
          
        </section>
      </nav>
      {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Wavehouse</Navbar.Brand>
          <Nav className="me-auto navbar_warapper">
            {localStorage.getItem("user-info") ? (
              <>
                <Link to="/kho">Kho</Link>
                <Link to="/product">Sản phẩm</Link>
                <Link to="/customer">Login</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar> */}
    </div>
  );
}

export default Header;
