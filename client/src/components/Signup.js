import React, { Component } from 'react';
import AuthService from './AuthService';
import { Link } from 'react-router-dom';

// {/* <script async src="https://www.youtube.com/iframe_api"></script> */}
// var script = document.createElement('script');
// script.src = "https://www.youtube.com/iframe_api";
// script.async = true;
// document.body.appendChild(script);

// var player;
// var videoId = '95a2KnIWswk';
// var startSeconds = 17;  // set your own video start time when loop play
// var endSeconds = 19;   // set your own video end time when loop play
// var playerConfig = {
//   height: '250',
//   width: '100%',
//   videoId: videoId,
//   playerVars: {
//     autoplay: 1,            // Auto-play the video on load
//     controls: 0,            // Show pause/play buttons in player
//     showinfo: 0,            // Hide the video title
//     modestbranding: 1,      // Hide the Youtube Logo
//     fs: 1,                  // Hide the full screen button
//     cc_load_policy: 0,      // Hide closed captions
//     iv_load_policy: 3,      // Hide the Video Annotations
//     start: startSeconds,
//     end: endSeconds,
//     autohide: 0, // Hide video controls when playing
//   },

//   events: {
//     'onStateChange': onStateChange,       // reference to Iframe API
//     onReady: function (e) {              // mute the video when loaded
//       e.target.mute();
//     }
//   }
// };

// //excute the video in div
// function onYouTubePlayerAPIReady() {
//   player = new YT.Player('myvideo', playerConfig);
// }

// //repload the video when onStateChange=YT.PlayerState.ENDED)
// function onStateChange(state) {
//   if (state.data === YT.PlayerState.ENDED) {
//     player.loadVideoById({
//       videoId: videoId,
//       startSeconds: startSeconds,
//       endSeconds: endSeconds
//     });
//   }
// }






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
    return (
      <div className="container">
        <div id="myvideo"></div>

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
    );
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