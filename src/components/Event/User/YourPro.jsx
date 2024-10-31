import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import './scss/YourPro.scss';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { getAllQuiz } from '../../../ConnectBE/axios';

const YourPro = ({ creatorId }) => {
    const [slideList, setSlideList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // Fetch quizzes when the component mounts
    useEffect(() => {
        const fetchQuizzes = async () => {
            const data = await getAllQuiz(+creatorId);
            setSlideList(data.response);
        };

        fetchQuizzes();
    }, [creatorId]);

    // Function to toggle the popover
    const toggle = () => {
        setIsOpen(false);
    };

    // Handle click event and show popover for 1.5 seconds
    const handleClick = () => {
        setIsOpen(true);
        setTimeout(() => {
            setIsOpen(false);
        }, 1500);
    };

    // Format the time and date
    const formatTime = (time) => {
        let date = time.slice(1, time.indexOf("T"));
        date = date.split('-').reverse().join('-');
        let clock = time.split('T')[1].slice(0, 8);
        return (
            <div className="wrapp_time_formated">
                <p className="date_formated">{date}</p>
                <p className="time_formated">{clock}</p>
            </div>
        );
    };

    return (
        <Fragment>
            <div className="col-9 row">
                {slideList.map((item, index) => (
                    <div key={index} className="col-4 slide_item">
                        <Link to={`/user/mygame/host-creator/edit/${item.id}`}>
                            <div className="slide_content">
                                Id: {item.id}
                                {formatTime(item.createdAt)}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default YourPro;
