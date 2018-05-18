import React, { Component } from 'react';
import "./About.css"


class About extends Component {
    render() {
        return (
            <div className="video-background">
            <div className="video-foreground">
                <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ" title="ISS Timelapse" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
        </div>
        )
    }
}

export default About; 