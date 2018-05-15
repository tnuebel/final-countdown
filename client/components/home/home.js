import React, { Component } from 'react';
import "./home.css"
import './App.css';
import Background from './images/background.jpg';

class App extends Component {
  render() {
    return (

      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">The Final Countdown</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">About <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Mission</a></li>
                {/* <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li> */}
              </ul>
              {/* <form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form> */}
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Login</a></li>
                <li><a href="#">Signup</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">FAQs</a></li>
                    {/* <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li> */}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h6>Follow us</h6>
                <p className="black-text text-lighten-4">
                  <a href="https://instagram.com" target="_blank">
                    <img src="/assets/img/instagram.png" class="sm-icons" />
                  </a>
                  <a href="https://twitter.com" target="_blank">
                    <img src="/assets/img/twitter.png" class="sm-icons" />
                  </a>
                </p>
                <div className="col l4 offset-l2 s12">
                  <ul>
                    <li>
                      <a className="text-lighten-3" href="https://github.com/tnuebel/final-countdown">GitHub</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container cp">
                © 2018 Final Countdown
            </div>
            </div>
          </div>
        </footer>
      </div >
    );
  }


}

export default App; 