import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { confirmPIN } from '../../../ConnectBE/axios';
import { toast } from 'react-toastify';
import './scss/ConfirmPlayGame.scss';
import { useParams } from 'react-router-dom';

const ConfirmPlayGame = () => {
    const [pin, setPin] = useState('');
    const navigate = useNavigate();
    // Handle PIN input change
    const handleOnChange = (e) => {
        setPin(e.target.value);
    };
    const { event_id } = useParams();

    // Handle PIN submission
    const handleSubmitPIN = async () => {
        // const res = await confirmPIN(pin);
        // console.log("res", res);
        toast.success("Access Quiz Success!!!");
        window.location.href = `/event/${event_id}/playgame`
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
