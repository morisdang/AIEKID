import React from 'react';
import InfomationDetail from './PersonalDetails/InfomationDetail';
import Sidebar from './PersonalDetails/Sidebar';
import Header from './Header';
import DrawerCOM from './drawer';
const PersonalDetails = () => {
    return (
        <div className="flex min-h-screen">
            <DrawerCOM component={InfomationDetail} sidebar={Sidebar}/>
        </div>
    );
};

export default PersonalDetails;