import React, { useState, useEffect, useRef } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import './scss/login.scss'
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { setCookie, getCookie } from '../../utils/common'
import login_bg from '../../assests/login.jpeg'
import icon from '../../hamsbo/icon.jpg'
import { apiLogin } from "../../ConnectBE/axios";
function LoginPage() {

  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
        setUser(codeResponse)
        console.log(codeResponse)
    },
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
          .then(async (res) => {
            setProfile(res.data);
            let api_res = await apiLogin({
                "email": res.data.email,
            })
            if (api_res.user_info){
                window.location.href = `/`
                setCookie(res.data)
            }


          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  const handleSignIn = async () => {
    if (email === "admin@gmail.com" && password === "123456") {
      navigate("/dashboard");
    } else {
        let payload = {
            "email": email,
            "password": password,
        }
        let api_res = await apiLogin(payload)
        console.log(api_res)
        if (api_res.user_info){
            setCookie({email: email, id: api_res.user_info.user_id})
            window.location.href = `/`

        } else {
            setError("Mật khẩu hoặc tài khoản không đúng");
        }
    }
  };

  return (
    <MDBContainer className="my-5 gradient-form login-container">

      <MDBRow>

        <MDBCol col='9' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center flex items-center mb-5">
              <img src={icon}
                className="rounded-full"
                style={{ width: '150px' }} alt="logo" />
              <h4 className="mt-1 ml-10 mb-1 pb-1">Chúng tôi là team AIDEA</h4>
            </div>

            <p>Vui lòng đăng nhập vào tài khoản của bạn</p>

            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Mật khẩu"
              id="form2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="text-center pt-1 mb-5 pb-1">
                <button className="m-2 p-2 rounded-lg w-100 text-white gradient-custom-2" onClick={handleSignIn}>Đăng nhập</button>
              <button onClick={login} type="button" className="login-with-google-btn" >
                Đăng nhập bằng Google 🚀
              </button>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Bạn chưa có tài khoản?</p>
              <Link to='/register' >
                <button className="ripple ripple-surface ripple-surface-dark btn btn-outline-danger mx-2">
                  Đăng ký
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