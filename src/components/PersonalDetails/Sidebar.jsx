import React from 'react';
import LinearProgressBar from '../LinearProgressBar';
import CircleProgress from '../CircleProgress';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import ExploreIcon from '@mui/icons-material/Explore';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import './scss/Sidebar.scss'
import { useState, useEffect } from "react";
import InfomationDetail from './InfomationDetail';
import PaymentDetail from './PaymentDetail';
import Achievement from './Achievement';
const menuItems = [
    { text: 'Personal Detail', icon: <ChatIcon /> , href: '/hambo/chat', progress: 10, component: <InfomationDetail/>},
    { text: 'Achievement', icon: <ExploreIcon /> , href: '/hambo/lib', progress: 20, component: <Achievement/>},
    { text: 'Favorate', icon: <HomeIcon /> , href: '/hambo/export', progress: 10},
    { text: 'Storage', icon: <EventIcon /> , href: '/hambo/utils', progress: 10},
    { text: 'Premium', icon: <EventIcon /> , href: '/hambo/utils', progress: 10, component: <PaymentDetail/>},
  ];


const classes = {
    listItemClicked:"listItemClicked",
    listItemNotClicked:"listItemNotClicked"
}
const Sidebar = ({setComponent}) => {
    const [clickedItem, setClickedItem] = useState(0);
    const handleChangeMenu = (index) => {
        setClickedItem(index)
        setComponent(menuItems[index].component)
    }
    return (
        <React.Fragment>

        <Box sx={{ p: 2}}>

            <List>
                {menuItems && menuItems.length > 0 && menuItems.map((item, index) => (
                                <ListItem 
                                className={
                                    clickedItem === index
                                      ? classes.listItemClicked
                                      : classes.listItemNotClicked
                                  }
                                  onClick={() => handleChangeMenu(index)}
                                button key={index}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
       
                                </ListItem>
                    ))
                }
            </List>
        </Box>
        <Box sx={{ p: 2, position: 'absolute', bottom: '10px'}}>
            <button type="button" className="w-100 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Frequently Asked Questions
            </button>

            <button type="button" className="w-100 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Contact us
            </button>
        </Box>
        </React.Fragment>

    );
};

export default Sidebar;