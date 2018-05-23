import React from 'react';
// import { Link } from 'react-router';
import "./Mission.css"
import { Parallax } from 'react-parallax';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

// const image1 = "https://www.walldevil.com/wallpapers/w02/804274-artwork-astronauts-earth-outer-space-travel.jpg";
const image2 = "https://assets.entrepreneur.com/content/3x2/1300/20171227151824-F9-Launch.jpeg";
// const image3 = "https://i.pinimg.com/originals/f3/d6/5a/f3d65a5a7c75a10f85c6d94b6088c652.jpg";
// const image4 = "https://i.ytimg.com/vi/1mx-BRJM0sA/maxresdefault.jpg";
// const image5 = "https://i.pinimg.com/736x/87/fa/71/87fa712fdbd0425c06a67786ec32cb23--space-travel-space-exploration.jpg";
// const image6 = "https://dallasnews.imgix.net/Space_Shuttle-Last_Stop.jpg";
const image7 = "https://i.pinimg.com/originals/27/94/ea/2794eaad5ef1b51f58244a8c5d868cd8.jpg";
// const image8 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqHhK6KgJHrsHKnXg9G01J1gHB2tM0buHQeXLSzzd7u13KoXU8eA";
// const image9 = "https://cbsnews2.cbsistatic.com/hub/i/2015/02/24/9334e6ac-c7bd-4746-9eea-8fbe10a31ffe/25b042b3bd18f2eba4eb3dcdf47ac778/wilmore-space-selfie-620.jpg";
const image10 = "http://www.abc.net.au/news/image/6810522-3x2-940x627.jpg";

class Mission extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest",
            bodyText: 'This is not really a bird nest.'
        };
    }

    render() {
        return (
            <div className="whiteTxt">
                <div className='tbl'>Mission</div>
                <div className="containerVision">

                    <div className="video-background">
                        <div className="video-foreground">
                            <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ" title="ISS Timelapse" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div style={styles}>

                        {/* <div className='tbl'>Mission</div> */}
                        {/* <br /> */}
                        <div className='tbl'>
                            <p className='pb2'>Our mission at Final Countdown is to offer our clients a truly once in a lifetime experience, giving them a chance to do what was once thought impossible for the average citizen.  Our mission is to explore and inspire just like `MERICA and NASA did in the 60’s and once again re-ignite the imaginations of 7 billion people world-wide.</p>
                        </div>
                        <br />

                        <Parallax bgImage={image7}>
                            <div style={{ height: 800 }}>
                            </div>
                        </Parallax>

                        <p className='pb2'>At The Final Countdown we are driven by our motto, <i>Gradatim Ferociter</i>, or “step by step, ferociously.” Our goal is to upend the space-travel industry and finally make dreams a reality by offering the public several travel packages, each one designed for 100% satisfaction.</p>
                        <br />

                        <Parallax bgImage={image2} strength={-200}>
                            <div style={{ height: 500 }}>
                            </div>
                        </Parallax>

                        <p className='pb2'><strong>Bringing the future of space travel to you, NOW.</strong></p>


                        <Parallax bgImage={image10}>
                            <div style={{ height: 800 }}>
                            </div>
                        </Parallax>

                        <div style={{ height: 50 }}></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Mission;




