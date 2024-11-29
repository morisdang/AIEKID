"use client";
import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import { AiOutlineDashboard } from "react-icons/ai";
import Button from '@mui/material/Button';
const { Sider } = Layout;

const SliderComponent = ({setTab}) => {


    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={false}
            width={245}
            style={{

                marginTop: 10,
            }}
            className="slider-container"
        >
            <div className="demo-logo-vertical text-center uppercase text-2xl font-bold mt-3">
                Tổng quát
            </div>
            
            <div className="p-4">
                <div className="flex justify-center items-center">
                    <AiOutlineDashboard />
                    <Button onClick={()=>setTab("dashboard")} size="small">Dashboard</Button>

                </div>
                <div className="flex justify-center items-center">
                    <AiOutlineDashboard />
                    <Button onClick={()=>setTab("user")} size="small">User</Button>

                </div>
                <div className="flex justify-center items-center">
                    <AiOutlineDashboard />
                    <Button onClick={()=>setTab("userInfo")} size="small">User data information</Button>

                </div>
            </div>
            
  
        </Sider>
    );
};

export default SliderComponent;
