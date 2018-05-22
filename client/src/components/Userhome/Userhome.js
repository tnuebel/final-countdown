import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Userhome.css"


class Userhome extends Component {
    render() {
        return (
            <div className="center">
                <h1 className="whiteTxt">User Home</h1>
                {/* <div>
                    <Link to="../Vision">
                        <button type="button" class="btn btn-dark">Dark</button>
                    </Link>
                </div> */}
                <br />
                <div>
                    <a href="https://www.lunarland.com/" class="btn btn-info" role="button" target="_blank">Don't miss the LunarLand Rush - Buy the Moon</a>
                </div>
                <br />
                <div>
                    <a href="https://www.globalstarregistry.com/us" class="btn btn-info" role="button" target="_blank">Name a Star at the Global Star Registry</a>
                </div>
            </div>

        )
    }
}

export default Userhome; 