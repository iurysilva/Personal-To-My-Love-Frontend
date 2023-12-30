//CSS
import './TimerComponent.css';

//MODULES AND COMPONENTS
import React, { useEffect, useState } from "react";
import moment from "moment";

const targetTime = moment("2023/08/01 12:25:00", "YYYY/MM/DD HH:mm:ss");

const TimerComponent = () => {
    const [currentTime, setCurrentTime] = useState(moment());
    const timeBetween = moment.duration(currentTime.diff(targetTime));
    console.log(targetTime)

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
    <div className="Timer-Component">
        <div className="Widget">
            <div className='Value'>{timeBetween.years()}</div>
            <div className='Unit'>Anos</div>
        </div>

        <div className="Widget">
            <div className='Value'>{timeBetween.months()}</div>
            <div className='Unit'>Meses</div>
        </div>
    </div>
  );
};

export default TimerComponent;