import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
  <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h4 class="text-white">Collapsed content</h4>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
);

export default Navbar;

// <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
{/* <!-- Brand --> */}
{/* <a className="navbar-brand" href="/">The Final Count Down</a> */}

{/* <!-- Toggler/collapsibe Button --> */}
{/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <span className="navbar-toggler-icon"></span>
</button> */}

{/* <!-- Navbar links --> */}
{/* <div className="collapse navbar-collapse" id="collapsibleNavbar">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="/Purpose">Purpose</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/Mission">Mission</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/Vis">Vision</a>
    </li>
  </ul>
</div> */}
// </nav>
