import React, { Component } from 'react';
import AuthService from './AuthService';
import Wrapper from "./Wrapper";
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }

  render() {
    return (
      <Wrapper>
        <img id="background1" src={require('../components/Image/station/Space-Station-Viewing-Window.jpg')} alt=""/>

        <div className="container">
          <h1 style={{ color: "white" }}>Login</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input className="form-control"
                placeholder="Email goes here..."
                name="email"
                type="email"
                id="email"
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="pwd"></label>
              <input className="form-control"
                placeholder="Password goes here..."
                name="password"
                type="password"
                id="pwd"
                onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <p><Link style={{ color: "white" }} to="/signup">Go to Signup</Link></p>
        </div>
      </Wrapper>

    );
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        this.props.history.replace(`/profile/${res.user._id}`);
      })
      .catch(err => {
        alert(err);
      })

  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }
}

export default Login;