import React, { Component } from 'react';
import './Home.css';


// var player;
// var videoId='95a2KnIWswk';
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
//        'onStateChange': onStateChange,       // reference to Iframe API
//         onReady: function(e) {              // mute the video when loaded
//         e.target.mute();             
//       }
//     }
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


class Home extends Component {
    render() {
        return (
            <div>
                <div className="video-background">
                    <div className="video-foreground">
                        {/* <iframe width="560" height="315" title="homeVideo" src="https://www.youtube.com/embed/-aGISgOB6n0?rel=0&amp;controls=0&amp;showinfo=0&amp;start=0&amp;autoplay=1&amp;loop=1&amp;playlist=-aGISgOB6n0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
                        <iframe width="560" height="315" title="theSigning" src="https://www.youtube.com/embed/95a2KnIWswk?rel=0&amp;controls=0&amp;showinfo=0&amp;start=17&amp;end=19&amp;autoplay=1&amp;loop=1&amp;playlist=95a2KnIWswk&amp;start=17&amp;end=19" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card">
                                <h2>FINAL COUNTDOWN</h2>
                                <img src="https://fsmedia.imgix.net/fd/c7/a5/98/d61f/4184/a8e3/df675a625458/spoooooooky.jpeg" alt="Space" />
                                <h1>Space Package 1</h1>
                                <p className="title">Anti-Gravity Express</p>
                                <div>
                                </div>
                                <p><button>Learn More</button></p>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <h2>FINAL COUNTDOWN</h2>
                                <img src="https://www.vasc.org/wp-content/themes/meridian/video/video-bg.jpg" alt="Space" />
                                <h1>Space Package 2</h1>
                                <p className="title">Atmosphere Exit A</p>
                                <p><button>Learn More</button></p>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <h2>FINAL COUNTDOWN</h2>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8A8QZHGjk_u5VgyMOBinRGdp1CCJ4YFvsC17qCt6KEdjsl2PVIw" alt="Space" />
                                <h1>Space Package 3</h1>
                                <p className="title">Atmosphere Exit B</p>
                                <p><button>Learn More</button></p>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <h2>FINAL COUNTDOWN</h2>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo193kVsvn_oc0HkcSY5OmRM7_8DwQvoHnVHaNDmtqr8WiJ49Zlw" alt="Space" />
                                <h1>Space Package 4</h1>
                                <p className="title">Lunar Slum Lord</p>
                                <p><button>Learn More</button></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }




}

export default Home;



