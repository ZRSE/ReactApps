import React from "react";
import "./App.css";

//Component imports
import Hello from "./Hello";
import FetchFromApi from "./FetchFromApi";
import Navigation from "./Navigation";
import MainContent from "./MainContent";

//Bootstrap imports
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
/*import Col from 'react-bootstrap/Col'*/

class App extends React.Component {
  render() {


    return (
      /*<Hello firstName='Zakarias' lastName='Røse'/>*/ 
      <Container className="mainCont">
        <Navigation name="Z's weatherapp" />

        <MainContent />

      </Container>
    );
  }
}

export default App;
