
import React, { Component } from 'react';
import "./About.css"
import { Parallax } from 'react-parallax';


const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

// const image1 = "http://www.latimes.com/resizer/7AJr7VUeQhbrbeK1buHTyLx_0VI=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/ERCTK47G3VG7LENFXRUB7FM4FY.jpg";
const image2 = "https://cbsnews2.cbsistatic.com/hub/i/r/2016/08/01/2086746a-139a-4e23-8ea0-b744060456f7/thumbnail/620x350/daefd226710f1a80ea95d0e475b6b23a/160727-apollo17-02.jpg";
// const image3 = "https://static.guim.co.uk/sys-images/Guardian/Pix/maps_and_graphs/2010/2/1/1265021443011/Buzz-Aldrin-on-moon-001.jpg";
const image4 = "http://californiablog.org/sites/default/files/articles/astronauts.jpg";
const image5 =
    "https://orion-uploads.openroadmedia.com/lg_6f0eb47444d3-space-travel-books_featured.jpg";

class About extends Component {

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
                <div className="tbl">About Us</div>

                <div className="containerVision">
                    <div className="video-background">
                        <div className="video-foreground">
                            <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ" title="ISS Timelapse" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div style={styles}>

                        <p className='pb2'>The Final Countdown is an adventure company, not a travel agency.  Established in 2018, the founders of The Final Countdown all shared a quest for adventure and exploration. Our goal is to inspire others who share our passion, so we joined forces and are working harder than ever to turn your dreams into reality.</p>
                        <br />
                        <Parallax bgImage={image2} strength={-200}>
                            <div style={{ height: 750 }}>
                            </div>
                        </Parallax>

                        <p className='pb2'>We have partnered up with the most innovative companies the space-travel industry has to offer, giving you the chance to experience something amazing, from the feeling of floating in space, to staying at the International Space Station, or even better, a trip to the moon complete with a moon-walk and a chance to add your name to the history books.</p>
                        <br />
                        <Parallax bgImage={image4} strength={-200}>
                            <div style={{ height: 500 }}>
                            </div>
                        </Parallax>

                        <p className='pb2'>At The Final Countdown, although we sell dreams and adventure, nothing is more important to us than the safety and well-being of each of our clients.  We have worked side by side with the FAA to ensure the quality and safety of our services receive an A+.  We look forward to bringing you the exciting option of space travel.</p>
                        <br />
                        <Parallax bgImage={image5} strength={-200}>
                            <div style={{ height: 500 }}>
                            </div>
                        </Parallax>
                        <div style={{ height: 50 }}>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About; 