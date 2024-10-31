import React, { useState, useEffect, useRef } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import './scss/login.scss'
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {setCookie, getCookie} from  '../../utils/common'
import login_bg from '../../assests/login.jpeg'
import icon from '../../hamsbo/icon.jpg'
function LoginPage() {


    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        
        () => {
            console.log(user)
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile( res.data);
                        window.location.href = `/`
                        setCookie( res.data)

                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    console.log(profile)

  return (
    <MDBContainer className="my-5 gradient-form login-container">

      <MDBRow>

        <MDBCol col='9' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center flex items-center mb-5">
              <img src={icon}
              className="rounded-full"
                style={{width: '150px'}} alt="logo" />
              <h4 className="mt-1 ml-10 mb-1 pb-1">We are The AIDEA team</h4>
            </div>

            <p>Please login to your account</p>


            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
              <button onClick={login} type="button" className="login-with-google-btn" >
                Sign in with Google 🚀
            </button>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <Link to='/register' >
                <button className="ripple ripple-surface ripple-surface-dark btn btn-outline-danger mx-2">
                    Register
                </button>
              </Link>   

            </div>

          </div>

        </MDBCol>

        <MDBCol col='3' className="mb-5">
          <div className={`bg-[url('${login_bg}')] bg-cover bg-center mb-4 w-[580px] h-[700px] rounded-xl`}>

            {/* <div className="text-white px-3 py-4 p-md-3 mx-md-4">
              <h2 className="text-center mb-4">Login Account</h2>
             
            </div>
            <div className="text-white px-3 py-4 p-md-3 mx-md-4">
              <h4 className="mb-4"></h4>
              <p className="small mb-0 text-white">
              </p>
            </div> */}

          </div>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default LoginPage;