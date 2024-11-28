import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { confirmPIN } from '../../../ConnectBE/axios';
import { toast } from 'react-toastify';
import './scss/ConfirmPlayGame.scss';
import { useParams } from 'react-router-dom';
import { apiUserUpdate } from "../../../ConnectBE/axios";
import { getCookie } from "../../../utils/common";
const ConfirmPlayGame = ({userInfo}) => {
    const [pin, setPin] = useState('');
    const { event_id } = useParams();
    const navigate = useNavigate();
    // Handle PIN input change
    const handleOnChange = (e) => {
        setPin(e.target.value);
    };

    // Handle PIN submission
    const handleSubmitPIN = async () => {
        // const res = await confirmPIN(pin);
        // console.log("res", res);
        toast.success("Access Quiz Success!!!");
        let joined_events = userInfo ? userInfo.joined_events : [];
        let userId = getCookie("id");
        if (joined_events.includes(event_id)) {
            window.location.href = `/event/${event_id}/playgame`
            return
        }
        joined_events.push(event_id);
        apiUserUpdate(userId, { joined_events: joined_events })
        .then(() => {
            console.log('Save events updated successfully');
            window.location.href = `/event/${event_id}/playgame`
        })
        .catch((error) => {
            console.error('Error updating save events:', error);
        });
        // if (res && res.errCode === 0) {
        //     toast.success("Access Quiz Success!!!");
        //     navigate(`/user/${event_id}/playgame`);
        // } else {
        //     toast.error(res.errMessage);
        // }
    };

    return (
        <div className="wrapper_main">
            <div className="logo_kahoot"></div>
            <div className="confirm_wrapper">
                <div className="form_confirm_pin">
                    <input
                        type="text"
                        className="confirm_id"
                        placeholder="Code PIN ..."
                        name="PIN"
                        required
                        onChange={handleOnChange}
                    />
                    <input
                        type="submit"
                        value="Valider"
                        className="btn_confirm_id"
                        onClick={handleSubmitPIN}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConfirmPlayGame;
