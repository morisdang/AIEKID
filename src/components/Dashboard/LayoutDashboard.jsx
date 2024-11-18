import React from 'react'
import './style/dashboard.scss'
import { Layout } from "antd";
import SliderComponent from './SliderComponent';
import HeaderManagePage from './HeaderManagePage';

const { Content } = Layout;

const LayoutDashboard = (props) => {
    const { content } = props;

    return (
        <Layout className="min-h-screen">
            <HeaderManagePage />
            <Layout>
                <SliderComponent />
                <Content
                    style={{
                        marginTop: "10px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      
                    }}
                    className="overflow-y-auto webkit-scrollbar"
                >
                    <div className="">{content}</div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutDashboard