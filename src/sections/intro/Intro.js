import React from 'react';

import appleStore from '../../images/apple_store.png';
import playStore from '../../images/play_store.png';
import callDoctor from '../../images/call_doctor.png';
import doctors from '../../images/doctors.png'
import profile from '../../images/profile.png'
const Intro = () => {
  return (
    <section className='container-fluid intro'>
      <div className='container introContainer'>
        <div className='row'>
          <div className='col-md-6 content'>
            <h2 className='introHeading'>
              The Complete Health Care Solution Mobile Application for Everyone
            </h2>
            <p className='introInfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fr</p>
            <div className='introBtns'>
              <button className='googleBtn'>
                <img src={playStore} alt='play store' />
              </button>
              <button className='playStoreBtn'>
                <img src={appleStore} alt='Aple store' />
              </button>
            </div>
          </div>
          <div className='col-md-6 intoImagesContainer'>
            <img src={callDoctor} alt='Call a doctor' className='callDoctor'/>
            <img src={doctors} alt='doctors' className='doctors'/>
            <img src={profile} alt='Profile' className='profile'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro