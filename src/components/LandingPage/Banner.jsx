import React from "react";
import { Box } from "@mui/material";
import banner from '../../assets/img/banner.png'

const Banner = () => {
  return (
    <Box sx={{mt:10,height:"452px"}}>
      <img src={banner} alt="" />
    </Box>
  );
};

export default Banner;
