import React from 'react'
import { ReactComponent as Twitter } from '../../images/Twitter.svg'
import { ReactComponent as Instagram } from '../../images/Instagram.svg'
import { ReactComponent as Linkedin } from '../../images/Linkedin.svg';
import playStore from '../../images/play_store.png';
import appleStore from '../../images/apple_store.png'
const Footer = () => {
    return (
        <footer>
            <div className='container footerContainer'>
                <div className='aboutUsCol'>
                    <h5>About Us</h5>
                    <ul>
                        <li>Home</li>
                        <li>Subscription</li>
                        <li>Features</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div className='supportCol'>
                    <h5>Support</h5>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Services</li>
                        <li>Accessibility</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='socialCol'>
                    <h5>Social Links</h5>

                    <div className='socialContainer'>
                        <a href="#" className='instagram'>
                            <Instagram />
                        </a>
                        <a href="#" className='linkedin'>
                            <Linkedin />
                        </a>
                        <a href="#" className='twitter'>
                            <Twitter />
                        </a>
                    </div>
                </div>
                <div className='downloadCol'>
                    <h5>Download App</h5>
                    <div className='download'>
                        <button>
                            <img src={playStore} alt="play Store" className="playStoreFooterBtn" />
                        </button>
                        <button>
                            <img src={appleStore} alt="Apple Store" className="appleStoreBtn" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer