import React from 'react';
import vaccineReminder from '../../images/vaccineReminder.png';
import medicationReminder from '../../images/medicationReminder.png';


const Reminder = () => {
    return (
        <section className='reminder'>

            <div className="container reminderContainer">
                <div className="row ">
                    <div className="col-lg-6  order-lg-first order-md-last order-sm-last col-sm-6 order-xs-last reminderImage">
                        <img src={vaccineReminder} alt="Vaccine Reminder" className='vaccineReminder' />
                    </div>
                    <div className="col-lg-6 col-sm-12  order-md-2 order-sm-first order-xs-first col-xs-12 vaccineReminderContent">
                        <h5 className='vaccineReminderTitle'>
                            Vaccination Reminder
                        </h5>
                        <p className='vaccineReminderDesc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttito Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, velr
                        </p>
                    </div>
                    <div className="col-lg-6 col-sm-12 order-sm-second order-xs-second col-xs-12 vaccineReminderContent">
                        <h5 className='vaccineReminderTitle'>
                            Medication Tracker
                        </h5>
                        <p className='vaccineReminderDesc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttito Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, velr
                        </p>
                    </div>
                    <div className="col-lg-6 order-sm-last col-sm-6 order-sm-last order-xs-last reminderImage">
                        <img src={medicationReminder} alt="Vaccine Reminder" className='medicationReminder' />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Reminder