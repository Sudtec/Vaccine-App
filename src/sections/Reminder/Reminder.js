import React from 'react';
import vaccineReminder from '../../images/vaccineReminder.png';
import medicationReminder from '../../images/medicationReminder.png'

const Reminder = () => {
    return (
        <section className='reminder'>
            <div className="container reminderContainer">
                <div className="row vaccineRow">
                    <div className="col-md-6 reminderImage">
                        <img src={vaccineReminder} alt="Vaccine Reminder" className='vaccineReminder' />
                    </div>
                    <div className="col-md-6 vaccineReminderContent">
                        <h5 className='vaccineReminderTitle'>
                            Vaccination Reminder
                        </h5>
                        <p className='vaccineReminderDesc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttito Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, velr
                        </p>
                    </div>
                </div>

                <div className="row medicationRow">
                    <div className="col-md-6 vaccineReminderContent">
                        <h5 className='vaccineReminderTitle'>
                            Medication Tracker
                        </h5>
                        <p className='vaccineReminderDesc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttito Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, velr
                        </p>
                    </div>
                    <div className="col-md-6 reminderImage">
                        <img src={medicationReminder} alt="Vaccine Reminder" className='medicationReminder' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reminder