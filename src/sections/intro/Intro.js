import React from 'react';
import { useInView } from 'react-intersection-observer';
import appleStore from '../../images/apple_store.png';
import playStore from '../../images/play_store.png';
import callDoctor from '../../images/call_doctor.png';
import doctors from '../../images/doctors.png'
import profile from '../../images/profile.png'
const Intro = () => {
  const { ref, inView, } = useInView();
  return (
    <div className='introContainer'>
      <section className='container-fluid intro' ref={ref}>
        <div className="introContent">
          <h2 className={`introHeading ${inView && 'animate__animated animate__slideInDown'}`}>
            The Complete Health Care Solution Mobile Application for Everyone
          </h2>
          <p className={`introInfo ${inView && 'animate__animated animate__slideInLeft'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fr</p>
          <div className={`introBtns ${inView && 'animate__animated animate__slideInUp'}`}>
            <button className={`googleBtn `}>
              <img src={playStore} alt='play store' />
            </button>
            <button className='playStoreBtn'>
              <img src={appleStore} alt='Aple store' />
            </button>
          </div>
        </div>

      </section>
    </div>

  )
}

export default Intro;

