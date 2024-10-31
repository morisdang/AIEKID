import React from 'react';
import { Tabs, Tab } from '@mui/material'; // Assuming you're using Material-UI
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function IconLabelTabs({ iconLabelData }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className='IconLabelTabs'>
        <Tabs value={value} onChange={handleChange}>
        {iconLabelData.map((item, index) => (
            <Tab key={index} icon={item.icon} label={item.label} />
        ))}
        </Tabs>
    </div>

  );
}

