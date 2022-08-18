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
                        <li>
                            <a href='#intro'>
                                Home
                            </a>

                        </li>
                        <li>
                            <a href='#features'>
                                Subscription
                            </a>
                        </li>
                        <li>
                            <a href='#reminder'>
                                Features
                            </a>
                        </li>
                        <li>
                            <a href='#review'>
                                Testimonials
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='supportCol'>
                    <h5>Support</h5>
                    <ul>
                        <li>
                            <a href='#privacypolicy'>
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href='#terms'>
                                Terms of Services
                            </a>
                        </li>
                        <li>
                            <a href='#accessibility'>
                                Accessibility
                            </a>
                        </li>
                        <li>
                            <a href='#FAQ'>
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='socialCol'>
                    <h5>Social Links</h5>

                    <div className='socialContainer'>
                        <a href="#instar" className='instagram'>
                            <Instagram />
                        </a>
                        <a href="#linkedin" className='linkedin'>
                            <Linkedin />
                        </a>
                        <a href="#twitter" className='twitter'>
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