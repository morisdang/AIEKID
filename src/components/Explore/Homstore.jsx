// import './scss/hompage.scss'
import React, { useState, useEffect, useRef } from "react";
import doremon from "../../assests//khampha2.jpg"
import EventList from "../EventList";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getCookie } from "../../utils/common";
import avartar from "../../hamsbo/openart-image_WOgTguAq_1719236055398_raw.png";
import { eventList } from "../../utils/data";
import './scss/Homstore.scss'

const eventLists_org = [
//   {
//     group_id: "12",
//     group_name: "Khóa học Gợi ý",
//     group_type: "RECOMMEND",
//     children: eventList,
//   },
  {
    group_id: "2",
    group_name: "Dự án Vòng quanh thế giới",
    group_type: "INTEREST",
    children: eventList,
  },
];
export default function HomeExplore() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    setProfile({
        email: getCookie("email"),
        surname: getCookie("family_name") != 'undefined' ? getCookie("family_name") : "Bạn",
        lastname: getCookie("given_name") != 'undefined' ? getCookie("given_name") : " Mới",
        picture: getCookie("picture") != 'undefined' ? getCookie("picture") : avartar,
    });
  }, []);

  return (
    <div className="HomeExplore">
      <div className="py-8 container mt-2 mb-4  rounded-lg">
        <Card sx={{ maxWidth: "100%", display: "flex" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            image={doremon}
            sx={{ width: "30%" }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#00E5EE",
            }}
          >
            <Typography
              align="center"
              gutterBottom
              variant="h4"
              component="div"
            >
              Khám phá
            </Typography>
            <Typography
              align="center"
              variant="h6"
              sx={{ color: "text.secondary" }}
            >
              Xin chào {profile.surname} {profile.lastname}, chào mừng bạn
              đến với phần Khám Phá của AIEKID. Chúc bạn sẽ có những trải nghiệm
              thật đáng giá nhé !
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="py-8 mt-2 mb-4 min-h-[300px]">
        {eventLists_org &&
          eventLists_org.map((item, i) => (
            <EventList explore_mode={true} eventList={item} />
          ))}
      </div>
    </div>
  );
}


