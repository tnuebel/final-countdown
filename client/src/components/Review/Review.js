import React, { Component } from 'react';
import './Review.css';
class Review extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card">
                                <h2>Great Experience</h2>
                                <img src="http://www.abc.net.au/news/image/8834718-3x2-940x627.jpg"alt="Space" />
                                <h3>This was truly a great experience and I know great experiences.. can’t wait to go back! Gotta keep the aliens out #buildTheDome</h3>
                                <p className="title">Donald Trump - POTUS</p>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <h2>Better than marriage</h2>
                                <img src="https://i.ytimg.com/vi/Bck2kAaGRWU/maxresdefault.jpg" alt="Space" />
                                <h3>I was going to fund my daughters wedding in Hawaii but I figured the memories from this trip would last longer than than her marriage</h3>
                                <p className="title">Ron - Dallas TX</p>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <h2>Upchuck</h2>
                                <img src="https://i.ytimg.com/vi/6JoawAJwVYg/maxresdefault.jpg" alt="Space" />
                                <h3>Vomit commit lived up to its name.. BARFED everywhere!!! AWESOME!!!</h3>
                                <p className="title">Steve - San Diego CA</p>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <h2>Disapointed</h2>
                                <img src="https://pbs.twimg.com/media/DKxbCKSUIAARteR.jpg" alt="Space" />
                                <h3>Tried going outside without my space suit on and they yelled at me. Will be flying United from now on.</h3>
                                <p className="title">Sue - Kansas MO</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }




}

export default Review;



