import React from 'react'
import install from '../../images/install.png';
import logIN from '../../images/logIN.png';
import search from '../../images/search.png';
const How = () => {
    return (
        <section className='container-fluid how'>
            <div className="container howContainer">
                <div className="row justify-content-md-center">
                    <div className="col-md-7 howCol">
                        <div className="howInfoContainer">
                            <h5 className='howInfoTitle'>How Vaccine App Works</h5>
                            <p className='howInfoContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolo</p>
                            <div className="row cardRow">
                                <div className="col-md-4  howCard">
                                    <img src={install} alt='Install App' className='howCardIcon' />

                                    <h5 className="howCardTitle">Install APP</h5>
                                    <p className="howCardContent">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit ut aliquam,
                                    </p>
                                </div>
                                <div className="col-md-4  howCard">
                                    <img src={logIN} alt='Install App' className='howCardIcon' />

                                    <h5 className="howCardTitle">Login/ Sign Up</h5>
                                    <p className="howCardContent">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit ut aliquam,
                                    </p>
                                </div> <div className="col-md-4  howCard">
                                    <img src={search} alt='Install App' className='howCardIcon' />

                                    <h5 className="howCardTitle">Search Up Services</h5>
                                    <p className="howCardContent">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit ut aliquam,
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default How