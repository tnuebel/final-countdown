import React from 'react';
// import { Link } from 'react-router';
import "./Mission.css"

class Mission extends React.Component {
    render() {
        return (
            <div className="whiteTxt">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 offset-lg-2">
                        <br />
                        <h2 className="h1">Our Mission at The Final Countdown</h2>
                        <br />
                        <br />

                            {/* <h3>Mission Statement:</h3> */}
                            <br />

                            <p>Our mission at Final Countdown is to offer our clients a truly once in a lifetime experience, giving them a chance to do what was once thought impossible for the average citizen.  Our mission is to explore and inspire just like `MERICA and NASA did in the 60’s and once again re-ignite the imaginations of 7 billion people world-wide.</p>
                            <br />
                            <p>At The Final Countdown we are driven by our motto, <i>Gradatim Ferociter</i>, or “step by step, ferociously.” Our goal is to upend the space-travel industry and finally make dreams a reality by offering the public several travel packages, each one designed for 100% satisfaction.</p>

                            <p><strong>Bringing the future of space travel to you, NOW.</strong></p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mission;




