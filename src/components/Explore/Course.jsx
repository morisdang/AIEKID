import React, { useState, useEffect, useRef } from "react";
import IconBreadcrumbs from "./Breadcrumbs";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import doremon from '../../assests/doremon.jpg'
import Card from '@mui/material/Card';
import TopicExplore from "./TopicList";
import LessonExplore from "./LessonList";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import { Link } from "react-router-dom";

import { experimentalStyled as styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));





const CourseList = [
  {
    course_id: "123",

    title: 'Hành trình với sao Hỏa',
    description: 'Hành trình với sao Hỏa nha!',
    image_uri: doremon,
  },

  {
    course_id: "123",

    title: 'Hành trình với sao Hỏa',
    description: 'Hành trình với sao Hỏa nha!',
    image_uri: doremon,
  },

  {
    course_id: "123",

    title: 'Hành trình với sao Hỏa',
    description: 'Hành trình với sao Hỏa nha!',
    image_uri: doremon,
  },

  {
    course_id: "123",

    title: 'Hành trình với sao Hỏa',
    description: 'Hành trình với sao Hỏa nha!',
    image_uri: doremon,
  },

  {
    course_id: "123",

    title: 'Hành trình với sao Hỏa',
    description: 'Hành trình với sao Hỏa nha!',
    image_uri: doremon,
  },




];

const breadcrumbs = [
  {
    title: "Khám phá",
    icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
    link: null,
    index:0,
  },
  {
    title: "Hành trình với sao Hỏa",
    icon: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
    link: "topic",
    index:1,

  },

]


const topicList = [
    {
      id: "123",
      title: 'topicList',
      description: 'Hành trình với sao Hỏa nha!',
      image_uri: doremon,
    },
]  
const lessonList = [
    {
      id: "123",
      title: 'lessonList',
      description: 'Hành trình với sao Hỏa nha!',
      image_uri: doremon,
    },
]  

const explore_dict = {
    topic: topicList,
    lesson: lessonList,
}

function CourseExplore() {
  const [breadcrumbList, setBreadcrumbList] = useState(breadcrumbs);
  const [contentList, setContentList] = useState(explore_dict['topic']);
  const [breadIndex, setBreadIndex] = useState(breadcrumbs.length);
  const [currentPos, setCurrentPos] = useState('topic');

  const handleSwitchBreadcrumb = (item) => {
    if (item.link){
        setCurrentPos(item.link)
        setBreadcrumbList(breadcrumbList.slice(0, item.index+1));
        setContentList(explore_dict[item.link])
    }

  }
  const handleClickContent = (item, nextPos) => {
    console.log(nextPos)

    let breadcrumb = {
        title: item.title,
        icon: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        link: nextPos,
        index: breadcrumbList.length
      }
    if (nextPos) {
      setBreadcrumbList([...breadcrumbList, breadcrumb])
      setCurrentPos(nextPos)
      setContentList(explore_dict[nextPos])
    } 

  }
console.log(currentPos)
  return (
    <div
      className='CourseExplore container mt-5 min-h-screen w-full'
    >

      <IconBreadcrumbs breadcrumbList={breadcrumbList} handleSwitchBreadcrumb={handleSwitchBreadcrumb} />

      {currentPos && currentPos === 'topic' ? 
      (<TopicExplore contentList={contentList} handleClickContent={handleClickContent}/>)
      :
      (<LessonExplore contentList={contentList}/>)
      
      }

    </div>
  );
};

export default CourseExplore;
