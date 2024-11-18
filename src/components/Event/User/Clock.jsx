import React, { useState, useEffect } from "react";
import './scss/Clock.scss';

const styleInline = {
    transitionProperty: "all",
    transitionDuration: "0.8s",
    transform: "scale(2)",
    color: "red"
};

const Clock = ({ count_down, currentId, handleTimeOff }) => {
    const [countdown, setCountdown] = useState(count_down || 5);
    const [animateTime, setAnimateTime] = useState(true);

    // Update countdown and animation when the current question changes
    useEffect(() => {
        setCountdown(count_down);
    }, [currentId, count_down]);


    useEffect(() => {
        if (countdown > -1) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
                setAnimateIfNeeded()
            }, 1000);
            return () => clearTimeout(timer); 
        } else {
            handleTimeOff();

        }
    }, [countdown]);

    const setAnimateIfNeeded = () => {
        if (countdown < 4) {
            setAnimateTime(!animateTime);
            setTimeout(() => {
                setAnimateTime(!animateTime);
            }, 500);
        }
    };

    return (
        <div className="clock_count_down">
            <p style={!animateTime ? styleInline : {}}>
                {countdown > -1 ? countdown : 0}
            </p>
        </div>
    );
};

export default Clock;
