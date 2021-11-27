import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Busquedas from "../components/busquedas"
import BarSearch from "../components/bar-search"
import Footer from "../components/footer"
import { Nav, Navbar } from "react-bootstrap"
import baseImage from "../images/bg-masthead.jpg"
import lascargo from "../images/logoblanco.png"
import Scrollspy from "react-scrollspy"

const PRUEBA = props => {
  const { data } = props
  const allPosts = data.allStrapiRapidapi.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props

    const posts = data.allStrapiRapidapi.edges || []

    const filteredData = posts.filter(post => {
      const { titulo, detalle } = post.node
      return (
        titulo.toLowerCase().includes(query.toLowerCase()) ||
        detalle.toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts
  return (
    <>
      <div
        className="site-container"
        id="page-top"
        style={{
          background: "white"
        }}
      >
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
                <input type="search" id="form1" className="form-control" onKeyDown={handleInputChange}/>
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
        <section id="form1" className="container"
                 style={{
                   background: "white"
                 }}
        >
          <div className="row pt-5">
            <div className="col-12">
              <Busquedas registros={posts} />
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  )
}

export default PRUEBA

export const pageQuery = graphql`
  query {
     allStrapiRapidapi {
    edges {
      node {
        id
        link
        titulo
        detalle
      }
    }
  }
  }
`