import React from 'react';
import { Link } from 'react-router';
import "./Mission.css"


// const Mission = props => (

// );

class Mission extends React.Component {
    render() {
        return (
            <div className="whiteTxt">
                <div className="container">
                    <div className="row">

                        <h1>The Final Countdown's Mission</h1>
                        <br />

                        <div class="col-lg-8">

                            <h3>Mission Statement:</h3>

                            <p>At The Final Countdown we are driven by our motto, Gradatim Ferociter, or “step by step, ferociously.”  We are an adventure company, not a travel agency.  Founded in 2018, our goal was to upend the space-travel industry and finally make dreams a reality by offering the public several travel packages, each one designed for 100% satisfaction.</p>

                            <p>Our mission at Final Countdown is to offer our clients a truly once in a lifetime experience, giving them a chance to do what was once thought impossible for the average citizen.  Our mission is to explore and inspire just like US and NASA did in the 60’s and once again re-ignite the imaginations of 7 billion people world-wide.</p>

                            <p><strong>Bringing the future of space travel to you, NOW.</strong></p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mission;




