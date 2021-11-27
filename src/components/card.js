import React from "react";
import { Button, Card } from "react-bootstrap"

const Cards = ({ registro }) => {
  return (
    <div className="col-sm-12 p-1">
      <Card>
        {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
        <Card.Body>
          <Card.Title
            style={{color: '#5582B9'}}
          >{registro.node.titulo}</Card.Title>
          <Card.Text>
            <p>
           {registro.node.detalle}
            </p>
            <p style={{
              "color": "blue",
              "overflow":"hidden","width":"300px","display":"-webkit-box","WebkitLineClamp":"1","WebkitBoxOrient":"vertical", "fontWeight": "normal"
            }}>
              {registro.node.link}
            </p>
          </Card.Text>
          <a className="bnt btn-outline-warning" href={registro.node.link} target="_blank">Acceder</a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
