//CSS
import './TimerComponent.css';

//MODULES AND COMPONENTS
import React, { useEffect, useState } from "react";
import moment from "moment";

const targetTime = moment("2023/07/31 20:59:59", "YYYY/MM/DD HH:mm:ss");

const TimerComponent = () => {
    const [currentTime, setCurrentTime] = useState(moment());
    const timeBetween = moment.duration(currentTime.diff(targetTime));

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
    <div className="Timer-Component">
        <div className='Widgets'>
            <div className="Widget">
                <h2 className='Value'>{timeBetween.years()}</h2>
                <h5 className='Unit'>Anos</h5>
            </div>

            <div className="Widget">
                <h2 className='Value'>{timeBetween.months()}</h2>
                <h5 className='Unit'>Meses</h5>
            </div>

            <div className="Widget">
                <h2 className='Value'>{timeBetween.days()}</h2>
                <h5 className='Unit'>Dias</h5>
            </div>

            <div className="Widget">
                <h2 className='Value'>{timeBetween.hours()}</h2>
                <h5 className='Unit'>Horas</h5>
            </div>

            <div className="Widget">
                <h2 className='Value'>{timeBetween.minutes()}</h2>
                <h5 className='Unit'>Minutos</h5>
            </div>

            <div className="Widget">
                <h2 className='Value'>{timeBetween.seconds()}</h2>
                <h5 className='Unit'>Segundos</h5>
            </div>
        </div>
    </div>
  );
};

export default TimerComponent;