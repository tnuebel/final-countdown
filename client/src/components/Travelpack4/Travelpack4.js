import React, { Component } from 'react';
import "./Travelpack4.css"
import { Link } from "react-router-dom";


class Travelpack4 extends Component {
    render() {
        return (
            <div className="whiteTxt">
                <div className="container">
                    <div className="row">


                        <div className="col-lg-8 offset-lg-2">
                        <br />

                        <h2 className="h1">Platinum Package: Lunar Slumlord</h2>
                        <br />

                            <p>Our Platinum Package offers a truly out of this world experience:  The first stop will be at the International Space Station, which includes a two night stay before our next stop to the moon.  And what trip to the moon would be complete without a moon-walk?!  Yes, that’s right, not only will you fly to the moon and back, but you will also get to leave behind your very own lunar footprints!  Also included in the Platinum package is your deed to one acre of the Lunar landscape, as well as naming your own star. </p>
                            <br />

                            <h3>Package Inclusions:</h3>

                            <li>8 day travel package to the moon and back.</li>
                            <li>2  nights’ stay at the International Space Station.</li>
                            <li>2 nights’ stay in a lunar-pod on the moon.</li>
                            <li>1 month of astronaut training.</li>
                            <li>Digital memorabilia package (movies, pictures).</li>
                            <li>Pre/post launch transportation to and from launch location.</li>
                            <li>Post re-entry celebration.</li>

                            <br />

                            <p>Cost: $15,000,000.00/person.</p>

                            <br />

                            <h3>How it works:</h3>

                            <p>For this extended trip to the moon and back, each client must first complete one month of astronaut training, then, after completion, our clients will be launched to the moon in a capsule aboard SpaceX’s rocket, just like in the Apollo days.  After a successful launch, their first stop will be a three day visit to the International Space Station and then off to the final destination, the moon.  They will land on the moon and have the opportunity to complete their very own moon-walk, where they will get to visit the lunar real estate they just purchased.  After two days on the moon and a full week of taking in all that space has to offer, they will re-enter the Earth’s atmosphere after experiencing truly the vacation of a lifetime!</p>
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

export default Travelpack4; 