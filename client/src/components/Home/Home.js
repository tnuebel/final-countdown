import React, { Component } from 'react';
import './Home.css';
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

// import './Payment'
// import Wrapper from "./Components/Wrapper"

class Home extends Component {
    render() {
         return (
            <div>
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



