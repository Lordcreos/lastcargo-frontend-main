import React from "react";
import Cards from "./card";
import { CardGroup } from "react-bootstrap"

const Busquedas = ({ registros }) => {

  return (
        <CardGroup  className="row">
          {registros.map((registro, i) => {
            return (
              <Cards
                registro={registro}
                key={`registro__left__${registro.node.id}`}
              />
            );
          })}
        </CardGroup>
  );
};

export default Busquedas;
