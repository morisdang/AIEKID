import React, { Fragment, useEffect } from "react";
import './scss/EndGame.scss';
import { useParams } from 'react-router-dom';
import { apiUserUpdate } from "../../../ConnectBE/axios";
import { getCookie } from "../../../utils/common";
const EndGame = ({event_id, totalPoints, userInfo}) => {
    useEffect(() => {

        let userId = getCookie("id");
        console.log("totalPoints", totalPoints)
        let events_history_new = {
            event_id: event_id,
            total_points: totalPoints,
            created_at: new Date().toISOString()
        }
        let events_history = userInfo ? userInfo.events_history : [];
        // check event_id in each event_history, if update new events_history_new
        
        const eventIndex = events_history.findIndex(event => event.event_id === event_id);
        if (eventIndex !== -1) {
          events_history[eventIndex] = events_history_new;
        } else {
          events_history.push(events_history_new);
        }
        apiUserUpdate(userId, { events_history: events_history })
        .then(() => {
            console.log('Save events updated successfully');
        })
        .catch((error) => {
            console.error('Error updating save events:', error);
        });

        const timer = setTimeout(() => {
            window.location.href = `/event/${event_id}/detail`;

        }, 2000);
        return () => clearTimeout(timer); 
        
    }, [event_id]);
    
    return (
        <Fragment>
            <div className="wrapper_end_game">
                <div className="context_end_game">
                    <h1 className="heading_text">End Game</h1>
                    <h1 className="side_text">Thanks for all of Your Effort!!!!</h1>
                </div>
            </div>
        </Fragment>
    );
};

export default EndGame;
