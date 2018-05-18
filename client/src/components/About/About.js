import React, { Component } from 'react';
import "./About.css"


class About extends Component {
    render() {
        return (
            <div className="whiteTxt">
                <div className="container">
                    <div className="row">

                        <h1>Who We Are At The Final Countdown.</h1>
                        <br />

                        <div className="col-lg-8">
                            <p>The Final Countdown is an adventure company, not a travel agency.  Founded in 2018, the founders of The Final Countdown all shared a quest for adventure and exploration, and we wanted to inspire others to share this passion, so we joined forces and are now working harder than ever to turn dreams into reality.</p>

                            <p>The Final Countdown has partnered up with the most exciting companies the space-travel industry has to offer, from giving you the chance to experience the amazing feeling of floating in space, or staying the International Space Station, or even better, a trip to the moon complete with a moon-walk and a chance to write your name in history.</p>

                            <p>At The Final Countdown, although we sell dreams and adventure, nothing is more important to us than our client’s safety and well-being.  We have worked side by side with the FAA to ensure the quality and safety of our services receive an A+.  We look forward to bringing the exciting option of space travel to the public.</p>


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
