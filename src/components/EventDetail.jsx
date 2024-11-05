import { useState, useEffect } from "react";
import "./scss/EventDetail.scss";
import { useParams } from "react-router-dom";
import SwiperPagination from "./SwiperPagination";
import doremon from "../assests/doremon-vertical.jpg";
import memory_event from "../assests/memory_event.png";
import job_event from "../assests/Nghe-nghiep.jpg";
import event_01 from '../hamsbo/images/sự kiện/Cao bồi miền viễn tây.jpg'
import event_02 from '../hamsbo/images/sự kiện/khám phá vũ trụ.jpg'
import event_03 from '../hamsbo/images/sự kiện/thời đại khủng long.jpg'
import event_04 from '../hamsbo/images/sự kiện/Thư viện phép thuật.jpg'
import event_05 from '../hamsbo/images/sự kiện/halloween-haunted-house-concept-free-vector.jpg'
import event_06 from '../hamsbo/images/sự kiện/truy tìm sự thật.jpg'
import HoverRating from "./Rating";
import { formatDate } from "../utils/common";
import Ranking from "./Ranking";

// const swiperData = [
//   {
//     imageShow: doremon,
//     url: "url",
//   },
// ];

const rankingDetail = [
  { name: "Kaito Kid", point: 131.2 },
  { name: "Nam lun", point: 80 },
  { name: "Kinh can", point: 76 },
  { name: "Soi bac", point: 55 },
];

const eventDetailData = [
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

function EventDetail() {
  const { event_id } = useParams();
  const [eventDetail, setEventDetail] = useState(null);
  const [saveEvents, setSaveEvents] = useState([]);
  const [likeEvents, setLikeEvents] = useState([]);

  useEffect(() => {
    const event = eventDetailData.find((event) => event.event_id === event_id);
    setEventDetail(event);
  }, [event_id]);

  const handleSave = (event_id) => {
    setSaveEvents((prev) =>
      prev.includes(event_id)
        ? prev.filter((id) => id !== event_id)
        : [...prev, event_id]
    );
  };

  const handleLike = (event_id) => {
    setLikeEvents((prev) =>
      prev.includes(event_id)
        ? prev.filter((id) => id !== event_id)
        : [...prev, event_id]
    );
  };

  if (!eventDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-detail-wrapper flex-1 mt-4 flex justify-around items-start">
      <div className="border-r-2 p-10">
        <div className="flex flex-row items-start container ">
          <div className="product-image m-0 relative p-0">
            <div className="w-100 h-100 rounded-l-[20px] rounded-r-none overflow-hidden flex">
              <img src={eventDetail.image_uri} className="object-cover"></img>
            </div>
          </div>

          <div className="product-details">
            <header className="mb-5">
              <h1 className="title text-4xl title-detail">
                {eventDetail.title}
              </h1>
              <div className="mt-2 mb-2">
                <HoverRating />
              </div>
              <div className="flex items-center justify-start text-sm text-gray-500 mb-2">
                <span className="mr-2">
                  <i className="far fa-calendar-alt mr-2"></i>
                  {eventDetail.event_date}
                </span>
                <span className="ml-2">
                  <i className="far fa-clock"></i> {eventDetail.time_from} to{" "}
                  {eventDetail.time_to}
                </span>
              </div>
              <div className="price">
                <span className="before text-base text-gray-600">Bonus:</span>
                <span className="text-yellow-500 text-base p-2 font-medium">
                  {eventDetail.bonus_point_from} - {eventDetail.bonus_point_to}{" "}
                  coin
                </span>
              </div>
              <div className="flex justify-start items-center border-t pt-1 mt-2 border-gray-200">
                <button className="text-pink-500 hover:text-pink-700">
                  <i className="fas fa-share-alt"></i> Chia sẻ
                </button>
                <button
                  onClick={() => handleSave(eventDetail.event_id)}
                  className="ml-8 text-blue-600 hover:text-blue-800"
                >
                  <i
                    className={`fa-solid fa-bookmark ${saveEvents.includes(eventDetail.event_id) ? "text-blue-600 hover:text-blue-800" : "text-blue-300 hover:text-blue-400"}`}
                  ></i>{" "}
                  Lưu
                </button>
                <button
                  onClick={() => handleLike(eventDetail.event_id)}
                  className="ml-8 text-red-600 hover:text-red-800"
                >
                  <i
                    className={`fas fa-heart ${likeEvents.includes(eventDetail.event_id) ? "text-red-600 hover:text-red-800" : "text-red-300 hover:text-red-400 "}`}
                  ></i>{" "}
                  120+
                </button>
              </div>
            </header>
            <article>
              <h5>Mô tả</h5>
              <p>{eventDetail.description}</p>
            </article>
            <div className="controls">
              <div className="text-sm text-gray-500">
                <h5>Phần thưởng</h5>
                <ul className="flex space-x-2">
                  <li className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer">
                    #Top1
                  </li>
                  <li className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer">
                    #Top2
                  </li>
                  <li className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer">
                    #Top3
                  </li>
                </ul>
              </div>
              <div className="qty">
                <h5>Level</h5>
                <label className="mt-3 text-gray-500 text-base font-bold">
                  {eventDetail.join_conditions.level_required
                    ? eventDetail.join_conditions.level_required
                    : "Free"}
                </label>
              </div>
            </div>

            <div className="footer">
              <button
                type="button"
                onClick={() => {
                  if (eventDetail.event_id === "123") {
                    window.location.href = `/event/${eventDetail.event_id}/pin`;
                  } else if (eventDetail.event_id === "345") {
                    window.location.href = `/event/${eventDetail.event_id}/memory`;
                  } else if (eventDetail.event_id === "567") {
                    window.location.href = `/event/${eventDetail.event_id}/guess`;
                  }
                }}
              >
                <i className="fa-solid fa-hand-point-right text-xl text-white"></i>
                <span>Đăng kí ngay</span>
              </button>
              <div className="flex justify-between items-center p-4 border-t border-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/12 mr-100 p-4">
        <Ranking rankingDetail={rankingDetail} />
      </div>
    </div>
  );
}

export default EventDetail;
