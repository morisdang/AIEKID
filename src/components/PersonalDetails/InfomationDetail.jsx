import React, { useState, useEffect, useRef } from 'react';
import Steppers, {LinearStepper} from '../Stepper';

import {formatDate} from '../../utils/common'
import {apiUserInfo, apiAllBadges, apiUpdateUserInfo} from '../../ConnectBE/axios';
import { getCookie, setCookie } from "../../utils/common";
import { FaEdit, FaCamera } from 'react-icons/fa';
import avartar from "../../hamsbo/openart-image_WOgTguAq_1719236055398_raw.png";
import Button from '@mui/material/Button';
const stepper = ['Điền thông tin', 'Xác nhận', 'Thanh toán học phí'];
const linearStepper = ['1','2','3','4','5'];
const InfomationDetail = ({handleChangeMenu}) => {
    const [userInfomation, setUserInfomation] = useState({});
    const [isEditing, setIsEditing] = useState({
        lastname: false,
        surname: false,
        sex: false,
        phone_number: false,
        birth_date: false,
        email: false,
        password: false,
        favorite: false
    });
    const inputRefs = {
        lastname: useRef(null),
        surname: useRef(null),
        sex: useRef(null),
        phone_number: useRef(null),
        birth_date: useRef(null),
        email: useRef(null),
        password: useRef(null),
        favorite: useRef(null)
    };

    const [org_avatar, setOrgAvatar] = useState(avartar);
    const [avatar, setAvatar] = useState(org_avatar);
    const [show_upload, setShowUpload] = useState(false);
    const avatarInputRef = useRef(null);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            console.log("file", file);
            reader.readAsDataURL(file);
            setShowUpload(true);
        }
    };

    const handleAvatarUpload = async () => {
        const userId = getCookie("id");
        try {
            // Assuming apiUpdateUserAvatar is a function to update the user's avatar
            await apiUpdateUserInfo(userId, {picture: avatar});
            alert("Cập nhật ảnh đại diện thành công");
            setOrgAvatar(avatar);
            setShowUpload(false);

        } catch (e) {
            console.log(e);
            alert("Cập nhật ảnh đại diện thất bại");
        }
    };
    const handleResetAvartar = async () => {
        try {
            setShowUpload(false);
            setAvatar(org_avatar);
            avatarInputRef.current.value = '';
        } catch (e) {
            console.log(e);
        }
    };

    const handleEditClick = (field) => {
        setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
        if (inputRefs[field].current) {
            inputRefs[field].current.disabled = !inputRefs[field].current.disabled;
            if (!inputRefs[field].current.disabled) {
                inputRefs[field].current.focus();
            }
        }
    };

    const handleClickOutside = (event) => {
        Object.keys(inputRefs).forEach((field) => {
            if (inputRefs[field].current && !inputRefs[field].current.contains(event.target)) {
                inputRefs[field].current.disabled = true;
                setIsEditing((prev) => ({ ...prev, [field]: false }));
            }
        });
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserInfomation((prev) => ({ ...prev, [id]: value }));
    };

    const getUserInfo = async () => {
        const userId = getCookie("id");

        try {
            let api_res = await apiUserInfo(userId);
            api_res.class_level = 0
            setUserInfomation(api_res)
            setCookie({
                "id":userId,
                "family_name": api_res.surname,
                "given_name": api_res.lastname,
            })

        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getUserInfo()
    }, []);

    const handleSaveClick = async () => {
        const userId = getCookie("id");
        try {
            // check surname and lastname filled
            if (!userInfomation.surname || !userInfomation.lastname) {
                alert("Vui lòng điền họ và tên");
                return;
            }
            await apiUpdateUserInfo({ ...userInfomation, userId});
            alert("Cập nhật thông tin người dùng thành công");
            window.location.href = '/profile';

        } catch (e) {
            console.log(e);
            alert("Cập nhật thông tin người dùng thất bại");
        }
    };

    return (
        <div className="flex-grow p-10">
            <h2 className="text-3xl font-bold mb-6  font-sans">Chi tiết cá nhân</h2>
            <Steppers
            handleChangeMenu={handleChangeMenu}
            stepper={stepper}
            activeStep={1}
            />

            {/* Form Section */}
            <div className="space-y-6 mt-10">
                <div className="p-6 rounded-lg flex flex-column items-center justify-center">
                    <div className="relative ">
                        <img 
                            src={avatar || "default-avatar-url"} 
                            alt="Avatar" 
                            className="w-36 h-36 rounded-full mx-auto"
                        />
                        <input 
                            type="file" 
                            ref={avatarInputRef} 
                            style={{ display: 'none' }} 
                            onChange={handleAvatarChange}
                        />
                        <FaCamera 
                            className="absolute bottom-0 right-0 cursor-pointer text-gray-500" 
                            onClick={() => avatarInputRef.current.click()}
                        />
                    </div>
                    {
                        show_upload && (
                            <div className='flex gap-3'>
                                <button onClick={handleAvatarUpload} size="small" className="mt-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Upload Avatar</button>
                                <button onClick={handleResetAvartar} size="small" className="mt-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Reset Avatar</button>
                            </div>
                        )
                    }
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4  font-sans">Thông tin cá nhân</h3>
                    <form className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 font-bold">Họ</label>
                            <input type="text" id="lastname" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.lastname}
                            onChange={handleChange}
                            disabled 
                            ref={inputRefs.lastname}
                            />
                            <FaEdit className="ml-2 cursor-pointer" onClick={() => handleEditClick('lastname')} />
                        </div>
                        <div>
                            <label className="block mb-2 font-bold">Tên</label>
                            <input type="text" id="surname" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.surname}
                            onChange={handleChange}
                            disabled 
                            ref={inputRefs.surname}
                            />
                            <FaEdit className="ml-2 cursor-pointer" onClick={() => handleEditClick('surname')} />
                        </div>
                        <div>
                            <label className="block mb-2 font-bold">Giới tính</label>
                            <select
                                id="sex"
                                className="w-full  border-gray-400 p-2 rounded-lg"
                                value={userInfomation.sex}
                                onChange={handleChange}
                                disabled
                                ref={inputRefs.sex}
                            >
                                <option value="">Chọn Giới tính</option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                                <option value="other">Khác</option>
                            </select>
                            <FaEdit className="ml-2 cursor-pointer" onClick={() => handleEditClick('sex')} />
                        </div>
                        <div>
                            <label className="block mb-2 font-bold">Số điện thoại</label>
                            <input type="text" id="phone_number" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.phone_number}
                            onChange={handleChange}
                            disabled 
                            ref={inputRefs.phone_number}
                            />
                            <FaEdit className="ml-2 cursor-pointer" onClick={() => handleEditClick('phone_number')} />
                        </div>
                        <div>
                            <label className="block mb-2 font-bold">Ngày sinh</label>
                            <input type="date" id="birth_date" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.birth_date}
                            onChange={handleChange}
                            disabled 
                            ref={inputRefs.birth_date}
                            />
                            <FaEdit className="ml-2 cursor-pointer" onClick={() => handleEditClick('birth_date')} />
                        </div>

                    </form>
                </div>


                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4  font-sans">Thông tin tài khoản</h3>
                    <form className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 font-bold">Email</label>
                            <input type="email" id="email" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.email}
                            onChange={handleChange}
                            disabled 
                            ref={inputRefs.email}
                            />
                            {/* <FaEdit className="ml-2 cursor-pointer" onClick={() => handleEditClick('email')} /> */}
                        </div>
                        <div>
                            <label className="block mb-2 font-bold">Mật khẩu</label>
                            <input type="password" id="password" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.password}
                            onChange={handleChange}
                            disabled 
                            ref={inputRefs.password}
                            />
                            <FaEdit className="ml-2 cursor-pointer" onClick={() => handleEditClick('password')} />
                        </div>
               

                    </form>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4  font-sans">Thông tin khác</h3>
                    <form className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 font-bold">Trình độ lớp</label>
                            <LinearStepper
                            stepper={linearStepper}
                            activeStep={userInfomation.class_level}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-bold">Sở thích</label>
                            <input type="text" id="favorite" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.favorite}
                            onChange={handleChange}
                            disabled 
                            ref={inputRefs.favorite}
                            />
                            <FaEdit className="ml-2 cursor-pointer" onClick={() => handleEditClick('favorite')} />
                        </div>
               

                    </form>
                </div>
                <Button className="w-[200px] h-[50px] float-right  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleSaveClick} size="small">Lưu</Button>
                {/* Navigation */}
                {/* <div className="flex justify-between mt-6">
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg">Previous</button>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg">Next: Address</button>
                </div> */}
            </div>
        </div>
    );
};

export default InfomationDetail;





