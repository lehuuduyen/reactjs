import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const [user,setUser] = useState();
  useEffect(()=>{
    if(localStorage.getItem("user-info")){
      setUser(localStorage.getItem("user-info"))
    }
  })
  const navigate = useNavigate()
  function logOut(){
    localStorage.clear()
    setUser()
    navigate('/login')
  }
  return (
    <div>
      <nav className="mainNav w100 fll uln off-menu">
        <section className="container">
          <ul className="menu">
            {user ? (
              <>
                <li className="">
                  <Link to="/products">
                    <i className="fas fa-warehouse"></i>Hàng hóa
                  </Link>
                </li>
                <li className="">
                  <Link to="/customer">
                    <i className="fas fa-warehouse"></i>Khách hàng
                  </Link>
                </li>

                <li>
                  <Link to="/kho">
                    <i className="fas fa-warehouse"></i>Kho
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="">
                  <Link to="/login">Login</Link>
                </li>

                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
          {localStorage.getItem("user-info") ? (
            <>
              <ul className="menu menu-right">
                <li className="ng-scope">
                  <ul>
                    <li className="  ng-scope" data-placement="right">
                      <a onClick={logOut} className="kol-menu-item ng-binding">
                        <i className="fa fa-sign-out"></i>Đăng xuất
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}
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
