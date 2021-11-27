import React from "react";
import { Nav, Navbar } from "react-bootstrap"
import Scrollspy from "react-scrollspy"
import baseImage from '../images/bg-masthead.jpg'
import lascargo from "../images/logoblanco.png"

import { Link, navigate } from "gatsby"
import * as url from "url"

const BarSearch = () => {
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('dio enter');
      const valor = e.target.value
      return navigate('/search', {state: { valor } })
    }
  }
  return (
    <>
      <Navbar className="navbar  navbar-light py-3" id="navlast" expand="lg"
              collapseOnSelect={true}
              style={{
                backgroundImage: `url(${baseImage})`,
                backgroundPosition: 'top'
              }}
      >
        <div className="container">
          <img src={lascargo} alt="lastcargo" className="img-fluid navbar-brand js-scroll-trigger" style={{
            maxHeight:"60px"
          }} />
          <div className="col-lg-6"  id="serchBar">
            <div className="form-outline inner-addon left-addon">
              <i className="fas fa-search">
              </i>
              <input type="search" id="form1" className="form-control" onKeyDown={_handleKeyDown}/>
            </div>
          </div>
          <Navbar.Toggle aria-controls="navbarResponsive"/>
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="navbar-nav ml-auto my-2 my-lg-0">
              <Scrollspy className="navbar-nav"
                         items={["about", "services", "portfolio", "contact"]}
                         currentClassName="active" rootEl={"#navlast"} offset={-75}>
                <li className="nav-item">
                  <Link className="nav-link"  to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to="/registro">
                    Registrate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to="/login">
                    Acceder
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to="/profile">
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

export default BarSearch;
