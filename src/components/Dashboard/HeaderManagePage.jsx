import React, { useEffect } from "react";
import { IoIosLogOut, IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from '../../assests/logo.png'

const HeaderManagePage = () => {
    const navigate = useNavigate();

    return (
        <div
            className="header-manage-page"
            style={{ borderBottom: "1px solid black" }}
        >
            <div className="flex justify-between flex-row mx-5 my-3">
                <div className="left flex justify-between flex-row items-center gap-4">
                    <img
                        src={logo}
                        alt="logo"
                        loading="lazy"
                        className="cursor-pointer"
                        style={{ width: "60px", height: "60px" }}
                    />
                    <div className="break-line"></div>
                    <p className="role-name font-bold text-lg" style={{ marginBottom: "0px" }}>
                        My admin
                    </p>
                </div>

                <div className="right flex justify-between flex-row items-center gap-2">
                    <div className="notification flex justify-center items-center">
                        <IoIosNotificationsOutline className="icon w-5 h-5" />
                    </div>

                    <div
                        className="btn-logout font-semibold flex justify-between flex-row items-center gap-2"
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                        <IoIosLogOut className="icon font-semibold" />
                        Đăng xuất
                    </div>

                    <div className="profile flex justify-between flex-row items-center">
                        <div className="icon-person flex justify-center items-center">
                            <IoPersonCircleOutline className="w-7 h-7" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderManagePage;
