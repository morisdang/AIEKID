import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs({breadcrumbList, handleSwitchBreadcrumb}) {

    console.log(breadcrumbList)
  return (
    <div role="presentation">

        <Breadcrumbs aria-label="breadcrumb">
            {breadcrumbList && breadcrumbList.map((item, i) => (
                i === breadcrumbList.length - 1 ? (
                    <Typography
                        key={i}
                        sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
                    >
                        {item.icon}
                        
                        {item.title} {/* Display the last breadcrumb item */}
                    </Typography>
                ) : (
                    <Link
                        key={i}
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        onClick={() => (handleSwitchBreadcrumb(item))}
                    >

                        {item.icon}
                        {item.title}
                    </Link>
                )
            ))}
        </Breadcrumbs>
    </div>
  );
}
