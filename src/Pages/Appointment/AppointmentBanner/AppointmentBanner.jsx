import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header className="my-6  bg-[url('../../../assets/images/appointment.png)]" >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm  rounded-lg shadow-2xl" alt='' />

                    < div className='mr-6' >
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        ></DayPicker>
                    </div >
                </div >
            </div >
        </header >
    );
};

export default AppointmentBanner;