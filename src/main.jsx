import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="667069473531-aqh78tfe4lbov93g0klvd03p1u6g0np4.apps.googleusercontent.com">
    <React.StrictMode>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </React.StrictMode>,
  </GoogleOAuthProvider>

)
