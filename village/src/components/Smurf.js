import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const Smurf = props => {
  return (
    <div className="Smurf">
      <Card classname="card" body inverse color="primary">
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.height} tall</CardText>
        <CardText>{props.age} smurf years old</CardText>
      </Card>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
