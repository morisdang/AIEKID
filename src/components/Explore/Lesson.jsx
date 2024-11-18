import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";


import { Image } from "antd";

import { useParams } from "react-router-dom";

function Lesson({contentList}) {
    // const { lesson_id } = useParams();
    const [contentItem, setContentItem] = useState(contentList);

//   useEffect(() => {
//     const topicItem = topicImageData.find((item) => item.id === lesson_id);
//     setContentItem(topicItem);
//   },[lesson_id]);

  const renderCard = (item, index) => {
    return (
      <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
        <Card sx={{ width: "98%" }} onClick={() => handleClickContent(item)}>
          <div className="max-w-sm shadow-lghover:shadow-xl bg-white rounded-lg  overflow-hidden transform transition duration-500 hover:scale-105">
            <div className="relative h-48">
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover"
                  src={item.backgroundImage}
                  alt="Hành trình với sao Hỏa"
                />
              </div>
              <div className="flex h-full items-center justify-center relative z-10 p-2 gap-2">
                {" "}
                {/* Content over the image */}
                <div
                  style={{ fontSize: 8 }}
                  className=" font-bold bg-white p-2 rounded-lg w-40"
                >
                  {item.title}
                  {item.language &&
                    item?.descriptionList.map((item) => {
                      return <div>&#x2022; {item}</div>;
                    })}
                </div>
                <div
                  style={{ fontSize: 8 }}
                  className=" bg-white p-2 rounded-lg text-center w-28"
                >
                  {item.language ? (
                    <>
                      <div className="font-bold" style={{ color: "#f0c72f" }}>
                        {item.language.en}
                      </div>
                      <div>{item.language.code}</div>
                      <div>{item.language.vn}</div>
                    </>
                  ) : (
                    <>
                      {item?.descriptionList.map((item) => {
                        return <div>&#x2022; {item}</div>;
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="p-2 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {item.name ?? item.title}
              </h2>
            </div>
          </div>
        </Card>
      </Grid>
    );
  };

  const renderLeftCard = (item, index) => {
    return (
      <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
        <Card
          sx={{ width: "98%", minHeight: 300 }}
          onClick={() => handleClickContent(item)}
        >
          <div className="max-w-sm shadow-lghover:shadow-xl bg-white rounded-lg  overflow-hidden transform transition duration-500 hover:scale-105">
            <div className="relative h-48">
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover"
                  src={item.backgroundImage}
                  alt="Hành trình với sao Hỏa"
                />
              </div>
              <div className="flex h-full items-center justify-center relative z-10 p-2 gap-2">
                {" "}
                {/* Content over the image */}
                <div
                  style={{ fontSize: 8 }}
                  className=" font-bold bg-white p-2 rounded-lg w-40"
                >
                  {item.title}
                </div>
                {item?.right ? (
                  <div
                    style={{ fontSize: 8 }}
                    className=" bg-white p-2 rounded-lg text-center w-28"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={item?.right?.image}
                      alt="Hành trình với sao Hỏa"
                    />
                  </div>
                ) : (
                  <div
                    style={{ fontSize: 8 }}
                    className=" p-2 rounded-lg text-center w-28"
                  />
                )}
              </div>
            </div>

            <div className="p-2 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {item.name ?? item.title}
              </h2>
            </div>
          </div>
        </Card>
      </Grid>
    );
  };

  const renderImageCard = (item, index) => {
    return (
      <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
        <Card sx={{ width: "98%" }} onClick={() => handleClickContent(item)}>
          <div className="max-w-sm shadow-lghover:shadow-xl bg-white rounded-lg  overflow-hidden transform transition duration-500 hover:scale-105">
            <Image
              className="w-full object-cover"
              src={item.image}
              alt={item.name ?? item.title}
            />

            <div className="p-2 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {item.name ?? item.title}
              </h2>
            </div>
          </div>
        </Card>
      </Grid>
    );
  };
  console.log("contentItem",contentList)
  return (
    <div className="Lesson container mt-5 min-h-screen w-full">

      <Box sx={{ flexGrow: 1, margin: "30px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* {contentItem &&
            contentItem?.contentList?.map((item, index) => {
              return item.type === "leftCard"
                ? renderLeftCard(item, index)
                : renderCard(item, index);
            })}
          {contentItem &&
            (contentItem.type === "leftCard"
              ? renderLeftCard(contentItem.totalContent, 999)
              : renderCard(contentItem.totalContent, 999))} */}

          {contentItem &&
            contentItem?.contentList?.map((item, index) =>
              renderImageCard(item, index)
            )}
        </Grid>
      </Box>
    </div>
  );
}

export default Lesson;
