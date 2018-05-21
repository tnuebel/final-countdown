import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import "./Gallery.css"
// import { url } from 'inspector';

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

const image1 = "https://media.wired.com/photos/59ce53a8f9ee8f40795b110e/master/pass/GettyImages-855377428.jpg";
const image2 = "https://socialunderground.com/wp-content/uploads/2016/06/JUPITER_proccessed_image.jpg";
const image3 = "https://everydayscience.blog/wp-content/uploads/2018/03/thumb-1920-721612-min-1024x768.jpg";
const image4 = "https://image.shutterstock.com/image-photo/two-astronauts-space-suits-confidently-260nw-1049625908.jpg";
const image5 = "https://wallscover.com/images/spaceport-wallpaper-3.jpg";


class Gallery extends Component {
    render() {
        return (
            <div style={styles}>
                <div className='tbl'>Gallery</div>

                {/* <Hello name="Parallax" /> */}

                <Parallax bgImage={image1}
                    strength={500}>
                    <div style={{ height: 500 }}>
                        {/* <div style={insideStyles}>HTML inside the parallax</div> */}
                    </div>
                </Parallax>

                <h1>| | |</h1>

                <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
                    <div style={{ height: 500 }}>
                        {/* <div style={insideStyles}>Dynamic Blur</div> */}
                    </div>
                </Parallax>

                <h1>| | |</h1>

                <Parallax bgImage={image2} strength={-100}>
                    <div style={{ height: 500 }}>
                        {/* <div style={insideStyles}>Reverse direction</div> */}
                    </div>
                </Parallax>

                <h1>| | |</h1>

                <Parallax bgImage={image4}
                    strength={500}>
                    <div style={{ height: 500 }}>
                        {/* <div style={insideStyles}>HTML inside the parallax</div> */}
                    </div>
                </Parallax>

                <h1>| | |</h1>

                <Parallax bgImage={image5}
                    strength={750}>
                    <div style={{ height: 500 }}>
                        {/* <div style={insideStyles}>HTML inside the parallax</div> */}
                    </div>
                </Parallax>

                <div style={{ height: 500 }}></div>

                <h2>{'\u2728'}</h2>
            </div>
        )
    }
}

export default Gallery; 