import React from "react";
import { Link } from "react-router-dom";
import Title from "../Title";
import Gallery from "../icons/Gallery-36.png";
import Join from "../icons/Join-36.png";
import News from "../icons/News-36.png";
import See from "../icons/See-36.png";
import SignIn from "../icons/Sign-in-36.png";
import Watch from "../icons/Watch-36.png";
import "./Greeting.css";

const Greeting = props => (
    <div>
        <Title />

        <div className="video-background">
            <div className="video-foreground">
                <iframe width="0" height="0" title="themeSong" src="https://www.youtube.com/embed/9jK-NcRmVcw?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;start=117" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                <iframe width="560" height="315" title="myIFrame" src="https://www.youtube.com/embed/y-o4ZKyyxMQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&mp;mute=1&amp;loop=1&amp;playlist=y-o4ZKyyxMQ&amp;start=60" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
        </div>

        <div className="pad1">
            <div className="row row-one">
                <div className="col-sm">
                    <a href="https://www.space.com/news" className="button outerButtonTopLetf">
                        <img src={News} alt="news" /><br />News</a>
                </div>

                <div className="col-sm-3"><a href="/Future" className="button centerButton"><span>Future</span><br /><span className="comment">WHY WE GO</span></a></div>

                <div className="col-sm"><a href="/Booking" className="button outerButtonTopRight">
                    <img src={Watch} alt="watch" /><br />Watch</a></div>
            </div>

            <div className="row row-two">
                <div className="col-sm">
                    <a href="Gallery" className="button">
                        <img src={Gallery} alt="gallery" /><br />Gallery</a></div>

                <div className="col-sm">
                    <a href="/Login" className="button">
                        <img src={SignIn} alt="sign" /><br />Sign In</a></div>

                <div className="col-sm-3">
                    <Link to="/Mission" className="button centerButton" >
                        <span>Mission</span><br /><span className="comment">WHAT WE DO</span></Link></div>

                <div className="col-sm"><a href="/Signup" className="button">
                    <img src={Join} alt="join" /><br />Join</a></div>

                <div className="col-sm"><a href="/Review" className="button">
                    <img src={See} alt="see" /><br />Reviews </a></div>
            </div>

            <div className="row row-three">
                <div className="col-sm"><a href="/About" className="button outerButtonLetf">Who We Are</a></div>
                <div className="col-sm-3"><a href="/Vision" className="button centerButton"><span>Vision</span><br /><span className="comment">WHERE WE ARE HEADING</span></a></div>
                <div className="col-sm"><a href="/Launchdates" className="button outerButtonRight">Research Flights</a></div>
            </div>

        </div>
        <footer>
            <div className="row ftr1">
                <div className="col"><img width="25" height="25" alt="twitter" src="https://www.iconsdb.com/icons/preview/white/twitter-xxl.png" /></div>
                <div className="col"><img width="25" height="25" alt="facebook" src="https://www.iconsdb.com/icons/preview/white/facebook-xxl.png" /></div>
                <div className="col"><img width="25" height="25" alt="instagram" src="https://www.iconsdb.com/icons/preview/white/instagram-xxl.png" /></div>
                <div className="col"><img width="25" height="25" alt="youtube" src="https://www.iconsdb.com/icons/preview/white/youtube-xxl.png" /></div>
                <div className="col"><img width="25" height="25" alt="youtube" src="https://www.iconsdb.com/icons/preview/white/github-6-xxl.png" /></div>
            </div>
        </footer>
    </div>

);

export default Greeting;