import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import './scss/Tabs.scss'
export default function IconlTabs({setEventType}) {
  const [value, setValue] = React.useState('HOT');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setEventType(newValue)
  };

  return (
        <Tabs centered value={value} onChange={handleChange} aria-label="icon label tabs example"
            >
            <Tab icon={<PhoneIcon />} value="HOT" label="SIÊU HOT" />
            <Tab icon={<FavoriteIcon />} value="CREATIVE" label="SÁNG TẠO" />
            <Tab icon={<PersonPinIcon />} value="OLYMPIA" label="OLYMPIA" />
            <Tab icon={<PersonPinIcon />} value="FAVORITE" label="YÊU THÍCH  " />
        </Tabs>


  );
}
