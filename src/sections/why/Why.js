import React from 'react';
import { useInView } from 'react-intersection-observer';
import whyCall from '../../images/why_call.png';
import docProfile from '../../images/doc_profile.png';

const Why = () => {
    const { ref, inView, } = useInView();
    return (
        <section className='container-fluid why' ref={ref} id='why'>
            <div className='container whyContainer'>
                <div className="row d-flex">
                    <div className="col-md-6 col-sm-0 whyImagesContainer">
                        <img src={whyCall} alt='why call' className='whyCall' />
                        <img src={docProfile} alt='doc profile' className='docProfile' />
                    </div>
                    <div className={`col-md-6 col-sm-12 whyContentsContainer} `}>
                        <div className="whyContents ">
                            <h4 className={`whyHeader ${inView && 'animate__animated animate__lightSpeedInRight'}`}>
                                Why Vaccine App?
                            </h4>
                            <p className="whyAnswer">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                                aliquam, purus sit amet luctus venenatis, lectus magna fr
                            </p>

                            <div className="whyReasons">
                                <div className="Reason">
                                    <h5 className="whyPoint">
                                        Easy to Use
                                    </h5>
                                    <p className="whyPointExplanation">
                                        Lorem ipsum dolor sit amet, consecteturadip
                                        iscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fr
                                    </p>
                                </div>
                                <div className="Reason">
                                    <h5 className="whyPoint">
                                        Saves Money
                                    </h5>
                                    <p className="whyPointExplanation">
                                        Lorem ipsum dolor sit amet, consecteturadip
                                        iscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fr
                                    </p>
                                </div>
                                <div className="Reason">
                                    <h5 className="whyPoint">
                                        24/7 Online Service
                                    </h5>
                                    <p className="whyPointExplanation">
                                        Lorem ipsum dolor sit amet, consecteturadip
                                        iscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fr
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Why