import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import "./Gallery.css"

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};
const insideStyles = {
    background: 'white',
    padding: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
};

const image1 = "http://www.whatitcosts.com/wp-content/uploads/2016/04/space-travel-astronaut.jpg";
const image2 = "http://spacefeelings.com/images/space-pictures-first-days-exploration-feelings-1.jpg";
const image3 = "https://everydayscience.blog/wp-content/uploads/2018/03/thumb-1920-721612-min-1024x768.jpg";
const image4 = "https://robbreportedit.files.wordpress.com/2018/04/captive_carry_vc01.jpg?w=1000";
const image5 = "../../images/spacex-falcon-heavy-11-1068x601.jpg";

class Gallery extends Component {
    render() {
        return (
            <div style={styles}>

                {/* <Hello name="Parallax" /> */}

                <Parallax bgImage={image1}
                    strength={500}>
                    <div style={{ height: 500 }}>
                        <div style={insideStyles}>HTML inside the parallax</div>
                    </div>
                </Parallax>

                <h1>| | |</h1>

                <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
                    <div style={{ height: 500 }}>
                        <div style={insideStyles}>Dynamic Blur</div>
                    </div>
                </Parallax>

                <h1>| | |</h1>

                <Parallax bgImage={image2} strength={-100}>
                    <div style={{ height: 500 }}>
                        <div style={insideStyles}>Reverse direction</div>
                    </div>
                </Parallax>

                <h1>| | |</h1>

                <Parallax bgImage={image4}
                    strength={500}>
                    <div style={{ height: 500 }}>
                        <div style={insideStyles}>HTML inside the parallax</div>
                    </div>
                </Parallax>

                <h1>| | |</h1>

                <Parallax bgImage={image5}
                    strength={500}>
                    <div style={{ height: 500 }}>
                        <div style={insideStyles}>HTML inside the parallax</div>
                    </div>
                </Parallax>

                <div style={{ height: 500 }}></div>

                <h2>{'\u2728'}</h2>
            </div>
        )
    }
}

export default Gallery; 