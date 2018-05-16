import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from './components/Title';
import Home from "./components/Home"
import Mission from "./components/Mission"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';



class App extends Component {
  render() {
    return (
      <Wrapper>
        <div className="video-background">
          <div className="video-foreground">
            <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>

        <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
          {/* <!-- Brand --> */}
          <a className="navbar-brand" href="#">The Final Count Down</a>

          {/* <!-- Toggler/collapsibe Button --> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Navbar links --> */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Purpose</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mission</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Vision</a>
              </li>
            </ul>
          </div>
        </nav>

        <Title>
          <p>The Final Count Down</p>
        </Title>

        <div class="row row-one">
          <div class="col"><a href="#" class="button">News</a></div>
          <div class="col-3"><a href="#" class="button">Purpose</a></div>
          <div class="col"><a href="#" class="button">Watch</a></div>
        </div>

        <div class="row row-two">
          <div class="col"><a href="#" class="button">Button</a></div>
          <div class="col"><a href="#" class="button">Button</a></div>
          <div class="col-3"><a href="#" class="button">Mission</a></div>
          <div class="col"><a href="#" class="button">Join</a></div>
          <div class="col"><a href="#" class="button">See</a></div>

        </div>

        <div class="row row-three">
          <div class="col"><a href="#" class="button">Who We Are</a></div>
          <div class="col-3"><a href="#" class="button">Vision</a></div>
          <div class="col"><a href="#" class="button">Research Flights</a></div>
        </div>

      </Wrapper >
    );
  }
}

export default App;
