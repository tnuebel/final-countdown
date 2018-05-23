import React, { Component } from 'react';
import "./Travelpack3.css"
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};


// const image1 = "https://www.walldevil.com/wallpapers/w02/804274-artwork-astronauts-earth-outer-space-travel.jpg";
// const image2 = "https://assets.entrepreneur.com/content/3x2/1300/20171227151824-F9-Launch.jpeg";
// const image3 = "https://i.pinimg.com/originals/f3/d6/5a/f3d65a5a7c75a10f85c6d94b6088c652.jpg";
// const image4 = "https://i.ytimg.com/vi/1mx-BRJM0sA/maxresdefault.jpg";
// const image5 = "https://i.pinimg.com/736x/87/fa/71/87fa712fdbd0425c06a67786ec32cb23--space-travel-space-exploration.jpg";
// const image6 = "https://dallasnews.imgix.net/Space_Shuttle-Last_Stop.jpg";
const image7 = "https://i.pinimg.com/originals/27/94/ea/2794eaad5ef1b51f58244a8c5d868cd8.jpg";
// const image8 = "https://static.guim.co.uk/sys-images/Guardian/Pix/maps_and_graphs/2010/2/1/1265021443011/Buzz-Aldrin-on-moon-001.jpg";
const image9 = "http://ste.india.com/sites/default/files/2018/02/12/659947-astronuats.jpg";


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
                {/* <br /> */}
                <div className='tbl'>Gold Package: Fly Me To The Moon!</div>
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ" title="ISS Timelapse" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </div>
                <div style={styles}>

                    <Parallax bgImage={image7}
                        strength={500}>
                        <div style={{ height: 750 }}>
                        </div>
                    </Parallax>


                    <div className="whiteTxt">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-8 offset-lg-2 txtShadow">


                                    <h2 className='pb1'>Our Gold package was designed with every person’s childhood dream in mind; A journey to the moon (and back), including a visit to the International Space Station. This is the real deal with real training, real space suits and real spaceships.  For those who dare to dream, who live for adventure, and who has the financial means for the experience of a lifetime, THIS IS FOR YOU!.</h2>
                                    <br />

                                    <h2 className='vb1'>Package Inclusions:</h2>

                                    <h5><li>5 day travel package to the moon and back.</li></h5>
                                    <h5><li>A two-night stay at the International Space Station.</li></h5>
                                    <h5><li>1 month of astronaut training.</li></h5>
                                    <h5><li>Digital memorabilia package (movies, pictures).</li></h5>
                                    <h5><li>Pre/post launch transportation to and from launch location.</li></h5>
                                    <h5><li>Post re-entry celebration.</li></h5>
                                    <br />

                                    <h5>Cost: $7,500,000.00/person.</h5>
                                    <br />
                                    <br />

                                    <h3>How We Do It:</h3>

                                    <h3>For this extended trip to the moon and back, each client must first complete one month of astronaut training, then after completion, our clients will be launched into space inside a capsule aboard SpaceX’s rocket, just like the Apollo mission.  After a successful launch, their first stop will be a two day visit to the International Space Station and then off to the final destination, the moon. After five glorious days of taking in all that space has to offer, they will re-enter the Earth’s atmosphere after the experience of a lifetime!</h3>
                                    <br />

                                    <Link to="../Payment">
                                        <button type="button" class="btn btn-secondary btn-lg btn-block">Chase Your Dreams Here</button>
                                    </Link>
                                    <br />

                                </div>
                            </div>
                         
                        </div>
                        <Parallax bgImage={image9}>
                                <div style={{ height: 750 }}>
                                </div>
                            </Parallax>
                    </div>
                </div>

            </div>

        )
    }
}

export default Travelpack3; 