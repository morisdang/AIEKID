import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AnimationIcon from '@mui/icons-material/Animation';
import StarsIcon from '@mui/icons-material/Stars';
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
            <Tab icon={<WhatshotIcon />} value="HOT" label="SIÊU HOT" />
            <Tab icon={<EmojiObjectsIcon />} value="CREATIVE" label="SÁNG TẠO" />
            <Tab icon={<AnimationIcon />} value="OLYMPIA" label="OLYMPIA" />
            <Tab icon={<StarsIcon />} value="FAVORITE" label="YÊU THÍCH  " />
        </Tabs>


  );
}
