import React, { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import "./scss/HomeStore.scss";
import YourPro from "./YourPro";
import CardGame from "./CardGame";
import IconlTabs from "./Tabs";
import SwiperPagination from "../../SwiperPagination";
import doremon from "../../../assests/doremon.jpg";
import memory_event from "../../../assests/memory_event.png";
import job_event from "../../../assests/Nghe-nghiep.jpg";
import event_1 from "../../../assests/event_1.jpg";
import event_2 from "../../../assests/event_2.jpg";
import event_3 from "../../../assests/event_3.jpg";
import event_4 from "../../../assests/event_4.jpg";
import event_5 from "../../../assests/event_5.jpg";
import event_6 from "../../../assests/event_6.jpg";
import AssistantIcon from "@mui/icons-material/Assistant";
import EventList from "../../EventList";
import { formatDate } from "../../../utils/common";

import event_01 from '../../../hamsbo/images/sự kiện/Cao bồi miền viễn tây.jpg'
import event_02 from '../../../hamsbo/images/sự kiện/khám phá vũ trụ.jpg'
import event_03 from '../../../hamsbo/images/sự kiện/thời đại khủng long.jpg'
import event_04 from '../../../hamsbo/images/sự kiện/Thư viện phép thuật.jpg'
import event_05 from '../../../hamsbo/images/sự kiện/halloween-haunted-house-concept-free-vector.jpg'
import event_06 from '../../../hamsbo/images/sự kiện/truy tìm sự thật.jpg'
import { apiEvent } from "../../../ConnectBE/axios";
import {apiEventGroup} from "../../../ConnectBE/axios";

// const eventDetailData = [
//   {
//     event_id: "1",
//     title: "Hành trình sao hỏa",
//     event_date: formatDate(new Date(946684800000)),
//     time_from: "21:00",
//     time_to: "22:00",
//     bonus_point_from: 50,
//     bonus_point_to: 200,
//     description: "Hành trình sao hỏa",
//     image_uri: event_1,
//     rewards: {},
//     join_conditions: {},
//     hashtags: ["happiness", "math", "science"],
//     joined_members: 100,
//     address: "Bình Dương",
//   },
//   {
//     event_id: "2",
//     title: "Trí nhớ tuyệt đỉnh",
//     event_date: formatDate(new Date(1730390000000)),
//     time_from: "17:00",
//     time_to: "19:00",
//     bonus_point_from: 50,
//     bonus_point_to: 200,
//     description: "Luyện khả năng ghi nhớ",
//     image_uri: memory_event,
//     rewards: {},
//     join_conditions: {},
//     hashtags: ["memory", "brain"],
//     joined_members: 100,
//     address: "Bình Dương",
//   },
//   {
//     event_id: "3",
//     title: "Bậc thầy từ vựng",
//     event_date: formatDate(new Date(1731390000000)),
//     time_from: "19:00",
//     time_to: "21:00",
//     bonus_point_from: 50,
//     bonus_point_to: 200,
//     description: "Hình thành tư duy suy luận",
//     image_uri: job_event,
//     rewards: {},
//     join_conditions: {},
//     hashtags: ["brain", "thinking", "english"],
//     joined_members: 100,
//     address: "Bình Dương",
//   },
//   {
//     event_id: "1",
//     title: "fdffdd",
//     event_date: formatDate(new Date(1731390000000)),
//     time_from: "19:00",
//     time_to: "21:00",
//     bonus_point_from: 50,
//     bonus_point_to: 200,
//     description: "Hình thành tư duy suy luận",
//     image_uri: event_03,
//     rewards: {},
//     join_conditions: {},
//     hashtags: ["brain", "thinking", "english"],
//     joined_members: 100,
//     address: "Bình Dương",
//   },
//   {
//     event_id: "2",
//     title: "Bdfds",
//     event_date: formatDate(new Date(1731390000000)),
//     time_from: "19:00",
//     time_to: "21:00",
//     bonus_point_from: 50,
//     bonus_point_to: 200,
//     description: "Hình thành tư duy suy luận",
//     image_uri: event_05,
//     rewards: {},
//     join_conditions: {},
//     hashtags: ["brain", "thinking", "english"],
//     joined_members: 100,
//     address: "Bình Dương",
//   },
// ];

const swiperData = [
  {
    imageShow: event_1,
    url: "url",
  },
  {
    imageShow: event_2,
    url: "url",
  },
  {
    imageShow: event_4,
    url: "url",
  },
  {
    imageShow: event_3,
    url: "url",
  },
  {
    imageShow: event_5,
    url: "url",
  },
  {
    imageShow: event_6,
    url: "url",
  },
];

const eventList = [
    {
      event_id: "1",
      title: "Huyền thoại Sơn Tinh - Thủy Tinh",
      event_date: formatDate(new Date(946684800000)), // 2000-01-01
      time_from: "08:30",
      time_to: "11:00",
      bonus_point_from: 20,
      bonus_point_to: 150,
      description: "Tìm hiểu câu chuyện Sơn Tinh - Thủy Tinh, nguồn gốc lũ lụt qua thần thoại Việt Nam. Chuẩn bị cho quiz về truyền thuyết dân gian.",
      image_uri: event_03,
      rewards: {},
      join_conditions: {},
      hashtags: ["vietnam", "mythology", "quiz"],
      joined_members: 100,
      address: "Hà Nội",
    },
    {
      event_id: "2",
      title: "Chiến dịch Điện Biên Phủ - Đỉnh cao lịch sử",
      event_date: formatDate(new Date(1730390000000)), // 2024-11-10
      time_from: "14:00",
      time_to: "17:30",
      bonus_point_from: 300,
      bonus_point_to: 700,
      description: "Khám phá các yếu tố chiến lược và nhân vật chính trong chiến thắng Điện Biên Phủ. Tạo quiz giúp học viên phân tích bài học lịch sử.",
      image_uri: memory_event,
      rewards: {},
      join_conditions: {},
      hashtags: ["history", "war", "quiz"],
      joined_members: 85,
      address: "Điện Biên",
    },
    {
      event_id: "3",
      title: "Giao tiếp với người sao Hỏa về Thiên Văn học",
      event_date: formatDate(new Date(1731390000000)), // 2024-11-12
      time_from: "18:00",
      time_to: "20:30",
      bonus_point_from: 500,
      bonus_point_to: 1200,
      description: "Học các từ vựng và cụm từ thông dụng trong lĩnh vực thiên văn học. Quiz thực hành liên quan đến khám phá vũ trụ.",
      image_uri: job_event,
      rewards: {},
      join_conditions: {},
      hashtags: ["english", "vocabulary", "quiz"],
      joined_members: 90,
      address: "TP. Hồ Chí Minh",
    },
    {
      event_id: "4",
      title: "Núi Lửa",
      event_date: formatDate(new Date(1731390000000)), // 2024-11-12
      time_from: "09:00",
      time_to: "11:30",
      bonus_point_from: 1000,
      bonus_point_to: 3000,
      description: "Khám phá khoa học đằng sau sự phun trào núi lửa. Quiz giúp học viên nhận diện các vùng núi lửa hoạt động mạnh trên thế giới.",
      image_uri: event_01,
      rewards: {},
      join_conditions: {},
      hashtags: ["science", "geology", "quiz"],
      joined_members: 150,
      address: "Nha Trang",
    },
    {
      event_id: "5",
      title: "Vị thần trong thần thoại Hy Lạp",
      event_date: formatDate(new Date(1731490000000)), // 2024-11-13
      time_from: "19:30",
      time_to: "21:30",
      bonus_point_from: 80,
      bonus_point_to: 250,
      description: "Hiểu về những bước tiến vượt bậc của kinh tế Việt Nam từ năm 1986 qua các chính sách Đổi Mới. Quiz về các mốc kinh tế quan trọng.",
      image_uri: event_02,
      rewards: {},
      join_conditions: {},
      hashtags: ["vietnam", "economy", "quiz"],
      joined_members: 110,
      address: "Cần Thơ",
    },
    {
        event_id: "6",
        title: "Thần thoại Bắc Âu: Các vị thần và huyền thoại vĩ đại",
        event_date: formatDate(new Date(1731590000000)), // 2024-11-14
        time_from: "20:00",
        time_to: "22:00",
        bonus_point_from: 150,
        bonus_point_to: 400,
        description: "Khám phá câu chuyện huyền thoại và đặc điểm của các chòm sao nổi tiếng như Orion, Cassiopeia, và Thiên Nga. Quiz thử thách khả năng nhận diện chòm sao qua hình ảnh.",
        image_uri: event_02,
        rewards: {},
        join_conditions: {},
        hashtags: ["astronomy", "constellations", "quiz"],
        joined_members: 95,
        address: "Huế",
      },
      // Sự kiện 7: Các hành tinh trong hệ Mặt Trời
      {
        event_id: "7",
        title: "Bí mật các hành tinh trong hệ Mặt Trời",
        event_date: formatDate(new Date(1731690000000)), // 2024-11-15
        time_from: "18:30",
        time_to: "20:30",
        bonus_point_from: 300,
        bonus_point_to: 600,
        description: "Tìm hiểu về các hành tinh trong hệ Mặt Trời: sao Thủy, sao Kim, sao Hỏa, sao Mộc và hơn thế nữa. Quiz xoay quanh kích thước, khoảng cách và đặc điểm độc đáo của từng hành tinh.",
        image_uri: event_02,
        rewards: {},
        join_conditions: {},
        hashtags: ["astronomy", "planets", "quiz"],
        joined_members: 120,
        address: "Hà Nội",
      },
  ];
  
const eventLists_org = [
  {
    group_id: "1",
    group_name: "🔥 Siêu hot",
    group_type: "HOT",
    children: eventList.slice(0, 4),
  },
  {
    group_id: "2",
    group_name: "🔥 Siêu sáng tạo",
    group_type: "CREATIVE",
    children: eventList.slice(3, 4)
  },
  {
    group_id: "3",
    group_name: "🔥 Được yêu thích nhất",
    group_type: "CREATIVE",
    children: eventList.slice(5, 6),
  },
  {
    group_id: "4",
    group_name: "🔥 Được yêu thích nhất",
    group_type: "HOT",
    children: eventList.slice(5, 6),
  },
];

const HomeStore = () => {
  const { creatorId } = useParams(); // Extracting creatorId from URL params
  const [eventLists, setEventLists] = useState([]);
  const [eventType, setEventType] = useState("");
  const [eventDetail, setEventDetail] = useState(null);
  const [eventGroupDetail, setEventGroupDetail] = useState([]);
  const getRandomFutureDate = () => {
    const now = new Date().getTime();
    const twoWeeksFromNow = now + 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
    const randomTimestamp = new Date(now + Math.random() * (twoWeeksFromNow - now));
    return randomTimestamp;
  };
  useEffect(() => {
    apiEvent()
      .then((events) => {
        apiEventGroup()
          .then((group_event) => {
            // loop through events and map to group event
            // const res = eventLists_org.map((group) => {
            //   // add event_date to each event
            //   const children = eventList
            //     .filter((event) => event.group_id)
            //     .map((event) => ({
            //       ...event,
            //       event_date: formatDate(getRandomFutureDate()),
            //     }));
            //   return {
            //     ...group,
            //     children,
            //   };
            // });

            setEventGroupDetail(eventLists_org);
            setEventType("HOT");

          })
          .catch((error) => {
            console.error('Error getting event detail:', error);
          });
      })
      .catch((error) => {
        console.error('Error getting event detail:', error);
      });
      console.log("eventGroupDetail", eventGroupDetail);
  }, []);

  useEffect(() => {
    filterEvent(eventGroupDetail, eventType);
  }, [eventType]);
  console.log("eventGroupDetail", eventGroupDetail);
  
  const filterEvent = (events, type) => {
    let eventListsCurrent = events.filter((event) => event.group_type === type);
    setEventLists(eventListsCurrent);
  };

  return (
    <Fragment>
      <div className="bg-purple-800 py-4 header-event">
        <div className="container mx-auto flex justify-around items-center text-white">
          <div className="flex items-center">
            <AssistantIcon />
            <span className="text-lg font-bold">500+ Sự kiện lớn nhỏ</span>
          </div>
          <div className="flex items-center">
            <AssistantIcon />

            <span className="text-lg font-bold">15+ Dạng sự kiện hấp dẫn</span>
          </div>
          <div className="flex items-center">
            <AssistantIcon />

            <span className="text-lg font-bold">Hơn 1000+ trẻ em tham gia</span>
          </div>
          <div className="flex items-center">
            <AssistantIcon />
            <span className="text-lg font-bold">5+ giải thưởng lớn</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <SwiperPagination swiperData={swiperData} />
      </div>

      <div className="tab-wapper mt-10 top-[90px] z-[100] bg-white">
        <IconlTabs setEventType={setEventType} />
      </div>
      <div className="py-8 mt-2 mb-4 min-h-[300px]">
        {eventLists &&
          eventLists.map((item, i) => <EventList eventList={item} />)}
      </div>

      {/* <div className="container_game-store">
                {filteredEvents.map((item, index) => (
                <CardGame eventInfo={item}/>

                ))}

            </div> */}
    </Fragment>
  );
};

export default HomeStore;
