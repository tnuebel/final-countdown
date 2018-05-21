import React, { Component } from 'react';
import "./About.css"


class About extends Component {
    render() {
        return (
            <div className="whiteTxt">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 offset-lg-2">
                        <br />

                        <h2 className="h1">Who We Are At The Final Countdown.</h2>
                        <br />

                            <p>The Final Countdown is an adventure company, not a travel agency.  Established in 2018, the founders of The Final Countdown all shared a quest for adventure and exploration, and we hope to inspire others who share our passion, we joined forces and are working harder than ever to turn your dreams into reality.</p>

                            <p>We have partnered up with the most innovative companies the space-travel industry has to offer, giving you the chance to experience the amazing feeling of floating in space, to staying at the International Space Station, or even better, a trip to the moon complete with a moon-walk and a chance to add your name to the history books.</p>

                            <p>At The Final Countdown, although we sell dreams and adventure, nothing is more important to us than the safety and well-being of each of our clients.  We have worked side by side with the FAA to ensure the quality and safety of our services receive an A+.  We look forward to bringing you the exciting option of space travel.</p>


                        </div>
                    </div>
                </div>
            {/* <div className="video-background">
            <div className="video-foreground">
                <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ" title="ISS Timelapse" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div> */}
        </div>
        )
    }
}

export default About; 
