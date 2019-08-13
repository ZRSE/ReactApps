import React from "react";

class Hello extends React.Component {
  render() {
    return (
      <h1>
        Hello, {this.props.firstName} {this.props.lastName}
      </h1>
    );
  }
}
export default Hello;

//<section>
//        <Button variant="primary">Hello World</Button>
//    </section>
