import React, { Component } from "react";
import withAuth from "./withAuth";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardImgOverlay } from "reactstrap";
import "./Profile.css"


class Profile extends Component {

  state = {
    username: "",
    email: ""
  }

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
  }

  render() {
    return (
      <div className="profile">
        <div className="container Profile">
          <p className="profiletext">Welcome to the future of space travel {this.state.username}</p>
        </div>

        <div className="grow packages">
          <Link to="../Travelpack1">
            <Card>
              <CardImg top src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/moonandmarso.png" alt="Card image cap" />
              <CardBody>
                <CardTitle>Anti-Gravity Express</CardTitle>
                <CardText className="pkgtext">Our Bronze Package gives our clients a truly memorable 2-hour journey where they will experience both G-force and anti-gravity, giving each client the authentic astronaut experience.</CardText>
                <CardText className="pkgtext">
                  <small className="text-muted">Bronze Package</small>
                </CardText>
              </CardBody>
            </Card>
          </Link></div>

        <div className="grow packages">
          <Link to="../Travelpack2">
            <Card>
              <CardImg top src="http://spacenews.com/wp-content/uploads/2017/02/fh-dragon.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Exscape From Earth</CardTitle>
                <CardText className="pkgtext">This journey takes our clients outside the Earth’s atmosphere to the edge of space, at over 350,000 feet, giving the clients close to what would be the full astronaut experience.</CardText>
                <CardText className="pkgtext">
                  <small className="text-muted">Silver Package</small>
                </CardText>
              </CardBody>
            </Card>
          </Link>
        </div>

        <div className="grow packages">
          <Link to="../Travelpack3">
            <Card>
              <CardImg top src="http://gbh.london/media/filer_public/4a/8a/4a8a899c-b1aa-474d-8fe2-97dbbf5d25b3/7virgin-galactic.jpg.pagespeed.ce.ShkWLexyPl.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Fly Me To The Moon</CardTitle>
                <CardText className="pkgtext">A journey to the moon (and back), including a visit to the International Space Station. This is the real deal with real training, real space suits and real spaceships.</CardText>
                <CardText className="pkgtext">
                  <small className="text-muted">Gold Package</small>
                </CardText>
              </CardBody>
            </Card>
          </Link>
        </div>

        <div className="grow packages">
          <Link to="../Travelpack4">
            <Card>
              <CardImg top src="https://vignette.wikia.nocookie.net/finalfantasy/images/7/7a/FFXIV_Lunar_Surface.png/revision/latest?cb=20150718232122" alt="Card image cap" />
              <CardBody>
                <CardTitle>Lunar Land Grab</CardTitle>
                <CardText className="pkgtext">A truly out of this world experience, not only will you fly to the moon and back, but you will also get to leave behind your very own lunar footprints! Also included in the Platinum package is your deed to one acre of the Lunar landscape.</CardText>
                <CardText className="pkgtext">
                  <small className="text-muted">Platinum Package</small>
                </CardText>
              </CardBody>
            </Card>
          </Link>
        </div>

      </div>
    );
  }
}


export default withAuth(Profile);