import React from "react";
import { Nav, Navbar } from "react-bootstrap"
import Scrollspy from "react-scrollspy"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-light py-3" id="navlast" expand="lg"
              collapseOnSelect={true}>
        <div className="container">
          <Navbar.Toggle aria-controls="navbarResponsive"/>
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="navbar-nav ml-auto my-2 my-lg-0">
              <Scrollspy className="navbar-nav"
                         items={["about", "services", "portfolio", "contact"]}
                         currentClassName="active" rootEl={"#navlast"} offset={-75}>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registro">
                    Registrate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Acceder
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/profile">
                    Perfil
                  </Link>
                </li>
              </Scrollspy>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
