import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'
import logoheader from "../images/logoblanco.png"
import { navigate,  Link } from "gatsby"


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('dio enter');
      const valor = e.target.value
      return navigate('/prueba', {state: { valor } })
    }
  }

  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                           items={["inicio", "registro", "acceder", "perfil"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-75}>
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
                      <Link className="nav-link" to="/profile">
                        Perfil
                      </Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-75">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <img src={logoheader} alt="lastcargo" className="img-fluid" />
              </div>
              <div className="col-lg-8 align-self-baseline"  id="serchForm">
                <div className="form-outline inner-addon left-addon">
                  <i className="fas fa-search" style={{
                    top: '15%'
                  }}>
                  </i>
                  <input type="search" id="form1" className="form-control" onKeyDown={this._handleKeyDown}/>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
