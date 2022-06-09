import React from 'react';
import welcome from '../../images/welcome.png';
import doctors2 from '../../images/doctors2.png'
const DoctorsOnCall = () => {
  return (
    <section className="doctorsOnCall container-fluid">
      <div className="container doctorsOnCallContainer">

        <div className="onCallDesc">
          <h5 className="onCallDesTitle">Doctors On the Go!!!</h5>
          <p className="onCallDescContent">24/7 Access to the Best Medical Doctors Without Leaving Your Comfort Zone</p>
        </div>
        <div className="row">
          <div className="col-md-6 onCallInfoCol">
            <div className="row">
              <div className="col-md-6 infoCol">
                <div className="department">
                  <h5 className="departmentName">General </h5>
                  <p className="departmentDesc">Lorem ipsum dolor sit amet, consectetur adipiscin
                    g elit ut aliquam, purus </p>
                </div>
                <div className="department">
                  <h5 className="departmentName">Dental </h5>
                  <p className="departmentDesc">Lorem ipsum dolor sit amet, consectetur adipiscin
                    g elit ut aliquam, purus  </p>
                </div>
                <div className="department">
                  <h5 className="departmentName">Laboratory</h5>
                  <p className="departmentDesc">Lorem ipsum dolor sit amet, consectetur adipiscin
                    g elit ut aliquam, purus </p>
                </div>
              </div>
              <div className="col-md-6 infoCol">
                <div className="department">
                  <h5 className="departmentName">Obstetrics & Gynecology </h5>
                  <p className="departmentDesc">Lorem ipsum dolor sit amet, consectetur adipiscin
                    g elit ut aliquam, purus </p>
                </div>
                <div className="department">
                  <h5 className="departmentName">Optamology </h5>
                  <p className="departmentDesc">Lorem ipsum dolor sit amet, consectetur adipiscin
                    g elit ut aliquam, purus </p>
                </div>
                <div className="department">
                  <h5 className="departmentName">Cardiology</h5>
                  <p className="departmentDesc">Lorem ipsum dolor sit amet, consectetur adipiscin
                    g elit ut aliquam, purus </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 onCallImage">
            <img src={welcome} alt="Welcome " className='welcomeImg' />
            <img src={doctors2} alt="Doctors on call" className='doctorsOncall' />
          </div>
          <div className='onCallInstruction'>
            <label>This Service is only available to Premium Users</label>
            <button>Subscribe✨</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default DoctorsOnCall