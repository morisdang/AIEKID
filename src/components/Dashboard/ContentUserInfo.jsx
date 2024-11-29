import React from 'react'
import './style/dashboard.scss'
import { Layout } from "antd";
import SliderComponent from './SliderComponent';
import HeaderManagePage from './HeaderManagePage';
import { apiGetBank, apiUserInfo, apiAllUser } from "../../ConnectBE/axios";
import {useState, useEffect} from 'react';
import TableUserInfo from "./table_user_info";
import { Button } from "antd";

const ContentUserInfo = () => {
    const [userInfoStandard, setUserInfoStandard] = useState([]);
    const [userInfoPremium, setUserInfoPremium] = useState([]);

    useEffect(() => {
      const fetchUserInfo = async () => {
        try {
          const response1 = await apiAllUser({"member_status": "standard"});
          setUserInfoStandard(response1);

        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      };
  
      fetchUserInfo();
    }, []);

    return (
        <div>
            <TableUserInfo data={userInfoStandard}/>
            
        </div>
    )
}

export default ContentUserInfo