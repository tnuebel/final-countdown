import React, { Component } from 'react';
import "./Travelpack4.css"
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
// const image7 = "https://i.pinimg.com/originals/27/94/ea/2794eaad5ef1b51f58244a8c5d868cd8.jpg";
const image7 =
"http://3snpdc2ba9m5uwuk62n8cs84-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/above-ground-cam-14-ad-1024x576.jpg";
// const image8 = "https://static.guim.co.uk/sys-images/Guardian/Pix/maps_and_graphs/2010/2/1/1265021443011/Buzz-Aldrin-on-moon-001.jpg";
const image9 = "https://i.imgur.com/HaZ6Fj8.jpg";



class Travelpack4 extends Component {
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
                <div className='tbl'>Platinum Package: Lunar Slumlord</div>
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ" title="ISS Timelapse" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </div>
                <div style={styles}>

                    <Parallax bgImage={image7}
                        strength={500}>
                        <div style={{ height: 550 }}>
                        </div>
                    </Parallax>

                    <div className="whiteTxt">
                        <div className="container">
                            <div className="row">


                                <div className="col-lg-8 offset-lg-2 txtShadow">
   
                                    <h2 className='pb1'>Our Platinum Package offers a truly out of this world experience:  The first stop will be at the International Space Station, which includes a two night stay before our next stop to the moon.  And what trip to the moon would be complete without a moon-walk?!  Yes, that’s right, not only will you fly to the moon and back, but you will also get to leave behind your very own lunar footprints!  Also included in the Platinum package is your deed to one acre of the Lunar landscape, as well as naming your own star. </h2>
                                    <br />

                                    <h2 className='vb1'>Package Inclusions:</h2>

                                    <h5><li>8 day travel package to the moon and back.</li></h5>
                                    <h5><li>2  nights’ stay at the International Space Station.</li></h5>
                                    <h5><li>2 nights’ stay in a lunar-pod on the moon.</li></h5>
                                    <h5><li>1 month of astronaut training.</li></h5>
                                    <h5><li>Digital memorabilia package (movies, pictures).</li></h5>
                                    <h5><li>Pre/post launch transportation to and from launch location.</li></h5>
                                    <h5><li>Post re-entry celebration.</li></h5>

                                    <br />

                                    <h5>Cost: $15,000,000.00/person.</h5>
                                    <br />
                                    <br />

                                    <h3>How We Do It:</h3>

                                    <h3>For this extended trip to the moon and back, each client must first complete one month of astronaut training, then, after completion, they will be launched to the moon in a capsule aboard a SpaceX rocket, just like in the Apollo days.  After a successful launch, they will embark on a three day visit to the International Space Station and then off to the final destination, the moon.  After landing on the moon they will have the opportunity to complete their very own moon-walk, where they will also get to visit the lunar land they just purchased.  After two days on the moon and a full week of taking in all that space has to offer, they will re-enter the Earth’s atmosphere after experiencing truly the vacation of a lifetime!</h3>
                                    <br />

                                    <Link to="../Payment">
                                        <button type="button" class="btn btn-secondary btn-lg btn-block">Chase Your Dreams Here</button>
                                    </Link>
                                    <br />


                                </div>
                            </div>
                        </div>
                    </div>
                    <Parallax bgImage={image9}>
                        <div style={{ height: 800 }}>
                        </div>
                    </Parallax>
                </div>
            </div>


        )
    }
}

export default Travelpack4; 