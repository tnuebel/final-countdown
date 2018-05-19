import React, { Component } from 'react';
import "./Travelpack2.css"
import { Link } from "react-router-dom";


class Travelpack2 extends Component {
    render() {
        return (
            <div className="whiteTxt">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 offset-lg-2">


                            <h2 className="h1">Silver Package: Atmosphere Exit</h2>
                            <br />

                            <p>Our Silver package takes our Bronze package and straps rockets on it, literally.  This journey takes our clients outside the Earth’s atmosphere to the edge of space, at over 350,000 feet.  This flight takes place on a smaller aircraft not designed for long-duration missions, giving the clients close to what would be the full astronaut experience.</p>
                            <br />

                            <h3>Package Inclusions:</h3>

                            <li>A 3-hour trip to edge of the Earth’s atmosphere.</li>
                            <li>Training: 3 days of astronaut training.</li>
                            <li>Pre/post launch transportation.</li>
                            <li>Atmospheric space tour (3 hours).</li>
                            <li>Post re-entry celebration.</li>

                            <br />

                            <p>Cost: $250,000.00/person.</p>

                            <br />

                            <h3>How it works:</h3>

                            <p>Space ship <strong>"Kiss My Grits"</strong> is lofted to 50,000 feet, then released by a carrier aircraft.  After separation, DDDDD fires its rocket engine for 70 seconds, accelerating to 2,500mph, then the rockets are shut down and the craft continues to climb past 328,000 feet where passengers are considered astronauts.  The craft reaches its highest altitude at 361,000 feet where the clients experience five minutes of weightlessness.  The aircraft then re-enters the Earth’s atmosphere and finally performs a conventional landing on a runway.</p>
                            <br />

<Link to="../Payment">
                                <button type="button" class="btn btn-secondary btn-lg btn-block">Chase Your Dreams Here</button>
                            </Link>
                            <br />

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Travelpack2; 