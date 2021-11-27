import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby";
import Busquedas from "../components/busquedas"
import LayoutSearch from "../components/layout-search"

const SearchPage = ({location}) => {
  const consulta = location.state.valor;
  const data = useStaticQuery(query);
  console.log('es locatioon ', consulta)
  return (
    <LayoutSearch>
      <section id="form1" className="container"
               style={{
                 background: "white"
               }}
      >
        <div className="row pt-5">
          <div className="col-12">
            <Busquedas registros={data.allStrapiRapidapi.edges} />
          </div>
        </div>
      </section>
    </LayoutSearch>
  );
};
export const query = graphql`
    query {
          allStrapiRapidapi {
            edges {
              node {
                id
                titulo
                detalle
                link
              }
            }
          }
        }
`

export default SearchPage;
