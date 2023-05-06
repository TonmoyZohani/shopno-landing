import { Box, Button, Typography, Container } from "@mui/material";
import React from "react";

const DashboardHeader = () => {
  return (
  
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "rose.400",
          width: "1450px",
          backgroundColor: "#EBF0F4",
          "& > * + *": {
            marginLeft: "8px",
          },
        }}
      >
        <Box
          sx={{
            width: "353px",
            height: "93px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <div>
            <Typography variant="subtitle1" sx={{ color: "#2156A6" }}>
              Today Total Deposit
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "30px" }}>
              5,00 BDT
            </Typography>
          </div>
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: "10px", backgroundColor: "#2156A6" }}
          >
            12 OCT 2022
          </Button>
        </Box>
        <Box
          sx={{
            width: "353px",
            height: "93px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <div>
            <Typography variant="subtitle1" sx={{ color: "#2156A6" }}>
              Today Total Deposit
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "30px" }}>
              5,00 BDT
            </Typography>
          </div>
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: "10px", backgroundColor: "#9747FF" }}
          >
            12 OCT 2022
          </Button>
        </Box>
        <Box
          sx={{
            width: "353px",
            height: "93px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <div>
            <Typography variant="subtitle1" sx={{ color: "#2156A6" }}>
              Today Total Deposit
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "30px" }}>
              5,00BDT
            </Typography>
          </div>
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: "10px", backgroundColor: "#FFA84D" }}
          >
            12 OCT 2022
          </Button>
        </Box>
        <Box
          sx={{
            width: "353px",
            height: "93px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <div>
            <Typography variant="subtitle1" sx={{ color: "#2156A6" }}>
              Today Total Deposit
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "30px" }}>
              5,00BDT
            </Typography>
          </div>
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: "10px", backgroundColor: "#9747FF" }}
          >
            12 OCT 2022
          </Button>
        </Box>
      </Box>
    
  );
};

export default DashboardHeader;
