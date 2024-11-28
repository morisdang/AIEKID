import React from 'react';
import { useState, useEffect } from "react";
import {QRCodeSVG, QRCodeCanvas} from 'qrcode.react';
import icon from '../../hamsbo/icon.jpg'
const PaymentDetail = () => {

const [step, setStep] = useState(1);
const [paymentCode, setPaymentCode] = useState("");
const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
const [qrValue, setQrValue] = useState('https://reactjs.org/');

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(prev => {
      if (prev === 1) {
        setQrValue(`https://reactjs.org/${Date.now()}`); // Change QR code value
        return 300; // Reset to 5 minutes
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);

const handleNextStep = () => {
  setStep(step + 1);
};

const handleInputChange = (e) => {
  setPaymentCode(e.target.value);
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

  return (

    <div className="flex flex-col justify-center items-center bg-pink-100 p-5 w-100 h-100">

        <h1 className="text-4xl font-bold text-purple-600 mb-4">Upgrade Premium</h1>
      <div className="relative bg-white shadow-lg rounded-lg p-6 text-center">
      <img src={icon} className="rounded-full mb-2 absolute  top-0 right-0 transform translate-x-1/2 -translate-y-[50px]"
                style={{width: '100px', height:'100px'}} alt='logo' />
        {/* Heading */}
    

        {/* QR Code */}


        <div className="text-center space-y-4">
            <div>
              <p className="text-gray-600 text-2xl font-medium mb-2">Chuyển khoản</p>
              <p className="text-gray-500">Quét mã QR và chuyển khoản 200k.</p>
              <div className='flex justify-center'>
                
                <QRCodeCanvas 
                id='qrcode'
                value={qrValue}
                size={290}
                level={'H'}
                includeMargin={true}
                />
                </div>
                <p className="text-red-500 mt-2">Mã QR sẽ thay đổi sau: {formatTime(timeLeft)}</p>
            </div>

            {/* <div>
              <p className="text-gray-600 font-medium mb-2">2. Gửi ảnh chụp đến fanpage</p>
              <p className="text-gray-500">- Chụp màn hình giao dịch thành công và gửi đến <a
                href="https://www.facebook.com/AIEKID"
                target="_blank"
                className="text-blue-500 underline mt-2">
                Fanpage
              </a>
                .</p>
 
      
            </div> */}

            {/* <div>
              <p className="text-gray-600 font-medium mb-2">3. Nhập mã code xác nhận</p>
              <p className="text-gray-500">- Chúng tôi sẽ gửi mã code của bạn qua fanpage.</p>
              <input
                type="text"
                value={paymentCode}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Nhập mã code của bạn"
              />
 
            </div> */}

            <div>
              <p className="text-green-600 font-bold mb-2">Hoàn tất!</p>
              <p className="text-gray-500">Bạn đã hoàn tất thanh toán và có quyền truy cập nội dung Premium.</p>
            </div>
        </div>
      </div>
    </div>
 

  );
};

export default PaymentDetail;