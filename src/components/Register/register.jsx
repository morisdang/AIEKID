import React, { useState, useEffect, useRef } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import './scss/register.scss'
import { Link } from "react-router-dom";    
import login_bg from '../../assests/login-bg.jpg'
import icon from '../../hamsbo/icon.jpg'
import { apiRegister } from "../../ConnectBE/axios";
function RegisterPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const register = async () => {
        console.log(email)
        if (!email || !password || !passwordAgain) {
            alert('Xin hãy điền đủ các khoảng trống.');
            return;
          }
      
          if (password !== passwordAgain) {
            alert('Mật khẩu không khớp.');
            return;
          }
      
          // Prepare the payload
          const payload = {
            email,
            password,
          };

          try {
                let api_res = await apiRegister(payload);
                if (api_res.user_info){
                    window.location.href = `/login`
                }
            } catch (e) {
                console.log(e);
                alert('Xin hãy dùng tài khoản khác.');
            }
        }
  return (
    <MDBContainer className="my-5 gradient-form register">

      <MDBRow>



        <MDBCol col='6' className="mb-5">
       <div className={`bg-[url('https://thumbs.dreamstime.com/b/back-to-school-vertical-flat-lay-chalk-board-medical-face-masks-smartphone-stationery-yellow-background-191499367.jpg')] bg-cover bg-center mb-4 w-[580px] h-[700px] rounded-xl`}></div>

          {/* <div className="d-flex flex-column  justify-content-start gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-3 mx-md-4">
              <h2 className="text-center mb-4">Register Account</h2>
             
            </div>
            <div className="text-white px-3 py-4 p-md-3 mx-md-4">
              <h4 className="mb-4"></h4>
              <p className="small mb-0 text-white">
              </p>
            </div> 

          </div>*/}

        </MDBCol>


        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

          <div className="text-center flex items-center mb-5">
              <img src={icon}
              className="rounded-full"
                style={{width: '150px'}} alt="logo" />
              <h4 className="mt-1 ml-10 mb-1 pb-1">We are The AIDEA team</h4>
            </div>

            <p>Please fill register account</p>


            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'
            value={password}

            onChange={(e) => setPassword(e.target.value)}
            />
            <MDBInput wrapperClass='mb-4' label='Password again' id='reform2' type='password'
            value={passwordAgain}

            onChange={(e) => setPasswordAgain(e.target.value)}
            />


            <div className="text-center pt-1 mb-5 pb-1">
              <button className="m-2 p-2 rounded-lg w-100 text-white gradient-custom-2" onClick={register}>Finish</button>
              <a className="text-muted" href="#!">Help?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Already have an account?</p>
              <Link to='/login' >
                <button className="ripple ripple-surface ripple-surface-dark btn btn-outline-danger mx-2">
                    Login
                </button>
              </Link>   
            </div>

          </div>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default RegisterPage;