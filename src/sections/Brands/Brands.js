import React from 'react';
import mansard from '../../images/mansard.png';
import NHIS from '../../images/NHIS.png';
import leadway from '../../images/leadway.png';
import Hygeia from '../../images/Hygeia.png';
import hmo from '../../images/hmo.png';

const Brands = () => {
    return (
        <section className='container brands'>
            <div className="container brandsContainer">
                <img src={leadway} alt="leadway Health" className='leadwayHealth' />
                <img src={NHIS} alt="NHIS Health" className='NHIS' />
                <img src={hmo} alt="hmo Health" className='hmoReliance' />
                <img src={mansard} alt="mansard Health" className='mansardHealth' />
                <img src={Hygeia} alt="Hygeia Health" className='HygeiaHealth' />
            </div>
        </section>
    )
}

export default Brands