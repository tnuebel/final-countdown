import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import "./Future.css"
import { Link } from "react-router-dom";

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};


const image1 = "https://cdn.cnn.com/cnnnext/dam/assets/170915093345-cassini-farwell-02-super-169.jpg";
const image2 = "https://astronomyisawesome.com/wp-content/uploads/2015/11/1920x1200x5-most-beautiful-nebulae.jpeg.pagespeed.ic.za_3DLMLrg.jpg";
const image3 = "https://cdn.history.com/sites/2/2014/02/space-race-H.jpeg";
const image4 = "https://nerdist.com/wp-content/uploads/2017/07/Jupiter-Eye-JunoCam-Picture-Feature-Image-07122017.jpg";
const image5 = "../images/final010.png";
// const image5 = "https://cdn.pixabay.com/photo/2016/10/07/14/39/space-1721679_960_720.jpg";
const image6 = "https://dallasnews.imgix.net/Space_Shuttle-Last_Stop.jpg";
const image7 = "https://i.pinimg.com/originals/27/94/ea/2794eaad5ef1b51f58244a8c5d868cd8.jpg";
const image8 = "https://thumbs-prod.si-cdn.com/F1MA8tcQsfUaQx2VJIALCckgKOc=/800x600/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/00/ac/00acaa36-3745-43c0-82c2-b78b4b0002d0/14h_fm2017_opener_torpor-11_live.jpg";



class Future extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest",
            bodyText: 'This is not really a bird nest.'
        };
    }

    render() {
        return (
            <div className="containerVision">
                <div className='tbl'>The Future of Travel<br />
                    <h1>Vacation Worlds of Exploration</h1>
                </div>
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ" title="ISS Timelapse" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </div>
                <div style={styles}>

                    <Parallax bgImage={image7}
                        strength={200}>
                        <div style={{ height: 250 }}>
                            {/* <div style={insideStyles}>HTML inside the parallax</div> */}
                        </div>
                    </Parallax>


                    <div className="container whiteTxt">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 txtShadow">
                                <h3 className='vb1'>
                                    This is the countdown to the final frontier! We are here now, it's happening today.

                                    We have the ability, the foresight,
                                    spirit and courage to realize your dreams today
and help humankind advance into the future.
                                </h3>
                            </div>
                        </div>
                    </div>

                    <Parallax bgImage={image2}
                        strength={500}>
                        <div style={{ height: 500 }}>
                            {/* <div style={insideStyles}>HTML inside the parallax</div> */}
                        </div>
                    </Parallax>

                    <div className="container whiteTxt">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 txtShadow">
                                <h3 className='vb1'>
                                    Are you ready to be a pioneer, an explorer, an innovator.
                                        Just a single trip ticket will put you in the annals of history.
                                </h3>
                            </div>
                        </div>
                    </div>

                    <Parallax bgImage={image1}
                        strength={500}>
                        <div style={{ height: 500 }}>
                            {/* <div style={insideStyles}>HTML inside the parallax</div> */}
                        </div>
                    </Parallax>

                    <div className="container whiteTxt">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 txtShadow">
                                <h3 className='vb1'>

                                    Not just a vacation. This is the begining of a new global vision for every individual as a whole. Together we become as one.
    
                                </h3>
                            </div>
                        </div>
                    </div>

                    <Parallax bgImage={image4}
                        strength={500}>
                        <div style={{ height: 500 }}>
                            {/* <div style={insideStyles}>HTML inside the parallax</div> */}
                        </div>
                    </Parallax>

                    <div className="container whiteTxt">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 txtShadow">
                                <h3 className='vb1'>
                                    The commercialization of space is inevitable. This won't be easy but nothing worth it is. To explore, to ask questions, to ask why and journey toward those answers is part of what we are as humans.
                                </h3>
                            </div>
                        </div>
                    </div>

                    <Parallax bgImage={image8}
                        strength={200}>
                        <div style={{ height: 650 }}>
                            {/* <div style={insideStyles}>HTML inside the parallax</div> */}
                        </div>
                    </Parallax>

                    <div className="container whiteTxt">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 txtShadow">
                                <h3 className='vb1'>
                                    What better way to understand the value of life than to venture beyond the limits of our world than to experience what will be a truely unifying experience
                                </h3>
                            </div>
                        </div>
                    </div>


                    <Parallax bgImage={image5}
                        strength={0}>
                        <div style={{ height: 800 }}>
                            {/* <div style={insideStyles}>HTML inside the parallax</div> */}
                        </div>
                    </Parallax>

                    <div className="container whiteTxt">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 txtShadow">
                                <h3 className='vb1'>
                                    How grand and spectacular it will be to see the rise of worlds from a new perspective that we may call home. Come Join Us!
                                    </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Future; 