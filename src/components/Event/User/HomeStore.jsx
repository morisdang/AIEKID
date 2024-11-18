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


const eventDetailData = [
  {
    event_id: "123",
    title: "Hành trình sao hỏa",
    event_date: formatDate(new Date(946684800000)),
    time_from: "21:00",
    time_to: "22:00",
    bonus_point_from: 50,
    bonus_point_to: 200,
    description: "Hành trình sao hỏa",
    image_uri: event_1,
    rewards: {},
    join_conditions: {},
    hashtags: ["happiness", "math", "science"],
    joined_members: 100,
    address: "Bình Dương",
  },
  {
    event_id: "345",
    title: "Trí nhớ tuyệt đỉnh",
    event_date: formatDate(new Date(1730390000000)),
    time_from: "17:00",
    time_to: "19:00",
    bonus_point_from: 50,
    bonus_point_to: 200,
    description: "Luyện khả năng ghi nhớ",
    image_uri: memory_event,
    rewards: {},
    join_conditions: {},
    hashtags: ["memory", "brain"],
    joined_members: 100,
    address: "Bình Dương",
  },
  {
    event_id: "567",
    title: "Bậc thầy từ vựng",
    event_date: formatDate(new Date(1731390000000)),
    time_from: "19:00",
    time_to: "21:00",
    bonus_point_from: 50,
    bonus_point_to: 200,
    description: "Hình thành tư duy suy luận",
    image_uri: job_event,
    rewards: {},
    join_conditions: {},
    hashtags: ["brain", "thinking", "english"],
    joined_members: 100,
    address: "Bình Dương",
  },
  {
    event_id: "1",
    title: "fdffdd",
    event_date: formatDate(new Date(1731390000000)),
    time_from: "19:00",
    time_to: "21:00",
    bonus_point_from: 50,
    bonus_point_to: 200,
    description: "Hình thành tư duy suy luận",
    image_uri: event_03,
    rewards: {},
    join_conditions: {},
    hashtags: ["brain", "thinking", "english"],
    joined_members: 100,
    address: "Bình Dương",
  },
  {
    event_id: "2",
    title: "Bdfds",
    event_date: formatDate(new Date(1731390000000)),
    time_from: "19:00",
    time_to: "21:00",
    bonus_point_from: 50,
    bonus_point_to: 200,
    description: "Hình thành tư duy suy luận",
    image_uri: event_05,
    rewards: {},
    join_conditions: {},
    hashtags: ["brain", "thinking", "english"],
    joined_members: 100,
    address: "Bình Dương",
  },
];

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
    event_id: "123",
    title: "Sơ lược về lược sử con người",
    event_date: formatDate(new Date(946684800000)),
    time_from: "19:00",
    time_to: "22:00",
    bonus_point_from: 20,
    bonus_point_to: 200,
    description: "Từ vựng về lịch sử con người",
    image_uri: event_03,
    rewards: {},
    join_conditions: {},
    hashtags: ["history", "thinking", "theory"],
    joined_members: 100,
    address: "Bình Dương",
  },
  {
    event_id: "345",
    title: "Trí nhớ tuyệt đỉnh",
    event_date: formatDate(new Date(1730390000000)),
    time_from: "15:00",
    time_to: "19:00",
    bonus_point_from: 250,
    bonus_point_to: 500,
    description: "Luyện khả năng ghi nhớ",
    image_uri: memory_event,
    rewards: {},
    join_conditions: {},
    hashtags: ["memory", "brain"],
    joined_members: 100,
    address: "Bình Dương",
  },
  {
    event_id: "567",
    title: "Bậc thầy từ vựng",
    event_date: formatDate(new Date(1731390000000)),
    time_from: "19:00",
    time_to: "21:00",
    bonus_point_from: 1000,
    bonus_point_to: 3000,
    description: "Hình thành tư duy suy luận",
    image_uri: job_event,
    rewards: {},
    join_conditions: {},
    hashtags: ["brain", "thinking", 'english'],
    joined_members: 100,
    address: "Bình Dương",
  },
  {
    event_id: "1",
    title: "Cao bồi miền viễn tây",
    event_date: formatDate(new Date(1731390000000)),
    time_from: "19:00",
    time_to: "21:00",
    bonus_point_from: 2440,
    bonus_point_to: 3000,
    description: "Góc nhìn lịch sử miền viễn Tây",
    image_uri: event_01,
    rewards: {},
    join_conditions: {},
    hashtags: ["history", "thinking", 'special'],
    joined_members: 100,
    address: "Bình Dương",
  },
  {
    event_id: "2",
    title: "Hành trình sao Hỏa",
    event_date: formatDate(new Date(1731390000000)),
    time_from: "19:00",
    time_to: "21:00",
    bonus_point_from: 50,
    bonus_point_to: 200,
    description: "Từ vựng cần nhớ khi lên sao Hỏa?",
    image_uri: event_02,
    rewards: {},
    join_conditions: {},
    hashtags: ["brain", "science", 'english'],
    joined_members: 100,
    address: "Bình Dương",
  },

];

const eventLists_org = [
  {
    group_id: "32",
    group_name: "🔥 Siêu hot",
    group_type: "HOT",
    children: eventList,
  },
  {
    group_id: "43",
    group_name: "🔥 Siêu sáng tạo",
    group_type: "CREATIVE",
    children: eventList,
  },
  {
    group_id: "12",
    group_name: "🔥 Được yêu thích nhất",
    group_type: "CREATIVE",
    children: eventList,
  },
  {
    group_id: "645",
    group_name: "🔥 Được yêu thích nhất",
    group_type: "HOT",
    children: eventList,
  },
];

const HomeStore = () => {
  const { creatorId } = useParams(); // Extracting creatorId from URL params
  const [eventLists, setEventLists] = useState([]);
  const [eventType, setEventType] = useState("HOT");

  useEffect(() => {
    filterEvent(eventLists_org, eventType);
  }, [eventType]);

  const [is_show, setIsShow] = useState(true);

  const filterEvent = (events, type) => {
    let eventListsCurrent = events.filter((event) => event.group_type === type);
    setEventLists(eventListsCurrent);
  };

  return (
    <Fragment>
      <div style={{ backgroundColor: "#4b2075" }} className=" py-4 header-event">
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
