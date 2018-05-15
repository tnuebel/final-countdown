//user home page, links back to main homepage
//has options for travel 
import React, { Component } from 'react';
import "./home.css"


class App extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">

        <a class="navbar-brand" href="FinalCountdown">Final Countdown</a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="Home">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="Dropdown" id="navbardrop" data-toggle="dropdown">Dropdown link</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="gallery">Gallery</a>
              <a class="dropdown-item" href="#reviews">Reviews</a>
              <a class="dropdown-item" href="FAQs">FAQs</a>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

  export default App; 