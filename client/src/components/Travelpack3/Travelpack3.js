import React, { Component } from 'react';
import "./Travelpack3.css"
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};


const image1 = "https://www.walldevil.com/wallpapers/w02/804274-artwork-astronauts-earth-outer-space-travel.jpg";
const image2 = "https://assets.entrepreneur.com/content/3x2/1300/20171227151824-F9-Launch.jpeg";
const image3 = "https://i.pinimg.com/originals/f3/d6/5a/f3d65a5a7c75a10f85c6d94b6088c652.jpg";
const image4 = "https://i.ytimg.com/vi/1mx-BRJM0sA/maxresdefault.jpg";
const image5 = "https://i.pinimg.com/736x/87/fa/71/87fa712fdbd0425c06a67786ec32cb23--space-travel-space-exploration.jpg";
const image6 = "https://dallasnews.imgix.net/Space_Shuttle-Last_Stop.jpg";
const image7 = "https://i.pinimg.com/originals/27/94/ea/2794eaad5ef1b51f58244a8c5d868cd8.jpg";
const image8 = "https://static.guim.co.uk/sys-images/Guardian/Pix/maps_and_graphs/2010/2/1/1265021443011/Buzz-Aldrin-on-moon-001.jpg";



class Travelpack3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest",
            bodyText: 'This is not really a bird nest.'
        };
    }


    render() {
        return (
            <div className="containerVision">
            <br />
                <div className='tbl'>Gold Package: Fly Me To The Moon!</div>
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ" title="ISS Timelapse" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </div>
                <div style={styles}>

                    <Parallax bgImage={image7}
                        strength={500}>
                        <div style={{ height: 500 }}>
                            {/* <div style={insideStyles}>HTML inside the parallax</div> */}
                        </div>
                    </Parallax>


                    <div className="whiteTxt">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-8 offset-lg-2 txtShadow">


                                    <h2 className='pb1'>Our Gold package was designed with every person’s childhood dream in mind: A journey to the moon (and back), including a visit to the International Space Station. This is the real deal with real training, real space suits and real spaceships.  For those who dare to dream, who live for adventure, and who has the financial means for the experience of a lifetime, THIS IS FOR YOU!.</h2>
                                    <br />

                                    <h2 className='vb1'>Package Inclusions:</h2>

                                    <li>5 day travel package to the moon and back.</li>
                                    <li>An overnight stay at the International Space Station.</li>
                                    <li>1 month of astronaut training.</li>
                                    <li>Digital memorabilia package (movies, pictures).</li>
                                    <li>Pre/post launch transportation to and from launch location.</li>
                                    <li>Post re-entry celebration.</li>

                                    <br />

                                    <h5>Cost: $7,500,000.00/herson.</h5>

                                    <br />

                                    <h3>How it works:</h3>

                                    <h3 className='vb1'>Before starting a parabola, the pilots fly level to the horizon at an altitude of 24,000 feet. The pilots then begins to pull up, gradually increasing the angle of the aircraft to about 45° to the horizon reaching an altitude of 34,000 feet. During this pull-up, passengers will feel the pull of 1.8 Gs. Next the plane is “pushed over” to create the zero gravity segment of the parabola. For the next 20-30 seconds everything in the plane is weightless. Next a gentle pull-out is started which allows the flyers to stabilize on the aircraft floor. This maneuver is repeated 12-15 times, each taking about ten miles of airspace to perform.</h3>
                                    <br />

                                    <Link to="../Payment">
                                        <button type="button" class="btn btn-secondary btn-lg btn-block">Chase Your Dreams Here</button>
                                    </Link>
                                    <br />

                                </div>
                            </div>
                            <Parallax bgImage={image8} /* blur={{ min: -1, max: 3 }} */>
                                <div style={{ height: 800 }}>
                                    {/* <div style={insideStyles}>Dynamic Blur</div> */}
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Travelpack3; 