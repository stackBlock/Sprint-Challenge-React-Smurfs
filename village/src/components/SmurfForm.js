import React, { Component } from "react";

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
        <form onSubmit={this.handleSubmit}>
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
        </form>
      </div>
    );
  }
}

export default SmurfForm;
