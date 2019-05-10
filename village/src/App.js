import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from "axios";
import { Button, Row, Col } from "reactstrap";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(error => console.log(error));
  }

  addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.smurfs);
    return (
      <div className="App">
        <Row>
          <Col sm="4">
            <h1 className="Smurf-header">Smurfs</h1>
            <div className="Row-links">
              <Button outline color="primary">
                <NavLink exact to="/">
                  Smurfs
                </NavLink>
              </Button>
              <Button outline color="primary">
                <NavLink to="smurf-form"> Add-Smurf</NavLink>
              </Button>
            </div>
          </Col>
          <Col sm="4">
            <Route
              path="/smurf-form"
              render={props => (
                <SmurfForm {...props} addSmurf={this.addSmurf} />
              )}
            />
            <Route
              exact
              path="/"
              render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
            />
          </Col>
          <Col sm="4" />
        </Row>
      </div>
    );
  }
}

export default App;

// return (
//   <div className="App">
//     <Row>
//       <h1 className="store-header">Dustin's Trinkets</h1>
//       <div className="Row-links">
//         <NavLink to="/item-form">Add Item</NavLink>
//         <NavLink exact to="/">
//           Home
//         </NavLink>
//         <NavLink to="/item-list">Shop</NavLink>
//       </div>
//     </Row>

//     <Route exact path="/" component={Home} />
//     <Route
//       exact
//       path="/item-list"
//       render={props => (
//         <ItemsList
//           {...props}
//           items={this.state.items}
//         />
//       )}
//     />
//     <Route
//       path="/item-list/:id"
//       render={props => (
//         <Item
//           {...props}
//           items={this.state.items}
//           deleteItem={this.deleteItem}
//           setUpdateForm={this.setUpdateForm}
//         />
//       )}
//     />
//     <Route
//       path="/item-form"
//       render={props => <ItemForm {...props} addItem={this.addItem} />}
//     />
//     <Route
//       path="/update-form"
//       render={props => (
//         <UpdateForm
//           {...props}
//           updateItem={this.updateItem}
//           activeItem={this.state.activeItem}
//         />
//       )}
//     />
//   </div>
// );
