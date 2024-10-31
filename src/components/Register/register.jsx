import React from 'react';
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

function RegisterPage() {
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


            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
            <MDBInput wrapperClass='mb-4' label='Password again' id='reform2' type='password'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Finish</MDBBtn>
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