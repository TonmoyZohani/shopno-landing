import React, { useEffect } from "react";
import { Typography, Button, Box, Container, TextField } from "@mui/material";
import footerImg from "../../assets/img/footer.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", height: "1302px",position:"relative" }}>
      <Box sx={{ width: "100%", height: "385px" }}>
        <iframe
          width="100%"
          height="385px"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://maps-generator.com/"></a>
      </Box>

      <Box
        sx={{
          width: "742px",
          height: "305px",
          backgroundColor: "#003E6B",
          paddingLeft: "40px",
          paddingTop: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "absolute",
          right: 0,
          top:150,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "25px",
              fontFamily: "Comfortaa",
              color: "#fff",
              fontWeight: "700",
            }}
          >
            Sign up for our Newsletter
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Comfortaa",
              color: "#fff",
              fontWeight: "300",
            }}
          >
            For get more update
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          <input
            type="email"
            placeholder="Enter your Email"
            style={{
              backgroundColor: "#CFEFFF66",
              width: "364px",
              height: "49px",
              borderRadius: "5px",
              paddingLeft: "15px",
              color: "white",
            }}
          />

          <Button
            sx={{
              width: "158px",
              height: "49px",
              backgroundColor: "white",
              borderRadius: "4px",
              textTransform: "none",
              marginLeft: "15px",
            }}
          >
            <Typography
              sx={{
                color: "#003E6B",
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
            >
              Subscribe
            </Typography>
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "917px",
          backgroundColor: "#2E2E40",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "40px",
            paddingTop: "150px",
            fontFamily: "Comfortaa",
          }}
          className="text-center text-white"
        >
          Become a Shopno Tour Agent
        </Typography>
        <Typography
          style={{
            color: "#9C9797",
            textAlign: "center",
            width: "680px",
            margin: "10px auto",
            fontFamily: "Poppins",
            fontSize: "13px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Volutpat turpis commodo
          elementum vestibulum. Semper gravida amet eleifend proin maecenas
          faucibus. Urna
        </Typography>

        <Button
          sx={{
            backgroundColor: "#003E6B",
            color: "white",
            width: "205px",
            height: "26px",
            mt: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              fontFamily: "Poppins",
              fontWeight: "500",
              textTransform: "none",
            }}
          >
            Register
          </Typography>
        </Button>

        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              mt: 10,
              gap: "20px",
              color: "#FFFFFF",
              justifyContent: "center", // Center the child boxes horizontally
              alignItems: "center", // Center the child boxes vertically
              gap: 20,
            }}
          >
            <Box>
              <h4
                style={{
                  fontSize: "18px",
                  paddingBottom: "15px",
                  fontWeight: 500,
                  fontFamily: "Poppins",
                }}
              >
                About Us
              </h4>
              <p
                style={{
                  width: "283px",
                  height: "143px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Volutpat turpis commodo
                elementum vestibulum. Semper gravida amet eleifend proin
                maecenas faucibus. Urna pellentesque{" "}
              </p>
            </Box>
            <Box>
              <h4
                style={{
                  fontSize: "18px",
                  paddingBottom: "15px",
                  fontWeight: 500,
                  fontFamily: "Poppins",
                }}
              >
                Need Help
              </h4>
              <p
                style={{
                  width: "283px",
                  height: "143px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Volutpat turpis commodo
                elementum vestibulum. Semper gravida amet eleifend proin
                maecenas faucibus. Urna pellentesque{" "}
              </p>
            </Box>
            <Box>
              <h4
                style={{
                  fontSize: "18px",
                  paddingBottom: "15px",
                  fontWeight: 500,
                  fontFamily: "Poppins",
                }}
              >
                About
              </h4>
              {/* <p style={{width:"283px",height:"143px"}}>Lorem ipsum dolor sit amet consectetur. Volutpat turpis commodo elementum vestibulum. Semper gravida amet eleifend proin maecenas faucibus. Urna pellentesque </p> */}
              <ul
                style={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
                className="space-y-3"
              >
                <li>About</li>
                <li>Features</li>
                <li>News</li>
                <li>Menu</li>
              </ul>
            </Box>
            <Box>
              <h4
                style={{
                  fontSize: "18px",
                  paddingBottom: "15px",
                  fontWeight: 500,
                  fontFamily: "Poppins",
                }}
              >
                Company
              </h4>
              <ul
                style={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
                className="space-y-3"
              >
                <li>Why Others</li>
                <li>Partner with </li>
                <li>FAQ</li>
                <li>Blog</li>
              </ul>
            </Box>
            <Box>
              <h4
                style={{
                  fontSize: "18px",
                  paddingBottom: "15px",
                  fontWeight: 500,
                  fontFamily: "Poppins",
                }}
              >
                Support
              </h4>
              <ul
                style={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
                className="space-y-3"
              >
                <li>Account</li>
                <li>Support Center</li>
                <li>Feedback</li>
                <li>Contact Us</li>
              </ul>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 10,
              gap: 40,
            }}
          >
            {/* first div */}
            <Box sx={{ width: "100%" }}>
              <h4
                style={{
                  fontSize: "18px",
                  paddingBottom: "15px",
                  fontWeight: 500,
                  fontFamily: "Poppins",
                  color: "#fff",
                }}
              >
                We Accept
              </h4>
              <img src={footerImg} alt="" />
            </Box>
            {/* second div */}
            <Box>
              <h4
                style={{
                  fontSize: "18px",
                  paddingBottom: "15px",
                  fontWeight: 500,
                  fontFamily: "Poppins",
                  color: "#fff",
                }}
              >
                Social
              </h4>
              {/* <img src={footerImg} alt="" /> */}
              <Box
                sx={{
                  display: "flex",
                  gap: "2px",
                  color: "white",
                }}
                className="space-x-3"
              >
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <LinkedInIcon />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              borderBottom: "3px solid #D9D9D9",
              marginTop:"60px"
            }}
          />
         <Typography align="center" sx={{fontFamily:"Poppins",fontWeight:"400",color:"#fff",marginTop:"20px"}}>© 2023 All Right Reserved By Shopno Tour & Developed By Fly Far Tech</Typography>
        </Container>
        <div>
      </div>
      </Box>

     
    </Box>
  );
};

export default Footer;
