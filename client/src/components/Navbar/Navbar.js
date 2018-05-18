import React from 'react';
import "./Navbar.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar className="nav" color="faded" dark>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" id="navButton"/>
          <NavbarBrand href="/" className="mr-auto">
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/or55UctPW4w?rel=0&amp;controls=0&amp;showinfo=0&amp;start=8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
            {/* <img src="http://www.esa.int/var/esa/storage/images/esa_multimedia/videos/2016/04/the_many_faces_of_earth/15949902-1-eng-GB/The_many_faces_of_Earth_video_production_full.png" width="55" height="35" className="rounded-circle" /> */}
            Final Countdown
          </NavbarBrand>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="navButton">
              <NavItem id="navpieces">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/About">About</NavLink>
                <NavLink href="/Booking">Booking</NavLink>
                <NavLink href="/Contact">Contact</NavLink>
                <NavLink href="/Gallery">Gallery</NavLink>
                <NavLink href="/Mission">Mission</NavLink>
                <NavLink href="/Home">Sign In</NavLink>
                <NavLink href="/Vision">Vision</NavLink>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

