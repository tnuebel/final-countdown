import React, { Component } from 'react';
import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, /* Link */ } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Gallery from "./components/Gallery";
import Launchdates from "./components/Launchdates";
import Mission from "./components/Mission";
import Payment from "./components/Payment";
import Review from "./components/Review";
import Travelpackages from "./components/Travelpackages";
import Travelpack1 from "./components/Travelpack1";
import Travelpack2 from "./components/Travelpack2";
import Travelpack3 from "./components/Travelpack3";
import Travelpack4 from "./components/Travelpack4";
import Userhome from "./components/Userhome";
import Vision from "./components/Vision";
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import axios from "axios";

const Auth = new AuthService();



if (localStorage.getItem("id_token")) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <div>
            <Navbar />

            <Route exact path="/" component={Greeting} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/Greeting" component={Greeting} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/launchdates" component={Launchdates} />
            <Route exact path="/mission" component={Mission} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/review" component={Review} />
            <Route exact path="/travelpackages" component={Travelpackages} />
            <Route exact path="/travelpack1" component={Travelpack1} />
            <Route exact path="/travelpack2" component={Travelpack2} />
            <Route exact path="/travelpack3" component={Travelpack3} />
            <Route exact path="/travelpack4" component={Travelpack4} />
            <Route exact path="/userhome" component={Userhome} />
            <Route exact path="/vision" component={Vision} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile/:id" component={Profile} />
          </div>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
