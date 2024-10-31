import React, { useState, useEffect, Fragment } from "react";
import './scss/Transpose.scss';

const Transpose = ({ handleTimeOff }) => {
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if (countdown > -1) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer); 
        } else {
            handleTimeOff();
        }
    }, [countdown, handleTimeOff]);


    return (
        <Fragment>
            <div className="Transpose_count_down">
                <div className="Transpose_clock">
                    {countdown > -1 ? countdown : 0}
                </div>
            </div>
        </Fragment>
    );
};

export default Transpose;
