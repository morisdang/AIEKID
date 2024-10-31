import React, { useEffect, useRef, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import ExploreIcon from '@mui/icons-material/Explore';
import './scss/drawer.scss'
import { getCookie } from "../utils/common";

import Header from './Header';
import Footer from './Footer';
const menuItems = [
    { text: 'Registration', icon: <ChatIcon /> , href: '/hambo/chat'},
    { text: 'Personal details', icon: <ExploreIcon /> , href: '/hambo/lib'},
    { text: 'Family', icon: <HomeIcon /> , href: '/hambo/export'},
    { text: 'Review & confirm', icon: <EventIcon /> , href: '/hambo/utils'},
  ];

const drawerWidth = 320;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function DrawerCOM({ component: ComponentP, sidebar: SidebarP}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [Sidebar, setSidebar] = React.useState(null);
  const [Component, setComponent] = React.useState(<ComponentP />);
  const [ profile, setProfile ] = useState([]);
  const [userId, setUserId] = useState('');
    React.useEffect(() => {
        setSidebar(<SidebarP setComponent={setComponent} />);
    }, [SidebarP]);
  
    useEffect(() => {
      const userId = getCookie("id");
      if (!userId && !['/login', '/register'].includes(window.location.pathname)) {
        window.location.href = '/login';
      } else {
        setUserId(userId);
        setProfile({
            email:getCookie("email"),
            family_name:getCookie("family_name"),
            given_name:getCookie("given_name"),
            picture:getCookie("picture"),
            name:getCookie("name"),
        })
      }
    }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', width:"100%"}}>
      <CssBaseline />
      <AppBar  position="fixed"
        sx={{
            background:"white", 
            padding:'-15px'
        }}
      open={open}>

            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
                {
                    color: 'black',
                    position: 'absolute',
                    top: '50%',
                    left: '20px',
                    zIndex: 100,  // Use camelCase for z-index
                    transform: 'translateY(-50%)',
                    
                },
                open && { display: 'none' },
        
            ]}
            >
            <MenuIcon />
            </IconButton>

            <Header is_show={true} user_profile={profile}/>


  
      </AppBar>
      <Drawer
        sx={[{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            },
        },
        !open && { display: 'none' },
    
    ]}
        variant="persistent"
        anchor="left"
        open={open}
        >
        <DrawerHeader>
            <IconButton
                
            onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            
        </DrawerHeader>
        <Divider />
            {Sidebar}
       
        <Divider />
      </Drawer>
        <div className='draw-container mt-[100px]'>
            {Component}    
        </div>
    </Box>
  );
}
