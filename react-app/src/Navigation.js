import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//Navigation, no routing atm

class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">{this.props.name}</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
