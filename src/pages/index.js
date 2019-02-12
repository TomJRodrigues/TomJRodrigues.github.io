import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/PodcastFacesThumb.png'
import thumb02 from '../assets/images/thumbs/NativeMountainsThumb.png'
import thumb03 from '../assets/images/thumbs/CivicAppsThumb.png'
import thumb04 from '../assets/images/thumbs/GearShedThumb.png'
import thumb05 from '../assets/images/thumbs/AlphabetThumb.png'
import thumb06 from '../assets/images/thumbs/BikeshareThumb.png'

import full01 from '../assets/images/fulls/PodcastFaces.png'
import full02 from '../assets/images/fulls/NativeMountains.png'
import full03 from '../assets/images/fulls/CivicApps.png'
import full04 from '../assets/images/fulls/GearShed.png'
import full05 from '../assets/images/fulls/Alphabet.png'
import full06 from '../assets/images/fulls/Bikeshare.png'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Podcast Faces', description: 'A React-based web app to see the faces behind your favorite podcast voices.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Native Mountains', description: 'A small Chrome Extension to change Western Mountain Names to Native ones written in Javascript.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Civic Apps', description: 'A mock-up for a mobile app focused on organizing public civic data sets made in Sketch.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Gear Shed', description: 'A Mongo, Express, React, Node, and D3.js web app to create, store, and share gear lists for outdoor adventures. Still in development.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Alphabet', description: 'A screenshot of a client portal I built for Alphabet. I was only the developer, not the designer on this one.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Bikeshare', description: 'A poster for the nearly-autnomous bikeshare system I designed and built leveraging smart locks and Google Scripts.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Tom Rodrigues - Developer"
        const siteDescription = "Tom Rodrigues Portfolio"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Hi there, I'm a Web Developer</h2>
                        </header>
                        <p>I'm a React nerd, and I'm familiar with most of the contextual technologies. 
                        Self-taught with a non-traditional background. 
                        Not afraid of design work in Sketch or backend work in Node, either.</p>

                        {/*
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                        */}
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        {/*
                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                        */}
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Questions, comments, business opportunities, and freelance gigs:</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="mailto:tomjrodrigues@gmail.com">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        SE Portland, OR<br />
                                        United States
                                    </li>
                                    {/*
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    */}
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">tomjrodrigues@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex