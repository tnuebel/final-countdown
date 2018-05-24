import React from 'react';
import "./Contact.css"


const Contact = props => (
    <div>
        <div className='tbl'>Contact</div>

        <div className="video-background">
            <div className="video-foreground">
                <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ" title="ISS Timelapse" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
        </div>

        <h1 style={{ color: "white", textAlign:"center" }}>Because we are a small start-up company we dont have a physical address at this time.</h1>
        <h3 style={{ color: "white", textAlign:"center" }}>Please forward all questions, comments or concerns to <a href="#" class="whiteTxt" role="button"> info@finalcountdown.com</a></h3>

    </div>

);

export default Contact;
