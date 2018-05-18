import React from "react";
import { Link } from "react-router-dom";
import "./Greeting.css";

const Greeting = props => (
    <div>
        <div className="video-background">
            <div className="video-foreground">
                {/* <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ" title="ISS Timelapse" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> */}
                <iframe width="0" height="0" src="https://www.youtube.com/embed/9jK-NcRmVcw?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;start=117" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>  
                <iframe width="560" height="315" title="myIFrame" src="https://www.youtube.com/embed/y-o4ZKyyxMQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&mp;mute=1&amp;loop=1&amp;playlist=y-o4ZKyyxMQ&amp;start=60" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
        </div>
        <div className="pad1">
            <div className="row row-one">
                <div className="col"><a href="/News" className="button outerButtonTopLetf">News</a></div>
                <div className="col-2"><a href="/Purpose" className="button centerButton">Purpose</a></div>
                <div className="col"><a href="/Watch" className="button outerButtonTopRight">Watch</a></div>

            </div>

            <div className="row row-two">
                <div className="col"><a href="Button" className="button">Button</a></div>
                <div className="col"><a href="Button" className="button">Sign In</a></div>
                <div className="col-2"><a href="/Mission" className="button centerButton" >Mission</a></div>
                <div className="col"><a href="/Join" className="button">Join</a></div>
                <div className="col"><a href="/Gallery" className="button">See</a></div>
            </div>

            <div className="row row-three">
                <div className="col"><a href="/Who We Are" className="button outerButtonLetf">Who We Are</a></div>
                <div className="col-2"><a href="/Vision" className="button centerButton">Vision</a></div>
                <div className="col"><a href="/Research Flights" className="button outerButtonRight">Research Flights</a></div>
            </div>
        </div>
    </div>

);

export default Greeting;