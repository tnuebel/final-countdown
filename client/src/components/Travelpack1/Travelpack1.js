// import React, { Component } from 'react';
// import "./Travelpack1.css"
// import { Link } from "react-router-dom";


// class Travelpack1 extends Component {
//     render() {
//         return (
//             <div className="whiteTxt">
//                 <div className="container">
//                     <div className="row">

//                         <div class="col-lg-8 offset-lg-2">


//                             <h2 className="h1"> Bronze Package: The Anti-Gravity Express</h2>
//                             <br />

//                             <p>Our Bronze package gives our clients a truly memorable 2-hour journey where they will experience both G-force and anti-gravity, giving each client the authentic astronaut experience.</p>

//                             <br />

//                             <h3>Package Inclusions:</h3>

//                             <li>15 parabol maneuvers each creating 30 seconds of zero gravity each time.</li>
//                             <li>Digital memorabilia package including professional photos and videos of your experience.</li>
//                             <li>Final Countdown merchandise including a flight suit.</li>
//                             <li>Pre and post flight catering.</li>
//                             <li>Transportation to and from launch facility.</li>

//                             <br />

//                             <p>Cost: $3,750.00/person.</p>
//                             <br />

//                             <p>How it works:</p>

//                             <p>Before starting a parabola in a redesigned commercial aircraft Airbus A350, the pilots fly level to the horizon at an altitude of 24,000 feet. Then, the pilots begin to pull up, climbing to 34,000 feet gradually increasing the angle of the aircraft to about 45°. During this pull-up, passengers will experience G-force of nearly 2 (astronauts experiene 3 G's during a shuttle launch). Next the plane is “pushed over” to create the zero gravity segment of the parabola. For the next 20-30 seconds everything in the plane is weightless. Next a gentle pull-out is started which allows the flyers to stabilize on the aircraft floor. This maneuver is repeated 12-15 times, each taking about ten miles of airspace to perform.</p>
//                             <br />


//                             <Link to="../Payment">
//                                 <button type="button" class="btn btn-secondary btn-lg btn-block">Chase Your Dreams Here</button>
//                             </Link>

//                             <br />


//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )

//     }
// }

// export default Travelpack1; 


import React, { Component } from 'react';
import "./Travelpack1.css"
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



class Travelpack1 extends Component {
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
                <div className='tbl'>Bronze Package: The Anti-Gravity Express</div>
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

                    {/* <div className='vb1'> 
                            <h3>Bronze Package: The Anti-Gravity Express</h3>
                            <br /> */}

                    <div className="whiteTxt">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-8 offset-lg-2 txtShadow">
                                <br />
                                <br />

                                    <h2 className='pb1'>Our Bronze Package gives our clients a truly memorable 2-hour journey where they will experience both G-force and anti-gravity, giving each client the authentic astronaut experience.</h2>

                                    <br />

                                    <h2 className='vb1'>Package Inclusions:</h2>

                                    <li>15 parabol maneuvers each creating 30 seconds of zero gravity each time.</li>
                                    <li>Digital memorabilia package including professional photos and videos of your experience.</li>
                                    <li>Final Countdown merchandise including a flight suit.</li>
                                    <li>Pre and post flight catering.</li>
                                    <li>Transportation to and from launch facility.</li>
                                    <br />

                                    <h5>Cost: $3,750.00/person.</h5>
                                    <br />

                                    <h3>How it works:</h3>

                                    <h3 className='vb1'>Before starting a parabola in a redesigned commercial aircraft Airbus A350, the pilots fly level to the horizon at an altitude of 24,000 feet. Then, the pilots begin to pull up, climbing to 34,000 feet gradually increasing the angle of the aircraft to about 45°. During this pull-up, passengers will experience G-force of nearly 2 (astronauts experiene 3 G's during a shuttle launch). Next the plane is “pushed over” to create the zero gravity segment of the parabola. For the next 20-30 seconds everything in the plane is weightless. Next a gentle pull-out is started which allows the flyers to stabilize on the aircraft floor. This maneuver is repeated 12-15 times, each taking about ten miles of airspace to perform.</h3>
                                    <br />


                                    <Link to="../Payment">
                                        <button type="button" class="btn btn-secondary btn-lg btn-block">Chase Your Dreams Here</button>
                                    </Link>

                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Parallax bgImage={image6} /* blur={{ min: -1, max: 3 }} */>
                        <div style={{ height: 800 }}>
                            {/* <div style={insideStyles}>Dynamic Blur</div> */}
                        </div>
                    </Parallax>

                </div>
            </div>
        )
    }
}

export default Travelpack1; 
