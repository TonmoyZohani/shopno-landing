import React, { Component } from "react";
import { Box, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "../../data.js";

function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Box sx={{ width: "1190px", height: "452px", borderRadius: "15px" }}>
        <Slider {...settings}>
          {dataDigitalBestSeller.map((data) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={data.id}
              >
                <Box>
                  <Box
                    component="img"
                    height="452px"
                    width="100%"
                    objectFit="cover"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                    borderRadius="15px"
                    src={data.linkImg}
                    alt=""
                  />
                  <div className="absolute bottom-0 w-full flex justify-center mb-4">
                    {dataDigitalBestSeller.map((_, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full mx-2 ${
                          index === data.id - 1 ? "bg-black" : "bg-gray-300"
                        }`}
                      ></div>
                    ))}
                  </div>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Container>
  );
}

export default HomeSlider;
