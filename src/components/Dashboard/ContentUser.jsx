import React from 'react'
import './style/dashboard.scss'
import { Layout } from "antd";
import SliderComponent from './SliderComponent';
import HeaderManagePage from './HeaderManagePage';
import { apiGetBank } from "../../ConnectBE/axios";
import {useState, useEffect} from 'react';
import TableConmeo from "./table";
import { Button } from "antd";

const ContentUser = () => {
    const [bankData, setBankData] = useState([]);
    useEffect(() => {
        const fetchBankData = async () => {
            try {
              const response = await apiGetBank();
              setBankData(response);
            } catch (error) {
              console.error('Error fetching bank data:', error);
            }
          };
          fetchBankData();

    }, []);

    return (
        <div>
            <TableConmeo data={bankData}/>
        </div>
    )
}

export default ContentUser