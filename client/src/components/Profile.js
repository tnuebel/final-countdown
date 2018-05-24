import React, { Component } from "react";
import withAuth from "./withAuth";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { CardDeck, Card, CardImg, CardText, CardBody, CardTitle, Col, /* CardImgOverlay */} from "reactstrap";
import "./Profile.css"
import Wrapper from "./Wrapper";


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
      <Wrapper>
        <img id="background1" src={require('../components/Image/station/Space-Station-Viewing-Window.jpg')} alt=""/>

        <div className="row profile">
          <div className="container Profile">
            <p className="profiletext">Welcome to the future of space travel {this.state.username}</p>
          </div>

          <CardDeck>
            <Col>.col</Col>
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
              </Link></div>

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
              </Link></div>

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
              </Link></div>
          </CardDeck>
        </div>

        <div className="row profile">
        </div>

        <div className="row profile">
          <Col>.col</Col>
          <CardDeck>

            <div className="grow packages">
              <Link to="../lunarland">
                <Card>
                  <CardImg top src="https://www.lunarland.com/media/wysiwyg/lunarland/lunar-banner-sm_1.png" alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Lunar Land Purchase</CardTitle>
                    <CardText className="pkgtext">
                      <small className="text">www.lunarland.com</small>
                    </CardText>

                  </CardBody>
                </Card>
              </Link></div>

            <div className="grow packages">
              <Link to="../Starman">
                <Card>
                  <CardImg top src="https://images.theconversation.com/files/208104/original/file-20180227-36674-a74733.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip" alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Tesla in Space</CardTitle>
                    <CardText className="pkgtext">
                      <small className="text">www.youtube.com</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Link></div>

            <div className="grow packages">
              <Link to="../Nameastar">
                <Card>
                  <CardImg top src="http://chicagopolicyreview.org/wp-content/uploads/2016/04/space-4.1-CPR.jpg" alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Name A Star</CardTitle>
                    <CardText className="pkgtext">
                      <small className="text">www.globalstarregistry.com</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Link></div>

          </CardDeck>
          <Col>.col</Col>

        </div>

        <footer>
          <div className="row ftr1">
            <div className="col"><img width="25" height="25" alt="twitter" src="https://www.iconsdb.com/icons/preview/white/twitter-xxl.png" /></div>
            <div className="col"><img width="25" height="25" alt="facebook" src="https://www.iconsdb.com/icons/preview/white/facebook-xxl.png" /></div>
            <div className="col"><img width="25" height="25" alt="instagram" src="https://www.iconsdb.com/icons/preview/white/instagram-xxl.png" /></div>
            <div className="col"><img width="25" height="25" alt="youtube" src="https://www.iconsdb.com/icons/preview/white/youtube-xxl.png" /></div>
            <div className="col"><img width="25" height="25" alt="youtube" src="https://www.iconsdb.com/icons/preview/white/github-6-xxl.png" /></div>
          </div>
        </footer>

      </Wrapper >
    );
  }
}


export default withAuth(Profile);