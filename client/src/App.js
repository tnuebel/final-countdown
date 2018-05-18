import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";


import './App.css';
import Home from "./components/Home"; 
import Mission from "./components/Mission"; 
import Payment from "./components/Payment"; 
// import Wrapper from "./Components/Wrapper"

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
            {/* <!-- Brand --> */}
            <Link className="navbar-brand" to="/">The Final Count Down</Link>

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
          <Route exact path="/" component={Home} />
          <Route exact path="/payment" component={Payment} />
         
        </div>
      </Router>
    );
  }
}

export default App;
