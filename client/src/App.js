import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Greeting from "./components/Greeting"
import Navbar from "./components/Navbar";
import Title from './components/Title';
import Home from "./components/Home"
import Mission from "./components/Mission"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';



class App extends Component {
  render() {
    return (
      <Wrapper>

        <Navbar />

        <Title>
          <p>Final Count Down</p>
          <p className="titleStatement">TOGETHER WE EXPLORE SPACE TO</p>
          <p className="titleStatement">CHANGE THE WORLD FOR THE BETTER</p>
        </Title>


        <Router>
          <div>
            <Route path="/" component={Greeting} />
            <Route path="/Home" component={Home} />
            <Route path="/Mission" component={Mission} />
          </div>
        </Router>
      </Wrapper>
    );
  }
}

export default App;