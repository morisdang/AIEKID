// Imports for The Zoo images
import zooImage2 from "../assets/images/canvas/the zoo/2.jpg";
import zooImage3 from "../assets/images/canvas/the zoo/3.jpg";
import zooImage4 from "../assets/images/canvas/the zoo/4.jpg";
import zooImage5 from "../assets/images/canvas/the zoo/5.jpg";
import zooImage6 from "../assets/images/canvas/the zoo/6.jpg";
import zooImage7 from "../assets/images/canvas/the zoo/7.jpg";
import zooImage8 from "../assets/images/canvas/the zoo/8.jpg";

// Imports for Hamsbo Eat images
import eatImage20 from "../assets/images/canvas/hamsbo-eat/20.jpg";
import eatImage21 from "../assets/images/canvas/hamsbo-eat/21.jpg";
import eatImage22 from "../assets/images/canvas/hamsbo-eat/22.jpg";
import eatImage23 from "../assets/images/canvas/hamsbo-eat/23.jpg";
import eatImage24 from "../assets/images/canvas/hamsbo-eat/24.jpg";
import eatImage25 from "../assets/images/canvas/hamsbo-eat/25.jpg";
import eatImage26 from "../assets/images/canvas/hamsbo-eat/26.jpg";
import eatImage27 from "../assets/images/canvas/hamsbo-eat/27.jpg";
import eatImage28 from "../assets/images/canvas/hamsbo-eat/28.jpg";

// Imports for Hamsbo Home images
import homeImage10 from "../assets/images/canvas/hamsbo-home/10.jpg";
import homeImage11 from "../assets/images/canvas/hamsbo-home/11.jpg";
import homeImage12 from "../assets/images/canvas/hamsbo-home/12.jpg";
import homeImage13 from "../assets/images/canvas/hamsbo-home/13.jpg";
import homeImage14 from "../assets/images/canvas/hamsbo-home/14.jpg";
import homeImage15 from "../assets/images/canvas/hamsbo-home/15.jpg";
import homeImage16 from "../assets/images/canvas/hamsbo-home/16.jpg";
import homeImage17 from "../assets/images/canvas/hamsbo-home/17.jpg";
import homeImage18 from "../assets/images/canvas/hamsbo-home/18.jpg";

// Imports for History images
import historyImage29 from "../assets/images/canvas/history/29.jpg";
import historyImage30 from "../assets/images/canvas/history/30.jpg";
import historyImage31 from "../assets/images/canvas/history/31.jpg";
import historyImage32 from "../assets/images/canvas/history/32.jpg";
import historyImage33 from "../assets/images/canvas/history/33.jpg";
import historyImage34 from "../assets/images/canvas/history/34.jpg";
import historyImage35 from "../assets/images/canvas/history/35.jpg";
import historyImage36 from "../assets/images/canvas/history/36.jpg";

// Imports for Poem images
import poemImage38 from "../assets/images/canvas/poem/38.jpg";
import poemImage39 from "../assets/images/canvas/poem/39.jpg";
import poemImage40 from "../assets/images/canvas/poem/40.jpg";
import poemImage41 from "../assets/images/canvas/poem/41.jpg";
import poemImage42 from "../assets/images/canvas/poem/42.jpg";
import poemImage43 from "../assets/images/canvas/poem/43.jpg";
import poemImage44 from "../assets/images/canvas/poem/44.jpg";
import dvdb_1 from '../assests/khám phá/động vật dưới biển/Screenshot 2024-11-28 222959.png'
import dvdb_2 from '../assests/khám phá/động vật dưới biển/Screenshot 2024-11-28 223039.png'
import dvdb_3 from '../assests/khám phá/động vật dưới biển/Screenshot 2024-11-28 223056.png'
import dvdb_4 from '../assests/khám phá/động vật dưới biển/Screenshot 2024-11-28 223113.png'
import dvdb_5 from '../assests/khám phá/động vật dưới biển/Screenshot 2024-11-28 223128.png'

import lc_1 from '../assests/khám phá/loài chim/Screenshot 2024-11-29 015043.png'
import lc_2 from '../assests/khám phá/loài chim/Screenshot 2024-11-29 015101.png'
import lc_3 from '../assests/khám phá/loài chim/Screenshot 2024-11-29 015117.png'
import lc_4 from '../assests/khám phá/loài chim/Screenshot 2024-11-29 015144.png'
import lc_5 from '../assests/khám phá/loài chim/Screenshot 2024-11-29 015205.png'
const topicImageData = [
  {
    id: "1",
    contentList: [
      { name: "Đi đến The Zoo", image: zooImage2 },
      { name: "Con sư tử", image: zooImage3 },
      { name: "Con hươu cao cổ", image: zooImage4 },
      { name: "Con khỉ", image: zooImage5 },
      { name: "Con voi", image: zooImage6 },
      { name: "Hành trình kết thúc", image: zooImage7 },
      { name: "Câu hỏi", image: zooImage8 },
    ],
  },
  {
    id: "6", // Corrected the duplicate id from "547" to "548"
    contentList: [
      { name: "Con cá voi", image: dvdb_1 },
      { name: "Con cá mập", image: dvdb_2 },
      { name: "Con bạch tuột", image: dvdb_3 },
      { name: "Con rùa biển ", image: dvdb_4 },
      { name: "Con sao biển", image: dvdb_5 },

    ],
  },
  {
    id: "7", // Corrected the duplicate id from "547" to "548"
    contentList: [
      { name: "Chim bồ câu", image: lc_1 },
      { name: "Chim đại bàng", image: lc_2 },
      { name: "Con cú đêm", image: lc_3 },
      { name: "Con chim sẻ ", image: lc_4 },
      { name: "Con vịt trời", image: lc_5 },

    ],
  },
  {
    id: "2",
    contentList: [
      { name: "Ăn gì cùng HAMSBO", image: eatImage20 },
      { name: "Favorite food", image: eatImage21 },
      { name: "Món Pizza", image: eatImage22 },
      { name: "Món gà rán", image: eatImage23 },
      { name: "Mì ý", image: eatImage24 },
      { name: "Món salad", image: eatImage25 },
      { name: "Ice Cream", image: eatImage26 },
      { name: "Tổng kết", image: eatImage27 },
      { name: "Câu hỏi", image: eatImage28 },
    ],
  },
  {
    id: "3",
    contentList: [
      { name: "Ngôi nhà của HAMSBO", image: homeImage10 },
      { name: "Ngôi nhà", image: homeImage11 },
      { name: "Phòng khách", image: homeImage12 },
      { name: "Cái ghế", image: homeImage13 },
      { name: "Phòng bếp", image: homeImage14 },
      { name: "Phòng tắm", image: homeImage15 },
      { name: "Phòng ngủ", image: homeImage16 },
      { name: "Tổng kết", image: homeImage17 },
      { name: "Câu hỏi", image: homeImage18 },
    ],
  },
  {
    id: "4",
    contentList: [
      { name: "Lịch sử", image: historyImage29 },
      { name: "Ngồ quyền chiến thuật", image: historyImage30 },
      { name: "Khám phá lịch sử", image: historyImage31 },
      { name: "Năm 938", image: historyImage32 },
      { name: "Chiến thuật", image: historyImage33 },
      { name: "Thi hành chiến thuật", image: historyImage34 },
      { name: "Tổng kết", image: historyImage35 },
      { name: "Câu hỏi", image: historyImage36 },
    ],
  },
  {
    id: "5", // Corrected the duplicate id from "547" to "548"
    contentList: [
      { name: "Nam quốc sơn hà", image: poemImage38 },
      { name: "Thế kỷ 11", image: poemImage39 },
      { name: "Lý Thường Kiệt quyết định", image: poemImage40 },
      { name: "Bài thơ", image: poemImage41 },
      { name: "Bản dịch", image: poemImage42 },
      { name: "Tổng kết", image: poemImage43 },
      { name: "Câu hỏi", image: poemImage44 },
    ],
  },

];

export default topicImageData;
