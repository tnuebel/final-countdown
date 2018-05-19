import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Userhome.css"


class Userhome extends Component {
    render() {
        return (
            <div>
                <h1 className = "whiteTxt">User Home</h1>

                <Link to="../Vision">
                <button type="button" class="btn btn-dark">Dark</button>
                    </Link>

            </div>

        )
    }
}

export default Userhome; 