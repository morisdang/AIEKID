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
import { useLocation } from "react-router-dom";
import {apiUserUpdate} from "../ConnectBE/axios";
import { getCookie } from "../utils/common";
import {apiEvent} from "../ConnectBE/axios";
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
  { name: "Soi bac", point: 55 },
  { name: "Soi bac", point: 55 },
  { name: "Soi bac", point: 55 },
  { name: "Soi bac", point: 55 },
  { name: "Soi bac", point: 55 },
  { name: "Soi bac", point: 55 },
  { name: "Soi bac", point: 55 },
  { name: "Soi bac", point: 55 },
  { name: "Soi bac", point: 55 },
  { name: "Soi bac", point: 55 },
  { name: "Soi bac", point: 55 },
  { name: "Soi bac", point: 55 },   
];

const eventDetailData = [
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
          game_type:"pin",
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
          game_type:"guess",

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
          game_type:"guess",

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
          game_type:"pin",

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
          game_type:"pin",

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
            game_type:"memory",

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
            game_type:"memory",

          },
      ];

function EventDetail({userInfo}) {
  const { event_id } = useParams();
  const [eventDetail, setEventDetail] = useState(null);
  const [saveEvents, setSaveEvents] = useState([]);
  const [likeEvents, setLikeEvents] = useState([]);
  const location = useLocation();   
    


    // Call api apiEvent to get eventDetailData
    useEffect(() => {
        
    }, []);
  useEffect(() => {
    apiEvent()
        .then((res) => {
            const event = eventDetailData.find((event) => event.event_id === event_id);
            setEventDetail(event);
            setSaveEvents(userInfo? userInfo.saved_events : []);
        })
        .catch((error) => {
            console.error('Error getting event detail:', error);
    });

  }, [userInfo, event_id]);
  const handleSave = (event_id) => {
    setSaveEvents((prev) => {
      const updatedSaveEvents = prev.includes(event_id)
        ? prev.filter((id) => id !== event_id)
        : [...prev, event_id];

      // Call the API after updating the state
      let userId = getCookie("id");
      apiUserUpdate(userId, { saved_events: updatedSaveEvents })
        .then(() => {
          console.log('Save events updated successfully');

        })
        .catch((error) => {
          console.error('Error updating save events:', error);
        });

      return updatedSaveEvents;
    });


  };
  const handleLike = (event_id) => {
    setLikeEvents((prev) =>
      prev.includes(event_id)
        ? prev.filter((id) => id !== event_id)
        : [...prev, event_id]
    );
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("URL copied to clipboard!");
  };

  if (!eventDetail) {
    return <div>Loading...</div>;
  }
  return (
    <div className="event-detail-wrapper flex-1 mt-4 flex justify-around items-start">
      <div className="border-r-2 flex-1 p-10">
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
          
                <button
                  onClick={() => handleSave(eventDetail.event_id)}
                  className="text-blue-600 hover:text-blue-800"
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
                <button
                  onClick={handleCopyUrl}
                  className="ml-8 text-green-600 hover:text-green-800"
                >
                  <i className="fas fa-copy"></i> Chia sẻ
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
                  if (eventDetail.game_type === "pin") {
                    window.location.href = `/event/${eventDetail.event_id}/pin`;
                  } else if (eventDetail.game_type === "memory") {
                    window.location.href = `/event/${eventDetail.event_id}/memory`;
                  } else if (eventDetail.game_type === "guess") {
                    window.location.href = `/event/${eventDetail.event_id}/guess`;
                  }
                }}
              >
                <i className="fa-solid fa-hand-point-right text-xl text-white"></i>
                <span>Tham gia ngay</span>
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
