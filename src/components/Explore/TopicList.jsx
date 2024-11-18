import React, { useState, useEffect, useRef } from "react";
import IconBreadcrumbs from "./Breadcrumbs";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import doremon from '../../assests/doremon.jpg'
import Card from '@mui/material/Card';

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import { Link } from "react-router-dom";


function   TopicExplore({contentList, handleClickContent}) {
  const [breadcrumbList, setBreadcrumbList] = useState([]);

  return (
    <Box sx={{ flexGrow: 1, margin: "30px" }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {contentList && contentList.map((item, index) => (

        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
          <Card sx={{ width: "98%" }} onClick={() => (handleClickContent(item, 'lessonList'))}>
            <div className="max-w-sm shadow-lghover:shadow-xl bg-white rounded-lg  overflow-hidden transform transition duration-500 hover:scale-105">
              <div className="relative">
                <img className="w-full h-48 object-cover" src={item.image_uri} alt="Hành trình với sao Hỏa" />
              </div>

              <div className="p-2 text-center">
                <h2 className='text-2xl font-semibold text-gray-800'>{item.title}</h2>
              </div>
            </div>

          </Card>
        </Grid>
      ))}

    </Grid>
  </Box>
  );
};

export default TopicExplore;
