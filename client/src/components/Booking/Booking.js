import React from "react";
import { Link } from "react-router-dom";
import "./Booking.css"


const Booking = props => (
    <div>
        <div className="video-background">
            <div className="video-foreground">
                {/* <iframe width="560" height="315" title="bookingVideo1" src="https://www.youtube.com/embed/YzMrNFd4oOk?rel=0&amp;controls=0&amp;showinfo=0&amp;start=44&amp;end=289&amp;autoplay=1&mp;mute=1&amp;loop=1&amp;playlist=YzMrNFd4oOk&amp;start=44&amp;end=289" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
                <iframe width="560" height="315" title="bookingVideo2" src="https://www.youtube.com/embed/-aGISgOB6n0?rel=0&amp;controls=0&amp;showinfo=0&amp;start=48&amp;autoplay=1&mp;mute=1&amp;loop=1&amp;playlist=-aGISgOB6n0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
        </div>
    </div>
);

export default Booking;
