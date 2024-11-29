import React from 'react'
import './style/dashboard.scss'
import { Layout } from "antd";
import SliderComponent from './SliderComponent';
import HeaderManagePage from './HeaderManagePage';
import ContentUser from './ContentUser';
import ContentUserInfo from './ContentUserInfo';

const { Content } = Layout;

const LayoutDashboard = (props) => {
    const { content } = props;
    const [tab, setTab] = React.useState("dashboard");

    return (
        <Layout className="min-h-screen">
            <HeaderManagePage />
            <Layout>

                <SliderComponent setTab={setTab}/>
                {tab === "dashboard" && (
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

                )}
                {tab === "user" && (
                        <ContentUser
                        style={{
                            marginTop: "10px",
                            marginLeft: "10px",
                            marginRight: "10px",
                        
                        }}
                        className="overflow-y-auto webkit-scrollbar"
                    >
                    </ContentUser>

                )}
                {tab === "userInfo" && (
                        <ContentUserInfo
                        style={{
                            marginTop: "10px",
                            marginLeft: "10px",
                            marginRight: "10px",
                        
                        }}
                        className="overflow-y-auto webkit-scrollbar"
                    >
                    </ContentUserInfo>

                )}

            </Layout>
        </Layout>
    )
}

export default LayoutDashboard