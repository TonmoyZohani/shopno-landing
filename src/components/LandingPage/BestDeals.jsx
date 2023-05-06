import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const BestDeals = () => {
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Comfortaa",
            mt: 8,
            fontSize: "25px",
            fontWeight: "700",
          }}
        >
          Best Deals
        </Typography>
        <Typography sx={{ mt: 1, color: "#9C9797", fontFamily: "Poppins" }}>
          Lorem ipsum dolor sit amet consectetur. Volutpat turpis commodo{" "}
        </Typography>
      </Box>
      {/* <SimpleSlider /> */}
    </>
  );
};

export default BestDeals;
