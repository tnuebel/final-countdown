
import React, { Component } from 'react';
import './App.css';
// import Wrapper from "./Components/Wrapper"

class App extends Component {
  render() {
    return (
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
    );
  }
}


export default App;
