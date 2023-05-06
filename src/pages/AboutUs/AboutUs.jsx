import { Box, Container, Grid, Typography } from "@mui/material";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import React from "react";
import about from '../../images/about.png'


const AboutUs = () => {
  return (
    <Box mt={8}>
      <Container>
        <Grid container spacing={2} display="flex" alignItems="center">
          <Grid item xs={12} sm={6} md={6}>
            <Box>
              <img style={{ width: "80%" }} src={about} alt="about" />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box style={{ display: "flex" }}>
              <HorizontalRuleIcon style={{ color: "var(--primary-color)" }} />
              <Typography
                style={{
                  color: "var(--mateBlack)",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                About US
              </Typography>
            </Box>
            <Typography
              style={{
                color: "var(--mateBlack)",
                fontSize: "25px",
                fontWeight: "500",
              }}
              mt={1}
            >
              We are concern about our clients on their all type{" "}
              <span style={{ color: "var(--primary-color)" }}>strategic</span>{" "}
              issues
            </Typography>
            <Typography
              mt={3}
              style={{
                color: "var(--mateBlack)",
                fontSize: "14px",
                textAlign: "justify",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <Typography
              mt={3}
              style={{
                color: "var(--mateBlack)",
                fontSize: "14px",
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Ut amet tristique diam
              eget et orci. Ornare vestibulum pellentesque etiam mauris ipsum.
              Volutpat diam pretium nibh nec. Sit ut feugiat a ornare vitae
              ullamcorper vel lobortis. Amet massa nisl sed elementum in odio ac
              accumsan.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
