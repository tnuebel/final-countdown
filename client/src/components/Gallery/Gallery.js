import React from 'react'
import { Parallax } from 'react-spring'
import './Gallery.css'

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

class Gallery extends React.Component {
    render() {
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={4}>

                <Parallax.Layer offset={0} speed={1} className="video-background">
                    <div className="video-foreground">
                        <iframe src="https://www.youtube.com/embed/-aGISgOB6n0?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&mp;mute=1&amp;loop=1&amp;playlist=-aGISgOB6n0" title="blast off" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer offset={1} speed={1} className="video-background">
                    <div className="video-foreground">
                        <iframe src="https://www.youtube.com/embed/m1EBHOmXSqA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=m1EBHOmXSqA" title="solar system" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>                    </div>
                </Parallax.Layer>

                {/* <Parallax.Layer offset={2} speed={1} className="video-background">
                    <div className="video-foreground">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/UHb7PiqRdAg?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=UHb7PiqRdAg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </Parallax.Layer> */}

                <Parallax.Layer offset={3} speed={1} className="video-background">
                    <div className="video-foreground">
                        <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ" title="ISS Timelapse" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </Parallax.Layer>

                {/* <Parallax.Layer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} /> */}

                <Parallax.Layer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} alt='satellite'/>
                </Parallax.Layer>

                <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 1 }}>
                    <img src={require('../Image/Boeings-Phantom-Express.jpg')} style={{ display: 'block', width: '40%', marginLeft: '55%' }} alt='boeing'/>
                    <img src={require('../Image/1506595346-uae-mars-science-city-011.jpg')} style={{ display: 'block', width: '30%', marginLeft: '15%' }} alt='science'/>
                </Parallax.Layer>

                <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 1 }}>
                    <img src={require('../Image/commercial-space-travel-770776.jpg')} style={{ display: 'block', width: '40%', marginLeft: '50%' }} alt='space travel'/>
                    <img src={require('../Image/emirates-first-class-virtual-windows.webp')} style={{ display: 'block', width: '50%', marginLeft: '20%' }} alt='first class'/>
                </Parallax.Layer>

                <Parallax.Layer offset={1} speed={0.2} style={{ opacity: 1 }}>
                    <img src={require('../Image/lm_cam-10_mars_colony-sm_187.jpg')} style={{ display: 'block', width: '30%', marginLeft: '5%' }} alt='colony'/>
                    {/* <img src={require('../Image/mars_colony-700x432-300x150.jpg')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} /> */}
                    <h1 className='stmt2' style={{ display: 'block', marginLeft: '5%' }}>JOURNEY</h1>
                </Parallax.Layer>

                <Parallax.Layer offset={1.6} speed={-0.1} style={{ opacity: 1 }}>
                    <img src={require('../Image/mars_gallery_habitat_8.jpg')} style={{ display: 'block', width: '30%', marginLeft: '10%' }} alt='mars'/>
                    {/* <img src={require('../Image/mars-city-still.jpg')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} /> */}
                    <h1 className='stmt2' style={{ display: 'block', marginLeft: '55%' }}>STARTS</h1>
                    <img src={require('../Image/maxresdefault (1).jpg')} style={{ display: 'block', width: '30%', marginLeft: '70%' }} alt='residents'/>
                </Parallax.Layer>

                <Parallax.Layer offset={2.6} speed={0.4} style={{ opacity: 1 }}>
                    <img src={require('../Image/maxresdefault (2).jpg')} style={{ display: 'block', width: '40%', marginLeft: '5%' }} alt='residents2'/>
                    <img src={require('../Image/maxresdefault.jpg')} style={{ display: 'block', width: '45%', marginLeft: '35%' }} alt='max residents'/>
                </Parallax.Layer>

                <Parallax.Layer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    {/* <img src={require('../Image/spacex-falcon-heavy-11-1068x601.jpg')} style={{ width: '60%' }} /> */}
                    <h1 className='stmt1'>HERE!</h1>
                </Parallax.Layer>

                {/* <Parallax.Layer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: url('clients', true)
                    }}
                /> */}

                <Parallax.Layer
                    offset={0}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(1)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* <img src={url('server')} style={{ width: '20%' }} /> */}
                    <h1 className='stmt1'>YOUR</h1>
                </Parallax.Layer>

                {/* <Parallax.Layer
                    offset={1}
                    speed={0.1}
                    onClick={() => this.parallax.scrollTo(2)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={url('bash')} style={{ width: '40%' }} />
                </Parallax.Layer> */}

                {/* <Parallax.Layer
                    offset={2}
                    speed={-0}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => this.parallax.scrollTo(0)}>
                    <img src={url('clients-main')} style={{ width: '40%' }} />
                </Parallax.Layer> */}
            </Parallax>
        )
    }
}

export default Gallery; 