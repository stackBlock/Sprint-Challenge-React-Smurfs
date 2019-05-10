import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class SmurfForm extends Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  changeHandler = event => {
    event.persist();
    let value = event.target.value;
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [event.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
  };

  render() {
    return (
      <div className="SmurfForm">
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="Name">Name</Label>
                <Input
                  type="string"
                  name="name"
                  onChange={this.changeHandler}
                  placeholder="name"
                  value={this.state.smurf.name}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  type="string"
                  name="age"
                  onChange={this.changeHandler}
                  placeholder="age"
                  value={this.state.smurf.age}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="height">Height</Label>
            <Input
              type="string"
              name="height"
              onChange={this.changeHandler}
              placeholder="height"
              value={this.state.smurf.height}
            />
          </FormGroup>
          <Button type="submit">Add to the Village</Button>
        </Form>

        {/* <form onSubmit={this.handleSubmit}>
          <input
            type="string"
            name="name"
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.smurf.name}
          />

          <input
            type="string"
            name="age"
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.smurf.age}
          />

          <input
            type="string"
            name="height"
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.smurf.height}
          />
          <button type="submit">Add to the village</button>
        </form> */}
      </div>
    );
  }
}

export default SmurfForm;

{
  /* <Form onSubmit={this.handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Name">Name</Label>
              <Input
            type="string"
            name="name"
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.smurf.name}
          />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
            type="string"
            name="age"
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.smurf.age}
          />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input
            type="string"
            name="height"
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.smurf.height}
          />
        </FormGroup>
        <Button type="submit">Add to the Village</Button>
      </Form>
    );
  }
} */
}
