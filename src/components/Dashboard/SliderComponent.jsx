"use client";
import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import { AiOutlineDashboard } from "react-icons/ai";

const { Sider } = Layout;

const SliderComponent = () => {


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
            <Menu
                mode="inline"
                items={[
                    {
                        key: "dashboard",
                        icon: <AiOutlineDashboard />,
                        label: "Dashboard",
                    },
                
                ]}
                className="my-10"
            />
        </Sider>
    );
};

export default SliderComponent;
