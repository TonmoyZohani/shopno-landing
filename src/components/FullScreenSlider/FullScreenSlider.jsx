import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg from "../../images/SliderImg/s7.png";
import { Skeleton } from "@mui/material";
import slider1 from "../../images/SliderImg/slider1.webp";
import slider2 from "../../images/SliderImg/slider2.webp";
import slider3 from "../../images/SliderImg/slider3.webp";
import slider4 from "../../images/SliderImg/slider4.webp";
import slider5 from "../../images/SliderImg/slider5.webp";

import "./FullScreenSlider.css";
import React from "react";

const FullScreenSlider = () => {
  const img = [
    {
      image: slider1,
    },
    {
      image: slider2,
    },
    {
      image: slider3,
    },
    {
      image: slider4,
    },
    {
      image: slider5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 3000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Box sx={{ margin: "100px 0px" }} className="full-screen-slider">
        <Slider {...settings} arrows={false}>
          {/* {[...new Array(4)].map((item, index) => (
            <Box key={index} className="slider-item">
              <img src={slider1} alt="..." />
              <Box className="slider-text">
                <Typography
                  sx={{
                    fontSize: {
                      lg: "25px",
                      md: "30px",
                      sm: "16px",
                      xs: "16px",
                    },
                    color: "var(--white)",
                    width: "100%",
                  }}
                >
                  On Domestic & International Booking Up to 50% Discount
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "12px",
                      md: "14px",
                      sm: "14px",
                      xs: "14px",
                    },
                    color: "var(--white)",
                    width: "100%",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  perspiciatis quibusdam numquam iusto! Exercitationem,
                  reiciendis expedita laudantium eaque sunt voluptatibus eius
                  veritatis. Blanditiis est exercitationem id laboriosam
                  temporibus, quidem ad.
                </Typography>
              </Box>
            </Box>
          ))} */}

          {img.map((data) => (
            <Box className="slider-item">
              <img width="100%" src={data.image} alt="..." />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default FullScreenSlider;
