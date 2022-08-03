import React from 'react';
import nearHospital from '../../images/nearHospital.png';
import medDatabase from '../../images/medDatabase.png';
import blog from '../../images/blog.png';
import ussdCode from '../../images/ussdCode.png';

const Features = () => {
    return (
        <section className="container-fluid features">
            <div className="container featuresContainer">
                <div className="featuresContent">
                    <h5 className="featuresHeader">
                        Special Features
                    </h5>
                    <p className="featuresDesc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolo
                    </p>
                </div>
                <div className="row specialFeatures">
                    <div className="col-lg-3 col-md-6 col-sm-12 specialFeaturesCol">
                        <img src={blog} alt="blog" className="featureCardImg blogFeature" />
                        <h6 className='featureCardTitle'>Blog</h6>
                        <p className='featureCardDesc'>Lorem ipsum dolor sit amet, consectetur adipiscin
                            g elit ut aliquam, purus </p>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 specialFeaturesCol">
                        <img src={ussdCode} alt="ussd Code" className="featureCardImg ussdFeature" />
                        <h6 className='featureCardTitle'>USSD Codes</h6>
                        <p className='featureCardDesc'>Lorem ipsum dolor sit amet, consectetur adipiscin
                            g elit ut aliquam, purus </p>

                    </div>
                    <div className="col-lg-3 col-md-6  col-sm-12 specialFeaturesCol">
                        <img src={medDatabase} alt="Medical database" className="featureCardImg databaseFeature" />
                        <h6 className='featureCardTitle'>Sync Medical Database</h6>
                        <p className='featureCardDesc'>Lorem ipsum dolor sit amet, consectetur adipiscin
                            g elit ut aliquam, purus </p>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 specialFeaturesCol">
                        <img src={nearHospital} alt="Nearest Hospital" className="featureCardImg hospitalFeature" />
                        <h6 className='featureCardTitle'>Locate the Nearest Hospital</h6>
                        <p className='featureCardDesc'>Lorem ipsum dolor sit amet, consectetur adipiscin
                            g elit ut aliquam, purus </p>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Features