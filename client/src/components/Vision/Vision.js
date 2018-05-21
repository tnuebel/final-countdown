import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import "./Vision.css"

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

// const insideStyles = {
//     background: 'white',
//     padding: 20,
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%,-50%)',
//     transform: 'translateX(-50%)'
// };

const image1 = "http://www.whatitcosts.com/wp-content/uploads/2016/04/space-travel-astronaut.jpg";
const image2 = "http://www.spaceflightinsider.com/wp-content/uploads/2016/02/5264-spaceshiptwo-matthew_kuhns.jpg";
const image3 = "https://everydayscience.blog/wp-content/uploads/2018/03/thumb-1920-721612-min-1024x768.jpg";
const image4 = "https://d3lxyuz9vix4su.cloudfront.net/assets/77449bfe-016e-11e8-8ed1-f3f91814dfde_video_1280w.jpg?v=5";

class Vision extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest",
            bodyText: 'This is not really a bird nest.'
        };
    }

    render() {
        return (
            <div className='containerVision'>
            
            <div className='tbl'>Vision</div>

                <div style={styles}>

                    {/* <Hello name="Parallax" /> */}

                    <Parallax bgImage={image1}
                        strength={500}>
                        <div style={{ height: 500 }}>
                            {/* <div style={insideStyles}>HTML inside the parallax</div> */}
                        </div>
                    </Parallax>

                    <div className='vb1'>
                        <h3>A NEW SPACE AGE</h3>
                        <p className='pb1'>We are at the vanguard of a new industry, pioneering the next generation of reusable space vehicles. We aim to transform the current cost, safety and environmental impact of space-launch.</p>
                        <p className='pb1'>In doing so we are helping to create, for the first time, a basic space access infrastructure that will act as an enabler for scientists and entrepreneurs. It will also provide the catalyst for a new age of space exploration which promises enormous positive potential for life on Earth.</p>
                    </div>

                    <Parallax bgImage={image3} /* blur={{ min: -1, max: 3 }} */>
                        <div style={{ height: 800 }}>
                            {/* <div style={insideStyles}>Dynamic Blur</div> */}
                        </div>
                    </Parallax>

                    <p className='pb2'>"We are entering a new space age and I hope this will create a new unity. Space exploration has already been a great unifier, we seem able to cooperate between nations in space in a way we can only envy on Earth."</p>

                    <Parallax bgImage={image2} strength={-200}>
                        <div style={{ height: 500 }}>
                            {/* <div style={insideStyles}>Reverse direction</div> */}
                        </div>
                    </Parallax>
                    <div className='vb1'>
                        <h3>THE FOUNDATIONS OF A NEW INDUSTRY</h3>
                        <p className='pb3'>Our first commercial spaceflights will be of an unprecedented frequency, generating the benefits of rapid learning and improvement. </p>
                        <p className='pb3'>By repeatedly demonstrating high levels of safety, unparalleled customer experience and commercial viability, we will create the conditions for more private sector investment, leading to rapid innovation and expansion. </p>
                        <p className='pb3'>The resulting economies of scale and competing technologies will lead to further downward pressure on the cost of launch – enabling an ever-increasing number of users with diverse, world-changing applications.</p>
                    </div>
                    <Parallax bgImage={image4} strength={-200}>
                        <div style={{ height: 500 }}>
                            {/* <div style={insideStyles}>Reverse direction</div> */}
                        </div>
                    </Parallax>

                    <div style={{ height: 500 }}></div>

                    <h2>{'\u2728'}</h2>
                </div>
            </div>
        )
    }
}

export default Vision; 