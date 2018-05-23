import React, { Component } from 'react';
import './Signup.css';
import AuthService from './AuthService';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import './Signup.css';

class Signup extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }

  // componentWillMount() {
  //   if (this.Auth.loggedIn())
  //     this.props.history.replace('/');
  // }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {         // https://developers.google.com/youtube/player_parameters
        autoplay: 1,        // Auto-play the video on load
        controls: 0,        // Show pause/play buttons in player
        showinfo: 0,        // Hide the video title
        autohide: 1,        // Hide video controls when playing
        fs: 1,              // Hide the full screen button
        modestbranding: 1,  // Hide the Youtube Logo
        cc_load_policy: 0,  // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        mute: 1,            // Mutes the video
        rel: 0,             // Hide related video recomendations
        start: 17,
        end: 19
      }
    };
    return (
      <div className="video-background"> 
        <div className="video-foreground">
          <div className="container">
            <YouTube
              videoId="95a2KnIWswk"
              opts={opts}
              onEnd={this._onEnd}
            />
          </div>
        </div>

        <div class="form-wrapper">
          <h1>Signup</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input className="form-control"
                placeholder="Username goes here..."
                name="username"
                type="text"
                id="username"
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input className="form-control"
                placeholder="Email goes here..."
                name="email"
                type="email"
                id="email"
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input className="form-control"
                placeholder="Password goes here..."
                name="password"
                type="password"
                id="pwd"
                onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <p><Link to="/login">Go to Login</Link></p>
        </div>
      </div>
    );
  }

  _onEnd(event) {
    // when the video end
    // restart it from the 17 second mark 
    console.log(event);
    event.target.seekTo(17);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.Auth.signup(this.state.username, this.state.email, this.state.password)
      .then(res => {
        this.props.history.replace('/login');
      })
      .catch(err => {
        alert(err);
      });
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }
}

export default Signup;