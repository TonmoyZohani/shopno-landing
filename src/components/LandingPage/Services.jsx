import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import plane from "../../assets/img/plane.png";
import user from "../../assets/img/user.png";
import search from "../../assets/img/search.png";

const Services = () => {
  const gridItemStyle = {
    width: "276px",
    height: "336px",
    backgroundColor: "#ECF9FF",
    textAlign: "left",
    borderRadius: "5px",
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <Typography  sx={{fontFamily:"Comfortaa",mt:8,fontSize:"25px",fontWeight:"700"}}>Explore Our Services</Typography>
        <Typography sx={{ mt: 1, color: "#9C9797",fontFamily:"Poppins" }}>
          Lorem ipsum dolor sit amet consectetur. Volutpat turpis commodo{" "}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid item xs={3} sx={{ position: "relative" }}>
            <Box sx={gridItemStyle}>
              <Box
                sx={{
                  width: "59px",
                  height: "59px",
                  backgroundColor: "red",
                  position: "absolute",
                  top: 4,
                  left: 80,
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={plane} alt="" />
              </Box>
              <Box sx={{pt:8, ml: 4,mr:4}}>
                <Typography sx={{ fontSize: "18px", mb: 2,fontFamily:'Comfortaa',fontWeight:'bold'}}>
                  Air Ticket
                </Typography>
                <p style={{ width: "219px",fontSize:"13px",color:"#003E6B",fontFamily:"Poppins",fontWeight:"400" }}>
                  Lorem ipsum dolor sit amet consectetur. Volutpat turpis
                  commodo elementum vestibulum. Semper gravida amet eleifend
                  proin maecenas Semper gravida amet eleifend proin maecenas{" "}
                </p>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={3} sx={{ position: "relative" }}>
            <Box sx={gridItemStyle}>
              <Box
                sx={{
                  width: "59px",
                  height: "59px",
                  backgroundColor: "red",
                  position: "absolute",
                  top: 4,
                  left: 80,
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={user} alt="" />
              </Box>
              <Box sx={{pt:8, ml: 4,mr:4}}>
                <Typography sx={{ fontSize: "18px", mb: 2,fontFamily:'Comfortaa',fontWeight:'bold'}}>
                  Hotel
                </Typography>
                <p style={{ width: "219px",fontSize:"13px",color:"#003E6B",fontFamily:"Poppins",fontWeight:"400" }}>
                  Lorem ipsum dolor sit amet consectetur. Volutpat turpis
                  commodo elementum vestibulum. Semper gravida amet eleifend
                  proin maecenas Semper gravida amet eleifend proin maecenas{" "}
                </p>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ position: "relative" }}>
            <Box sx={gridItemStyle}>
              <Box
                sx={{
                  width: "59px",
                  height: "59px",
                  backgroundColor: "red",
                  position: "absolute",
                  top: 4,
                  left: 80,
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={search} alt="" />
              </Box>
              <Box sx={{pt:8, ml: 4,mr:4}}>
                <Typography sx={{ fontSize: "18px", mb: 2,fontFamily:'Comfortaa',fontWeight:'bold'}}>
                  Tour Packages
                </Typography>
                <p style={{ width: "219px",fontSize:"13px",color:"#003E6B",fontFamily:"Poppins",fontWeight:"400" }}>
                  Lorem ipsum dolor sit amet consectetur. Volutpat turpis
                  commodo elementum vestibulum. Semper gravida amet eleifend
                  proin maecenas Semper gravida amet eleifend proin maecenas{" "}
                </p>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ position: "relative" }}>
            <Box sx={gridItemStyle}>
              <Box
                sx={{
                  width: "59px",
                  height: "59px",
                  backgroundColor: "red",
                  position: "absolute",
                  top: 4,
                  left: 80,
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={plane} alt="" />
              </Box>
              <Box sx={{pt:8, ml: 4,mr:4}}>
                <Typography sx={{ fontSize: "18px", mb: 2,fontFamily:'Comfortaa',fontWeight:'bold'}}>
                  Group Fare
                </Typography>
                <p style={{ width: "219px",fontSize:"13px",color:"#003E6B",fontFamily:"Poppins",fontWeight:"400" }}>
                  Lorem ipsum dolor sit amet consectetur. Volutpat turpis
                  commodo elementum vestibulum. Semper gravida amet eleifend
                  proin maecenas Semper gravida amet eleifend proin maecenas{" "}
                </p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
