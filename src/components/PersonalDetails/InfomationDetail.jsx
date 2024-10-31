import React from 'react';
import Steppers, {LinearStepper} from '../Stepper';

import {formatDate} from '../../utils/common'

const stepper = ['Information Fill', 'Confirm', 'Pay tuition'];
const linearStepper = ['1','2','3','4','5'];
const InfomationDetail = () => {

    const userInfomation = {
        lastname:"Kinh Can",
        surname:"Kinh Can",
        sex:"Male",
        email:"Kinh Can",
        phone_number:"Kinh Can",
        birth_date: formatDate(new Date(946684800000)),
        favorite:["Kinh Can", " Kinh Can"],
        password:"Kinh Can",
        class_level:6,
        membership_status:'normal',
        membership_expiry_date:6,
        
    }


    return (
        <div className="flex-grow p-10">
            <h2 className="text-3xl font-bold mb-6">Personal Detail</h2>
            <Steppers
            stepper={stepper}
            activeStep={1}
            />

            {/* Form Section */}
            <div className="space-y-6 mt-10">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                    <form className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 font-bold">Lastname</label>
                            <input type="text" id="name" className="w-full border-gray-400 p-2 rounded-lg " 
                            value={userInfomation.lastname}
                            disabled 
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-bold">Surname</label>
                            <input type="text" id="surname" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.surname}
                            disabled 
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-bold">Sex</label>
                            <input type="text" id="sex" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.sex}
                            disabled 
                            />
                        </div>
  
                        <div>
                            <label className="block mb-2 font-bold">Phone Number</label>
                            <input type="text" id="phoneNumber" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.phone_number}
                            disabled 
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-bold">Birth date</label>
                            <input type="date" id="birth_date" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.birth_date}
                            disabled 
                            />
                        </div>

                    </form>
                </div>


                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">Account Information</h3>
                    <form className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 font-bold">Email</label>
                            <input type="email" id="email" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.email}
                            disabled 
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-bold">Password</label>
                            <input type="password" id="password" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.password}
                            disabled 
                            />
                        </div>
               

                    </form>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">Others Information</h3>
                    <form className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2 font-bold">Class Level</label>
                            <LinearStepper
                            stepper={linearStepper}
                            activeStep={userInfomation.class_level}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-bold">Favorite</label>
                            <input type="text" id="first_name" className="w-full border-gray-400 p-2 rounded-lg" 
                            value={userInfomation.favorite}
                            disabled 
                            />
                        </div>
               

                    </form>
                </div>
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





