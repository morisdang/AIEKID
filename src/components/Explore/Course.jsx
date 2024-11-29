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
import Lesson from "./Lesson";
import topicContentData from "../../utils/topicData";
import topicImageData from "../../utils/topicImageData";
import { useParams } from "react-router-dom";
import { eventList } from "../../utils/data";


import dvnt_bia from '../../assests/khám phá/ảnh bìa/Screenshot 2024-11-28 231132.png'
import dvnt_bia1 from '../../assests/khám phá/ảnh bìa/Screenshot 2024-11-28 231114.png'
import dvnt_bia2 from '../../assests/khám phá/ảnh bìa/Screenshot 2024-11-28 231132.png'
import dvnt_bia3 from '../../assests/khám phá/ảnh bìa/Screenshot 2024-11-29 020525.png'
import dvnt_1 from '../../assests/khám phá/Động vật nông trại/Screenshot 2024-11-28 222621.png'
import dvnt_2 from '../../assests/khám phá/Động vật nông trại/Screenshot 2024-11-28 222743.png'
import dvnt_3 from '../../assests/khám phá/Động vật nông trại/Screenshot 2024-11-28 222804.png'
import dvnt_4 from '../../assests/khám phá/Động vật nông trại/Screenshot 2024-11-28 222823.png'
import dvnt_5 from '../../assests/khám phá/Động vật nông trại/Screenshot 2024-11-28 222823.png'
import { TroubleshootRounded } from "@mui/icons-material";

const topicList = [
    {
      id: "1",
      title: 'Chương I',
      description: 'Hành trình với sao Hỏa nha!',
      image_uri: dvnt_bia,
    },


]  


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





const breadcrumbs = [
  {
    title: "Khám phá",
    icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
    link: null,
    index:0,
  },


]


const lessonList = [
    {
      id: "1",
      title: 'Động vật hoang dã',
      description: 'Hành trình với sao Hỏa nha!',
      image_uri: dvnt_bia1,
      active: true,

    },
    {
      id: "6",
      title: 'Động vật dưới biển',
      description: 'Hành trình với sao Hỏa nha!',
      image_uri: dvnt_bia2,
      active: true,
    },
    {
      id: "7",
      title: 'Các loài chim',
      description: 'Hành trình với sao Hỏa nha!',
      image_uri: dvnt_bia3,
      active: false,

    },


]  

const explore_dict = {
    topic: topicList,
    lessonList: lessonList,
   

}

function CourseExplore() {
  const [breadcrumbList, setBreadcrumbList] = useState(breadcrumbs);
  const [contentList, setContentList] = useState(explore_dict['topic']);
  const [breadIndex, setBreadIndex] = useState(breadcrumbs.length);
  const [currentPos, setCurrentPos] = useState('topic');
  const { explore_id } = useParams();
  useEffect(() => {
    const topicItem = eventList.find((item) => item.event_id === explore_id);
    setBreadcrumbList([...breadcrumbList, {
        title: topicItem.title,
        icon: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        link: "topic",
        index:1,
        
    }])

  }, [explore_id])

  const handleSwitchBreadcrumb = (item) => {
    if (item && item.index === 0){
        window.location.href = '/explore';
    
    } else {
        if (item.link){
            setCurrentPos(item.link)
            setBreadcrumbList(breadcrumbList.slice(0, item.index+1));
            setContentList(explore_dict[item.link])
        }
    }


  }
  const handleClickContent = (item, nextPos) => {

    let breadcrumb = {
        title: item.title,
        icon: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        link: nextPos,
        index: breadcrumbList.length
        }
    if (nextPos) {
        if (nextPos === 'lesson'){
            const lessonItem = topicImageData.find((lessones) => lessones.id === item.id);
            setContentList(lessonItem)
        } else {
            setContentList(explore_dict[nextPos])
        }
        setBreadcrumbList([...breadcrumbList, breadcrumb])
        setCurrentPos(nextPos)
    } 


  }
console.log(currentPos)
  return (
    <div
      className='CourseExplore container mt-5 min-h-screen w-full'
    >

      <IconBreadcrumbs breadcrumbList={breadcrumbList} handleSwitchBreadcrumb={handleSwitchBreadcrumb} />
        {
        currentPos === 'topic' ? (
            <TopicExplore contentList={contentList} handleClickContent={handleClickContent} />
        ) : currentPos === 'lessonList' ? (
            <LessonExplore contentList={contentList} handleClickContent={handleClickContent} />
        ) : currentPos === 'lesson' ? (
            <Lesson contentList={contentList} />
        ) : null
        }

    </div>
  );
};

export default CourseExplore;
