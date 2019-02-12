import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Tom Rodrigues</strong>, a Portland-<br />
<<<<<<< HEAD
<<<<<<< HEAD
                    based Web Developer.</h1>
=======
                    based Front End Developer.</h1>
>>>>>>> parent of 36e0f0e0... Updates
=======
                    based Front End Developer.</h1>
>>>>>>> parent of 36e0f0e0... Updates
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
